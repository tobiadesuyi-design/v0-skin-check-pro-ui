import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Building2 } from "lucide-react"

export default function UserTypeScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8 flex flex-col">
      {/* Optional header with logo */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center">
          <span className="text-[#4A2E1D] font-bold text-lg">SC</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-8">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Healthcare professional"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Title and subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4A2E1D] mb-2">What type of user are you?</h1>
        <p className="text-[#4A2E1D]/80 max-w-md mx-auto">
          Our service can be used by individuals in their own home or by clinics.
        </p>
      </div>

      {/* User type buttons */}
      <div className="flex-1 flex flex-col items-center justify-start">
        <div className="w-full max-w-md space-y-4">
          <Button
            asChild
            variant="outline"
            className="w-full bg-white hover:bg-[#ECE5DF] border-2 border-[#ECE5DF] text-[#4A2E1D] rounded-2xl py-8 flex items-center justify-start px-6 shadow-sm"
          >
            <Link href="/signup?type=home" className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                <Home className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="text-left">
                <span className="text-lg font-semibold">I'm a home user</span>
                <p className="text-sm text-[#4A2E1D]/70 mt-1">For personal skin checks and monitoring</p>
              </div>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full bg-white hover:bg-[#ECE5DF] border-2 border-[#ECE5DF] text-[#4A2E1D] rounded-2xl py-8 flex items-center justify-start px-6 shadow-sm"
          >
            <Link href="/signup?type=clinic" className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center mr-4">
                <Building2 className="h-6 w-6 text-[#4A2E1D]" />
              </div>
              <div className="text-left">
                <span className="text-lg font-semibold">I'm a clinic</span>
                <p className="text-sm text-[#4A2E1D]/70 mt-1">For healthcare professionals and practices</p>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
