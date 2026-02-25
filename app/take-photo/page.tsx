"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Camera, ImageIcon, CheckCircle, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function TakePhotoScreen() {
  const router = useRouter()
  const [photoTaken, setPhotoTaken] = useState(false)
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const [cameraActive, setCameraActive] = useState(false)

  // In a real app, this would access the device camera
  // For this demo, we'll simulate taking a photo
  const handleTakePhoto = () => {
    // Simulate a photo being taken
    const mockPhotoUrl = "/placeholder.svg?key=ihyiu"
    setPhotoUrl(mockPhotoUrl)
    setPhotoTaken(true)
    setCameraActive(false)
  }

  const handleRetake = () => {
    setPhotoTaken(false)
    setPhotoUrl(null)
    setCameraActive(true)
  }

  const handleActivateCamera = () => {
    setCameraActive(true)
  }

  const handleSubmitPhoto = () => {
    // In a real app, this would upload the photo
    router.push("/check-your-photos")
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/photo-instructions">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full mr-2">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back to instructions</span>
          </Button>
        </Link>
        <h1 className="text-xl font-semibold text-[#4A2E1D]">Take Photo</h1>
      </div>

      {/* Camera/Photo view */}
      <Card className="flex-grow border-[#ECE5DF] rounded-xl shadow-sm mb-6 overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative w-full aspect-square bg-[#ECE5DF]/30">
            {photoTaken && photoUrl ? (
              // Show the taken photo
              <Image src={photoUrl || "/placeholder.svg"} alt="Photo of mole" fill className="object-cover" />
            ) : cameraActive ? (
              // Show camera view (simulated)
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-white text-center">
                  <p className="mb-2">Camera Preview</p>
                  <p className="text-sm text-white/70">Position the mole in the center</p>
                </div>
                {/* Camera guide overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border-2 border-white/70 rounded-full border-dashed"></div>
                </div>
              </div>
            ) : (
              // Show placeholder/instructions
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#ECE5DF]/30 p-6">
                <Camera className="h-12 w-12 text-[#4A2E1D]/40 mb-4" />
                <p className="text-center text-[#4A2E1D]/70">
                  Tap the camera button below to take a photo of your mole
                </p>
              </div>
            )}
          </div>

          {/* Camera controls */}
          <div className="p-6 bg-white">
            {photoTaken ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">Photo captured successfully</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-[#4A2E1D]/20 text-[#4A2E1D] hover:bg-[#4A2E1D]/5 hover:text-[#4A2E1D] rounded-full py-5"
                    onClick={handleRetake}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retake Photo
                  </Button>
                  <Button
                    className="flex-1 bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-5"
                    onClick={handleSubmitPhoto}
                  >
                    Use This Photo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Button
                  className="h-16 w-16 rounded-full bg-[#4A2E1D] hover:bg-[#3A2315] flex items-center justify-center"
                  onClick={cameraActive ? handleTakePhoto : handleActivateCamera}
                >
                  <Camera className="h-6 w-6 text-white" />
                  <span className="sr-only">Take photo</span>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Photo tips */}
      {!photoTaken && (
        <Card className="border-[#ECE5DF] rounded-xl shadow-sm mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium text-[#4A2E1D] mb-3">Quick tips:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center">
                  <span className="text-xs text-[#4A2E1D]">1</span>
                </div>
                <span className="text-sm text-[#4A2E1D]/70">Hold your phone steady</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center">
                  <span className="text-xs text-[#4A2E1D]">2</span>
                </div>
                <span className="text-sm text-[#4A2E1D]/70">Center the mole in the frame</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center">
                  <span className="text-xs text-[#4A2E1D]">3</span>
                </div>
                <span className="text-sm text-[#4A2E1D]/70">Make sure there's good lighting</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Upload alternative */}
      {!photoTaken && !cameraActive && (
        <Button
          variant="outline"
          className="w-full border-[#4A2E1D]/20 text-[#4A2E1D] hover:bg-[#4A2E1D]/5 hover:text-[#4A2E1D] rounded-full py-5"
          onClick={() => router.push("/upload-photos")}
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Upload from gallery instead
        </Button>
      )}
    </main>
  )
}
