"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Camera, Upload, LightbulbIcon, ChevronRight } from "lucide-react"

export default function PhotoCaptureOptionsScreen() {
  const router = useRouter()

  const handleTakePhoto = () => {
    router.push("/take-photo")
  }

  const handleUploadPhoto = () => {
    router.push("/upload-photos")
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full mr-2" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-xl font-semibold text-[#4A2E1D]">Add Photo</h1>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#4A2E1D] mb-3">How would you like to add a photo?</h2>
          <p className="text-[#4A2E1D]/70">Choose to take a new photo or upload an existing one from your device</p>
        </div>

        {/* Option cards */}
        <div className="space-y-4 mb-8">
          <Card
            className="border-[#ECE5DF] hover:border-[#4A2E1D]/30 transition-colors rounded-xl overflow-hidden cursor-pointer"
            onClick={handleTakePhoto}
          >
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="bg-[#4A2E1D]/5 p-6 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-[#4A2E1D]" />
                </div>
                <div className="flex-grow p-4">
                  <h3 className="font-medium text-[#4A2E1D] mb-1">Take Photo</h3>
                  <p className="text-sm text-[#4A2E1D]/70">Use your camera to take a new photo</p>
                </div>
                <div className="pr-4">
                  <ChevronRight className="h-5 w-5 text-[#4A2E1D]/40" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-[#ECE5DF] hover:border-[#4A2E1D]/30 transition-colors rounded-xl overflow-hidden cursor-pointer"
            onClick={handleUploadPhoto}
          >
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="bg-[#4A2E1D]/5 p-6 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-[#4A2E1D]" />
                </div>
                <div className="flex-grow p-4">
                  <h3 className="font-medium text-[#4A2E1D] mb-1">Upload from Gallery</h3>
                  <p className="text-sm text-[#4A2E1D]/70">Select an existing photo from your device</p>
                </div>
                <div className="pr-4">
                  <ChevronRight className="h-5 w-5 text-[#4A2E1D]/40" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Illustration */}
        <div className="relative w-full h-48 mb-8">
          <Image
            src="/placeholder.svg?key=ixnvs"
            alt="Illustration of a phone taking a photo of a mole"
            fill
            className="object-contain"
          />
        </div>

        {/* Photo tips link */}
        <Link href="/photo-instructions" className="mx-auto">
          <Button
            variant="ghost"
            className="text-[#4A2E1D] hover:text-[#4A2E1D] hover:bg-[#4A2E1D]/5 flex items-center gap-2"
          >
            <LightbulbIcon className="h-4 w-4" />
            Tips for better photos
          </Button>
        </Link>
      </div>
    </main>
  )
}
