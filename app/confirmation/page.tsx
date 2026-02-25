"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, Smartphone, ArrowRight, Copy, Check, Heart } from "lucide-react"

export default function ConfirmationPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Get reference number from submission
    const submission = JSON.parse(localStorage.getItem("skincheck_submission") || "{}")
    setReferenceNumber(submission.referenceNumber || `SC${Date.now().toString().slice(-6)}`)
  }, [])

  const handleCopyReference = async () => {
    try {
      await navigator.clipboard.writeText(referenceNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleGoToDashboard = () => {
    router.push("/dashboard")
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 to-skin-pearl ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-foreground leading-tight">
              Thank you for trusting us with your care
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your SkinCheck Pro submission has been received and will be reviewed by our expert dermatologists.
            </p>
          </div>

          {/* Reference Number */}
          <Card className="bg-white border-green-200">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-800">Reference Number</h3>
              </div>
              <div className="text-3xl font-bold text-foreground font-mono">{referenceNumber}</div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyReference}
                className="flex items-center space-x-2 bg-transparent border-green-300 text-green-700 hover:bg-green-50"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Reference"}</span>
              </Button>
              <p className="text-sm text-muted-foreground">Save this number to track your submission</p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">What happens next?</h2>

            <div className="space-y-4">
              <Card className="bg-white border-skin-beige text-left">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Expert Review</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Your submission is now being reviewed by our board-certified dermatologists.
                      </p>
                      <div className="text-sm text-blue-600 font-medium">Within 24-48 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-skin-beige text-left">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Results Ready</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You'll receive an email notification when your detailed report is ready.
                      </p>
                      <div className="text-sm text-green-600 font-medium">Email + Dashboard</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-skin-beige text-left">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Access Report</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        View your comprehensive analysis and recommendations in your secure dashboard.
                      </p>
                      <div className="text-sm text-purple-600 font-medium">Secure & Private</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Information */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-yellow-800">Important Reminders</h3>
              <ul className="text-left space-y-2 text-yellow-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    This service provides educational information and does not replace professional medical advice
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    If you have urgent concerns, please contact your healthcare provider immediately
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Results will be available in your secure dashboard within 24-48 hours
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6">
            <Button
              size="full"
              onClick={handleGoToDashboard}
              className="group h-14 text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Go to Dashboard
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="full"
              onClick={() => router.push("/")}
              className="h-12 text-muted-foreground hover:text-foreground"
            >
              Return Home
            </Button>
          </div>

          {/* Contact Information */}
          <div className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Questions about your submission? Contact us at{" "}
              <a href="mailto:support@skincheckpro.com" className="text-skin-deep hover:underline">
                support@skincheckpro.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
