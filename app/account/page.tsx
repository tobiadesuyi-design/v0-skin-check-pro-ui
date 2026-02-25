import Link from "next/link"
import { Home, MessageCircle, User, ArrowLeft, Settings, Bell, CreditCard, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AccountScreen() {
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
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Account</h1>
      </div>

      {/* Main Content */}
      <div className="px-6 py-4">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                <User className="h-8 w-8 text-[#4A2E1D]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#4A2E1D]">John Smith</h2>
                <p className="text-[#4A2E1D]/70">john.smith@example.com</p>
              </div>
            </div>
            <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full">Edit Profile</Button>
          </CardContent>
        </Card>

        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-[#4A2E1D] mb-4">Account Settings</h2>
            <div className="space-y-4">
              <Link href="#" className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-[#4A2E1D] mr-3" />
                  <span>Preferences</span>
                </div>
                <span className="text-[#4A2E1D]/60">→</span>
              </Link>
              <Separator className="bg-[#ECE5DF]" />
              <Link href="#" className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-[#4A2E1D] mr-3" />
                  <span>Notifications</span>
                </div>
                <span className="text-[#4A2E1D]/60">→</span>
              </Link>
              <Separator className="bg-[#ECE5DF]" />
              <Link href="#" className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-[#4A2E1D] mr-3" />
                  <span>Payment Methods</span>
                </div>
                <span className="text-[#4A2E1D]/60">→</span>
              </Link>
              <Separator className="bg-[#ECE5DF]" />
              <Link href="#" className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-[#4A2E1D] mr-3" />
                  <span>Help & Support</span>
                </div>
                <span className="text-[#4A2E1D]/60">→</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full flex items-center justify-center gap-2"
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ECE5DF] py-2 px-4">
        <div className="flex justify-around items-center">
          <Link href="/dashboard" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D]/60">
            <Home className="h-6 w-6 mb-1" />
            <span className="text-xs">Home</span>
          </Link>

          <Link href="/support" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D]/60">
            <MessageCircle className="h-6 w-6 mb-1" />
            <span className="text-xs">Support</span>
          </Link>

          <Link href="/account" className="flex flex-col items-center py-2 px-4 text-[#4A2E1D] font-medium">
            <User className="h-6 w-6 mb-1" />
            <span className="text-xs">Account</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}
