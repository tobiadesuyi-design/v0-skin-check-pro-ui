import Link from "next/link"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompactLensUpsell() {
  return (
    <div className="bg-[#ECE5DF]/30 rounded-lg p-3 flex items-center gap-3">
      <div className="w-10 h-10 bg-[#ECE5DF] rounded-full flex items-center justify-center flex-shrink-0">
        <Camera className="h-5 w-5 text-[#4A2E1D]" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-[#4A2E1D] font-medium">Want better image quality?</p>
        <p className="text-xs text-[#4A2E1D]/70">Order a lens for accurate results.</p>
      </div>
      <Button asChild className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-1 px-3 h-auto text-xs">
        <Link href="/lens-order">£70</Link>
      </Button>
    </div>
  )
}
