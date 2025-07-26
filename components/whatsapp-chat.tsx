"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  // Initialize chat with welcome messages
  useEffect(() => {
    const welcomeMessages: Message[] = [
      {
        id: "1",
        text: "Hi there! 👋 Welcome to my portfolio!",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "2",
        text: "I'm John's AI assistant. I can help you with:\n• Project inquiries 💼\n• Technical questions 🤔\n• Collaboration opportunities 🤝\n• General information ℹ️",
        sender: "bot",
        timestamp: new Date(),
      },
    ]
    setMessages(welcomeMessages)
  }, [])

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1) // 90% online
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  // Handle body scroll and background overlay when chat is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when chat is open on mobile
      document.body.style.overflow = "hidden"
    } else {
      // Restore body scroll when chat is closed
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(
      () => {
        const botResponse = generateBotResponse(text)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1500 + Math.random() * 1000,
    )
  }

  const generateBotResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase()

    if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("hire")) {
      return "Great! I'd love to discuss your project. Let me connect you directly with John via WhatsApp for detailed discussion. Click the WhatsApp button below! 🚀"
    }

    if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("budget")) {
      return "Project costs vary based on complexity and requirements. Let's discuss your specific needs via WhatsApp to provide accurate pricing! 💰"
    }

    if (lowerText.includes("experience") || lowerText.includes("skill")) {
      return "John has 4+ years of experience in full-stack development with React, Node.js, and modern web technologies. Check out the Experience section above! 💪"
    }

    if (lowerText.includes("contact") || lowerText.includes("reach")) {
      return "You can reach John directly via:\n📧 john@example.com\n📱 WhatsApp (click button below)\n💼 LinkedIn (check social links)"
    }

    if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
      return "Hello! Nice to meet you! 😊 How can I help you today? Feel free to ask about John's work, projects, or anything else!"
    }

    if (lowerText.includes("thanks") || lowerText.includes("thank you")) {
      return "You're welcome! 😊 Is there anything else I can help you with? Don't hesitate to reach out via WhatsApp for direct communication!"
    }

    // Default response
    return "That's interesting! For detailed discussions about this topic, I'd recommend connecting directly with John via WhatsApp. He'll be able to provide you with comprehensive information! 💬"
  }

  const openWhatsApp = (message?: string) => {
    const phoneNumber = "1234567890" // Replace with actual WhatsApp number
    const defaultMessage = message || "Hi John! I visited your portfolio and would like to connect."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const quickActions = [
    {
      text: "💼 Discuss a Project",
      message: "Hi John! I have a project idea and would like to discuss it with you.",
    },
    {
      text: "🤝 Collaboration",
      message: "Hello! I'm interested in collaborating with you on some projects.",
    },
    {
      text: "❓ Ask Questions",
      message: "Hi! I have some technical questions about your work and experience.",
    },
    {
      text: "👋 Just Say Hi",
      message: "Hello John! I visited your portfolio and wanted to connect.",
    },
  ]

  return (
    <>
      {/* Background Overlay - Only show when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <div className="mb-4 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-5 duration-300 relative z-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-green-500" />
                    </div>
                    {isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-xs opacity-90 flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${isOnline ? "bg-green-300" : "bg-gray-300"}`}></span>
                      {isOnline ? "Online now" : "Away"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-green-500 text-white rounded-br-md"
                        : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md shadow-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-green-100" : "text-slate-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(action.text.split(" ").slice(1).join(" "))}
                    className="text-xs p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-700 dark:text-slate-300"
                  >
                    {action.text}
                  </button>
                ))}
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 mb-3"
              >
                <Phone className="h-4 w-4" />
                <span>Continue on WhatsApp</span>
              </button>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage(inputMessage)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                />
                <Button
                  onClick={() => sendMessage(inputMessage)}
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Chat Button with Animated Background */}
        <div className="relative z-50">
          {/* Animated Background Rings - Only show when chat is closed */}
          {!isOpen && (
            <div className="absolute inset-0 -m-2">
              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse"></div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-75"
                style={{
                  animation: "spin 3s linear infinite, pulse 2s ease-in-out infinite alternate",
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
                  className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 60}%`,
                    animation: `float-${i % 3} ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                ></div>
              ))}
            </div>
          )}

          {/* Main Chat Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              isOpen
                ? "bg-red-500 hover:bg-red-600 rotate-180"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            }`}
            style={{
              boxShadow: isOpen ? "0 10px 25px rgba(239, 68, 68, 0.4)" : "0 10px 25px rgba(34, 197, 94, 0.4)",
            }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageCircle className="h-6 w-6 text-white animate-bounce" />
            )}
          </button>

          {/* Online Status Indicator - Only show when chat is closed */}
          {!isOpen && isOnline && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          )}

          {/* Message Count Badge - Only show when chat is closed */}
          {!isOpen && messages.length > 2 && (
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
              {messages.length - 2}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
