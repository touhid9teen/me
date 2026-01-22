"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Phone, Bot, Sparkles, Send } from "lucide-react";
// import { Button } from "@/components/ui/button"; // Unused
import { quickActions, welcomeMessages } from "@/lib/variables";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function WhatsAppChat({
  onToggle,
}: {
  onToggle: (open: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  // Initialize chat with welcome messages
  useEffect(() => {
    setMessages(welcomeMessages);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% online
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Handle body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sendMessage = async (text: string, e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Send context + message to the AI API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.sender === "user" ? "user" : "model",
            text: m.text,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having a bit of trouble connecting to my creative brain left now. Please check your internet or try again later! 🧠✨",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const openWhatsApp = (message?: string) => {
    const phoneNumber = "01785250717";
    const defaultMessage =
      message ||
      "Hi Touhid! I visited your portfolio and would like to connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Background Overlay - Only show when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-500 transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
          aria-hidden="true"
        />
      )}

      {/* Chat Window - Responsive positioning and sizing */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 sm:inset-auto sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-50 mx-auto sm:mx-0">
          <div className="w-full h-[100dvh] sm:h-auto sm:w-[360px] md:w-[400px] lg:w-[420px] bg-white dark:bg-slate-800 sm:rounded-2xl shadow-2xl border-t sm:border border-slate-200 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-5 sm:slide-in-from-bottom-0 duration-300 flex flex-col sm:max-h-[600px] md:max-h-[650px] lg:max-h-[700px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      <div className="absolute -bottom-0.5 -left-0.5 bg-green-500 rounded-full p-0.5 border-2 border-teal-600">
                        <Sparkles className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                      AI Assistant
                    </h3>
                    <p className="text-xs opacity-90 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      Online & Ready
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-2 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="grid grid-cols-2 gap-1 mb-1">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      sendMessage(action.text.split(" ").slice(1).join(" "))
                    }
                    className="text-xs sm:text-sm p-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-all text-slate-700 dark:text-slate-300 font-medium border border-transparent hover:border-teal-100 dark:hover:border-teal-800/50"
                  >
                    {action.text}
                  </button>
                ))}
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-green-50 dark:hover:bg-green-900/20 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 p-1 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-600 hover:border-green-200 dark:hover:border-green-800/50"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="text-xs">Switch to WhatsApp</span>
              </button>
            </div>

            {/* Messages - Flexible height */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-teal-600 text-white rounded-br-md"
                        : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md border border-slate-100 dark:border-slate-700"
                    }`}
                  >
                    <p className="text-sm sm:text-base whitespace-pre-line break-words leading-relaxed">
                      {message.text}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs mt-1.5 opacity-70 ${
                        message.sender === "user"
                          ? "text-teal-100"
                          : "text-slate-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-3 sm:p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && sendMessage(inputMessage)
                  }
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 text-sm sm:text-base border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sendMessage(inputMessage);
                  }}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl p-2.5 sm:p-2.5 transition-colors shadow-sm shadow-teal-500/20"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button - Responsive positioning */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-50">
        {/* Animated Background Rings - Only show when chat is closed */}
        {!isOpen && (
          <div className="absolute inset-0 -m-2">
            <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-teal-500/30 animate-pulse"></div>
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-75"
              style={{
                animation:
                  "spin 3s linear infinite, pulse 2s ease-in-out infinite alternate",
              }}
            ></div>
          </div>
        )}

        {/* Floating Particles - Only show when chat is closed */}
        {!isOpen && (
          <div className="absolute inset-0 -m-8 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  animation: `float-${i % 3} ${
                    2 + i * 0.5
                  }s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Main Chat Button - Responsive sizing */}
        <button
          onClick={toggleChat}
          className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isOpen
              ? "bg-transparent hidden" /* Hide button when open to avoid visual clutter */
              : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
          }`}
          style={{
            boxShadow: isOpen ? "none" : "0 10px 25px rgba(20, 184, 166, 0.4)",
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {!isOpen && (
            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-white animate-bounce" />
          )}
        </button>

        {/* Online Status Indicator - Only show when chat is closed */}
        {!isOpen && isOnline && (
          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white">
            <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(5px);
          }
        }
      `}</style>
    </>
  );
}
