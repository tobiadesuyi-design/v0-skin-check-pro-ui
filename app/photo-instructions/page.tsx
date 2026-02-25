"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Camera, Sun, Focus, Zap, Heart } from "lucide-react"

export default function PhotoInstructionsPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleBack = () => {
    router.back()
  }

  const handleContinue = () => {
    router.push("/photo-upload")
  }

  const guidelines = [
    {
      icon: Sun,
      title: "Use natural light",
      description: "Take photos near a window or outdoors in shade. Avoid harsh direct sunlight.",
      do: true,
    },
    {
      icon: Focus,
      title: "Keep it in focus",
      description: "Tap on the mole to focus your camera. Make sure the image is sharp and clear.",
      do: true,
    },
    {
      icon: Camera,
      title: "Fill the frame",
      description: "Get close enough so the mole takes up about 1/4 of your screen.",
      do: true,
    },
    {
      icon: Zap,
      title: "Avoid flash",
      description: "Flash can create shadows and reflections that hide important details.",
      do: false,
    },
  ]

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
            <div className="w-16 h-16 bg-skin-blush rounded-3xl mx-auto flex items-center justify-center">
              <Camera className="w-8 h-8 text-skin-deep" />
            </div>
            <h1 className="text-3xl font-semibold text-foreground leading-tight">Let's take great photos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow these simple tips to help our dermatologists give you the most accurate analysis.
            </p>
          </div>

          {/* Guidelines */}
          <div className="space-y-4">
            {guidelines.map((guideline, index) => (
              <Card
                key={index}
                className={`border-2 ${guideline.do ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        guideline.do ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      <guideline.icon className={`w-5 h-5 ${guideline.do ? "text-green-600" : "text-red-600"}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">{guideline.title}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            guideline.do ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          }`}
                        >
                          {guideline.do ? "DO" : "DON'T"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{guideline.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Photo Examples */}
          <Card className="bg-skin-cream border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground text-center">What we're looking for</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-full h-24 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xs text-green-700 font-medium">Clear & focused</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-full h-24 bg-red-100 rounded-2xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-xs text-red-700 font-medium">Blurry or dark</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tip */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-blue-900">💡 Pro tip</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Take 2-3 photos from slightly different angles. This gives our dermatologists the best view of your
                  mole.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <div className="pt-4">
            <Button size="full" onClick={handleContinue} className="group h-14 text-lg font-semibold">
              I'm Ready to Take Photos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
