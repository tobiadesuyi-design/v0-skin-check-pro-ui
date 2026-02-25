"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Download,
  Share2,
  Eye,
  X,
  Upload,
  Calendar,
  User,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

interface ReportData {
  id: string
  location: string
  submissionDate: string
  reviewDate: string
  doctorName: string
  gmcNumber: string
  photos: Array<{
    id: string
    url: string
    type: "close-up" | "wide-view" | "additional"
    quality: "good" | "poor"
  }>
  assessment: {
    outcome: "benign-monitor" | "suspicious-referral" | "urgent-referral" | "benign-routine"
    description: string
    confidence: "high" | "medium" | "low"
  }
  recommendedAction: {
    type: "monitor" | "gp-referral" | "urgent-referral" | "routine-check"
    timeframe: string
    description: string
  }
  additionalNotes?: string
}

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [report, setReport] = useState<ReportData | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Mock report data - in real app, fetch based on params.id
    const mockReport: ReportData = {
      id: params.id,
      location: "Right shoulder",
      submissionDate: "5 July 2025",
      reviewDate: "7 July 2025",
      doctorName: "Dr. Sarah Mitchell",
      gmcNumber: "7654321",
      photos: [
        {
          id: "1",
          url: "/placeholder.svg?height=300&width=300&text=Close-up+Photo",
          type: "close-up",
          quality: "good",
        },
        {
          id: "2",
          url: "/placeholder.svg?height=300&width=300&text=Wide+View+Photo",
          type: "wide-view",
          quality: "good",
        },
        {
          id: "3",
          url: "/placeholder.svg?height=300&width=300&text=Additional+Photo",
          type: "additional",
          quality: "poor",
        },
      ],
      assessment: {
        outcome: "benign-monitor",
        description:
          "The mole appears to have regular borders and uniform coloration. No immediate concerning features identified.",
        confidence: "high",
      },
      recommendedAction: {
        type: "monitor",
        timeframe: "3 months",
        description: "Monitor for changes over 3 months. Look for changes in size, shape, color, or texture.",
      },
      additionalNotes:
        "Consider using the ABCDE method when monitoring: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving characteristics.",
    }

    setReport(mockReport)
  }, [params.id])

  const getOutcomeBadge = (outcome: string) => {
    switch (outcome) {
      case "benign-monitor":
        return {
          text: "Likely benign – monitor",
          className: "bg-green-50 text-green-700 border-green-200",
          icon: <CheckCircle className="w-4 h-4 text-green-600" />,
        }
      case "benign-routine":
        return {
          text: "Benign – routine check",
          className: "bg-blue-50 text-blue-700 border-blue-200",
          icon: <Calendar className="w-4 h-4 text-blue-600" />,
        }
      case "suspicious-referral":
        return {
          text: "Suspicious – needs GP referral",
          className: "bg-orange-50 text-orange-700 border-orange-200",
          icon: <AlertTriangle className="w-4 h-4 text-orange-600" />,
        }
      case "urgent-referral":
        return {
          text: "Urgent referral advised",
          className: "bg-red-50 text-red-700 border-red-200",
          icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
        }
      default:
        return {
          text: "Under review",
          className: "bg-gray-50 text-gray-700 border-gray-200",
          icon: <Clock className="w-4 h-4 text-gray-600" />,
        }
    }
  }

  const getActionBadge = (type: string) => {
    switch (type) {
      case "monitor":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "gp-referral":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "urgent-referral":
        return "bg-red-50 text-red-700 border-red-200"
      case "routine-check":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const handleDownloadPDF = () => {
    // In real app, generate and download PDF
    console.log("Downloading PDF report...")
  }

  const handleShareWithGP = () => {
    // In real app, open email client or sharing options
    console.log("Sharing with GP...")
  }

  const handleReuploadPhoto = (photoId: string) => {
    router.push(`/reupload-photo/${photoId}`)
  }

  const handleBack = () => {
    router.push("/my-reports")
  }

  const handleNewScan = () => {
    router.push("/")
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading report...</p>
        </div>
      </div>
    )
  }

  const outcomeBadge = getOutcomeBadge(report.assessment.outcome)

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
              <h1 className="text-lg font-semibold text-black tracking-tight">{report.location} – Report Summary</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Reviewed by a GP.</strong> This report is not a diagnosis but provides a clinical opinion based on
            your photo submission.
          </p>
        </div>

        {/* Submitted Photos */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-black">Submitted Photos</h2>

            <div className="grid grid-cols-2 gap-3">
              {report.photos.map((photo) => (
                <div key={photo.id} className="space-y-2">
                  <div
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedPhoto(photo.url)}
                  >
                    <Image
                      src={photo.url || "/placeholder.svg"}
                      alt={`${photo.type} photo`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-700 capitalize">{photo.type.replace("-", " ")}</p>
                    {photo.quality === "poor" && (
                      <div className="space-y-2">
                        <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs">Image unclear</Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleReuploadPhoto(photo.id)}
                          className="w-full h-8 text-xs border-gray-200 hover:bg-gray-50"
                        >
                          <Upload className="w-3 h-3 mr-1" />
                          Re-upload
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Clinical Summary */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-lg font-semibold text-black">Clinical Summary</h2>

            {/* Doctor Info */}
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-black">Reviewed by {report.doctorName}</p>
                <p className="text-sm text-gray-600">GMC Registered GP • GMC: {report.gmcNumber}</p>
                <p className="text-xs text-gray-500">Reviewed on {report.reviewDate}</p>
              </div>
            </div>

            {/* Assessment */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Provisional Assessment</h3>
                <div className="flex items-center space-x-3">
                  {outcomeBadge.icon}
                  <Badge className={`${outcomeBadge.className} border font-medium px-3 py-1 rounded-xl`}>
                    {outcomeBadge.text}
                  </Badge>
                </div>
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl">
                  {report.assessment.description}
                </p>
              </div>

              {/* Recommended Action */}
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Recommended Action</h3>
                <div className="space-y-3">
                  <Badge
                    className={`${getActionBadge(report.recommendedAction.type)} border font-medium px-3 py-1 rounded-xl`}
                  >
                    {report.recommendedAction.description}
                  </Badge>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl">
                    <strong>Timeframe:</strong> {report.recommendedAction.timeframe}
                    <br />
                    {report.recommendedAction.description}
                  </p>
                </div>
              </div>

              {/* Additional Notes */}
              {report.additionalNotes && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-black">Additional Notes</h3>
                  <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-2xl border border-blue-200">
                    {report.additionalNotes}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Download & Share */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-black">Download & Share</h2>

            <div className="space-y-3">
              <Button
                onClick={handleDownloadPDF}
                className="w-full bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>

              <Button
                onClick={handleShareWithGP}
                variant="outline"
                className="w-full border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share with my GP
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation CTAs */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
          >
            Back to My Reports
          </Button>

          <Button
            onClick={handleNewScan}
            className="w-full bg-[#a68c7b] hover:bg-[#8f7a6b] text-white rounded-2xl h-12 font-medium"
          >
            Start a New Scan
          </Button>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mt-8">
          <p className="text-xs text-gray-600 leading-relaxed text-center">
            <strong>Important:</strong> This report is for informational purposes only and does not replace professional
            medical advice. Always consult with a healthcare professional for medical concerns.
          </p>
        </div>
      </main>

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-sm w-full">
            <Button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={selectedPhoto || "/placeholder.svg"} alt="Enlarged photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
