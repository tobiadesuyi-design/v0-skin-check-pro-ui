"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PhotoCapturePage() {
  const [photos, setPhotos] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Take a close-up photo",
      description: "Position your camera 6-12 inches from the mole",
      example: "/placeholder.svg?height=300&width=300&text=Close-up+Example",
    },
    {
      title: "Take a wider photo",
      description: "Show the mole in context with surrounding skin",
      example: "/placeholder.svg?height=300&width=300&text=Wide+Example",
    },
  ]

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newPhotos = [...photos]
        newPhotos[currentStep] = e.target?.result as string
        setPhotos(newPhotos)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const canProceed = photos.length >= 2

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#f5f0eb] bg-white px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-medium text-[#1a1a1a]">Photo Capture</h1>
          <p className="text-[#4a4a4a] mt-2">Take clear photos for accurate assessment</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  photos[index]
                    ? "bg-[#1a1a1a] text-white"
                    : index === currentStep
                      ? "bg-[#faf7f4] text-[#1a1a1a] border-2 border-[#1a1a1a]"
                      : "bg-[#f5f0eb] text-[#8a8a8a]"
                }`}
              >
                {photos[index] ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              {index < steps.length - 1 && <div className="w-16 h-0.5 bg-[#f5f0eb] mx-4" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-medium text-[#1a1a1a] mb-6">
              Step {currentStep + 1}: {steps[currentStep].title}
            </h2>
            <p className="text-lg text-[#4a4a4a] mb-8">{steps[currentStep].description}</p>

            {/* Photo Guidelines */}
            <Card className="p-6 mb-8">
              <CardContent className="p-0">
                <h3 className="font-medium text-[#1a1a1a] mb-4">Photo Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-[#4a4a4a]">Good lighting (natural light preferred)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-[#4a4a4a]">Clear focus on the mole</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-[#4a4a4a]">Steady hands (avoid blur)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <X className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-[#4a4a4a]">Avoid shadows or glare</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="flex items-center justify-center w-full p-8 border-2 border-dashed border-[#e8ddd4] rounded-2xl hover:border-[#1a1a1a] hover:bg-[#faf7f4] transition-all duration-200 cursor-pointer"
              >
                <div className="text-center">
                  <Camera className="w-12 h-12 text-[#8a8a8a] mx-auto mb-4" />
                  <p className="text-lg font-medium text-[#1a1a1a] mb-2">Take Photo</p>
                  <p className="text-[#4a4a4a]">Or upload from gallery</p>
                </div>
              </label>

              {photos[currentStep] && (
                <div className="relative">
                  <Image
                    src={photos[currentStep] || "/placeholder.svg"}
                    alt={`Photo ${currentStep + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <button
                    onClick={() => {
                      const newPhotos = [...photos]
                      delete newPhotos[currentStep]
                      setPhotos(newPhotos)
                    }}
                    className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Example */}
          <div>
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-6">Example</h3>
            <div className="relative">
              <Image
                src={steps[currentStep].example || "/placeholder.svg"}
                alt="Example photo"
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-2xl border border-[#f5f0eb]"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16">
          <div className="text-sm text-[#8a8a8a]">
            {photos.length} of {steps.length} photos taken
          </div>

          <div className="flex gap-4">
            {photos[currentStep] && currentStep < steps.length - 1 && (
              <Button onClick={handleNext} variant="outline">
                Next Photo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {canProceed && (
              <Link href="/payment">
                <Button size="lg">
                  Continue to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
