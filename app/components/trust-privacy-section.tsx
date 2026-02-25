import Image from "next/image"
import { UserCheck, Shield, EyeOff, Clock, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TrustPrivacySection() {
  return (
    <section className="py-12 px-6 bg-[#FAF6F2]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4A2E1D] mb-3">Your Trust & Privacy Matter</h2>
          <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
            We take the security and confidentiality of your health information seriously.
          </p>
        </div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* UK GP Reviewed */}
          <Card className="border-[#ECE5DF] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                <UserCheck className="h-7 w-7 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">UK GP Reviewed</h3>
              <p className="text-[#4A2E1D]/70 text-sm">
                All mole checks are reviewed by GMC-registered UK general practitioners.
              </p>
            </CardContent>
          </Card>

          {/* Secure Image Upload */}
          <Card className="border-[#ECE5DF] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Secure Image Upload</h3>
              <p className="text-[#4A2E1D]/70 text-sm">
                Your photos are encrypted and transmitted using bank-level security protocols.
              </p>
            </CardContent>
          </Card>

          {/* Private and Confidential */}
          <Card className="border-[#ECE5DF] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                <EyeOff className="h-7 w-7 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Private & Confidential</h3>
              <p className="text-[#4A2E1D]/70 text-sm">
                Your data is never shared with third parties and is deleted after review if requested.
              </p>
            </CardContent>
          </Card>

          {/* No NHS Waiting Times */}
          <Card className="border-[#ECE5DF] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-[#4A2E1D]" />
              </div>
              <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">No NHS Waiting Times</h3>
              <p className="text-[#4A2E1D]/70 text-sm">
                Get your results within 48 hours, not weeks or months of anxious waiting.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial and trust indicators */}
        <div className="bg-white rounded-2xl border border-[#ECE5DF] p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Testimonial */}
          <div className="flex-1">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-[#4A2E1D]/80 italic mb-4">
              "I was worried about a mole for months but couldn't get a GP appointment. SkinCheck Pro gave me an answer
              within 48 hours, and the peace of mind was worth every penny."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ECE5DF] overflow-hidden relative">
                <Image src="/placeholder.svg?height=40&width=40&text=JD" alt="Jane D." fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-[#4A2E1D]">Jane D.</p>
                <p className="text-[#4A2E1D]/70 text-sm">London</p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="bg-[#ECE5DF]/30 rounded-xl p-4 flex flex-col items-center text-center">
              <p className="text-[#4A2E1D] font-bold text-3xl mb-1">98%</p>
              <p className="text-[#4A2E1D]/70 text-sm">User satisfaction</p>
            </div>
            <div className="bg-[#ECE5DF]/30 rounded-xl p-4 flex flex-col items-center text-center">
              <p className="text-[#4A2E1D] font-bold text-3xl mb-1">10k+</p>
              <p className="text-[#4A2E1D]/70 text-sm">Moles checked</p>
            </div>
          </div>
        </div>

        {/* Additional trust information */}
        <div className="mt-8 text-center">
          <p className="text-[#4A2E1D]/70 text-sm">
            SkinCheck Pro is registered with the Information Commissioner's Office (ICO) and complies with all UK data
            protection regulations.
          </p>
        </div>
      </div>
    </section>
  )
}
