"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Camera, Shield, Clock, Heart, CheckCircle } from "lucide-react"

export default function LensConfirmationPage() {
  const router = useRouter()

  const handleContinueToPayment = () => {
    router.push("/payment")
  }

  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-background" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">SkinCheck Pro</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title and Description */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">You'll need a lens for this scan</h2>
            <p className="text-muted-foreground leading-relaxed">
              To ensure accuracy, we use a small lens that helps your camera capture detail clearly. It's yours to keep.
            </p>
          </div>

          {/* Lens Illustration */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto">
              <div className="relative">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-orange-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-orange-900">Helps capture clear close-ups</h3>
                    <p className="text-sm text-orange-800">Professional-grade magnification for detailed imaging</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-900">Essential for accurate GP review</h3>
                    <p className="text-sm text-blue-800">Ensures medical-grade image quality for diagnosis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-green-900">Delivered in 1–2 working days</h3>
                    <p className="text-sm text-green-800">Fast shipping to get you started quickly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Continue Button */}
          <Button onClick={handleContinueToPayment} size="full" className="h-14 text-lg group">
            Continue to Payment
          </Button>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
