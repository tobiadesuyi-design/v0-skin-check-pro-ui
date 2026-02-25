"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, RefreshCw } from "lucide-react"

export default function CheckYourPhotosScreen() {
  const router = useRouter()

  // In a real app, these would be passed from the previous screen
  // For this demo, we'll use placeholder images
  const photos = {
    closeUp: "/placeholder.svg?height=300&width=300&text=Close-up",
    wideAngle: "/placeholder.svg?height=300&width=300&text=Wide+Angle",
    location: "/placeholder.svg?height=300&width=300&text=Location",
  }

  const handleSubmit = () => {
    router.push("/scan-confirmation")
  }

  const handleRetake = () => {
    router.push("/scan-your-mole")
  }

  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link href="/scan-your-mole" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Check Your Photos</h1>
      </div>

      <div className="max-w-md mx-auto">
        {/* Main question */}
        <div className="mb-6">
          <p className="text-[#4A2E1D]/80 text-center text-lg font-medium">Are these clear images of the mole?</p>
        </div>

        {/* Photo preview */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square relative rounded-lg overflow-hidden border border-[#ECE5DF]">
                <Image
                  src={photos.closeUp || "/placeholder.svg"}
                  alt="Close-up of mole"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Close-up
                </div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden border border-[#ECE5DF]">
                <Image
                  src={photos.wideAngle || "/placeholder.svg"}
                  alt="Wide angle of mole"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Wide angle
                </div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden border border-[#ECE5DF]">
                <Image
                  src={photos.location || "/placeholder.svg"}
                  alt="Location of mole on body"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Location
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="space-y-4 mb-6">
          <Button
            className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg"
            onClick={handleSubmit}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Yes, submit scan
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full py-6 text-lg"
            onClick={handleRetake}
          >
            <div className="flex items-center justify-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Retake photos
            </div>
          </Button>
        </div>

        <p className="text-sm text-center text-[#4A2E1D]/70">
          Clear, well-lit photos help our doctors provide the most accurate assessment.
        </p>
      </div>
    </main>
  )
}
