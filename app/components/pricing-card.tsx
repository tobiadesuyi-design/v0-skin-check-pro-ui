import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PricingCard() {
  return (
    <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-[#4A2E1D] p-4 text-white text-center">
        <h3 className="font-bold text-xl">Digital Mole Check</h3>
      </div>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-[#4A2E1D]">£99</div>
          <p className="text-[#4A2E1D]/70 text-sm">One-time payment</p>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
            <span className="text-[#4A2E1D]/80">AI-powered scan analysis</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
            <span className="text-[#4A2E1D]/80">Review by a UK GP</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
            <span className="text-[#4A2E1D]/80">Report in 48 hours</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
            <span className="text-[#4A2E1D]/80">Personalised advice</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
            <span className="text-[#4A2E1D]/80">Referral if needed</span>
          </li>
        </ul>

        <Button
          asChild
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 flex items-center justify-center gap-2"
        >
          <Link href="/payment-screen">
            Start Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
