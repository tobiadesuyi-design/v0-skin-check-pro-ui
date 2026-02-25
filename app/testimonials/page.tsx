import { TestimonialsSection } from "../components/testimonials-section"
import { CompactTestimonials } from "../components/compact-testimonials"
import { SingleTestimonial } from "../components/single-testimonial"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#4A2E1D] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Patient Testimonials</h1>
          <p className="text-white/80">See what our patients are saying about SkinCheck Pro</p>
        </div>
      </div>

      {/* Main Testimonials Section */}
      <TestimonialsSection />

      {/* Example of Single Testimonial Usage */}
      <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
        <h2 className="text-2xl font-bold text-[#4A2E1D] mb-6">Featured Testimonial</h2>
        <div className="max-w-md">
          <SingleTestimonial
            quote="I was nervous about using an online service for something so important, but the doctor was incredibly thorough. They explained everything clearly and even sent follow-up information. I've recommended SkinCheck Pro to everyone I know."
            name="Robert J."
            location="Bristol"
            stars={5}
          />
        </div>
      </div>

      {/* Compact Testimonials Example */}
      <div className="bg-[#FAF6F2]/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#4A2E1D] mb-6">More Patient Stories</h2>
          <div className="max-w-md">
            <CompactTestimonials />
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <a href="/" className="text-[#4A2E1D] font-medium hover:underline">
          Back to Home
        </a>
      </div>
    </main>
  )
}
