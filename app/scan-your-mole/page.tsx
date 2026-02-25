"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload, ArrowLeft, ArrowRight, CheckCircle, X, Lightbulb, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ScanYourMolePage() {
  const [selectedMethod, setSelectedMethod] = useState<"camera" | "upload" | null>(null)

  return (
    <div className="min-h-screen bg-soft-gradient">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" size="icon" asChild className="mr-4">
              <Link href="/dashboard">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-neutral-900">Scan Your Mole</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-emerald-600">Photos</span>
            </div>
            <div className="w-12 h-0.5 bg-neutral-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-neutral-200 text-neutral-500 rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm text-neutral-500">Details</span>
            </div>
            <div className="w-12 h-0.5 bg-neutral-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-neutral-200 text-neutral-500 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm text-neutral-500">Review</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Take photos of your mole</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Clear, well-lit photos help our dermatologists provide the most accurate assessment
          </p>
        </div>

        {/* Photo Method Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card
            className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-large ${
              selectedMethod === "camera" ? "ring-2 ring-emerald-500 bg-emerald-50" : ""
            }`}
            onClick={() => setSelectedMethod("camera")}
          >
            <CardHeader className="p-0 text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Use Camera</CardTitle>
              <CardDescription className="text-base">Take photos directly with your device camera</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Real-time photo guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Automatic quality checks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Best for mobile devices
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-large ${
              selectedMethod === "upload" ? "ring-2 ring-emerald-500 bg-emerald-50" : ""
            }`}
            onClick={() => setSelectedMethod("upload")}
          >
            <CardHeader className="p-0 text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Upload Photos</CardTitle>
              <CardDescription className="text-base">Upload existing photos from your device</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Use existing photos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Multiple file formats
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                  Best for desktop
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Photo Quality Guide */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-900">
              <Lightbulb className="w-5 h-5 mr-2" />
              Photo Quality Guide
            </CardTitle>
            <CardDescription className="text-amber-800">
              Follow these tips for the best assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Example */}
              <div className="space-y-4">
                <h3 className="font-semibold text-emerald-700 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Good Photo Example
                </h3>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=200&width=300&text=Good+Photo+Example"
                    alt="Good mole photo example"
                    className="w-full h-48 object-cover rounded-xl border-2 border-emerald-200"
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <ul className="space-y-1 text-sm text-emerald-700">
                  <li>• Clear, well-lit image</li>
                  <li>• Mole fills most of the frame</li>
                  <li>• Sharp focus on the mole</li>
                  <li>• Natural skin color visible</li>
                </ul>
              </div>

              {/* Bad Example */}
              <div className="space-y-4">
                <h3 className="font-semibold text-red-700 flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  Avoid These Issues
                </h3>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=200&width=300&text=Poor+Photo+Example"
                    alt="Poor mole photo example"
                    className="w-full h-48 object-cover rounded-xl border-2 border-red-200 opacity-75"
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                </div>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Blurry or out of focus</li>
                  <li>• Too dark or shadowy</li>
                  <li>• Mole too small in frame</li>
                  <li>• Flash creating glare</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Notice</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  This service is for non-urgent skin concerns. If you notice rapid changes, bleeding, or have immediate
                  concerns about a mole, please contact your GP or visit A&E immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {selectedMethod && (
            <Button size="lg" asChild className="text-base">
              <Link href={selectedMethod === "camera" ? "/take-photo" : "/upload-photos"}>
                Continue with {selectedMethod === "camera" ? "Camera" : "Upload"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          )}

          <Button variant="outline" size="lg" asChild className="text-base bg-transparent">
            <Link href="/photo-guidance-examples">View More Examples</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
