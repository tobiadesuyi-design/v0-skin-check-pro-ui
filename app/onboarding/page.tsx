"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Heart } from "lucide-react"

interface Question {
  id: string
  question: string
  options: string[]
  type: "single" | "multiple"
}

const questions: Question[] = [
  {
    id: "location",
    question: "Where is the mole you'd like us to check?",
    options: ["Face or neck", "Arms or hands", "Chest or back", "Legs or feet", "Other area"],
    type: "single",
  },
  {
    id: "duration",
    question: "How long have you had this mole?",
    options: ["Less than 6 months", "6–12 months", "Over a year", "I'm not sure"],
    type: "single",
  },
  {
    id: "changes",
    question: "Have you noticed any changes recently?",
    options: ["Size has changed", "Color has changed", "Shape has changed", "No changes", "Not sure"],
    type: "multiple",
  },
  {
    id: "symptoms",
    question: "Are you experiencing any symptoms?",
    options: ["Itching", "Bleeding", "Crusting", "Pain or tenderness", "None of these"],
    type: "multiple",
  },
  {
    id: "history",
    question: "Have you seen a doctor about this mole before?",
    options: ["Yes, recently", "Yes, but not recently", "No, this is my first time"],
    type: "single",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Load saved answers from localStorage
    const saved = localStorage.getItem("skincheck_answers")
    if (saved) {
      setAnswers(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // Save answers to localStorage whenever they change
    localStorage.setItem("skincheck_answers", JSON.stringify(answers))
  }, [answers])

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleAnswer = (option: string) => {
    const questionId = currentQuestion.id

    if (currentQuestion.type === "single") {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: [option],
      }))
    } else {
      // Multiple choice
      setAnswers((prev) => {
        const current = prev[questionId] || []
        if (current.includes(option)) {
          return {
            ...prev,
            [questionId]: current.filter((item) => item !== option),
          }
        } else {
          return {
            ...prev,
            [questionId]: [...current, option],
          }
        }
      })
    }
  }

  const isAnswered = () => {
    const answer = answers[currentQuestion.id]
    return answer && answer.length > 0
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Completed questionnaire
      router.push("/lens-confirmation")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      router.back()
    }
  }

  const isSelected = (option: string) => {
    const answer = answers[currentQuestion.id]
    return answer && answer.includes(option)
  }

  return (
    <div className={`min-h-screen bg-skin-pearl ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors touch-target"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">SkinCheck</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Question */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-semibold text-foreground leading-tight">{currentQuestion.question}</h1>
            {currentQuestion.type === "multiple" && (
              <p className="text-base text-muted-foreground">You can select multiple options</p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] touch-target ${
                  isSelected(option)
                    ? "ring-2 ring-foreground bg-skin-cream border-foreground"
                    : "bg-white border-skin-beige hover:border-skin-tan"
                }`}
                onClick={() => handleAnswer(option)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-foreground pr-4">{option}</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex-shrink-0 ${
                        isSelected(option) ? "bg-foreground border-foreground" : "border-border"
                      }`}
                    >
                      {isSelected(option) && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-background rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <div className="pt-6">
            <Button
              size="full"
              onClick={handleNext}
              disabled={!isAnswered()}
              className={`group h-14 text-lg font-semibold transition-all duration-300 ${
                isAnswered() ? "hover:scale-[1.02]" : "opacity-50 cursor-not-allowed"
              }`}
            >
              {currentStep === questions.length - 1 ? "Complete Questions" : "Next Question"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {isAnswered() && (
              <p className="text-center text-sm text-muted-foreground mt-3">
                {currentStep === questions.length - 1
                  ? "Almost done!"
                  : `${questions.length - currentStep - 1} questions remaining`}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
