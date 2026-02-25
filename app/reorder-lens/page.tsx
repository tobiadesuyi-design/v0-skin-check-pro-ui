"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check, Lock } from "lucide-react"

export default function ReorderLensScreen() {
  const [address, setAddress] = useState({
    fullName: "John Smith",
    addressLine1: "123 Main Street",
    city: "London",
    postcode: "SW1A 1AA",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAddressChange = (field: string, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }))
  }

  const handleOrder = () => {
    setIsProcessing(true)
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false)
      // In a real app, this would navigate to a confirmation page
      alert("Your lens has been ordered and will be delivered to your address.")
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
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Reorder Lens</h1>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/placeholder.svg?height=180&width=180&text=Lens+Image"
                alt="Smartphone clip-on lens"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold text-[#4A2E1D] mb-3">SkinCheck Pro Lens</h2>

            <p className="text-[#4A2E1D]/80 mb-6">
              Our specially designed clip-on lens helps you capture clear, detailed images of your moles for more
              accurate assessments.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <p className="text-[#4A2E1D]">Compatible with most smartphones</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <p className="text-[#4A2E1D]">Magnifies skin details for better images</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#4A2E1D]" />
                </div>
                <p className="text-[#4A2E1D]">Easy to attach and remove</p>
              </div>
            </div>

            <div className="bg-[#ECE5DF]/30 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-[#4A2E1D] mb-2">Delivery Address</h3>

              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="fullName" className="text-[#4A2E1D] text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={address.fullName}
                      onChange={(e) => handleAddressChange("fullName", e.target.value)}
                      className="rounded-lg border-[#ECE5DF] mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="addressLine1" className="text-[#4A2E1D] text-sm">
                      Address Line 1
                    </Label>
                    <Input
                      id="addressLine1"
                      value={address.addressLine1}
                      onChange={(e) => handleAddressChange("addressLine1", e.target.value)}
                      className="rounded-lg border-[#ECE5DF] mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="city" className="text-[#4A2E1D] text-sm">
                        City
                      </Label>
                      <Input
                        id="city"
                        value={address.city}
                        onChange={(e) => handleAddressChange("city", e.target.value)}
                        className="rounded-lg border-[#ECE5DF] mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="postcode" className="text-[#4A2E1D] text-sm">
                        Postcode
                      </Label>
                      <Input
                        id="postcode"
                        value={address.postcode}
                        onChange={(e) => handleAddressChange("postcode", e.target.value)}
                        className="rounded-lg border-[#ECE5DF] mt-1"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsEditing(false)}
                    className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-lg mt-2"
                  >
                    Save Address
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-[#4A2E1D]">{address.fullName}</p>
                  <p className="text-[#4A2E1D]">{address.addressLine1}</p>
                  <p className="text-[#4A2E1D]">
                    {address.city}, {address.postcode}
                  </p>
                  <Button
                    variant="link"
                    onClick={() => setIsEditing(true)}
                    className="p-0 h-auto text-[#4A2E1D] underline mt-2"
                  >
                    Edit Address
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleOrder}
          disabled={isProcessing}
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg disabled:opacity-50 mb-4"
        >
          {isProcessing ? "Processing..." : "Order Replacement Lens (£19.99)"}
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-[#4A2E1D]/70 text-center">
          <Lock className="h-4 w-4 flex-shrink-0" />
          <span>Secure payment processed by Stripe</span>
        </div>
      </div>
    </main>
  )
}
