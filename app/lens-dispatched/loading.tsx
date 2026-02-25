import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function LensDispatchedLoading() {
  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-background" />
              </div>
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Success Animation */}
          <div className="text-center space-y-6">
            <Skeleton className="w-24 h-24 rounded-3xl mx-auto" />
            <div className="space-y-3">
              <Skeleton className="h-8 w-64 mx-auto" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-72 mx-auto" />
                <Skeleton className="h-4 w-64 mx-auto" />
                <Skeleton className="h-4 w-80 mx-auto" />
              </div>
            </div>
          </div>

          {/* Order Details */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-5 w-40" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Skeleton className="w-10 h-10 rounded-2xl flex-shrink-0" />
                    <div className="space-y-1 flex-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>

          {/* Email Reminder */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Skeleton className="w-10 h-10 rounded-2xl flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-80" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
