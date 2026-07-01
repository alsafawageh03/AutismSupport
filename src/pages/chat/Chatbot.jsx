import { useEffect, useState } from "react";

import Card from "../../components/ui/Card";

import ChatHeader from "../../components/chat/ChatHeader";
import SplashScreen from "../../components/chat/SplashScreen";
import ChatMessages from "../../components/chat/ChatMessages";
import ChatInput from "../../components/chat/ChatInput";
import SuggestedQuestions from "../../components/chat/SuggestedQuestions";

import { chatApi } from "../../services/chatApi";

function SmartSupport() {
  const [input, setInput] = useState("");

  // Splash screen
  const [loading, setLoading] = useState(true);

  // AI typing
  const [apiLoading, setApiLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: `Hello! I'm Olfa's Smart Assistant 👋

I'm here to help you with any questions about caring for your child.

• Dealing with challenging behaviors
• Appropriate learning activities
• Tips for daily life
• Helpful resources and references

How can I help you today?`,
    },
  ]);

  useEffect(() => {
    const loadWelcome = async () => {
      try {
        const data = await chatApi.getWelcome();

        setMessages((prev) =>
          prev.map((msg, index) =>
            index === 0
              ? {
                  ...msg,
                  content: `Hello! I'm ${data.app_name} (v${data.app_version}) 👋

welcome to Olfa's chat bot:

I'm here to help you with any questions about caring for your child.

• Dealing with challenging behaviors
• Appropriate learning activities
• Tips for daily life
• Helpful resources and references

How can I help you today?`,
                }
              : msg
          )
        );
      } catch (err) {
        console.error(err);
      }
    };

    loadWelcome();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || apiLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: question,
      },
    ]);

    setInput("");
    setApiLoading(true);

    try {
      const res = await chatApi.askQuestion(question);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: res.content,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "⚠️ Sorry, I couldn't access my knowledge base right now. Please try again later.",
        },
      ]);
    } finally {
      setApiLoading(false);
    }
  };

  return (
    <>
      {loading && <SplashScreen />}

      <div
        className={`container max-w-3xl mx-auto px-4 py-4 lg:py-8 flex flex-col min-h-screen ${
          loading ? "chat-hidden" : "chat-visible"
        }`}
      >
        <ChatHeader />

        <Card className="flex flex-col flex-1 overflow-hidden">
          <ChatMessages
            messages={messages}
            loading={apiLoading}
          />

          <SuggestedQuestions
            disabled={apiLoading}
            onSelect={setInput}
          />

          <ChatInput
            value={input}
            onChange={setInput}
            onSend={sendMessage}
            loading={apiLoading}
          />
        </Card>
      </div>
    </>
  );
}

export default SmartSupport;