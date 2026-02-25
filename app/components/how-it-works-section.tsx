import Link from "next/link"
import Image from "next/image"
import { Camera, Brain, User, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksSection() {
  return (
    <section className="py-12 px-6 bg-[#FAF6F2]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4A2E1D] mb-3">How It Works</h2>
          <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
            Get your moles checked by UK doctors without leaving home in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Step 1 */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-[#ECE5DF]/30 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4A2E1D] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A2E1D]">Upload Photos</h3>
                </div>
                <Camera className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                    <Image
                      src="/placeholder.svg?height=96&width=96&text=Taking+Photos"
                      alt="Taking photos of mole"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#4A2E1D]/80 text-center">
                    Take 3 clear photos of your mole using our simple guide and clip-on lens.
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
                  <h3 className="text-lg font-semibold text-[#4A2E1D]">Expert Review</h3>
                </div>
                <div className="flex">
                  <Brain className="h-6 w-6 text-[#4A2E1D]" />
                  <User className="h-6 w-6 text-[#4A2E1D] -ml-1" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                    <Image
                      src="/placeholder.svg?height=96&width=96&text=AI+and+Doctor+Review"
                      alt="AI and doctor reviewing images"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#4A2E1D]/80 text-center">
                    Images analysed by AI, then reviewed by a qualified UK GP within 48 hours.
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
                  <h3 className="text-lg font-semibold text-[#4A2E1D]">Get Your Report</h3>
                </div>
                <FileText className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-[#ECE5DF]/30">
                    <Image
                      src="/placeholder.svg?height=96&width=96&text=Report+Results"
                      alt="Viewing report results"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#4A2E1D]/80 text-center">
                    Receive a detailed report with clear next steps and recommendations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
  )
}
