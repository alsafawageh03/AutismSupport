import axios from "axios";

const API_BASE_URL = "https://autism.runasp.net/api";

const getAuthHeader = () => {
  // 1. HARDCODED EMERGENCY FALLBACK (For testing only):
  // If your app is still getting a 401, paste the string from your working cURL request here:
  const debugToken = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJhZG1pbjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbjJAcHJvamVjdC5jb20iLCJQaG9uZU51bWJlciI6IjEyMzQ1Njc4OSIsIklkIjoiMTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc4MzAxNDUzMiwiaXNzIjoiU2Nob29sUHJvamVjdCIsImF1ZCI6IldlYlNpdGUifQ.kgYXEq2R93rgkfyuK-9R0hTrL6kS8fh4gaTu51C3x0M"; 
   
  if (debugToken) {
    return {
      "Authorization": `Bearer ${debugToken}`,
      "accept": "*/*"
    };
  }

  // 2. PRODUCTION LOGIC: Scan local storage keys dynamically
  const keysToTry = ["token", "user", "auth", "accessToken", "access_token"];
  let rawToken = null;

  for (const key of keysToTry) {
    const value = localStorage.getItem(key);
    if (value) {
      rawToken = value;
      break;
    }
  }

  if (!rawToken) {
    console.error("MotionAnalysis Service: No token found across storage keys.");
    return {};
  }

  let cleanToken = rawToken.trim();

  // Handle embedded JSON configurations safely
  if (cleanToken.startsWith("{")) {
    try {
      const parsed = JSON.parse(cleanToken);
      cleanToken = parsed.token || parsed.accessToken || parsed.jwt || cleanToken;
    } catch (e) {
      // Keep string as is
    }
  }

  // Remove wrapping string quotes if Vite added them accidentally
  if (cleanToken.startsWith('"') && cleanToken.endsWith('"')) {
    cleanToken = cleanToken.slice(1, -1);
  }

  return {
    "Authorization": `Bearer ${cleanToken}`,
    "accept": "*/*"
  };
};

export const motionAnalysisService = {
  uploadVideo: async (videoFile) => {
    const formData = new FormData();
    formData.append("VideoFile", videoFile);

    const headers = {
      ...getAuthHeader(),
      "Content-Type": "multipart/form-data"
    };

    console.log("Sending headers to /analyze:", headers);

    const response = await axios.post(`${API_BASE_URL}/MotionAnalysis/analyze`, formData, { headers });
    return response.data;
  },

  getAnalysisStatus: async (analysisId) => {
    const headers = {
      ...getAuthHeader()
    };

    const response = await axios.get(`${API_BASE_URL}/MotionAnalysis/status/${analysisId}`, { headers });
    return response.data;
  },
};