"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Shield, Clock, Users, CheckCircle, ArrowRight, Heart } from "lucide-react"

export default function HomePage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGetStarted = () => {
    router.push("/consent")
  }

  const handleSignIn = () => {
    router.push("/login")
  }

  const handleHowItWorks = () => {
    router.push("/how-it-works")
  }

  const handleViewPricing = () => {
    router.push("/pricing")
  }

  return (
    <div className={`min-h-screen bg-skin-pearl pb-20 md:pb-0 ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-skin-beige sticky top-0 z-50">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-background" />
            </div>
            <span className="text-xl font-semibold text-foreground">SkinCheck Pro</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleSignIn} className="text-sm">
            Sign In
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-skin-blush rounded-3xl mx-auto flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-background" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-foreground leading-tight">Your skin deserves expert care</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get professional mole analysis from board-certified dermatologists. Trusted by thousands, results in
                24-48 hours.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-skin-cream rounded-2xl mx-auto flex items-center justify-center">
                <Shield className="w-6 h-6 text-skin-deep" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Secure & Private</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-skin-cream rounded-2xl mx-auto flex items-center justify-center">
                <Clock className="w-6 h-6 text-skin-deep" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">24-48 Hours</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-skin-cream rounded-2xl mx-auto flex items-center justify-center">
                <Users className="w-6 h-6 text-skin-deep" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Expert Doctors</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <Button size="full" onClick={handleGetStarted} className="group h-14 text-lg font-semibold">
              Check Your Mole
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-sm text-muted-foreground">Takes 5 minutes • Results in 24-48 hours</p>
          </div>

          {/* What's Included */}
          <Card className="bg-skin-cream border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">What's included:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Board-certified dermatologist review</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Detailed written report</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">GP referral if needed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Follow-up support</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "The peace of mind was worth every penny. The dermatologist caught something I would have missed."
              </p>
              <p className="text-xs font-medium text-foreground">— Sarah M.</p>
            </CardContent>
          </Card>

          {/* Secondary Actions */}
          <div className="space-y-3 pt-4">
            <Button variant="ghost" size="full" className="text-muted-foreground h-12" onClick={handleHowItWorks}>
              How it works
            </Button>
            <Button variant="ghost" size="full" className="text-muted-foreground h-12" onClick={handleViewPricing}>
              View pricing
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-skin-beige mt-12">
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This service is not intended for emergency situations. If you have concerns about a rapidly changing mole,
            please contact your GP or emergency services immediately.
          </p>
          <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
            <button onClick={() => router.push("/terms-privacy")}>Privacy</button>
            <button onClick={() => router.push("/terms-privacy")}>Terms</button>
            <button onClick={() => router.push("/support-faq")}>Support</button>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 SkinCheck Pro. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
