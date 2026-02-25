import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function LensConfirmationLoading() {
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
          {/* Title and Description */}
          <div className="text-center space-y-4">
            <Skeleton className="h-8 w-72 mx-auto" />
            <Skeleton className="h-4 w-80 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>

          {/* Lens Illustration */}
          <div className="text-center">
            <Skeleton className="w-24 h-24 rounded-3xl mx-auto" />
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="w-10 h-10 rounded-2xl" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <Skeleton className="h-14 w-full" />
        </div>
      </main>
    </div>
  )
}
