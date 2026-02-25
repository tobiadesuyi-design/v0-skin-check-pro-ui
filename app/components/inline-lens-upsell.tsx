import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function InlineLensUpsell() {
  return (
    <div className="flex items-center justify-between border-t border-b border-[#ECE5DF] py-3 my-4">
      <div>
        <p className="text-sm text-[#4A2E1D] font-medium">Want better image quality?</p>
        <p className="text-xs text-[#4A2E1D]/70">Order a lens for £70</p>
      </div>
      <Link href="/lens-order" className="text-[#4A2E1D] text-sm font-medium flex items-center gap-1 hover:underline">
        Order
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}
