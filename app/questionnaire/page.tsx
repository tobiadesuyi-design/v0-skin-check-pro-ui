"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "How long have you noticed this mole?",
    options: ["Less than 1 month", "1-6 months", "6 months - 1 year", "More than 1 year", "I've always had it"],
  },
  {
    id: 2,
    question: "Has the mole changed in size, shape, or colour?",
    options: ["Yes, it has changed", "No, it looks the same", "I'm not sure"],
  },
  {
    id: 3,
    question: "Does the mole itch, bleed, or feel tender?",
    options: ["Yes, it itches", "Yes, it bleeds", "Yes, it feels tender", "No symptoms", "Multiple symptoms"],
  },
  {
    id: 4,
    question: "Do you have a dermatoscope lens?",
    options: ["Yes, I have one", "No, but I'd like a free one", "No, I'll use my phone camera"],
  },
]

export default function QuestionnairePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const forWhom = searchParams.get("for") || "me"

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    if (!selectedAnswer) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer

    setAnswers(newAnswers)
    setSelectedAnswer("")

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Check if they need a lens
      if (selectedAnswer === "No, but I'd like a free one") {
        router.push("/lens-check")
      } else {
        router.push("/photo-upload")
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1] || "")
    } else {
      router.push("/get-started")
    }
  }

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || "")
  }, [currentQuestion, answers])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 text-center">
          <div className="text-lg font-medium text-[#1a1a1a]">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 max-w-md mx-auto fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-[#1a1a1a] mb-4 leading-tight">
            {questions[currentQuestion].question}
          </h1>
          <p className="text-lg text-[#4a4a4a]">Select the option that best describes your situation.</p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                selectedAnswer === option ? "border-[#1a1a1a] bg-[#faf7f4]" : "hover:border-[#e8ddd4]"
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                      selectedAnswer === option ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#e8ddd4]"
                    }`}
                  >
                    {selectedAnswer === option && <div className="w-full h-full rounded-full bg-white scale-50"></div>}
                  </div>
                  <p className="text-lg text-[#1a1a1a]">{option}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Button */}
        <Button size="lg" className="w-full" onClick={handleNext} disabled={!selectedAnswer}>
          {currentQuestion < questions.length - 1 ? "Next" : "Continue"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </main>
    </div>
  )
}
