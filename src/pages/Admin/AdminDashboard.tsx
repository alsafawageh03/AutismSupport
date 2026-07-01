import React, { useState, useEffect, useCallback } from 'react';

// --- TS INTERFACES FOR TYPE SAFETY ---
interface VectorStatus {
  status: string;
  optimizer_status: string;
  points_count: number;
  segments_count: number;
  config: {
    params: {
      vectors: { size: number; distance: string };
      on_disk_payload: boolean;
    };
  };
}

export default function AdminDashboard() {
  // --- STATE MANAGEMENT ---
  const [metrics, setMetrics] = useState<VectorStatus | null>(null);
  const [metricsLoading, setMetricsLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [pipelineStatus, setPipelineStatus] = useState<string | null>(null);
  
  const [file, setFile] = useState<File | null>(null);
  const [enableChunking, setEnableChunking] = useState(true);
  const [chunkSize, setChunkSize] = useState(512);
  const [overlap, setOverlap] = useState(50);

  const [formData, setFormData] = useState({
    title: { en: '', ar: '' },
    type: 'book',
    authors: [''],
    year: new Date().getFullYear(),
    categories: [''],
    language_support: ['en', 'ar'],
    content: { en: '', ar: '' },
    metadata: { publisher: '' }
  });

  // Base production API URL
  const API_BASE_URL = "http://localhost";

  // --- API CALL 3: GET VECTOR DATABASE METRICS ---
  // Memoized with useCallback to safely include inside the useEffect lifecycle dependency array
  const fetchMetrics = useCallback(async () => {
    const token = localStorage.getItem('token'); // 🔑 Grab token for authorization check

    try {
      const response = await fetch(`${API_BASE_URL}/nlp/get_info/books_chunks`, {
        headers: { 
          'accept': 'application/json',
          'Authorization': `Bearer ${token}` // Secure header configuration
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMetrics(data);
      }
    } catch (error) {
      console.error("Failed fetching vector DB metrics:", error);
    } finally {
      setMetricsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 20000); // Auto-refresh metrics every 20s
    return () => clearInterval(interval);
  }, [fetchMetrics]);

  // --- FILE HANDLING ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // --- SUBMIT PIPELINE (API 1 & API 2) ---
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a PDF file first.");

    const token = localStorage.getItem('token'); // 🔑 Grab token here too
    setFormLoading(true);
    setPipelineStatus("🔄 Step 1: Uploading catalog metadata...");

    try {
      const uploadPayload = new FormData();
      uploadPayload.append('file', file);
      uploadPayload.append('data', JSON.stringify(formData));

      const uploadResponse = await fetch(`${API_BASE_URL}/upload/books`, {
        method: 'POST',
        headers: { 
          'accept': 'application/json',
          'Authorization': `Bearer ${token}` // Secure metadata ingestion route
        },
        body: uploadPayload
      });

      const uploadResult = await uploadResponse.json();
      if (!uploadResponse.ok || uploadResult.signal !== "SUPPORTED FILE TYPE") {
        throw new Error(uploadResult.message || "Metadata upload failed");
      }

      if (enableChunking) {
        setPipelineStatus("🔄 Step 2: Processing file text & generating AI vector points...");

        const chunkPayload = new FormData();
        chunkPayload.append('file', file);
        chunkPayload.append('chunk_size', chunkSize.toString());
        chunkPayload.append('over_lap', overlap.toString());

        const chunkResponse = await fetch(`${API_BASE_URL}/file_process/books/chunks`, {
          method: 'POST',
          headers: { 
            'accept': 'application/json',
            'Authorization': `Bearer ${token}` // Secure heavy model tokenization route
          },
          body: chunkPayload
        });

        const totalChunks = await chunkResponse.json();
        if (chunkResponse.ok) {
          setPipelineStatus(`✨ Success! File registered and split into ${totalChunks} points.`);
          fetchMetrics(); 
        } else {
          throw new Error("Chunking failed on the host vector system.");
        }
      } else {
        setPipelineStatus("✨ Book successfully uploaded to catalog (Skipped chunk vectorization).");
      }
    } catch (error: any) {
      console.error(error);
      setPipelineStatus(`❌ Pipeline Failed: ${error.message}`);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-6 md:p-10 text-[#111827]">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#e5e7eb] pb-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#9ca3af] uppercase">System Admin Portal</span>
          <h1 className="text-3xl font-bold tracking-tight mt-1 text-[#111827]">Knowledge Base Management</h1>
        </div>
        <div>
          <button 
            type="button"
            onClick={fetchMetrics} 
            className="px-4 py-2 text-xs font-medium border border-[#e5e7eb] bg-white text-[#4b5563] rounded-lg hover:bg-[#f3f4f6] hover:text-[#111827] transition shadow-sm"
          >
            Refresh Node Status
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ================= SECTION 1: LIVE DB TELEMETRY CORNER ================= */}
        {metricsLoading ? (
          <div className="h-24 bg-white border border-[#e5e7eb] animate-pulse rounded-2xl flex items-center justify-center text-sm text-[#9ca3af]" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 bg-white border border-[#e5e7eb] rounded-2xl flex items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">Cluster State</p>
                <h4 className="text-lg font-bold mt-1 capitalize text-[#111827]">
                  {metrics?.status === 'green' ? 'Healthy' : 'Syncing'}
                </h4>
              </div>
              <span className={`h-3 w-3 rounded-full ring-4 ${metrics?.status === 'green' ? 'bg-[#10b981] ring-[#10b981]/10' : 'bg-[#f59e0b] ring-[#f59e0b]/10'}`} />
            </div>

            <div className="p-5 bg-white border border-[#e5e7eb] rounded-2xl shadow-sm">
              <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">Vector Points</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h4 className="text-2xl font-bold tracking-tight text-[#047857]">{metrics?.points_count || 0}</h4>
                <span className="text-xs text-[#6b7280]">indexed blocks</span>
              </div>
            </div>

            <div className="p-5 bg-white border border-[#e5e7eb] rounded-2xl shadow-sm">
              <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">Vector Dimension</p>
              <h4 className="text-lg font-bold mt-1 text-[#111827]">{metrics?.config?.params?.vectors?.size || 0} Dim</h4>
              <p className="text-xs text-[#6b7280] mt-0.5">Metric: {metrics?.config?.params?.vectors?.distance || 'N/A'}</p>
            </div>

            <div className="p-5 bg-white border border-[#e5e7eb] rounded-2xl shadow-sm">
              <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider">Index Partitions</p>
              <h4 className="text-lg font-bold mt-1 text-[#111827]">{metrics?.segments_count || 0} Active</h4>
              <p className="text-xs text-[#6b7280] mt-0.5">Optimizer: {metrics?.optimizer_status || 'N/A'}</p>
            </div>

          </div>
        )}

        {/* ================= SECTION 2: THE MAIN WORKSPACE GRID ================= */}
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CONTROL STRIP (LEFT & CENTER ACTIONS) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-sm space-y-6">
              <h3 className="text-base font-bold text-[#111827]">Catalog Metadata Mapping</h3>
              
              {/* Dual Language Title Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Title (English)</label>
                  <input type="text" required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" placeholder="The Reason I Jump"
                    onChange={(e) => setFormData({...formData, title: { ...formData.title, en: e.target.value }})}/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1 text-right" dir="rtl">العنوان (بالعربية)</label>
                  <input type="text" required dir="rtl" className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm text-right focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" placeholder="السبب الذي أقفز من أجله"
                    onChange={(e) => setFormData({...formData, title: { ...formData.title, ar: e.target.value }})}/>
                </div>
              </div>

              {/* Authors & Categories Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Authors (Comma Separated)</label>
                  <input type="text" required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" placeholder="Naoki Higashida"
                    onChange={(e) => setFormData({...formData, authors: e.target.value.split(',').map(a => a.trim())})}/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Categories (Comma Separated)</label>
                  <input type="text" required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" placeholder="Autism, Memoir, Psychology"
                    onChange={(e) => setFormData({...formData, categories: e.target.value.split(',').map(c => c.trim())})}/>
                </div>
              </div>

              {/* Sub-group configurations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Publishing Year</label>
                  <input type="number" required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" value={formData.year}
                    onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Publisher Domain</label>
                  <input type="text" required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]" placeholder="XYZ Press"
                    onChange={(e) => setFormData({...formData, metadata: { publisher: e.target.value }})}/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1">Resource Type</label>
                  <select className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]"
                    onChange={(e) => setFormData({...formData, type: e.target.value})}>
                    <option value="book">Book Document</option>
                    <option value="article">Article Asset</option>
                    <option value="journal">Journal Paper</option>
                  </select>
                </div>
              </div>

              {/* Bi-lingual Contents */}
              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">Description Content (English)</label>
                <textarea rows={3} required className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] resize-none" placeholder="Context summary details..."
                  onChange={(e) => setFormData({...formData, content: { ...formData.content, en: e.target.value }})}/>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1 text-right" dir="rtl">الوصف المختصر (بالعربية)</label>
                <textarea rows={3} required dir="rtl" className="w-full px-3 py-2 border border-[#d1d5db] bg-white rounded-lg text-sm text-right focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] resize-none" placeholder="ملخص تفاصيل المحتوى..."
                  onChange={(e) => setFormData({...formData, content: { ...formData.content, ar: e.target.value }})}/>
              </div>
            </div>
          </div>

          {/* DOCUMENT INGESTION ZONE & PIPELINE CONFIGS (RIGHT BAR) */}
          <div className="space-y-6">
            {/* FILE INTAKE DRAG & DROP CONTAINER */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#111827]">Document Stream</h3>
              
              <div className="border-2 border-dashed border-[#e5e7eb] hover:border-[#10b981] rounded-xl p-6 text-center cursor-pointer min-h-[160px] flex flex-col items-center justify-center transition relative bg-[#f9fafb]">
                <input type="file" accept=".pdf" className="absolute opacity-0 w-full h-full cursor-pointer top-0 left-0" onChange={handleFileChange} />
                <span className="text-3xl mb-2 text-[#047857]">📄</span>
                <p className="text-xs font-medium text-[#111827] max-w-[200px] truncate">
                  {file ? file.name : "Select or Drop Book PDF"}
                </p>
                <p className="text-[10px] text-[#9ca3af] mt-1">Application/PDF boundaries only</p>
              </div>
            </div>

            {/* PROCESSING PIPELINE OVERLAYS (AI CHUNKER SPECIFICATIONS) */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Vector Ingestion</h3>
                  <p className="text-[11px] text-[#6b7280]">Auto-split document into cluster tokens</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={enableChunking} 
                  onChange={(e) => setEnableChunking(e.target.checked)} 
                  className="w-4 h-4 rounded text-[#047857] focus:ring-[#10b981] border-[#d1d5db] accent-[#047857]" 
                />
              </div>

              {enableChunking && (
                <div className="space-y-3 pt-3 border-t border-[#e5e7eb]">
                  <div>
                    <label className="block text-[11px] font-medium text-[#6b7280] mb-1">Chunk Split Size</label>
                    <input type="number" value={chunkSize} className="w-full px-3 py-1.5 border border-[#d1d5db] rounded-lg bg-white text-xs focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]"
                      onChange={(e) => setChunkSize(parseInt(e.target.value))} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#6b7280] mb-1">Step Token Overlap</label>
                    <input type="number" value={overlap} className="w-full px-3 py-1.5 border border-[#d1d5db] rounded-lg bg-white text-xs focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]"
                      onChange={(e) => setOverlap(parseInt(e.target.value))} />
                  </div>
                </div>
              )}
            </div>

            {/* PIPELINE LOG FEEDBACK STRIP */}
            {pipelineStatus && (
              <div className={`p-4 rounded-xl text-xs border leading-relaxed ${
                pipelineStatus.includes('❌') 
                  ? 'bg-[#ef4444]/5 border-[#ef4444]/20 text-[#ef4444]' 
                  : pipelineStatus.includes('✨') 
                    ? 'bg-[#10b981]/5 border-[#10b981]/20 text-[#047857]' 
                    : 'bg-[#ecfdf5] border-[#d1fae5] text-[#047857]'
              }`}>
                <p className="font-medium">{pipelineStatus}</p>
              </div>
            )}

            {/* MAIN ACTION TRIGGER */}
            <button 
              type="submit" 
              disabled={formLoading} 
              className="w-full py-3 bg-[#047857] hover:bg-[#065f46] text-white font-semibold rounded-xl text-sm transition shadow-sm disabled:opacity-40 disabled:hover:bg-[#047857]"
            >
              {formLoading ? "Executing Cluster Ingestion..." : "Commit Ingestion Workflow"}
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}