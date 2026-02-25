"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Shield, FileText, Users, Heart, ArrowRight, ArrowLeft } from "lucide-react"

export default function ConsentPage() {
  const router = useRouter()
  const [consents, setConsents] = useState({
    dataProcessing: false,
    medicalReview: false,
    communications: false,
  })

  const handleConsentChange = (key: keyof typeof consents, checked: boolean) => {
    setConsents((prev) => ({ ...prev, [key]: checked }))
  }

  const canContinue = consents.dataProcessing && consents.medicalReview

  const handleContinue = () => {
    if (canContinue) {
      // Save consent to localStorage for demo
      localStorage.setItem("user_consent", JSON.stringify({ ...consents, timestamp: new Date().toISOString() }))
      router.push("/onboarding")
    }
  }

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">SkinCheck Pro</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold text-foreground">Before we begin</h1>
            <p className="text-muted-foreground leading-relaxed">
              Please review and agree to the following to continue with your SkinCheck Pro assessment.
            </p>
          </div>

          {/* Consent Items */}
          <div className="space-y-4">
            {/* Data Processing Consent */}
            <Card className="bg-white border-skin-beige">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Data Processing & Privacy</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I consent to SkinCheck Pro processing my personal data and photos for medical review purposes.
                        Your data is encrypted, secure, and only viewed by qualified medical professionals.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="dataProcessing"
                        checked={consents.dataProcessing}
                        onCheckedChange={(checked) => handleConsentChange("dataProcessing", checked as boolean)}
                      />
                      <label htmlFor="dataProcessing" className="text-sm font-medium text-foreground cursor-pointer">
                        I agree to data processing <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Review Consent */}
            <Card className="bg-white border-skin-beige">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Medical Review</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I understand that this service provides educational information and clinical opinions from
                        qualified GPs, but does not replace in-person medical consultations or emergency care.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="medicalReview"
                        checked={consents.medicalReview}
                        onCheckedChange={(checked) => handleConsentChange("medicalReview", checked as boolean)}
                      />
                      <label htmlFor="medicalReview" className="text-sm font-medium text-foreground cursor-pointer">
                        I understand the service limitations <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communications Consent */}
            <Card className="bg-white border-skin-beige">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Communications</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Receive email notifications about your report status, follow-up reminders, and important health
                        information. You can unsubscribe at any time.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="communications"
                        checked={consents.communications}
                        onCheckedChange={(checked) => handleConsentChange("communications", checked as boolean)}
                      />
                      <label htmlFor="communications" className="text-sm font-medium text-foreground cursor-pointer">
                        I agree to receive communications (optional)
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legal Links */}
          <Card className="bg-skin-cream border-skin-beige">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  By continuing, you also agree to our{" "}
                  <button
                    onClick={() => router.push("/terms-privacy")}
                    className="text-skin-deep underline hover:text-foreground"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    onClick={() => router.push("/terms-privacy")}
                    className="text-skin-deep underline hover:text-foreground"
                  >
                    Privacy Policy
                  </button>
                  .
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!canContinue}
            size="full"
            className={`h-14 text-lg group ${
              canContinue ? "hover:scale-[1.02]" : "opacity-50 cursor-not-allowed"
            } transition-all duration-300`}
          >
            Continue to Assessment
            {canContinue && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
          </Button>

          {canContinue && (
            <p className="text-center text-sm text-muted-foreground">Required consents completed • Ready to proceed</p>
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
