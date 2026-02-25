import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTABanner } from "../components/cta-banner"
import { CompactCTABanner } from "../components/compact-cta-banner"
import { StickyCTABanner } from "../components/sticky-cta-banner"

export default function CTAExamplesPage() {
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
        <h1 className="text-2xl font-bold text-[#4A2E1D]">CTA Banner Examples</h1>
      </div>

      {/* Main content */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-xl font-bold text-[#4A2E1D] mb-4">Full CTA Banner</h2>
            <p className="text-[#4A2E1D]/80 mb-6">
              This banner is designed to be used at the bottom of landing pages and key conversion pages.
            </p>
            <CTABanner />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#4A2E1D] mb-4">Compact CTA Banner</h2>
            <p className="text-[#4A2E1D]/80 mb-6">
              This smaller banner can be used within content sections or sidebar areas.
            </p>
            <div className="max-w-md mx-auto">
              <CompactCTABanner />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#4A2E1D] mb-4">Sticky CTA Banner</h2>
            <p className="text-[#4A2E1D]/80 mb-6">
              This banner sticks to the bottom of the screen as users scroll, ensuring the CTA is always visible.
            </p>
            <div className="border border-dashed border-[#4A2E1D]/30 p-4 rounded-lg">
              <p className="text-sm text-[#4A2E1D]/60 text-center mb-4">
                (Example only - the actual sticky banner would be fixed to the bottom of the viewport)
              </p>
              <StickyCTABanner />
            </div>
          </div>
        </div>
      </section>

      {/* Actual sticky banner for demonstration */}
      <StickyCTABanner />
    </main>
  )
}
