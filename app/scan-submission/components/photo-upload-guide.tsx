"use client"

import { X, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PhotoUploadGuideProps {
  onClose: () => void
}

export function PhotoUploadGuide({ onClose }: PhotoUploadGuideProps) {
  return (
    <Card className="border-[#ECE5DF] rounded-xl shadow-sm mb-6 bg-white">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-[#4A2E1D]">How to take good mole photos</h3>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={onClose}>
            <X className="h-4 w-4 text-[#4A2E1D]" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 border border-[#ECE5DF]">
                <Image src="/placeholder.svg?key=x95gq" alt="Close-up photo example" fill className="object-cover" />
              </div>
              <p className="text-xs font-medium text-[#4A2E1D]">1. Close-up photo</p>
              <p className="text-xs text-[#4A2E1D]/70">Clear, well-lit, close view</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 border border-[#ECE5DF]">
                <Image src="/placeholder.svg?key=1p8z5" alt="Wider view photo example" fill className="object-cover" />
              </div>
              <p className="text-xs font-medium text-[#4A2E1D]">2. Wider view</p>
              <p className="text-xs text-[#4A2E1D]/70">Shows surrounding area</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 border border-[#ECE5DF]">
                <Image src="/placeholder.svg?key=o0jla" alt="Location photo example" fill className="object-cover" />
              </div>
              <p className="text-xs font-medium text-[#4A2E1D]">3. Location (optional)</p>
              <p className="text-xs text-[#4A2E1D]/70">Shows where on body</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-[#4A2E1D]">Tips for good photos:</h4>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-xs text-[#4A2E1D]/80">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Use natural daylight or bright indoor lighting</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#4A2E1D]/80">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Keep the camera steady and focus on the mole</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#4A2E1D]/80">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Include a ruler or coin for size reference if possible</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[#4A2E1D]/80">
                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Avoid blurry, dark, or distant photos</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
