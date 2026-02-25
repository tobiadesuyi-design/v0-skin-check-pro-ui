"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Send, User, Bot, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  text: string
  sender: "user" | "support"
  timestamp: Date
  senderName?: string
}

export default function LiveChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Sarah from SkinCheck Pro support. How can I help you today?",
      sender: "support",
      timestamp: new Date(),
      senderName: "Sarah",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! I can help you with that. Let me look into your account details.",
        sender: "support",
        timestamp: new Date(),
        senderName: "Sarah",
      }
      setMessages((prev) => [...prev, supportMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <main className="min-h-screen bg-[#fdf4f2] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <Link href="/support-faq" className="mr-4">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
              <span className="sr-only">Back to FAQ</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[#4A2E1D]">Live Chat Support</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-[#4A2E1D]/70">Sarah is online</span>
            </div>
          </div>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          <Clock className="h-3 w-3 mr-1" />
          Online
        </Badge>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className="flex-shrink-0">
                  {message.sender === "user" ? (
                    <div className="w-8 h-8 bg-[#4A2E1D] rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <div className={`space-y-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                  <div className="text-xs text-[#4A2E1D]/60">
                    {message.senderName || "You"} •{" "}
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-[#4A2E1D] text-white"
                        : "bg-white border border-[#ECE5DF] text-[#4A2E1D]"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-[#4A2E1D]/60">Sarah is typing...</div>
                  <div className="px-4 py-2 rounded-2xl bg-white border border-[#ECE5DF]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#4A2E1D]/40 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#4A2E1D]/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#4A2E1D]/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 bg-white border-t border-[#ECE5DF]">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] rounded-full"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full px-6"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <p className="text-xs text-[#4A2E1D]/60 mt-2 text-center">
            Press Enter to send • Our support team typically responds within minutes
          </p>
        </div>
      </div>
    </main>
  )
}
