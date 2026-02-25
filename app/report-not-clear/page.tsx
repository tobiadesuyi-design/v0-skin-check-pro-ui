"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, AlertTriangle, Camera, CheckCircle, Lightbulb, RefreshCw, HelpCircle } from "lucide-react"

export default function ReportNotClearPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleBack = () => {
    router.push("/my-reports")
  }

  const handleRetakePhotos = () => {
    router.push("/")
  }

  const handleGetHelp = () => {
    router.push("/need-help")
  }

  const photoTips = [
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-600" />,
      title: "Use natural light",
      description: "Take photos near a window during daylight hours for the clearest images.",
    },
    {
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      title: "Hold your phone steady",
      description: "Keep your phone still and use the 10x lens for close-up shots.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      title: "Clean the lens",
      description: "Make sure both your phone camera and the 10x lens are clean and smudge-free.",
    },
  ]

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleBack} className="p-2 hover:bg-gray-50 rounded-xl">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-black">Photo Quality Issue</h1>
              <p className="text-sm text-gray-600">We need clearer photos to complete your assessment</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-6 space-y-6 pb-24">
        {/* Issue Explanation */}
        <Card className="border border-orange-200 bg-orange-50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold text-orange-800">We need better photos</h2>
                <p className="text-orange-700 leading-relaxed">
                  Our GP couldn't get a clear enough view of your mole from the photos you submitted. This sometimes
                  happens due to lighting, focus, or image quality issues.
                </p>
                <p className="text-orange-700 leading-relaxed">
                  Don't worry — this is completely normal and happens with about 15% of submissions. You can resubmit
                  new photos at no extra cost.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Went Wrong */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">What might have caused this?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <p className="text-gray-700">Photos were too blurry or out of focus</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <p className="text-gray-700">Lighting was too dim or created shadows</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <p className="text-gray-700">The mole wasn't clearly visible in the frame</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <p className="text-gray-700">The 10x lens wasn't properly attached or aligned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photo Tips */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">Tips for better photos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {photoTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  {tip.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-black">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Free Resubmission Notice */}
        <Card className="border border-green-200 bg-green-50 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Free resubmission</h3>
                <p className="text-green-700 leading-relaxed">
                  You can retake and resubmit your photos at no additional cost. Your original payment covers unlimited
                  resubmissions within 30 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleRetakePhotos}
            className="flex-1 bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retake Photos
          </Button>
          <Button
            onClick={handleGetHelp}
            variant="outline"
            className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl h-12 font-medium bg-transparent"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Get Help
          </Button>
        </div>
      </main>
    </div>
  )
}
