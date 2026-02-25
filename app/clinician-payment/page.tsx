"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock, Shield, Clock, User, CreditCard } from "lucide-react"

export default function ClinicianPayment() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2]">
      {/* Header */}
      <div className="mobile-padding py-6 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/scan-your-mole" className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-heading-2 text-foreground font-bold">Clinician Review – £99</h1>
            <p className="text-body-sm text-muted-foreground">
              Have your image reviewed by a GMC-registered UK doctor within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-padding py-8 max-w-lg mx-auto">
        {/* Trust signals */}
        <div className="card-premium p-6 mb-8">
          <h3 className="text-heading-3 text-foreground mb-6">What's included</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-medium text-foreground">GMC-registered UK doctors</p>
                <p className="text-body-sm text-muted-foreground">Qualified medical professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-medium text-foreground">Reviewed within 24 hours</p>
                <p className="text-body-sm text-muted-foreground">Fast, professional assessment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-body font-medium text-foreground">Secure and confidential</p>
                <p className="text-body-sm text-muted-foreground">Your data is protected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment form */}
        <div className="card-premium p-6 mb-8">
          <h3 className="text-heading-3 text-foreground mb-6">Payment Details</h3>

          <form className="space-y-6">
            <div>
              <label className="block text-body-sm font-medium text-foreground mb-2">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-input border border-border rounded-2xl px-4 py-4 focus-soft pr-12"
                />
                <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-input border border-border rounded-2xl px-4 py-4 focus-soft"
                />
              </div>
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">CVC</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-input border border-border rounded-2xl px-4 py-4 focus-soft"
                />
              </div>
            </div>

            <div>
              <label className="block text-body-sm font-medium text-foreground mb-2">Cardholder Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full bg-input border border-border rounded-2xl px-4 py-4 focus-soft"
              />
            </div>
          </form>
        </div>

        {/* Security notice */}
        <div className="bg-secondary rounded-2xl p-4 mb-8 flex items-center gap-3">
          <Lock className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-body-sm text-muted-foreground">
            Your payment is secured with 256-bit encryption. Powered by Stripe.
          </p>
        </div>

        {/* Payment button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="btn-primary mobile-full-width flex items-center justify-center gap-3 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Lock className="h-5 w-5" />
          {isProcessing ? "Processing..." : "Pay £99 Securely"}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
          By completing this payment, you agree to our{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
