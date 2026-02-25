import Link from "next/link"
import { User, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsIncludedSection } from "../components/whats-included-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2]">
      {/* Header */}
      <div className="bg-[#4A2E1D] text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-white/80 max-w-md mx-auto">
            Professional mole checks from the comfort of your home, with no hidden fees.
          </p>
        </div>
      </div>

      {/* Main content */}
      <WhatsIncludedSection />

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#4A2E1D] mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">How accurate is the digital mole check?</h3>
                <p className="text-[#4A2E1D]/80">
                  Our combination of AI analysis and review by qualified UK GPs provides a high level of accuracy.
                  However, digital checks are not a replacement for in-person dermatological examination when needed,
                  which is why we'll always recommend further care if there's any uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Do I need to pay for a referral?</h3>
                <p className="text-[#4A2E1D]/80">
                  No. If your mole check indicates that you should see a specialist, the referral advice is included in
                  your £99 payment. Any subsequent appointments with specialists would be arranged through the NHS or
                  privately at your discretion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Can I check multiple moles?</h3>
                <p className="text-[#4A2E1D]/80">
                  The £99 fee covers one mole check. If you'd like to check additional moles, each additional mole
                  requires a separate submission. We offer discounted packages for multiple mole checks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 px-6 bg-[#ECE5DF]/30">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] mb-2">Secure & Confidential</h3>
              <p className="text-[#4A2E1D]/80 text-sm">Your data is encrypted and protected at all times.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] mb-2">UK Qualified Doctors</h3>
              <p className="text-[#4A2E1D]/80 text-sm">All reviews conducted by GMC registered practitioners.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] mb-2">Fast Results</h3>
              <p className="text-[#4A2E1D]/80 text-sm">Get your results within 48 hours, not weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#4A2E1D] mb-4">Ready to check your mole?</h2>
          <p className="text-[#4A2E1D]/80 mb-8 max-w-md mx-auto">
            Get peace of mind with a professional assessment in just 48 hours.
          </p>
          <Button asChild className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 px-10 text-lg">
            <Link href="/payment-screen">Start Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
