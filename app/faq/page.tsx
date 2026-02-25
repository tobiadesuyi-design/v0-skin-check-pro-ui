import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FAQSection } from "../components/faq-section"
import { TrustBadges } from "../components/trust-badges"

export default function FAQPage() {
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
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Frequently Asked Questions</h1>
      </div>

      {/* Search bar */}
      <div className="px-6 py-6 bg-white border-b border-[#ECE5DF]">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A2E1D]/60" />
            <Input
              placeholder="Search for questions..."
              className="pl-10 rounded-full border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
            />
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="px-6 py-4 bg-white border-b border-[#ECE5DF]">
        <TrustBadges />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#4A2E1D] mb-3">Still have questions?</h2>
          <p className="text-[#4A2E1D]/80 mb-6">
            Our support team is here to help with any questions you might have about our service.
          </p>
          <Button asChild className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full px-8 py-6">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
