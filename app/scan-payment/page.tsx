"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { creditService } from "../services/credit-service"

export default function ScanPaymentScreen() {
  const router = useRouter()
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = () => {
    if (!selectedPayment) return

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Add a credit after successful payment
      creditService.addCredit()

      // Redirect back to scan upload page
      router.push("/scan-your-mole")

      setIsProcessing(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Purchase a Scan</h1>
      </div>

      <div className="max-w-md mx-auto">
        {/* Service summary */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">SkinCheck Pro Scan</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <div>
                  <p className="text-[#4A2E1D]">Expert review by UK GP</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <div>
                  <p className="text-[#4A2E1D]">Results within 48 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <div>
                  <p className="text-[#4A2E1D]">Detailed assessment report</p>
                </div>
              </div>
            </div>

            <Separator className="my-4 bg-[#ECE5DF]" />

            <div className="flex justify-between items-center">
              <p className="text-[#4A2E1D]">1 Mole Check</p>
              <p className="font-bold text-[#4A2E1D]">£99</p>
            </div>
            <p className="text-sm text-[#4A2E1D]/70 mt-1">One-time payment</p>
          </CardContent>
        </Card>

        {/* Payment options */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Payment Method</h2>

            {/* Credit/Debit Card */}
            <button
              onClick={() => setSelectedPayment("card")}
              disabled={isProcessing}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 mb-3 transition-colors ${
                selectedPayment === "card"
                  ? "border-[#4A2E1D] bg-[#ECE5DF]/30"
                  : "border-[#ECE5DF] hover:border-[#4A2E1D]/50"
              } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#4A2E1D]" />
                <span className="font-medium text-[#4A2E1D]">Credit / Debit Card</span>
              </div>
              {selectedPayment === "card" && (
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D] flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </button>

            {/* Apple Pay */}
            <button
              onClick={() => setSelectedPayment("apple")}
              disabled={isProcessing}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 mb-3 transition-colors ${
                selectedPayment === "apple"
                  ? "border-[#4A2E1D] bg-[#ECE5DF]/30"
                  : "border-[#ECE5DF] hover:border-[#4A2E1D]/50"
              } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=Apple"
                    alt="Apple Pay"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-[#4A2E1D]">Apple Pay</span>
              </div>
              {selectedPayment === "apple" && (
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D] flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </button>

            {/* PayPal */}
            <button
              onClick={() => setSelectedPayment("paypal")}
              disabled={isProcessing}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${
                selectedPayment === "paypal"
                  ? "border-[#4A2E1D] bg-[#ECE5DF]/30"
                  : "border-[#ECE5DF] hover:border-[#4A2E1D]/50"
              } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=PayPal"
                    alt="PayPal"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-[#4A2E1D]">PayPal</span>
              </div>
              {selectedPayment === "paypal" && (
                <div className="w-6 h-6 rounded-full bg-[#4A2E1D] flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </button>
          </CardContent>
        </Card>

        {/* Pay button */}
        <Button
          onClick={handlePayment}
          disabled={!selectedPayment || isProcessing}
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg disabled:opacity-50 mb-4"
        >
          {isProcessing ? "Processing..." : "Pay £99"}
        </Button>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#4A2E1D]/70 text-center">
          <Lock className="h-4 w-4 flex-shrink-0" />
          <span>Secure payment processed by Stripe</span>
        </div>
      </div>
    </main>
  )
}
