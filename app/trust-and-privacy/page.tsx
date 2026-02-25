import Link from "next/link"
import { ArrowLeft, Shield, Lock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrustPrivacySection } from "../components/trust-privacy-section"

export default function TrustAndPrivacyPage() {
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
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Trust & Privacy</h1>
      </div>

      {/* Main trust section */}
      <TrustPrivacySection />

      {/* Additional information */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#4A2E1D] mb-8 text-center">How We Protect Your Data</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Data Protection</h3>
                <p className="text-[#4A2E1D]/70">
                  We comply with GDPR and the UK Data Protection Act 2018. Your data is stored securely and only
                  accessed by authorised medical professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Secure Technology</h3>
                <p className="text-[#4A2E1D]/70">
                  We use end-to-end encryption for all data transmission and storage. Our systems are regularly audited
                  for security compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#ECE5DF] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#4A2E1D]" />
                </div>
                <h3 className="font-semibold text-[#4A2E1D] text-lg mb-2">Privacy Policy</h3>
                <p className="text-[#4A2E1D]/70">
                  Our comprehensive privacy policy outlines exactly how your data is used and protected. We never sell
                  your information to third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-[#4A2E1D]/80 mb-6">
              For more information about how we handle your data, please read our full privacy policy or contact our
              data protection officer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full"
              >
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full"
              >
                <Link href="/terms">Terms of Service</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
