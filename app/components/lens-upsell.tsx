import Link from "next/link"
import { Camera, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function LensUpsell() {
  return (
    <Card className="border-[#ECE5DF] rounded-lg shadow-sm overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Lens Image */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
            <div className="absolute inset-0 bg-[#ECE5DF]/50 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="h-10 w-10 text-[#4A2E1D]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-medium text-[#4A2E1D] text-lg">Want better image quality?</h3>
            <p className="text-[#4A2E1D]/70 text-sm mb-3">Order a lens for more accurate results.</p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <div className="flex items-center gap-1 text-xs text-[#4A2E1D]/70">
                <Check className="h-3 w-3 text-[#4A2E1D]" />
                <span>10x magnification</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#4A2E1D]/70">
                <Check className="h-3 w-3 text-[#4A2E1D]" />
                <span>Fits all phones</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#4A2E1D]/70">
                <Check className="h-3 w-3 text-[#4A2E1D]" />
                <span>Free shipping</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-1 h-auto text-sm w-full sm:w-auto"
            >
              <Link href="/lens-order">Order a Lens – £70</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
