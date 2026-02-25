"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function LensAddressScreen() {
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    city: "",
    postcode: "",
    phoneNumber: "",
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
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link href="/lens-check" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Free Lens Delivery</h1>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/placeholder.svg?height=120&width=120&text=Lens+Package"
                alt="Lens package"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <p className="text-[#4A2E1D]/80 mb-6 text-center">
              We'll send you a free clip-on lens to help capture clear images for your mole check.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#4A2E1D] font-medium">
                  Full Name*
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
                  Address Line 1*
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[#4A2E1D] font-medium">
                    City*
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
                    Postcode*
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

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-[#4A2E1D] font-medium flex items-center">
                  Phone Number <span className="text-[#4A2E1D]/50 text-sm ml-2">(Optional)</span>
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                  placeholder="07123 456789"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          asChild={isFormValid()}
          disabled={!isFormValid()}
          className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg disabled:opacity-50 mb-4"
        >
          {isFormValid() ? <Link href="/complete-scan-payment">Send My Lens</Link> : <span>Send My Lens</span>}
        </Button>

        <p className="text-sm text-center text-[#4A2E1D]/70">
          Your lens will be delivered within 3-5 working days. Required fields are marked with *.
        </p>
      </div>
    </main>
  )
}
