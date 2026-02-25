"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Upload, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitPhotosPage() {
  const [uploads, setUploads] = useState({
    closeUp: null,
    wideView: null,
    bodyLocation: null,
  })

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bodyArea: "",
  })

  const [validation, setValidation] = useState({
    fullName: false,
    email: false,
    bodyArea: false,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Simple validation
    if (field === "fullName") {
      setValidation((prev) => ({ ...prev, fullName: value.length > 2 }))
    } else if (field === "email") {
      setValidation((prev) => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }))
    } else if (field === "bodyArea") {
      setValidation((prev) => ({ ...prev, bodyArea: value !== "" }))
    }
  }

  const handleUpload = (type: string) => {
    // Mock upload - in a real app this would open a file picker
    const mockImage = `/placeholder.svg?height=200&width=200`
    setUploads((prev) => ({ ...prev, [type]: mockImage }))
  }

  const isFormValid = () => {
    return (
      validation.fullName &&
      validation.email &&
      validation.bodyArea &&
      uploads.closeUp &&
      uploads.wideView &&
      uploads.bodyLocation
    )
  }

  return (
    <main className="min-h-screen bg-[#FAF6F2] pb-16">
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4A2E1D] mb-8 text-center">Submit Your Mole Photos</h1>

        <Card className="max-w-3xl mx-auto shadow-md">
          <CardContent className="p-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Upload Photos</h2>
                <p className="text-sm text-[#1E1E1E] mb-4">
                  Please upload 3 clear photos of your mole from different angles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="closeUp">Close-up</Label>
                    {uploads.closeUp ? (
                      <div className="relative h-40 w-full border-2 border-[#ECE5DF] rounded-lg overflow-hidden">
                        <Image
                          src={uploads.closeUp || "/placeholder.svg"}
                          alt="Close-up of mole"
                          fill
                          className="object-cover"
                        />
                        <button
                          className="absolute top-2 right-2 bg-white rounded-full p-1"
                          onClick={() => setUploads((prev) => ({ ...prev, closeUp: null }))}
                        >
                          <X className="h-4 w-4 text-[#4A2E1D]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="h-40 w-full border-2 border-dashed border-[#ECE5DF] rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-[#ECE5DF]/20 transition-colors"
                        onClick={() => handleUpload("closeUp")}
                      >
                        <Upload className="h-6 w-6 text-[#4A2E1D]" />
                        <span className="text-sm text-[#1E1E1E]">Upload</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wideView">Wide view</Label>
                    {uploads.wideView ? (
                      <div className="relative h-40 w-full border-2 border-[#ECE5DF] rounded-lg overflow-hidden">
                        <Image
                          src={uploads.wideView || "/placeholder.svg"}
                          alt="Wide view of mole"
                          fill
                          className="object-cover"
                        />
                        <button
                          className="absolute top-2 right-2 bg-white rounded-full p-1"
                          onClick={() => setUploads((prev) => ({ ...prev, wideView: null }))}
                        >
                          <X className="h-4 w-4 text-[#4A2E1D]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="h-40 w-full border-2 border-dashed border-[#ECE5DF] rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-[#ECE5DF]/20 transition-colors"
                        onClick={() => handleUpload("wideView")}
                      >
                        <Upload className="h-6 w-6 text-[#4A2E1D]" />
                        <span className="text-sm text-[#1E1E1E]">Upload</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bodyLocation">Location on body</Label>
                    {uploads.bodyLocation ? (
                      <div className="relative h-40 w-full border-2 border-[#ECE5DF] rounded-lg overflow-hidden">
                        <Image
                          src={uploads.bodyLocation || "/placeholder.svg"}
                          alt="Location of mole on body"
                          fill
                          className="object-cover"
                        />
                        <button
                          className="absolute top-2 right-2 bg-white rounded-full p-1"
                          onClick={() => setUploads((prev) => ({ ...prev, bodyLocation: null }))}
                        >
                          <X className="h-4 w-4 text-[#4A2E1D]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="h-40 w-full border-2 border-dashed border-[#ECE5DF] rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-[#ECE5DF]/20 transition-colors"
                        onClick={() => handleUpload("bodyLocation")}
                      >
                        <Upload className="h-6 w-6 text-[#4A2E1D]" />
                        <span className="text-sm text-[#1E1E1E]">Upload</span>
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#1E1E1E]/70 italic">Images are stored securely and deleted after review</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Your Information</h2>

                <div className="space-y-4">
                  <div className="relative">
                    <Label htmlFor="fullName" className="block mb-1">
                      Full Name
                    </Label>
                    <div className="relative">
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="rounded-lg border-[#ECE5DF] w-full"
                        placeholder="John Smith"
                      />
                      {validation.fullName && (
                        <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4CAF50]" />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="email" className="block mb-1">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="rounded-lg border-[#ECE5DF] w-full"
                        placeholder="john@example.com"
                      />
                      {validation.email && (
                        <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4CAF50]" />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="bodyArea" className="block mb-1">
                      Body Area
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("bodyArea", value)}>
                      <SelectTrigger className="rounded-lg border-[#ECE5DF] w-full">
                        <SelectValue placeholder="Select body area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="face">Face</SelectItem>
                        <SelectItem value="neck">Neck</SelectItem>
                        <SelectItem value="chest">Chest</SelectItem>
                        <SelectItem value="back">Back</SelectItem>
                        <SelectItem value="arm">Arm</SelectItem>
                        <SelectItem value="leg">Leg</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {validation.bodyArea && (
                      <Check className="absolute right-10 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4CAF50]" />
                    )}
                  </div>
                </div>
              </div>

              <Button
                asChild
                disabled={!isFormValid()}
                className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg"
              >
                <Link href="/lens-order">Continue to Payment</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
