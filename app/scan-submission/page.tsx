"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, X, Lock, CreditCard, Camera, Info, CheckCircle2, AlertCircle } from "lucide-react"
import { PhotoUploadGuide } from "./components/photo-upload-guide"

export default function ScanSubmissionScreen() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    concernDescription: "",
  })
  const [uploads, setUploads] = useState<{ [key: string]: string | null }>({
    photo1: null,
    photo2: null,
    photo3: null,
  })
  const [showGuide, setShowGuide] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleUpload = (photoKey: string) => {
    // In a real app, this would open a file picker or camera
    // For this demo, we'll simulate an upload with a placeholder
    const mockImage = `/placeholder.svg?height=300&width=300&query=skin mole photo`
    setUploads((prev) => ({ ...prev, [photoKey]: mockImage }))
  }

  const removeUpload = (photoKey: string) => {
    setUploads((prev) => ({ ...prev, [photoKey]: null }))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.concernDescription.trim()) {
      newErrors.concernDescription = "Please describe your concern"
    }

    // Check if at least 2 photos are uploaded
    const photoCount = Object.values(uploads).filter((upload) => upload !== null).length
    if (photoCount < 2) {
      newErrors.photos = "Please upload at least 2 photos"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate payment and submission process
    try {
      // In a real app, this would call your API to process the payment and store the submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to confirmation page
      router.push("/scan-confirmation")
    } catch (error) {
      console.error("Submission error:", error)
      setIsSubmitting(false)
    }
  }

  const hasMinimumPhotos = Object.values(uploads).filter((upload) => upload !== null).length >= 2
  const isFormComplete =
    formData.firstName && formData.lastName && formData.email && formData.concernDescription && hasMinimumPhotos

  return (
    <main className="min-h-screen bg-[#FAF6F2] pb-12">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-[#FAF6F2] px-4 py-4 border-b border-[#ECE5DF] sm:px-6">
        <div className="flex items-center max-w-3xl mx-auto">
          <Link href="/dashboard" className="mr-4">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-[#4A2E1D]">Submit Your Scan</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6">
        <form onSubmit={handleSubmit}>
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-[#4A2E1D]">Complete your submission</h2>
              <span className="text-sm text-[#4A2E1D]/70">Step 1 of 1</span>
            </div>
            <div className="w-full h-2 bg-[#ECE5DF] rounded-full overflow-hidden">
              <div className="h-full bg-[#4A2E1D] rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* Photo upload section */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#4A2E1D]">Upload Photos</h2>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs border-[#ECE5DF] text-[#4A2E1D] hover:bg-[#ECE5DF]/30"
                  onClick={() => setShowGuide(!showGuide)}
                >
                  <Info className="h-3.5 w-3.5 mr-1" />
                  Photo Guide
                </Button>
              </div>

              {showGuide && <PhotoUploadGuide onClose={() => setShowGuide(false)} />}

              <p className="text-sm text-[#4A2E1D]/80 mb-4">
                Please upload 2-3 clear photos of your mole from different angles.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {/* Photo upload slots */}
                {Object.entries(uploads).map(([key, value], index) => (
                  <div key={key} className="flex flex-col items-center">
                    {value ? (
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 border-2 border-[#4A2E1D]">
                        <Image
                          src={value || "/placeholder.svg"}
                          alt={`Mole photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeUpload(key)}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm"
                          aria-label="Remove photo"
                        >
                          <X className="h-4 w-4 text-[#4A2E1D]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleUpload(key)}
                        className="w-full aspect-square rounded-xl border-2 border-dashed border-[#ECE5DF] flex flex-col items-center justify-center gap-1 hover:bg-[#ECE5DF]/20 transition-colors"
                      >
                        <Camera className="h-6 w-6 text-[#4A2E1D]" />
                        <span className="text-xs text-[#4A2E1D]/70">Photo {index + 1}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {errors.photos && (
                <div className="flex items-center gap-2 text-[#E53935] text-sm mt-1 mb-3">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.photos}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-[#4A2E1D]/70 mt-2 bg-[#ECE5DF]/30 p-3 rounded-lg">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#4A2E1D]" />
                <p>Upload at least 2 photos for a thorough assessment.</p>
              </div>
            </CardContent>
          </Card>

          {/* Personal information */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Personal Information</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#4A2E1D]">
                    First Name <span className="text-[#E53935]">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-2 text-[#E53935] text-sm mt-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.firstName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#4A2E1D]">
                    Last Name <span className="text-[#E53935]">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-2 text-[#E53935] text-sm mt-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.lastName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="email" className="text-[#4A2E1D]">
                  Email <span className="text-[#E53935]">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <div className="flex items-center gap-2 text-[#E53935] text-sm mt-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="concernDescription" className="text-[#4A2E1D]">
                  Describe your concern <span className="text-[#E53935]">*</span>
                </Label>
                <Textarea
                  id="concernDescription"
                  name="concernDescription"
                  value={formData.concernDescription}
                  onChange={handleInputChange}
                  className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] min-h-[100px]"
                  placeholder="Please describe any changes you've noticed, how long you've had the mole, and any symptoms."
                />
                {errors.concernDescription && (
                  <div className="flex items-center gap-2 text-[#E53935] text-sm mt-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.concernDescription}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Payment section */}
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Payment</h2>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-[#4A2E1D]" />
                  <span className="text-[#4A2E1D] font-medium">Mole Check Assessment</span>
                </div>
                <span className="text-[#4A2E1D] font-bold">£99</span>
              </div>

              <Separator className="bg-[#ECE5DF] my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-[#4A2E1D] font-semibold">Total</span>
                <span className="text-[#4A2E1D] font-bold text-lg">£99</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#4A2E1D]/70 mb-6 bg-[#ECE5DF]/30 p-3 rounded-lg">
                <Lock className="h-4 w-4 flex-shrink-0" />
                <p>Secure payment processed by Stripe. Your card will only be charged after submission.</p>
              </div>

              <Button
                type="submit"
                disabled={!isFormComplete || isSubmitting}
                className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-base font-medium disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Payment...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Pay £99 and Submit Scan
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Privacy notice */}
          <div className="text-sm text-center text-[#4A2E1D]/70 px-4">
            <p className="mb-2">
              By submitting, you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              <span>Your data is encrypted and securely stored</span>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
