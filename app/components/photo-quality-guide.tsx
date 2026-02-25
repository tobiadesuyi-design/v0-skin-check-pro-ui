import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Check, X } from "lucide-react"

interface PhotoQualityGuideProps {
  className?: string
}

export function PhotoQualityGuide({ className = "" }: PhotoQualityGuideProps) {
  return (
    <Card className={`border-[#ECE5DF] rounded-2xl shadow-sm bg-white ${className}`}>
      <CardContent className="p-6">
        {/* Camera icon and title */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-[#ECE5DF] rounded-full p-3 mr-3">
            <Camera className="h-6 w-6 text-[#4A2E1D]" />
          </div>
          <h2 className="text-xl font-bold text-[#4A2E1D]">Take the Best Photo</h2>
        </div>

        {/* Instructions */}
        <p className="text-[#4A2E1D]/80 text-center mb-6 leading-relaxed">
          A good photo helps us provide the most accurate result. Make sure your photo is clear, close-up, and well-lit.
        </p>

        {/* Good vs Bad Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Good Example */}
          <div className="bg-[#FAF6F2] rounded-xl p-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border-2 border-green-200 mb-3">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Clear+Mole+Photo"
                alt="Good example of mole photo"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-green-700 mb-1 flex items-center justify-center">
                <Check className="h-4 w-4 mr-1" />
                Good Example
              </h3>
              <p className="text-sm text-[#4A2E1D]/70">Clear, close-up, no shadows</p>
            </div>
          </div>

          {/* Bad Example */}
          <div className="bg-[#FAF6F2] rounded-xl p-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border-2 border-red-200 mb-3">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Blurry+Photo"
                alt="Bad example of mole photo"
                fill
                className="object-cover opacity-60 blur-sm"
              />
              <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1">
                <X className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-red-700 mb-1 flex items-center justify-center">
                <X className="h-4 w-4 mr-1" />
                Bad Example
              </h3>
              <p className="text-sm text-[#4A2E1D]/70">Blurry, shadows, too far</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
