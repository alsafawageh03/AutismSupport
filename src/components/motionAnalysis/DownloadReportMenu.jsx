import { LuDownload, LuFileJson, LuFileSpreadsheet, LuFileText } from "react-icons/lu";
import Button from "../ui/Button";
import { reportGenerator } from "../../utils/reportGenerator";

export default function DownloadReportMenu({ data }) {
  if (!data) return null;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
      {/* Label section */}
      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] whitespace-nowrap">
        Export Summaries:
      </span>
      
      {/* Buttons structural line wrapper */}
      <div className="grid grid-cols-3 sm:flex items-center gap-2.5 w-full sm:w-auto">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full justify-center border-[var(--border-light)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-2.5 py-1.5"
          onClick={() => reportGenerator.downloadPDFMock(data)}
        >
          <LuFileText className="mr-1.5 text-[var(--info)] shrink-0" size={16} /> 
          <span className="truncate">PDF</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full justify-center border-[var(--border-light)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-2.5 py-1.5"
          onClick={() => reportGenerator.downloadCSV(data)}
        >
          <LuFileSpreadsheet className="mr-1.5 text-[var(--success)] shrink-0" size={16} /> 
          <span className="truncate">CSV</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full justify-center border-[var(--border-light)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] px-2.5 py-1.5"
          onClick={() => reportGenerator.downloadJSON(data)}
        >
          <LuFileJson className="mr-1.5 text-[var(--warning)] shrink-0" size={16} /> 
          <span className="truncate">JSON</span>
        </Button>
      </div>
    </div>
  );
}