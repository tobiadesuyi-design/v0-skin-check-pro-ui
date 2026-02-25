"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Mail, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="text-center">
          <div className="text-lg font-medium text-[#1a1a1a]">SkinCheck Pro</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 max-w-md mx-auto text-center fade-in">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="text-3xl font-medium text-[#1a1a1a] mb-4">We've received your photos</h1>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            A GMC-registered GP will review them shortly and provide your assessment.
          </p>
        </div>

        {/* Status Cards */}
        <div className="space-y-4 mb-8">
          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="w-12 h-12 bg-[#faf7f4] rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#d4a574]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-[#1a1a1a] mb-1">Assessment in progress</h3>
                <p className="text-sm text-[#4a4a4a]">Expected completion within 24 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="w-12 h-12 bg-[#faf7f4] rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#d4a574]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-[#1a1a1a] mb-1">Email notification</h3>
                <p className="text-sm text-[#4a4a4a]">We'll email you when your report is ready</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="space-y-4 mb-8">
          <Link href="/dashboard">
            <Button size="lg" className="w-full">
              View dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/">
            <Button variant="outline" size="lg" className="w-full bg-transparent">
              Back to home
            </Button>
          </Link>
        </div>

        {/* Help */}
        <div className="text-center">
          <p className="text-sm text-[#8a8a8a] mb-4">Questions about your submission?</p>
          <Link href="/support" className="text-[#1a1a1a] underline text-sm">
            Contact our support team
          </Link>
        </div>
      </main>
    </div>
  )
}
