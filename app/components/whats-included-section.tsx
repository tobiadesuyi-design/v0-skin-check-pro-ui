import Link from "next/link"
import { Brain, User, Clock, FileText, ArrowUpRight, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WhatsIncludedSection() {
  return (
    <section className="py-12 px-6 bg-[#FAF6F2]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#4A2E1D] mb-3">What's Included for £99</h2>
          <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
            Our comprehensive digital mole check provides everything you need for peace of mind.
          </p>
        </div>

        {/* Main card */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Price highlight */}
            <div className="bg-[#ECE5DF]/40 rounded-xl p-4 mb-8 text-center">
              <div className="text-3xl font-bold text-[#4A2E1D]">£99</div>
              <p className="text-[#4A2E1D]/80">One-time payment, no subscription</p>
            </div>

            {/* Checklist */}
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Brain className="h-5 w-5 text-[#4A2E1D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A2E1D] text-lg">AI-powered scan</h3>
                  <p className="text-[#4A2E1D]/80">
                    Advanced technology analyses your mole images for concerning patterns and features.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="h-5 w-5 text-[#4A2E1D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A2E1D] text-lg">Review by a UK GP</h3>
                  <p className="text-[#4A2E1D]/80">
                    A qualified UK doctor personally reviews your images and AI results for accuracy.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5 text-[#4A2E1D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A2E1D] text-lg">Report in 48 hours</h3>
                  <p className="text-[#4A2E1D]/80">
                    Receive your detailed assessment within 48 hours, no lengthy waiting times.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="h-5 w-5 text-[#4A2E1D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A2E1D] text-lg">Personalised advice</h3>
                  <p className="text-[#4A2E1D]/80">
                    Clear guidance on next steps tailored to your specific situation and results.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowUpRight className="h-5 w-5 text-[#4A2E1D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A2E1D] text-lg">Referral if needed</h3>
                  <p className="text-[#4A2E1D]/80">
                    If further examination is required, we'll guide you on how to seek appropriate care.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Additional benefits */}
        <div className="bg-white rounded-2xl border border-[#ECE5DF] p-6 mb-8">
          <h3 className="font-semibold text-[#4A2E1D] text-lg mb-4">Also included:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-[#4A2E1D]" />
              </div>
              <span className="text-[#4A2E1D]/80">Secure storage of your images and reports</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-[#4A2E1D]" />
              </div>
              <span className="text-[#4A2E1D]/80">Email notification when your report is ready</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-[#4A2E1D]" />
              </div>
              <span className="text-[#4A2E1D]/80">Downloadable PDF report for your records</span>
            </li>
          </ul>
        </div>

        {/* Reassurance text */}
        <div className="text-center mb-8">
          <p className="text-[#4A2E1D]/80 italic">
            "Our goal is to provide accessible, professional skin checks that give you peace of mind without the wait."
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 px-10 text-lg flex items-center gap-2 mx-auto"
          >
            <Link href="/payment-screen">
              Start Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-[#4A2E1D]/60 mt-4">No hidden fees. Cancel anytime before review.</p>
        </div>
      </div>
    </section>
  )
}
