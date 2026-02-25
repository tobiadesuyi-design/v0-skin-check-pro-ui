"use client"

import { ArrowLeft, Stethoscope, Calendar, AlertTriangle, FileText, Download, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ReferralPathwayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">What happens if we're concerned?</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Most scans are straightforward — but if our GP spots something worrying, here's what we'll do.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Reassurance Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
              <Stethoscope className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-blue-900 mb-1">Most scans are reassuring</h3>
              <p className="text-sm text-blue-700">
                Over 85% of our scans result in "low concern" findings. We're here to provide peace of mind and catch
                anything that needs attention.
              </p>
            </div>
          </div>
        </div>

        {/* Referral to Dermatologist */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 rounded-full p-2">
                <FileText className="h-4 w-4 text-orange-600" />
              </div>
              <CardTitle className="text-base">Referral to Dermatologist</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              If your mole or lesion looks suspicious, we'll recommend referral to a dermatologist for further
              investigation. This doesn't mean something is definitely wrong — it means we want a specialist to take a
              closer look.
            </p>

            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">What you'll receive:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>A detailed referral letter you can take to your GP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Clear explanation of why referral is recommended</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Information about NHS and private dermatology options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Your original photos for the dermatologist to review</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>NHS referrals typically take 2-4 weeks for appointment</span>
            </div>
          </CardContent>
        </Card>

        {/* Urgent Findings */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 rounded-full p-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-base">Urgent Findings</CardTitle>
                <Badge variant="outline" className="text-xs mt-1 border-red-200 text-red-600">
                  Rare but important
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              In rare cases, we may advise an urgent face-to-face appointment. You'll be clearly informed if this
              applies, with specific guidance on timeframes and next steps.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <h4 className="font-medium text-red-900 mb-2 text-sm">If urgent action is needed:</h4>
              <ul className="space-y-1 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>We'll call you directly within 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Clear instructions on booking urgent GP appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Emergency referral letter for immediate use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Follow-up support to ensure you get seen quickly</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-red-600">
              <Phone className="h-4 w-4" />
              <span>We'll always call for urgent findings — never just email</span>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps Guidance */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-2">
                <Calendar className="h-4 w-4 text-green-600" />
              </div>
              <CardTitle className="text-base">Next Steps Guidance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Your report will include clear next steps, including NHS or private options, so you can act quickly and
              confidently. We'll never leave you wondering what to do next.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-blue-600 mb-1">NHS Route</div>
                <div className="text-xs text-blue-700">Free via your GP</div>
                <div className="text-xs text-blue-600 mt-1">2-4 week wait</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <div className="text-lg font-semibold text-purple-600 mb-1">Private Route</div>
                <div className="text-xs text-purple-700">Direct booking</div>
                <div className="text-xs text-purple-600 mt-1">1-3 days</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">Every referral includes:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Recommended urgency level (routine, urgent, or emergency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>List of suitable dermatologists in your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>What to expect at your dermatology appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Questions to ask your dermatologist</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sample Documents */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Sample Documents</CardTitle>
            <p className="text-sm text-gray-600">See examples of what you'll receive if referral is needed</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-between bg-transparent" size="sm">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Sample Referral Letter</span>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </Button>

            <Button variant="outline" className="w-full justify-between bg-transparent" size="sm">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Example Urgent Report</span>
              </div>
              <span className="text-xs text-gray-500">PDF</span>
            </Button>
          </CardContent>
        </Card>

        {/* Support Contact */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-medium text-blue-900 mb-2">Questions about referrals?</h3>
          <p className="text-sm text-blue-700 mb-3">
            Our clinical team is available to explain any referral recommendations and help you understand your options.
          </p>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            Contact Clinical Team
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Link href="/dashboard" className="block">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Back to Dashboard</Button>
          </Link>

          <Link href="/need-help" className="block">
            <Button variant="outline" className="w-full bg-transparent">
              Need More Help?
            </Button>
          </Link>
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  )
}
