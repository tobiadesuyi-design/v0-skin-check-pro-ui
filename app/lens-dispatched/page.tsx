"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Package, CheckCircle, Heart, Camera, Mail, Clock, Truck } from "lucide-react"

export default function LensDispatchedPage() {
  const router = useRouter()

  const handleStartScan = () => {
    router.push("/photo-upload")
  }

  const handleGoToDashboard = () => {
    router.push("/dashboard")
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
          {/* Success Animation */}
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto animate-pulse">
                <Package className="w-12 h-12 text-orange-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Your lens is on the way</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Thanks for completing your SkinCheck Pro order.</p>
                <p>Your lens will arrive in 1–2 working days.</p>
                <p>Once it arrives, return here to upload your mole photos.</p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground text-sm">Lens delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Your SkinCheck Pro lens will arrive within 1–2 working days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground text-sm">Take your photos</h4>
                    <p className="text-sm text-muted-foreground">
                      Use the lens to capture clear, detailed photos of your mole
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground text-sm">Get your report</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive your professional analysis within 24–48 hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button onClick={handleStartScan} size="full" className="h-14 text-lg group">
              <Camera className="w-5 h-5 mr-3" />
              Start Scan (when lens arrives)
            </Button>

            <Button onClick={handleGoToDashboard} variant="outline" size="full" className="h-12 bg-transparent">
              Go to My Dashboard
            </Button>
          </div>

          {/* Email Reminder */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-900">Check your email</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    We've sent you a confirmation email with a link back to this page. Bookmark this page or save the
                    email to easily return when your lens arrives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
