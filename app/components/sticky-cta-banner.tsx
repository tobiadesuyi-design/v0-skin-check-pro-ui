import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCTABanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ECE5DF] shadow-lg py-3 px-4 z-50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-[#4A2E1D]">Don't Wait and Worry</h3>
          <p className="text-[#4A2E1D]/80 text-sm">Get your skin checked now by a UK GP</p>
        </div>
        <Button
          asChild
          className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-4 px-6 text-base shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
        >
          <Link href="/payment-screen" className="flex items-center justify-center gap-2">
            Start My Skin Check – £99
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
