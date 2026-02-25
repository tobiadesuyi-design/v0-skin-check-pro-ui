"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, User, Users } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1 text-center">
          <div className="text-lg font-medium text-[#1a1a1a]">SkinCheck Pro</div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "10%" }}></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 max-w-md mx-auto fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-[#1a1a1a] mb-4">Who is this mole check for?</h1>
          <p className="text-lg text-[#4a4a4a]">Choose the option that applies to you.</p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          <Link href="/questionnaire?for=me">
            <Card className="cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-[#faf7f4] rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-1">For me</h3>
                  <p className="text-[#4a4a4a]">I want to check my own mole</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/questionnaire?for=someone-else">
            <Card className="cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-[#faf7f4] rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-1">Someone else</h3>
                  <p className="text-[#4a4a4a]">Family member or friend</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-sm text-[#8a8a8a]">All assessments are reviewed by GMC-registered GPs</p>
        </div>
      </main>
    </div>
  )
}
