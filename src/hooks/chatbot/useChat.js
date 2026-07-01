import { useState } from "react";
import { chatApi } from "../../services/chatApi";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (text) => {
    const message = text.trim();

    if (!message || loading) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const response = await chatApi.askQuestion(message);

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      return assistantMessage;
    } catch (err) {
      setError(err.message || "Something went wrong.");

      const errorMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        type: "error",
        content: "Sorry, I couldn't process your request.",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat,
  };
}