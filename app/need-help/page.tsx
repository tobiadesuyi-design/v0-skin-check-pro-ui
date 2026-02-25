import Link from "next/link"
import { ArrowLeft, Video, Camera, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NeedHelpPage() {
  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/my-reports" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back to reports</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Need Help?</h1>
      </div>

      <div className="px-6 py-6">
        {/* Introduction */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#4A2E1D] mb-3">Need help with your report?</h2>
          <p className="text-[#4A2E1D]/80 leading-relaxed">
            If you're unsure what your report means or what to do next, we're here to help. Choose the option that best
            fits your needs.
          </p>
        </div>

        {/* Help Options */}
        <div className="space-y-4 mb-8">
          {/* Speak to a GP */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4A2E1D]/10 rounded-full flex items-center justify-center">
                  <Video className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#4A2E1D] mb-2">Speak to a GP</h3>
                  <p className="text-[#4A2E1D]/80 mb-4 leading-relaxed">
                    Book a 15-minute video consultation with a GP from our skin clinic. They can explain your report in
                    detail and answer any questions you have.
                  </p>
                  <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-3" asChild>
                    <Link href="/book-consultation">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rescan Your Mole */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4A2E1D]/10 rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#4A2E1D] mb-2">Rescan Your Mole</h3>
                  <p className="text-[#4A2E1D]/80 mb-4 leading-relaxed">
                    Think the photo wasn't clear enough? You can upload new photos of the same mole for a fresh
                    assessment with better image quality.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
                    asChild
                  >
                    <Link href="/rescan-mole">Rescan Now</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* General Questions */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4A2E1D]/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#4A2E1D] mb-2">General Questions</h3>
                  <p className="text-[#4A2E1D]/80 mb-4 leading-relaxed">
                    Check our comprehensive FAQ section or get in touch with our support team for any other questions
                    about the service.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
                    asChild
                  >
                    <Link href="/faq">Visit Help Centre</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick FAQ Section */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4">Quick Answers</h3>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="border border-[#ECE5DF]/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
                  <span className="text-left font-medium text-[#4A2E1D]">What does "low concern" mean?</span>
                  <ChevronDown className="h-4 w-4 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1 text-[#4A2E1D]/80">
                  "Low concern" means our GP has reviewed your photos and found no obvious signs that require immediate
                  medical attention. However, it's important to continue monitoring your mole for any changes and follow
                  the recommended check schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-[#ECE5DF]/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
                  <span className="text-left font-medium text-[#4A2E1D]">
                    Should I see my GP if the report says "monitor closely"?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1 text-[#4A2E1D]/80">
                  "Monitor closely" means you should keep a careful eye on the mole and check it regularly for changes.
                  While not urgent, consider booking a routine GP appointment if you notice any changes or if you're
                  concerned. We'll also remind you when it's time for your next check.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-[#ECE5DF]/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
                  <span className="text-left font-medium text-[#4A2E1D]">Can I get a second opinion on my report?</span>
                  <ChevronDown className="h-4 w-4 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1 text-[#4A2E1D]/80">
                  Absolutely. You can book a video consultation with one of our GPs to discuss your report in detail, or
                  you can take your report to your regular GP for an in-person second opinion. We're happy to provide a
                  summary letter for your GP.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reassurance Message */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-6 border border-[#ECE5DF] shadow-sm">
            <p className="text-[#4A2E1D]/80 leading-relaxed">
              <strong className="text-[#4A2E1D]">Remember:</strong> Our reports are designed to give you peace of mind
              and help you make informed decisions about your skin health. If you're ever unsure, it's always okay to
              seek additional medical advice.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
