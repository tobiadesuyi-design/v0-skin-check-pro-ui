import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function SignUpScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#4A2E1D] text-center">Create your account</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <Card className="w-full max-w-md border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#4A2E1D] font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#4A2E1D] font-medium">
                Create Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="rounded-xl border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
              />

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#4A2E1D]/70">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>8+ characters</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4A2E1D]/70">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>At least 1 number or special character</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg">
              Continue
            </Button>
          </CardContent>
        </Card>

        <p className="text-sm text-[#4A2E1D]/80 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  )
}
