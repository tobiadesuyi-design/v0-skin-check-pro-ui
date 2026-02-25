"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Plus, Clock, CheckCircle, FileText, Calendar, Settings, Eye, Heart, ArrowRight } from "lucide-react"

interface Submission {
  id: string
  referenceNumber: string
  submittedAt: string
  status: "pending" | "in-review" | "completed"
  type: "mole-analysis"
  photos: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    setIsLoaded(true)

    // Load submissions from localStorage
    const currentSubmission = JSON.parse(localStorage.getItem("skincheck_submission") || "null")

    const mockSubmissions: Submission[] = [
      // Current submission
      ...(currentSubmission
        ? [
            {
              id: "1",
              referenceNumber: currentSubmission.referenceNumber,
              submittedAt: currentSubmission.submittedAt,
              status: "pending" as const,
              type: "mole-analysis" as const,
              photos: currentSubmission.photos?.length || 1,
            },
          ]
        : []),
      // Mock previous submissions
      {
        id: "2",
        referenceNumber: "SC789123",
        submittedAt: "2024-01-15T10:30:00Z",
        status: "completed",
        type: "mole-analysis",
        photos: 2,
      },
      {
        id: "3",
        referenceNumber: "SC456789",
        submittedAt: "2024-01-10T14:20:00Z",
        status: "completed",
        type: "mole-analysis",
        photos: 3,
      },
    ]

    setSubmissions(mockSubmissions)
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending Review</Badge>
      case "in-review":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Review</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />
      case "in-review":
        return <FileText className="w-5 h-5 text-blue-600" />
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleNewSubmission = () => {
    router.push("/")
  }

  const handleViewReport = (submissionId: string) => {
    router.push(`/report-detail/${submissionId}`)
  }

  const pendingCount = submissions.filter((s) => s.status === "pending" || s.status === "in-review").length
  const completedCount = submissions.filter((s) => s.status === "completed").length

  return (
    <div className={`min-h-screen bg-skin-pearl pb-20 md:pb-0 ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-background" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Your Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage your skin health</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="touch-target">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-white border-skin-beige">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 bg-skin-blush rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="w-5 h-5 text-skin-deep" />
                </div>
                <div className="text-xl font-bold text-foreground">{submissions.length}</div>
                <div className="text-xs text-muted-foreground">Total</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-skin-beige">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-xl font-bold text-foreground">{pendingCount}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-skin-beige">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-xl font-bold text-foreground">{completedCount}</div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <Button size="full" onClick={handleNewSubmission} className="group h-12 justify-start">
                  <Plus className="w-4 h-4 mr-3" />
                  <span>New Mole Check</span>
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="full" className="h-12 justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Schedule Follow-up</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Submissions */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Your Submissions</h3>

              {submissions.length === 0 ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-skin-cream rounded-3xl flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-skin-deep" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">No submissions yet</h4>
                    <p className="text-sm text-muted-foreground">Start your first mole analysis</p>
                  </div>
                  <Button onClick={handleNewSubmission} className="h-12">
                    <Plus className="w-4 h-4 mr-2" />
                    Start Assessment
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((submission) => (
                    <Card
                      key={submission.id}
                      className="border border-skin-beige hover:border-skin-tan transition-all duration-200"
                    >
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              {getStatusIcon(submission.status)}
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-medium text-foreground text-sm">#{submission.referenceNumber}</h4>
                                  {getStatusBadge(submission.status)}
                                </div>
                                <div className="space-y-1">
                                  <p className="text-xs text-muted-foreground">{formatDate(submission.submittedAt)}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {submission.photos} photo{submission.photos !== 1 ? "s" : ""}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {submission.status === "completed" && (
                            <Button
                              size="sm"
                              onClick={() => handleViewReport(submission.id)}
                              className="w-full h-10 text-sm"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Report
                            </Button>
                          )}

                          {submission.status === "pending" && (
                            <div className="text-center">
                              <p className="text-sm text-yellow-600 font-medium">Review in progress...</p>
                              <p className="text-xs text-muted-foreground">Results within 24-48 hours</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-blue-900">Need Support?</h3>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      Our team is here to help with any questions about your submissions or skin health.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-700 border-blue-300 hover:bg-blue-100 bg-transparent h-10"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
