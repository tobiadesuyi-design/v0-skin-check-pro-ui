import Link from "next/link"
import Image from "next/image"
import { User, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AccountTypeScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8">
      {/* Optional logo */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center">
          <span className="text-[#4A2E1D] font-bold text-lg">SC</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            {/* Title and subtitle */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-[#4A2E1D] mb-2">What type of user are you?</h1>
              <p className="text-[#4A2E1D]/80">Choose who this account is for.</p>
            </div>

            {/* User type selection */}
            <div className="space-y-4">
              <Link href="/signup?type=home" className="block">
                <Card className="border-2 border-[#ECE5DF] hover:border-[#4A2E1D] transition-colors rounded-2xl shadow-sm">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-[#4A2E1D]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#4A2E1D]">I'm a home user</h2>
                      <p className="text-sm text-[#4A2E1D]/70">For personal skin checks and monitoring</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/signup?type=clinic" className="block">
                <Card className="border-2 border-[#ECE5DF] hover:border-[#4A2E1D] transition-colors rounded-2xl shadow-sm">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                      <Building2 className="h-6 w-6 text-[#4A2E1D]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#4A2E1D]">I'm a clinic or professional</h2>
                      <p className="text-sm text-[#4A2E1D]/70">For healthcare providers and practices</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Illustration - shows above on mobile, to the right on desktop */}
          <div className="order-first md:order-last md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Healthcare professional"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
