import { LensUpsell } from "../components/lens-upsell"
import { CompactLensUpsell } from "../components/compact-lens-upsell"
import { InlineLensUpsell } from "../components/inline-lens-upsell"

export default function LensUpsellExamplesPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] py-12">
      <div className="container px-4 max-w-3xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold text-[#4A2E1D] mb-6">Lens Upsell Components</h1>
          <p className="text-[#4A2E1D]/70 mb-8">
            Different upsell components for promoting the skin check lens accessory.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-[#4A2E1D] mb-4">Standard Card Upsell</h2>
          <p className="text-[#4A2E1D]/70 mb-4">
            Full-featured card with benefits and clear CTA. Good for dashboard or post-scan pages.
          </p>
          <LensUpsell />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-[#4A2E1D] mb-4">Compact Upsell</h2>
          <p className="text-[#4A2E1D]/70 mb-4">Space-saving design for sidebar or between content sections.</p>
          <CompactLensUpsell />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-[#4A2E1D] mb-4">Inline Upsell</h2>
          <p className="text-[#4A2E1D]/70 mb-4">Subtle inline promotion that doesn't disrupt content flow.</p>
          <div className="bg-white p-6 rounded-lg">
            <p className="text-[#4A2E1D] mb-4">
              Your scan has been submitted successfully. Our team will review your images and provide feedback within 48
              hours.
            </p>
            <InlineLensUpsell />
            <p className="text-[#4A2E1D] mt-4">
              You'll receive an email notification when your results are ready to view.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
