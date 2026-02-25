"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, Heart, ArrowLeft } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: "general" | "technical" | "medical" | "billing"
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How long does it take to get my results?",
    answer:
      "You'll receive your report within 24-48 hours after submission. We'll email you as soon as it's ready to view in your dashboard.",
    category: "general",
  },
  {
    id: "2",
    question: "What if I don't have the lens yet?",
    answer:
      "You can still start your assessment and answer the questionnaire. When you reach the photo upload stage, you'll need to wait for your lens to arrive before taking photos.",
    category: "technical",
  },
  {
    id: "3",
    question: "Is this a medical diagnosis?",
    answer:
      "No, SkinCheck Pro provides clinical opinions and educational information from qualified GPs. It's not a substitute for in-person medical consultations or emergency care.",
    category: "medical",
  },
  {
    id: "4",
    question: "Can I get a refund?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your report, contact our support team for a full refund.",
    category: "billing",
  },
  {
    id: "5",
    question: "What photo quality do I need?",
    answer:
      "Photos should be clear, well-lit, and focused. Use natural light when possible. Take one close-up with the lens and one distant view for context.",
    category: "technical",
  },
  {
    id: "6",
    question: "Who reviews my photos?",
    answer:
      "All photos are reviewed by UK-registered GPs with dermatology experience. Our medical team is qualified to assess skin conditions and provide clinical opinions.",
    category: "medical",
  },
]

export default function SupportFAQPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleBack = () => {
    router.back()
  }

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: "all", label: "All" },
    { id: "general", label: "General" },
    { id: "technical", label: "Technical" },
    { id: "medical", label: "Medical" },
    { id: "billing", label: "Billing" },
  ]

  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">Support</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-semibold text-foreground">How can we help?</h1>
            <p className="text-muted-foreground">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-2xl border-skin-beige focus:border-skin-tan"
            />
          </div>

          {/* Category Filter */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap rounded-full ${
                  selectedCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-transparent border-skin-beige hover:bg-skin-cream"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredFAQs.length === 0 ? (
              <Card className="bg-white border-skin-beige">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">No results found. Try a different search term or category.</p>
                </CardContent>
              </Card>
            ) : (
              filteredFAQs.map((item) => (
                <Card key={item.id} className="bg-white border-skin-beige">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full p-6 text-left hover:bg-skin-cream transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground pr-4">{item.question}</h3>
                        {expandedItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Contact Support */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold text-blue-900">Still need help?</h3>
                <p className="text-sm text-blue-800">Our support team is here to help with any questions.</p>
                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={() => router.push("/live-chat")}
                    className="bg-blue-600 hover:bg-blue-700 text-white h-12"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent border-blue-300 text-blue-700 hover:bg-blue-100"
                      onClick={() => (window.location.href = "mailto:support@skincheckpro.com")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent border-blue-300 text-blue-700 hover:bg-blue-100"
                      onClick={() => (window.location.href = "tel:+441234567890")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 bg-transparent border-skin-beige hover:bg-skin-cream"
                onClick={() => router.push("/terms-privacy")}
              >
                Terms & Privacy
              </Button>
              <Button
                variant="outline"
                className="h-12 bg-transparent border-skin-beige hover:bg-skin-cream"
                onClick={() => router.push("/how-it-works")}
              >
                How it Works
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
