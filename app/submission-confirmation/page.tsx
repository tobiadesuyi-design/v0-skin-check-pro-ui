"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Copy, Clock, FileText, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubmissionConfirmationPage() {
  const [referenceNumber] = useState("SC" + Date.now().toString().slice(-8))
  const [copied, setCopied] = useState(false)
  const [contactDetails, setContactDetails] = useState<any>(null)

  useEffect(() => {
    // Get contact details from localStorage for demo
    const stored = localStorage.getItem("contactDetails")
    if (stored) {
      setContactDetails(JSON.parse(stored))
    }
  }, [])

  const copyReferenceNumber = () => {
    navigator.clipboard.writeText(referenceNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-[#4A2E1D] text-center">
          Photos submitted. We'll take it from here.
        </h1>
      </div>

      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Success Message */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-800 mb-2">Submission Successful!</h2>
            <p className="text-green-700 leading-relaxed">
              Your SkinCheck Pro scan has been received by our GP team. You'll get your report within 24–48 hours.
            </p>
          </CardContent>
        </Card>

        {/* Reference Number */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#4A2E1D] text-center">Your Reference Number</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-[#fdf4f2] border border-[#ECE5DF] rounded-xl p-4 mb-4">
              <p className="text-2xl font-mono font-bold text-[#4A2E1D] mb-2">{referenceNumber}</p>
              <Button
                onClick={copyReferenceNumber}
                variant="outline"
                size="sm"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#fdf4f2] bg-transparent"
              >
                <Copy className="h-4 w-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <p className="text-sm text-[#4A2E1D]/70">
              Keep this number for your records. You can use it to track your submission.
            </p>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#4A2E1D]">What happens next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A2E1D]">Photos received</h3>
                <p className="text-sm text-[#4A2E1D]/70">Your submission is now in our system</p>
                <p className="text-xs text-green-600 font-medium">Complete</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#a68c7b] rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A2E1D]">GP review in progress</h3>
                <p className="text-sm text-[#4A2E1D]/70">A qualified GP is reviewing your photos</p>
                <p className="text-xs text-[#a68c7b] font-medium">In progress</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#ECE5DF] rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-[#4A2E1D]/50" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A2E1D]/70">Report delivery</h3>
                <p className="text-sm text-[#4A2E1D]/70">You'll receive your report via email</p>
                <p className="text-xs text-[#4A2E1D]/50 font-medium">Within 24-48 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Details */}
        {contactDetails && (
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#4A2E1D]">Submission Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#a68c7b]" />
                <div>
                  <p className="text-sm text-[#4A2E1D]/70">Report will be sent to:</p>
                  <p className="font-medium text-[#4A2E1D]">{contactDetails.email}</p>
                </div>
              </div>

              {contactDetails.mobile && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#a68c7b]" />
                  <div>
                    <p className="text-sm text-[#4A2E1D]/70">Contact number:</p>
                    <p className="font-medium text-[#4A2E1D]">{contactDetails.mobile}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#a68c7b]" />
                <div>
                  <p className="text-sm text-[#4A2E1D]/70">Submitted:</p>
                  <p className="font-medium text-[#4A2E1D]">
                    {new Date().toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Additional Information */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm bg-[#e1cfc2]/20">
          <CardContent className="p-6 space-y-4">
            <p className="text-[#4A2E1D] leading-relaxed">We may contact you by email if we need more information.</p>

            <div className="border-t border-[#ECE5DF] pt-4">
              <h3 className="font-semibold text-[#4A2E1D] mb-2">Important to remember:</h3>
              <ul className="space-y-2 text-sm text-[#4A2E1D]/80">
                <li>• This service provides clinical opinions, not medical diagnoses</li>
                <li>• If you have urgent concerns, contact your GP immediately</li>
                <li>• Keep monitoring your mole for any changes</li>
                <li>• Your report will include next steps and recommendations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <Link href="/my-reports" className="block">
          <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full h-12 text-base font-medium">
            Go to My Reports
          </Button>
        </Link>

        {/* Support */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-[#4A2E1D]/70 mb-3">Need help or have questions about your submission?</p>
            <Link href="/support">
              <Button
                variant="outline"
                className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#fdf4f2] rounded-full bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
