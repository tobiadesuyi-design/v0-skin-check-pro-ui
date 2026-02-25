import Link from "next/link"
import { Home, MessageCircle, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] pb-20">
      {/* Header with back button */}
      <div className="flex items-center px-6 py-4 shadow-sm">
        <Link href="/dashboard" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Support</h1>
      </div>

      {/* Main Content */}
      <div className="px-6 py-4">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Need help?</h2>
            <p className="text-[#4A2E1D]/80 mb-4">
              Our support team is available to assist you with any questions or concerns about your mole checks.
            </p>
            <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6">
              Contact Support
            </Button>
          </CardContent>
        </Card>

        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#4A2E1D]">How long does a review take?</h3>
                <p className="text-[#4A2E1D]/80">Most reviews are completed within 24-48 hours.</p>
              </div>
              <div>
                <h3 className="font-medium text-[#4A2E1D]">How do I take a good photo?</h3>
                <p className="text-[#4A2E1D]/80">
                  Use the provided lens in good lighting. Make sure the mole is centered and in focus.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#4A2E1D]">What happens after my review?</h3>
                <p className="text-[#4A2E1D]/80">
                  You'll receive a notification when your report is ready. If needed, we'll recommend next steps.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ECE5DF] py-2 px-4">
        <div className="flex justify-around items-center">
          <Link href="/dashboard" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D]/60">
            <Home className="h-6 w-6 mb-1" />
            <span className="text-xs">Home</span>
          </Link>

          <Link href="/support" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D] font-medium">
            <MessageCircle className="h-6 w-6 mb-1" />
            <span className="text-xs">Support</span>
          </Link>

          <Link href="/account" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D]/60">
            <User className="h-6 w-6 mb-1" />
            <span className="text-xs">Account</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}
