import { Card, CardContent } from "@/components/ui/card"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Header Skeleton */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-neutral-200 rounded-xl animate-pulse" />
              <div>
                <div className="w-32 h-8 bg-neutral-200 rounded animate-pulse mb-2" />
                <div className="w-48 h-4 bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 h-8 bg-neutral-200 rounded animate-pulse" />
              <div className="w-20 h-8 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Stats Overview Skeleton */}
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-neutral-200 rounded-2xl mx-auto animate-pulse" />
                  <div>
                    <div className="w-8 h-8 bg-neutral-200 rounded mx-auto mb-2 animate-pulse" />
                \
