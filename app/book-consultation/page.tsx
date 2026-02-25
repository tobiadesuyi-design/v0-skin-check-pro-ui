import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Video, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/need-help" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Book GP Consultation</h1>
      </div>

      <div className="px-6 py-6">
        {/* Introduction */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#4A2E1D] mb-3">Speak with a Skin Specialist GP</h2>
          <p className="text-[#4A2E1D]/80 leading-relaxed">
            Get personalized advice about your mole check report from a qualified GP with dermatology expertise.
          </p>
        </div>

        {/* Consultation Details */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4">What's Included</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#4A2E1D]">15-minute video consultation</p>
                  <p className="text-[#4A2E1D]/70 text-sm">Dedicated time to discuss your report and concerns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Video className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#4A2E1D]">Secure video call</p>
                  <p className="text-[#4A2E1D]/70 text-sm">Private, encrypted consultation from your device</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-[#4A2E1D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#4A2E1D]">GMC-registered GP</p>
                  <p className="text-[#4A2E1D]/70 text-sm">Qualified doctor with skin health expertise</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <span className="text-3xl font-bold text-[#4A2E1D]">£29</span>
              <span className="text-[#4A2E1D]/70 ml-2">per consultation</span>
            </div>
            <p className="text-[#4A2E1D]/80 text-sm">Same-day appointments available • No subscription required</p>
          </CardContent>
        </Card>

        {/* Available Times */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Available Today
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
              >
                2:30 PM
              </Button>
              <Button
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
              >
                4:15 PM
              </Button>
              <Button
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
              >
                5:45 PM
              </Button>
              <Button
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
              >
                7:00 PM
              </Button>
            </div>
            <Button variant="ghost" className="w-full mt-4 text-[#4A2E1D] hover:bg-[#4A2E1D]/10">
              View more times
            </Button>
          </CardContent>
        </Card>

        {/* Book Now Button */}
        <Button
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-4 text-lg font-semibold"
          asChild
        >
          <Link href="/consultation-booking">Book Your Consultation</Link>
        </Button>

        {/* Support Note */}
        <div className="mt-6 text-center">
          <p className="text-[#4A2E1D]/70 text-sm">
            Need help booking?{" "}
            <Link href="/support" className="text-[#4A2E1D] font-medium underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
