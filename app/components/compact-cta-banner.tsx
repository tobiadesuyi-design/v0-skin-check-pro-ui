import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompactCTABanner() {
  return (
    <div className="bg-gradient-to-r from-[#4A2E1D]/10 to-[#ECE5DF]/30 rounded-2xl p-6 text-center">
      <h3 className="text-2xl font-bold text-[#4A2E1D] mb-2">Don't Wait and Worry</h3>
      <p className="text-[#4A2E1D]/80 mb-4">Get your skin checked now by a UK GP</p>
      <Button
        asChild
        className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-5 px-6 text-base shadow-md hover:shadow-lg transition-all"
      >
        <Link href="/payment-screen" className="flex items-center gap-2">
          Start My Skin Check – £99
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
