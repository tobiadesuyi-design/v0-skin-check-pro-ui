"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { CreditCard, Shield, Heart, Camera, User, FileText, Lock, CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card")
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardholderName: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Save payment completion to localStorage for demo
    localStorage.setItem("payment_completed", "true")
    localStorage.setItem("order_date", new Date().toISOString())

    setIsProcessing(false)
    router.push("/lens-dispatched")
  }

  const isFormValid =
    formData.email && formData.cardNumber && formData.expiryDate && formData.cvc && formData.cardholderName

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
          {/* Title */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Secure Your SkinCheck Pro Kit</h2>
            <p className="text-muted-foreground leading-relaxed">
              This one-time £99 payment includes your lens, scan review by a UK GP, and a report in 24–48 hours.
            </p>
          </div>

          {/* What's Included */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">What's included</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">Precision Lens — included</h4>
                    <p className="text-xs text-muted-foreground">Professional-grade lens for detailed imaging</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">Photo review by UK GP — included</h4>
                    <p className="text-xs text-muted-foreground">Expert medical assessment by qualified doctors</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">Personalised skin report — included</h4>
                    <p className="text-xs text-muted-foreground">Detailed analysis and recommendations</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Payment method</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("card")}
                  className="h-12 justify-start"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Card
                </Button>
                <Button
                  variant={paymentMethod === "paypal" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("paypal")}
                  className="h-12 justify-start bg-transparent"
                >
                  PayPal
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          {paymentMethod === "card" && (
            <Card className="bg-white border-skin-beige">
              <CardContent className="p-6 space-y-6">
                <h3 className="font-semibold text-foreground">Card details</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        value={formData.cvc}
                        onChange={(e) => handleInputChange("cvc", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder name</Label>
                    <Input
                      id="cardholderName"
                      placeholder="John Smith"
                      value={formData.cardholderName}
                      onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Security Notice */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div className="text-sm">
                  <span className="text-green-800 font-medium">SSL Secured</span>
                  <span className="text-green-700 ml-2">Your payment is protected with bank-level security</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Button */}
          <Button onClick={handlePayment} disabled={!isFormValid || isProcessing} size="full" className="h-14 text-lg">
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Processing...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5 mr-3" />
                Pay £99
              </>
            )}
          </Button>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>24-48h Results</span>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-blue-900">30-day money-back guarantee</h4>
                <p className="text-sm text-blue-800">
                  Not satisfied with your report? Get a full refund within 30 days.
                </p>
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
