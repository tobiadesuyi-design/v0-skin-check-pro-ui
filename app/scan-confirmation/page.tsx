import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Bell, ArrowRight } from "lucide-react"

export default function ScanConfirmationScreen() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 flex flex-col items-center justify-center sm:px-6">
      <div className="w-full max-w-md mx-auto">
        {/* Success illustration */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-emerald-100 p-6">
            <CheckCircle className="h-16 w-16 text-emerald-600" />
          </div>
        </div>

        {/* Main confirmation message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Scan Submitted Successfully</h1>
          <p className="text-gray-600">Your scan has been submitted. A UK GP will review it within 48 hours.</p>
        </div>

        {/* What happens next card */}
        <Card className="border-gray-100 rounded-2xl shadow-sm mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">What happens next?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-50 p-2 mt-0.5">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-700">Expert Review</h3>
                  <p className="text-sm text-gray-500">
                    A qualified UK GP will carefully examine your submitted images
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-50 p-2 mt-0.5">
                  <Bell className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-700">Results Notification</h3>
                  <p className="text-sm text-gray-500">You'll receive an email when your results are ready to view</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-6 flex-1">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg py-6 flex-1"
          >
            <Link href="/book-follow-up">
              Book Follow-Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Order reference */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Reference #SK-{Math.floor(100000 + Math.random() * 900000)} • {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  )
}
