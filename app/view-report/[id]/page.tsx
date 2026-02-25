"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  User,
  Camera,
  Stethoscope,
  ExternalLink,
} from "lucide-react"

interface ReportData {
  id: string
  location: string
  submissionDate: string
  reviewDate: string
  reviewStatus: "complete"
  riskLevel: "low" | "moderate" | "high"
  doctorName: string
  clinicalOpinion: string
  nextSteps: {
    action: string
    description: string
    timeframe?: string
  }
  hasClinicBooking: boolean
}

export default function ViewReportPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [report, setReport] = useState<ReportData | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Mock report data - in real app, fetch based on params.id
    const mockReport: ReportData = {
      id: params.id,
      location: "Upper back",
      submissionDate: "7 July 2025",
      reviewDate: "8 July 2025",
      reviewStatus: "complete",
      riskLevel: "low", // Change to "moderate" or "high" to see different outcomes
      doctorName: "Dr. Sarah Mitchell",
      clinicalOpinion:
        "The mole shows regular borders and uniform coloration with no concerning features. The size and symmetry appear normal for a benign pigmented lesion.",
      nextSteps: {
        action: "monitor",
        description: "No action needed, monitor the area and scan again in 3–6 months.",
        timeframe: "3-6 months",
      },
      hasClinicBooking: true,
    }

    // Alternative outcomes for different risk levels:
    if (mockReport.riskLevel === "moderate") {
      mockReport.clinicalOpinion =
        "The mole shows some irregular features that warrant closer monitoring. While not immediately concerning, these characteristics should be tracked over time."
      mockReport.nextSteps = {
        action: "monitor-closely",
        description: "Monitor closely and consider an in-person consultation if any changes occur.",
        timeframe: "1-2 months",
      }
    } else if (mockReport.riskLevel === "high") {
      mockReport.clinicalOpinion =
        "The mole displays concerning features including irregular borders and color variation. These characteristics require immediate professional evaluation."
      mockReport.nextSteps = {
        action: "urgent-consultation",
        description: "We recommend an in-person consultation with a dermatologist as soon as possible.",
      }
    }

    setReport(mockReport)
  }, [params.id])

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return {
          text: "Low Risk",
          className: "bg-green-50 text-green-700 border-green-200",
          icon: <CheckCircle className="w-4 h-4 text-green-600" />,
          color: "green",
        }
      case "moderate":
        return {
          text: "Moderate Risk",
          className: "bg-orange-50 text-orange-700 border-orange-200",
          icon: <AlertTriangle className="w-4 h-4 text-orange-600" />,
          color: "orange",
        }
      case "high":
        return {
          text: "High Risk",
          className: "bg-red-50 text-red-700 border-red-200",
          icon: <AlertCircle className="w-4 h-4 text-red-600" />,
          color: "red",
        }
      default:
        return {
          text: "Unknown",
          className: "bg-gray-50 text-gray-700 border-gray-200",
          icon: <AlertTriangle className="w-4 h-4 text-gray-600" />,
          color: "gray",
        }
    }
  }

  const handleScanAnother = () => {
    router.push("/")
  }

  const handleBookAppointment = () => {
    router.push("/booking")
  }

  const handleBack = () => {
    router.push("/my-reports")
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading your SkinCheck Pro report...</p>
        </div>
      </div>
    )
  }

  const riskBadge = getRiskBadge(report.riskLevel)

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2 -ml-2 hover:bg-gray-50 rounded-xl touch-target"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-black tracking-tight">Your SkinCheck Pro Report</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <p className="text-sm text-blue-800 leading-relaxed">
            This report is based on your submitted photos and reviewed by a UK GP. This assessment provides clinical
            guidance but is not a substitute for in-person medical examination.
          </p>
        </div>

        {/* Scan Overview */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-lg font-semibold text-black">Scan Overview</h2>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mole location</p>
                  <p className="font-semibold text-black">{report.location}</p>
                </div>
              </div>

              {/* Submission Date */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submission date</p>
                  <p className="font-semibold text-black">{report.submissionDate}</p>
                </div>
              </div>

              {/* Review Status */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Review status</p>
                  <p className="font-semibold text-black">Complete</p>
                </div>
              </div>

              {/* Risk Level */}
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-${riskBadge.color}-100 rounded-2xl flex items-center justify-center`}>
                  {riskBadge.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Risk level</p>
                  <Badge className={`${riskBadge.className} border font-medium px-3 py-1 rounded-xl mt-1`}>
                    {riskBadge.text}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clinical Opinion */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-black">Clinical Opinion</h2>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-black">{report.doctorName}</p>
                <p className="text-sm text-gray-600">UK Registered GP</p>
              </div>
            </div>

            {/* Clinical Assessment */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="text-blue-900 leading-relaxed">{report.clinicalOpinion}</p>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-lg font-semibold text-black">Next Steps</h2>

            <div className={`p-5 rounded-2xl border-2 bg-${riskBadge.color}-50 border-${riskBadge.color}-200`}>
              <div className="flex items-start space-x-3">
                {riskBadge.icon}
                <div className="space-y-2">
                  <p className={`font-semibold text-${riskBadge.color}-900`}>Recommended Action</p>
                  <p className={`text-${riskBadge.color}-800 leading-relaxed`}>{report.nextSteps.description}</p>
                  {report.nextSteps.timeframe && (
                    <p className={`text-sm text-${riskBadge.color}-700`}>
                      <strong>Timeframe:</strong> {report.nextSteps.timeframe}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                onClick={handleScanAnother}
                className="w-full bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium"
              >
                <Camera className="w-4 h-4 mr-2" />
                Scan another mole
              </Button>

              {report.hasClinicBooking && (report.riskLevel === "moderate" || report.riskLevel === "high") && (
                <Button
                  onClick={handleBookAppointment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-12 font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book clinic appointment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-black mb-4">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="risk-levels" className="border border-gray-200 rounded-2xl px-4">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium text-black">What does low/moderate/high risk mean?</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-700 leading-relaxed">
                  <div className="space-y-3">
                    <p>
                      <strong className="text-green-700">Low risk:</strong> The mole appears normal with no concerning
                      features. Regular monitoring is recommended.
                    </p>
                    <p>
                      <strong className="text-orange-700">Moderate risk:</strong> Some features warrant closer attention
                      but aren't immediately alarming. More frequent monitoring advised.
                    </p>
                    <p>
                      <strong className="text-red-700">High risk:</strong> Concerning features identified that require
                      professional evaluation as soon as possible.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="second-opinion" className="border border-gray-200 rounded-2xl px-4">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium text-black">What if I want a second opinion?</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-700 leading-relaxed">
                  You can always seek a second opinion from another healthcare provider. We recommend taking this report
                  to your GP or a dermatologist for an in-person assessment, especially if you have concerns about the
                  mole.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="better-photos" className="border border-gray-200 rounded-2xl px-4">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium text-black">How do I take a better photo next time?</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-700 leading-relaxed">
                  <div className="space-y-2">
                    <p>For the best results:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Use good natural lighting or bright indoor lighting</li>
                      <li>Keep the camera steady and in focus</li>
                      <li>Take both close-up and wider context shots</li>
                      <li>Use the 10x magnifier lens if available</li>
                      <li>Avoid shadows and glare on the mole</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Medical Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
          <p className="text-xs text-gray-600 leading-relaxed text-center">
            <strong>Medical Disclaimer:</strong> This SkinCheck Pro report provides clinical guidance based on photo
            analysis but does not replace in-person medical examination. Always consult healthcare professionals for
            medical concerns.
          </p>
        </div>
      </main>
    </div>
  )
}
