import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function PaymentLoading() {
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
          {/* Title */}
          <div className="text-center space-y-3">
            <Skeleton className="h-8 w-72 mx-auto" />
            <Skeleton className="h-4 w-80 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>

          {/* What's Included */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="w-10 h-10 rounded-2xl" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-56" />
                    </div>
                    <Skeleton className="w-5 h-5 rounded-full" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="grid grid-cols-2 gap-3">
                <Skeleton className="h-12" />
                <Skeleton className="h-12" />
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-6">
              <Skeleton className="h-5 w-24" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-12 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-12 w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Skeleton className="w-5 h-5 rounded" />
                <Skeleton className="h-4 w-64" />
              </div>
            </CardContent>
          </Card>

          {/* Payment Button */}
          <Skeleton className="h-14 w-full" />

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Money Back Guarantee */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <Skeleton className="h-5 w-48 mx-auto" />
                <Skeleton className="h-4 w-64 mx-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
