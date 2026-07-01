import { useState } from "react";
import { chatApi } from "../services/chatApi";

export default function useUploadBook() {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const uploadBook = async (file, metadata) => {
    try {
      setUploading(true);
      setSuccess(null);
      setError(null);

      const result = await chatApi.uploadBook(file, metadata);

      setSuccess(result.message);

      return result;
    } catch (err) {
      setError(err.message || "Upload failed.");
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploadBook,
    uploading,
    success,
    error,
  };
}