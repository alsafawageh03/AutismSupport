import { useState } from "react";

import Card from "../../components/ui/Card";

import ChatHeader from "../../components/chat/ChatHeader";
import ChatMessage from "../../components/chat/ChatMessage";
import SuggestedQuestions from "../../components/chat/SuggestedQuestions";
import ChatInput from "../../components/chat/ChatInput";

function SmartSupport() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: `Hello! I'm Ishraqah's Smart Assistant 👋

            I'm here to help you with any questions about caring for your child.

            • Dealing with challenging behaviors
            • Appropriate learning activities
            • Tips for daily life
            • Helpful resources and references

            How can I help you today? `,
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thank you for your question; the responses will be linked to artificial intelligence later. ",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="container max-w-3xl mx-auto px-4 py-4 lg:py-8 flex flex-col min-h-screen ">
      <ChatHeader />

      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[500px]">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
            />
          ))}
        </div>

        <SuggestedQuestions
          onSelect={setInput}
        />

        <ChatInput
          value={input}
          onChange={setInput}
          onSend={sendMessage}
        />
      </Card>
    </div>
  );
}

export default SmartSupport;