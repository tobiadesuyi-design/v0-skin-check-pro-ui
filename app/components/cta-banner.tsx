import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#4A2E1D]/10 to-[#ECE5DF]/30 py-12 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/placeholder.svg?height=200&width=200&text=Pattern')] bg-repeat opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="text-center md:text-left md:max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A2E1D] mb-3">Don't Wait and Worry</h2>
            <p className="text-[#4A2E1D]/80 text-lg mb-6">
              Get your skin checked now by a UK GP and receive results within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
                <Shield className="h-4 w-4 text-[#4A2E1D]" />
                <span className="text-sm font-medium text-[#4A2E1D]">UK GP Reviewed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
                <Shield className="h-4 w-4 text-[#4A2E1D]" />
                <span className="text-sm font-medium text-[#4A2E1D]">Secure & Private</span>
              </div>
            </div>
            <Button
              asChild
              className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-7 px-8 text-lg shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/payment-screen" className="flex items-center gap-2">
                Start My Skin Check – £99
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Illustration */}
          <div className="relative w-full max-w-xs md:max-w-sm">
            <div className="relative h-64 md:h-80">
              <Image
                src="/placeholder.svg?height=320&width=280&text=Doctor+with+phone+checking+skin"
                alt="Doctor reviewing skin check"
                fill
                className="object-contain"
              />
            </div>
            {/* Testimonial bubble */}
            <div className="absolute -top-4 right-0 bg-white rounded-xl p-3 shadow-md max-w-[180px]">
              <p className="text-sm text-[#4A2E1D]/80 italic">"I got my results in just 2 days. Such peace of mind!"</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center text-xs font-bold text-[#4A2E1D]">
                  J
                </div>
                <span className="text-xs font-medium text-[#4A2E1D]">James, London</span>
              </div>
              {/* Bubble tail */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
