"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, User, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function ContactDetailsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  })

  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the Terms and Privacy Policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Store form data in localStorage for demo
    localStorage.setItem("contactDetails", JSON.stringify(formData))

    setIsSubmitting(false)

    // Navigate to submission confirmation
    window.location.href = "/submission-confirmation"
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && agreedToTerms

  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/upload-photos" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back to Upload Photos</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-[#4A2E1D]">Where should we send your report?</h1>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-white border-b border-[#ECE5DF]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#4A2E1D]">Step 5 of 5</span>
          <span className="text-sm text-[#4A2E1D]/70">100% complete</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>

      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Form Card */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-[#4A2E1D] flex items-center">
                  <User className="h-4 w-4 mr-2 text-[#a68c7b]" />
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`mt-2 border-[#ECE5DF] focus:border-[#a68c7b] focus:ring-[#a68c7b] ${
                    errors.firstName ? "border-red-300 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-[#4A2E1D] flex items-center">
                  <User className="h-4 w-4 mr-2 text-[#a68c7b]" />
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`mt-2 border-[#ECE5DF] focus:border-[#a68c7b] focus:ring-[#a68c7b] ${
                    errors.lastName ? "border-red-300 focus:border-red-500" : ""
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-[#4A2E1D] flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#a68c7b]" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`mt-2 border-[#ECE5DF] focus:border-[#a68c7b] focus:ring-[#a68c7b] ${
                  errors.email ? "border-red-300 focus:border-red-500" : ""
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile Field */}
            <div>
              <Label htmlFor="mobile" className="text-sm font-medium text-[#4A2E1D] flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#a68c7b]" />
                Mobile Number <span className="text-[#4A2E1D]/60 ml-1">(Optional)</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="mt-2 border-[#ECE5DF] focus:border-[#a68c7b] focus:ring-[#a68c7b]"
                placeholder="Enter mobile number"
              />
              <p className="text-xs text-[#4A2E1D]/60 mt-1">
                We may text you if we need to clarify anything about your submission
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => {
                    setAgreedToTerms(checked as boolean)
                    if (errors.terms) {
                      setErrors((prev) => ({ ...prev, terms: "" }))
                    }
                  }}
                  className={`mt-1 ${errors.terms ? "border-red-300" : ""}`}
                />
                <Label htmlFor="terms" className="text-sm text-[#4A2E1D] leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#a68c7b] underline hover:text-[#4A2E1D]">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-[#a68c7b] underline hover:text-[#4A2E1D]">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              {errors.terms && (
                <p className="text-red-600 text-xs flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.terms}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Information Card */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm bg-[#e1cfc2]/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#a68c7b] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#4A2E1D] text-sm leading-relaxed">
                  Your report will be reviewed by a UK-registered GP within 24-48 hours. We'll email you as soon as it's
                  ready.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid || isSubmitting}
          className={`w-full h-12 text-base font-medium rounded-full ${
            isFormValid && !isSubmitting
              ? "bg-[#4A2E1D] hover:bg-[#3A2315] text-white"
              : "bg-[#ECE5DF] text-[#4A2E1D]/50 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Submitting for review...</span>
            </div>
          ) : (
            "Submit for review"
          )}
        </Button>

        {/* Help Text */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-xs text-[#4A2E1D]/60 leading-relaxed">
              By submitting, you confirm that the photos are of your own skin and that you understand this service
              provides clinical opinions, not medical diagnoses.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
