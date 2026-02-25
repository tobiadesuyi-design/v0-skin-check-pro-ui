"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [step, setStep] = useState<"email" | "code">("email")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate sending code
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setStep("code")
  }

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code) return

    setIsLoading(true)
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push("/dashboard")
  }

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

      {/* Main Content */}
      <main className="px-6 max-w-md mx-auto fade-in">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-medium text-[#1a1a1a] mb-4">
            {step === "email" ? "Welcome back" : "Enter your code"}
          </h1>
          <p className="text-lg text-[#4a4a4a]">
            {step === "email" ? "Enter your email to access your account" : `We've sent a 6-digit code to ${email}`}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-center">{step === "email" ? "Log in" : "Verify code"}</CardTitle>
          </CardHeader>
          <CardContent>
            {step === "email" ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isLoading || !email}>
                  {isLoading ? "Sending code..." : "Send login code"}
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="code">6-digit code</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isLoading || code.length !== 6}>
                  {isLoading ? "Verifying..." : "Log in"}
                </Button>
                <Button type="button" variant="ghost" className="w-full" onClick={() => setStep("email")}>
                  Use different email
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Sign up link */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#8a8a8a] mb-2">Don't have an account?</p>
          <Link href="/get-started" className="text-[#1a1a1a] underline">
            Get started with your first check
          </Link>
        </div>
      </main>
    </div>
  )
}
