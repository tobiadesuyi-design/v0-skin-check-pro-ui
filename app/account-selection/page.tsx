"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Building2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AccountSelectionScreen() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8">
      <div className="max-w-md mx-auto">
        {/* Optional logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center">
            <span className="text-[#4A2E1D] font-bold text-lg">SC</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Doctor with clipboard"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#4A2E1D] mb-6 text-center">What type of user are you?</h1>

        {/* Account type selection */}
        <div className="space-y-4 mb-8">
          <Card
            className={`border-2 cursor-pointer rounded-2xl shadow-sm transition-all ${
              selectedType === "home"
                ? "border-[#4A2E1D] bg-[#ECE5DF]/30"
                : "border-[#ECE5DF] bg-white hover:border-[#4A2E1D]/50"
            }`}
            onClick={() => setSelectedType("home")}
          >
            <div className="p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#4A2E1D]">I'm a home user</h2>
                <p className="text-sm text-[#4A2E1D]/70">For personal skin checks and monitoring</p>
              </div>
              {selectedType === "home" && (
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D] flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          </Card>

          <Card
            className={`border-2 cursor-pointer rounded-2xl shadow-sm transition-all ${
              selectedType === "clinic"
                ? "border-[#4A2E1D] bg-[#ECE5DF]/30"
                : "border-[#ECE5DF] bg-white hover:border-[#4A2E1D]/50"
            }`}
            onClick={() => setSelectedType("clinic")}
          >
            <div className="p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                <Building2 className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#4A2E1D]">I'm a clinic or professional</h2>
                <p className="text-sm text-[#4A2E1D]/70">For healthcare providers and practices</p>
              </div>
              {selectedType === "clinic" && (
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D] flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Terms acceptance */}
        <p className="text-sm text-[#4A2E1D]/80 text-center mb-6">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline font-medium">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>

        {/* CTA Button */}
        <Button
          asChild={!!selectedType}
          disabled={!selectedType}
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg disabled:opacity-50"
        >
          {selectedType ? <Link href={`/signup?type=${selectedType}`}>Continue</Link> : <span>Continue</span>}
        </Button>
      </div>
    </main>
  )
}
