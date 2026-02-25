"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ShippingAddressScreen() {
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
  })

  const [validation, setValidation] = useState({
    fullName: false,
    addressLine1: false,
    city: false,
    postcode: false,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Simple validation
    if (field === "fullName") {
      setValidation((prev) => ({ ...prev, fullName: value.length > 2 }))
    } else if (field === "addressLine1") {
      setValidation((prev) => ({ ...prev, addressLine1: value.length > 5 }))
    } else if (field === "city") {
      setValidation((prev) => ({ ...prev, city: value.length > 2 }))
    } else if (field === "postcode") {
      setValidation((prev) => ({ ...prev, postcode: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(value) }))
    }
  }

  const isFormValid = () => {
    return validation.fullName && validation.addressLine1 && validation.city && validation.postcode
  }

  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#4A2E1D] text-center">Shipping Address</h1>
        <p className="text-center text-[#4A2E1D]/70 mt-1">Where should we send your lens?</p>
      </div>

      {/* Form */}
      <Card className="max-w-md mx-auto border-[#ECE5DF] rounded-2xl shadow-sm">
        <CardContent className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#4A2E1D] font-medium">
              Full Name
            </Label>
            <div className="relative">
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] pr-10"
                placeholder="John Smith"
              />
              {validation.fullName && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="addressLine1" className="text-[#4A2E1D] font-medium">
              Address Line 1
            </Label>
            <div className="relative">
              <Input
                id="addressLine1"
                value={formData.addressLine1}
                onChange={(e) => handleInputChange("addressLine1", e.target.value)}
                className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] pr-10"
                placeholder="123 Main Street"
              />
              {validation.addressLine1 && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="addressLine2" className="text-[#4A2E1D] font-medium flex items-center">
              Address Line 2 <span className="text-[#4A2E1D]/50 text-sm ml-2">(Optional)</span>
            </Label>
            <Input
              id="addressLine2"
              value={formData.addressLine2}
              onChange={(e) => handleInputChange("addressLine2", e.target.value)}
              className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
              placeholder="Apartment, Suite, Unit, etc."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-[#4A2E1D] font-medium">
                City
              </Label>
              <div className="relative">
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] pr-10"
                  placeholder="London"
                />
                {validation.city && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postcode" className="text-[#4A2E1D] font-medium">
                Postcode
              </Label>
              <div className="relative">
                <Input
                  id="postcode"
                  value={formData.postcode}
                  onChange={(e) => handleInputChange("postcode", e.target.value)}
                  className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] pr-10"
                  placeholder="SW1A 1AA"
                />
                {validation.postcode && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="max-w-md mx-auto mt-6">
        <Button
          asChild={isFormValid()}
          disabled={!isFormValid()}
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg disabled:opacity-50"
        >
          {isFormValid() ? <Link href="/confirmation">Continue</Link> : <span>Continue</span>}
        </Button>
      </div>

      {/* Help text */}
      <p className="text-sm text-[#4A2E1D]/60 mt-4 text-center max-w-md mx-auto">
        Your lens will be delivered within 3-5 working days.
      </p>
    </main>
  )
}
