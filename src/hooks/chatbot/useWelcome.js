import { useCallback, useEffect, useState } from "react";
import { chatApi } from "../../services/chatApi";

export default function useWelcome() {
  const [welcome, setWelcome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWelcome = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await chatApi.getWelcome();
      setWelcome(data);
    } catch (err) {
      setError(err.message || "Failed to load welcome message.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWelcome();
  }, [fetchWelcome]);

  return {
    welcome,
    loading,
    error,
    refetch: fetchWelcome,
  };
}