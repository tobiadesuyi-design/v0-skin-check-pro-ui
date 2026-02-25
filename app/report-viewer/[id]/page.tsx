"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  User,
  MapPin,
  Eye,
  Download,
  Plus,
  CheckCircle,
  AlertTriangle,
  Clock,
  Stethoscope,
  FileText,
  Phone,
  ExternalLink,
  ZoomIn,
} from "lucide-react"

interface ReportData {
  id: string
  location: string
  submissionDate: string
  reportDate: string
  status: "complete-benign" | "complete-monitor" | "complete-referral" | "in-review"
  gpReviewer: string
  findings: string
  riskLevel: "low" | "moderate" | "high"
  nextSteps: string
  photos: Array<{
    id: string
    url: string
    type: "close-up" | "context"
    gpNotes?: string
  }>
}

export default function ReportViewerPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [report, setReport] = useState<ReportData | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Mock report data - replace with actual API call
    const mockReport: ReportData = {
      id: params.id as string,
      location: "Right shoulder",
      submissionDate: "3 July 2025",
      reportDate: "5 July 2025",
      status: "complete-monitor",
      gpReviewer: "Dr. Sarah Mitchell, GP",
      findings:
        "The lesion appears to be a benign seborrheic keratosis with typical features including a 'stuck-on' appearance and well-defined borders. The pigmentation is uniform and there are no concerning features such as asymmetry, irregular borders, or color variation that would suggest malignancy.",
      riskLevel: "moderate",
      nextSteps:
        "Monitor this lesion closely for any changes in size, shape, color, or texture. Take a photo monthly to track any evolution. If you notice any changes, or if the lesion becomes itchy, bleeds, or changes in any way, please book an appointment with your GP for further assessment.",
      photos: [
        {
          id: "1",
          url: "/placeholder.svg?height=300&width=300&text=Close-up+Photo",
          type: "close-up",
          gpNotes: "Clear view showing the 'stuck-on' appearance typical of seborrheic keratosis",
        },
        {
          id: "2",
          url: "/placeholder.svg?height=300&width=300&text=Context+Photo",
          type: "context",
          gpNotes: "Good context showing the lesion's position on the shoulder",
        },
      ],
    }

    setReport(mockReport)
  }, [params.id])

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return {
          text: "Low Concern",
          className: "bg-green-50 text-green-700 border-green-200",
          icon: <CheckCircle className="w-4 h-4" />,
        }
      case "moderate":
        return {
          text: "Monitor Closely",
          className: "bg-yellow-50 text-yellow-700 border-yellow-200",
          icon: <AlertTriangle className="w-4 h-4" />,
        }
      case "high":
        return {
          text: "Needs GP Follow-up",
          className: "bg-red-50 text-red-700 border-red-200",
          icon: <AlertTriangle className="w-4 h-4" />,
        }
      default:
        return {
          text: "In Review",
          className: "bg-blue-50 text-blue-700 border-blue-200",
          icon: <Clock className="w-4 h-4" />,
        }
    }
  }

  const handleBack = () => {
    router.push("/my-reports")
  }

  const handleStartNewScan = () => {
    router.push("/")
  }

  const handleDownloadPDF = () => {
    // Implement PDF download functionality
    console.log("Downloading PDF report...")
  }

  const handlePhotoZoom = (photoUrl: string) => {
    setSelectedPhoto(photoUrl)
  }

  const closePhotoZoom = () => {
    setSelectedPhoto(null)
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="w-8 h-8 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Loading your report...</p>
        </div>
      </div>
    )
  }

  const riskBadge = getRiskBadge(report.riskLevel)

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleBack} className="p-2 hover:bg-gray-50 rounded-xl">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-black">Your SkinCheck Pro Report</h1>
              <p className="text-sm text-gray-600">
                This is not a diagnosis — it's a medical review of your photos by a UK GP.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-6 space-y-6 pb-24">
        {/* Summary Card */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black flex items-center space-x-2">
              <FileText className="w-5 h-5 text-gray-600" />
              <span>Report Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-black">{report.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Submitted: {report.submissionDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Report date: {report.reportDate}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{report.gpReviewer}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    className={`${riskBadge.className} border font-medium px-3 py-1 rounded-xl flex items-center space-x-1`}
                  >
                    {riskBadge.icon}
                    <span>{riskBadge.text}</span>
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Findings */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black flex items-center space-x-2">
              <Stethoscope className="w-5 h-5 text-gray-600" />
              <span>What we saw</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{report.findings}</p>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">{report.nextSteps}</p>

            {report.riskLevel === "high" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-800">Book GP Appointment</h4>
                    <p className="text-sm text-red-700">
                      We recommend booking an in-person GP appointment for further review within the next 2 weeks.
                    </p>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Find NHS GP
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {report.riskLevel === "moderate" && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-yellow-800">Monitor for Changes</h4>
                    <p className="text-sm text-yellow-700">
                      Take monthly photos to track any changes. Re-scan in 3 months or sooner if anything changes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {report.riskLevel === "low" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-800">Low Concern</h4>
                    <p className="text-sm text-green-700">
                      Continue routine monitoring. Re-scan in 6 months or if you notice any changes.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Photos */}
        <Card className="border border-gray-100 rounded-2xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-black">Your Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {report.photos.map((photo) => (
                <div key={photo.id} className="space-y-3">
                  <div className="relative group">
                    <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={photo.url || "/placeholder.svg"}
                        alt={`${photo.type} photo of ${report.location}`}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => handlePhotoZoom(photo.url)}
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                      >
                        <ZoomIn className="w-6 h-6 text-white" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-white/90 text-gray-700 text-xs">
                        {photo.type === "close-up" ? "Close-up" : "Context"}
                      </Badge>
                    </div>
                  </div>
                  {photo.gpNotes && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">GP Notes:</span> {photo.gpNotes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleStartNewScan}
            className="flex-1 bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Scan Another Mole
          </Button>
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl h-12 font-medium bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </main>

      {/* Photo Zoom Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closePhotoZoom}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedPhoto || "/placeholder.svg"}
              alt="Zoomed photo"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <button
              onClick={closePhotoZoom}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
