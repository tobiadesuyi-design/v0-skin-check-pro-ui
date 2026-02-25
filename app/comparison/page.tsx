import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceComparison } from "../components/service-comparison"
import { MobileServiceComparison } from "../components/mobile-service-comparison"

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2]">
      {/* Header with back button */}
      <div className="flex items-center px-6 py-4 shadow-sm">
        <Link href="/dashboard" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Service Comparison</h1>
      </div>

      {/* Main content */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#4A2E1D] mb-3">How We Compare</h2>
            <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
              See how SkinCheck Pro compares to traditional skin check options.
            </p>
          </div>

          {/* Desktop comparison table */}
          <div className="hidden md:block mb-8">
            <ServiceComparison />
          </div>

          {/* Mobile comparison cards */}
          <div className="md:hidden mb-8">
            <MobileServiceComparison />
          </div>

          {/* Key benefits */}
          <div className="bg-white rounded-xl border border-[#ECE5DF] p-6 mb-8">
            <h3 className="text-xl font-semibold text-[#4A2E1D] mb-4">Why Choose SkinCheck Pro?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#4A2E1D] font-medium">1</span>
                </div>
                <div>
                  <p className="font-medium text-[#4A2E1D]">Fast Results</p>
                  <p className="text-[#4A2E1D]/70 text-sm">
                    Get your assessment within 48 hours, not weeks or months of anxious waiting.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#4A2E1D] font-medium">2</span>
                </div>
                <div>
                  <p className="font-medium text-[#4A2E1D]">Affordable Care</p>
                  <p className="text-[#4A2E1D]/70 text-sm">
                    Professional assessment at a fraction of the cost of private dermatology consultations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#4A2E1D] font-medium">3</span>
                </div>
                <div>
                  <p className="font-medium text-[#4A2E1D]">Dual Assessment</p>
                  <p className="text-[#4A2E1D]/70 text-sm">
                    The only service that combines advanced AI analysis with review by qualified UK GPs.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="bg-[#ECE5DF]/30 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=80&width=80&text=User"
                  alt="User testimonial"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#4A2E1D]/80 italic mb-3">
                  "I was worried about a mole but couldn't get a GP appointment for months. SkinCheck Pro gave me an
                  answer in just 2 days, and the peace of mind was worth every penny."
                </p>
                <p className="font-medium text-[#4A2E1D]">— Sarah T., Manchester</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 px-8 text-lg flex items-center gap-2 mx-auto"
            >
              <Link href="/payment-screen">
                Start My Skin Check
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
