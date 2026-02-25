import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart } from "lucide-react"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"

export default function PhotoUploadLoading() {
  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
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
                <h1 className="text-xl font-semibold text-foreground">SkinCheck Pro</h1>
                <p className="text-sm text-muted-foreground">Step 3 of 4</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto px-6 py-4">
        <Progress value={75} className="h-2" />
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title and Instructions */}
          <div className="text-center space-y-4">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
          </div>

          {/* Requirements Card */}
          <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Skeleton className="w-10 h-10 rounded-2xl" />
                <div className="space-y-3 flex-1">
                  <Skeleton className="h-5 w-32" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Makes a Good Photo Section */}
          <div className="space-y-6">
            <Skeleton className="h-6 w-48 mx-auto" />

            {/* Good vs Bad Examples */}
            <div className="grid grid-cols-2 gap-4">
              {/* Good Example */}
              <Card className="bg-white border-green-200">
                <CardContent className="p-4 space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="aspect-square rounded-xl" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </CardContent>
              </Card>

              {/* Bad Example */}
              <Card className="bg-white border-red-200">
                <CardContent className="p-4 space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="aspect-square rounded-xl" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tip Card */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Skeleton className="w-8 h-8 rounded-2xl" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upload Section */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-6">
              <div className="border-2 border-dashed border-skin-beige rounded-3xl p-8 text-center">
                <div className="space-y-4">
                  <Skeleton className="w-16 h-16 rounded-3xl mx-auto" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32 mx-auto" />
                    <Skeleton className="h-4 w-48 mx-auto" />
                  </div>
                  <Skeleton className="h-12 w-32 mx-auto" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Skeleton className="h-14 w-full" />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
