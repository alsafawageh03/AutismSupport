import { useCallback, useEffect, useState } from "react";
import { chatApi } from "../services/chatApi";

export default function useBookInfo() {
  const [collectionInfo, setCollectionInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await chatApi.getBookInfo();
      setCollectionInfo(data);
    } catch (err) {
      setError(err.message || "Failed to load collection info.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return {
    collectionInfo,
    loading,
    error,
    refresh: fetchInfo,
  };
}