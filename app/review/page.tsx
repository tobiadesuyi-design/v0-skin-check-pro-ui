"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Heart, Edit, CheckCircle, Camera } from "lucide-react"

export default function ReviewPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    setIsLoaded(true)

    // Load saved data
    const savedAnswers = JSON.parse(localStorage.getItem("skincheck_answers") || "{}")
    const savedPhotos = JSON.parse(localStorage.getItem("skincheck_photos") || "[]")

    setAnswers(savedAnswers)
    setPhotos(savedPhotos)
  }, [])

  const handleBack = () => {
    router.back()
  }

  const handleSubmit = () => {
    // Create submission data
    const submission = {
      referenceNumber: `SC${Date.now().toString().slice(-6)}`,
      submittedAt: new Date().toISOString(),
      answers,
      photos,
      status: "pending",
    }

    localStorage.setItem("skincheck_submission", JSON.stringify(submission))
    router.push("/confirmation")
  }

  const handleEditAnswers = () => {
    router.push("/onboarding")
  }

  const handleEditPhotos = () => {
    router.push("/photo-upload")
  }

  const questionLabels: Record<string, string> = {
    location: "Mole location",
    duration: "How long you've had it",
    changes: "Recent changes",
    symptoms: "Symptoms",
    history: "Previous doctor visits",
  }

  return (
    <div className={`min-h-screen bg-skin-pearl ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
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
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-semibold text-foreground leading-tight">Review your submission</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Please check your information before submitting to our dermatologists.
            </p>
          </div>

          {/* Your Answers */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Your Answers</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEditAnswers}
                  className="text-skin-deep hover:text-foreground"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>

              <div className="space-y-3">
                {Object.entries(answers).map(([key, values]) => (
                  <div key={key} className="border-b border-skin-beige pb-3 last:border-b-0">
                    <p className="text-sm font-medium text-foreground mb-1">{questionLabels[key] || key}</p>
                    <p className="text-sm text-muted-foreground">{values.join(", ")}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Your Photos */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Your Photos</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEditPhotos}
                  className="text-skin-deep hover:text-foreground"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>

              {photos.length > 0 ? (
                <div className="space-y-3">
                  {photos.map((photo, index) => (
                    <div key={photo.id} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-skin-cream rounded-2xl flex items-center justify-center">
                        <Camera className="w-6 h-6 text-skin-deep" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Photo {index + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          {photo.name} • {(photo.size / 1024 / 1024).toFixed(1)} MB
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No photos uploaded</p>
              )}
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="bg-skin-cream border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Expert Review</p>
                    <p className="text-xs text-muted-foreground">
                      A board-certified dermatologist will analyze your photos and information
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Detailed Report</p>
                    <p className="text-xs text-muted-foreground">
                      You'll receive a comprehensive report within 24-48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Follow-up Support</p>
                    <p className="text-xs text-muted-foreground">Get guidance on next steps and ongoing skin health</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              size="full"
              onClick={handleSubmit}
              className="group h-14 text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Submit for Review
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Your information is secure and will only be viewed by qualified dermatologists
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
