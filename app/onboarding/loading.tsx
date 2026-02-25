import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function OnboardingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Header Skeleton */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-neutral-200 rounded animate-pulse" />
              <div className="w-12 h-4 bg-neutral-200 rounded animate-pulse" />
            </div>
            <div className="w-20 h-4 bg-neutral-200 rounded animate-pulse" />
          </div>
          <Progress value={20} className="h-2" />
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Question Skeleton */}
          <div className="text-center space-y-4">
            <div className="w-3/4 h-12 bg-neutral-200 rounded-lg mx-auto animate-pulse" />
            <div className="w-1/2 h-6 bg-neutral-200 rounded mx-auto animate-pulse" />
          </div>

          {/* Options Skeleton */}
          <div className="max-w-2xl mx-auto space-y-4">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="w-3/4 h-6 bg-neutral-200 rounded animate-pulse" />
                    <div className="w-6 h-6 bg-neutral-200 rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Button Skeleton */}
          <div className="text-center pt-8">
            <div className="w-48 h-14 bg-neutral-200 rounded-2xl mx-auto animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
}
