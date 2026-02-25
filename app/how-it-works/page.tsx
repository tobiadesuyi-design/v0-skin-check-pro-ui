import Link from "next/link"
import Image from "next/image"
import { Camera, Brain, User, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#4A2E1D] mb-3">How It Works</h1>
        <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
          Get your moles checked by UK doctors without leaving home in three simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-md mx-auto space-y-6 mb-12">
        {/* Step 1 */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-[#ECE5DF]/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4A2E1D] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h2 className="text-lg font-semibold text-[#4A2E1D]">Upload Photos</h2>
              </div>
              <Camera className="h-6 w-6 text-[#4A2E1D]" />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Taking+Photos"
                    alt="Taking photos of mole"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#4A2E1D]/80 flex-1">
                  Take 3 clear photos of your mole using our simple guide. Our clip-on lens helps capture detailed
                  images for accurate assessment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-[#ECE5DF]/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4A2E1D] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h2 className="text-lg font-semibold text-[#4A2E1D]">Expert Review</h2>
              </div>
              <div className="flex">
                <Brain className="h-6 w-6 text-[#4A2E1D]" />
                <User className="h-6 w-6 text-[#4A2E1D] -ml-1" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=AI+and+Doctor+Review"
                    alt="AI and doctor reviewing images"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#4A2E1D]/80 flex-1">
                  Your images are analysed by our advanced AI technology, then thoroughly reviewed by a qualified UK GP
                  within 48 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-[#ECE5DF]/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4A2E1D] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h2 className="text-lg font-semibold text-[#4A2E1D]">Get Your Report</h2>
              </div>
              <FileText className="h-6 w-6 text-[#4A2E1D]" />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Report+Results"
                    alt="Viewing report results"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#4A2E1D]/80 flex-1">
                  Receive a detailed report with clear next steps. Whether it's peace of mind or a recommendation for
                  further action, you'll know what to do.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial */}
      <div className="max-w-md mx-auto mb-12">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4A2E1D]/80 italic mb-4">
                "I was worried about a mole on my back for months. SkinCheck Pro made it so easy to get it checked. The
                doctor's report gave me peace of mind without having to wait weeks for an appointment."
              </p>
              <p className="font-medium text-[#4A2E1D]">Sarah, London</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="max-w-md mx-auto text-center">
        <Button
          asChild
          className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 px-8 text-lg flex items-center gap-2"
        >
          <Link href="/payment-screen">
            Start My Skin Check
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <p className="text-sm text-[#4A2E1D]/60 mt-4">Trusted by over 10,000 users across the UK</p>
      </div>
    </main>
  )
}
