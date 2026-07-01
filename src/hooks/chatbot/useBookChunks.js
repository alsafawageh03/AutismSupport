import { useState } from "react";
import { chatApi } from "../services/chatApi";

export default function useBookChunks() {
  const [processing, setProcessing] = useState(false);
  const [chunksCount, setChunksCount] = useState(null);
  const [error, setError] = useState(null);

  const processChunks = async (
    file,
    chunkSize = 512,
    overlap = 50
  ) => {
    try {
      setProcessing(true);
      setError(null);

      const result = await chatApi.processBookChunks(
        file,
        chunkSize,
        overlap
      );

      setChunksCount(result);

      return result;
    } catch (err) {
      setError(err.message || "Chunk processing failed.");
      throw err;
    } finally {
      setProcessing(false);
    }
  };

  return {
    processChunks,
    processing,
    chunksCount,
    error,
  };
}