"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Settings,
  Calendar,
  Eye,
  Plus,
  Home,
  Upload,
  FileText,
  HelpCircle,
  CheckCircle,
  Clock,
  AlertTriangle,
  Camera,
} from "lucide-react"

interface Report {
  id: string
  location: string
  submissionDate: string
  status: "in-review" | "complete" | "needs-more-info"
  outcome?: string
}

export default function MyReportsPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    setIsLoaded(true)

    // Mock reports data - replace with actual API call
    const mockReports: Report[] = [
      {
        id: "1",
        location: "Upper back",
        submissionDate: "5 July 2025",
        status: "complete",
        outcome: "Low concern",
      },
      {
        id: "2",
        location: "Right shoulder",
        submissionDate: "3 July 2025",
        status: "complete",
        outcome: "Monitor closely",
      },
      {
        id: "3",
        location: "Left arm",
        submissionDate: "1 July 2025",
        status: "in-review",
      },
      {
        id: "4",
        location: "Back of neck",
        submissionDate: "28 June 2025",
        status: "needs-more-info",
      },
    ]

    setReports(mockReports)
  }, [])

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case "in-review":
        return {
          text: "In Review",
          icon: <Clock className="w-3 h-3" />,
          className: "bg-yellow-50 text-yellow-700 border-yellow-200",
          dotColor: "bg-yellow-500",
        }
      case "complete":
        return {
          text: "Complete",
          icon: <CheckCircle className="w-3 h-3" />,
          className: "bg-green-50 text-green-700 border-green-200",
          dotColor: "bg-green-500",
        }
      case "needs-more-info":
        return {
          text: "Needs More Info",
          icon: <AlertTriangle className="w-3 h-3" />,
          className: "bg-red-50 text-red-700 border-red-200",
          dotColor: "bg-red-500",
        }
      default:
        return {
          text: "Unknown",
          icon: <Clock className="w-3 h-3" />,
          className: "bg-gray-50 text-gray-700 border-gray-200",
          dotColor: "bg-gray-500",
        }
    }
  }

  const handleViewReport = (reportId: string, status: string) => {
    if (status === "needs-more-info") {
      router.push("/report-not-clear")
    } else {
      router.push(`/report-viewer/${reportId}`)
    }
  }

  const handleStartNewScan = () => {
    router.push("/")
  }

  const handleSettings = () => {
    router.push("/account-settings")
  }

  const EmptyState = () => (
    <div className="text-center py-16 px-6">
      <div className="w-20 h-20 bg-[#f5f1ef] rounded-full flex items-center justify-center mx-auto mb-6">
        <Camera className="w-10 h-10 text-[#a68c7b]" />
      </div>
      <div className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-black">No scans yet</h3>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
          Start your first SkinCheck Pro scan and get your report in 24–48 hours.
        </p>
      </div>
      <Button
        onClick={handleStartNewScan}
        className="bg-black hover:bg-gray-800 text-white rounded-2xl h-12 px-8 font-medium"
      >
        <Plus className="w-4 h-4 mr-2" />
        Start New Scan
      </Button>
    </div>
  )

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold text-black tracking-tight">SkinCheck Pro</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSettings} className="p-2 hover:bg-gray-50 rounded-xl">
              <Settings className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6 space-y-6 pb-24">
        {/* Page Title */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-black">My SkinCheck Pro Reports</h2>
          <p className="text-gray-600 leading-relaxed">
            Track your mole scan history and view detailed reports — all in one place.
          </p>
        </div>

        {/* Reports List or Empty State */}
        {reports.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Report Cards */}
            <div className="space-y-4">
              {reports.map((report) => {
                const statusDisplay = getStatusDisplay(report.status)
                return (
                  <Card
                    key={report.id}
                    className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header with location and status */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-black text-lg">{report.location}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{report.submissionDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${statusDisplay.dotColor}`}></div>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full border ${statusDisplay.className}`}
                            >
                              {statusDisplay.text}
                            </span>
                          </div>
                        </div>

                        {/* Outcome for completed reports */}
                        {report.status === "complete" && report.outcome && (
                          <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Result:</span> {report.outcome}
                            </p>
                          </div>
                        )}

                        {/* View Report Button */}
                        <Button
                          onClick={() => handleViewReport(report.id, report.status)}
                          className="w-full bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* New Scan Nudge */}
            <Card className="bg-[#faf8f7] border border-[#e8ddd6] rounded-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#8b6f47]">Need to scan a new mole?</h3>
                  <p className="text-sm text-[#8b6f47]/80 leading-relaxed">
                    Regular monitoring helps catch changes early and gives you peace of mind.
                  </p>
                </div>
                <Button
                  onClick={handleStartNewScan}
                  className="bg-[#8b6f47] hover:bg-[#7a5f3d] text-white rounded-2xl h-12 px-8 font-medium"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Start New Scan
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex justify-around items-center">
            <button
              onClick={() => router.push("/")}
              className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-black transition-colors"
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </button>

            <button
              onClick={handleStartNewScan}
              className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-black transition-colors"
            >
              <Upload className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Submit Scan</span>
            </button>

            <button className="flex flex-col items-center py-2 px-4 text-black font-medium">
              <FileText className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">My Reports</span>
            </button>

            <button
              onClick={() => router.push("/support-faq")}
              className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-black transition-colors"
            >
              <HelpCircle className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Help</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
