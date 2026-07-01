import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://autism.runasp.net/api",
  headers: {
    Accept: "*/*",
  },
});

apiClient.interceptors.request.use((config) => {
  // = localStorage.getItem("token") || 
  const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJhZG1pbjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbjJAcHJvamVjdC5jb20iLCJQaG9uZU51bWJlciI6IjEyMzQ1Njc4OSIsIklkIjoiMTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc4MzAxNDUzMiwiaXNzIjoiU2Nob29sUHJvamVjdCIsImF1ZCI6IldlYlNpdGUifQ.kgYXEq2R93rgkfyuK-9R0hTrL6kS8fh4gaTu51C3x0M";

  if (token) {
    config.headers.Authorization = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
  }

  return config;
});

export default apiClient;