import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FreeLensScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8 flex flex-col">
      {/* Optional logo */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center">
          <span className="text-[#4A2E1D] font-bold text-lg">SC</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto">
        <Card className="w-full border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-8">
            {/* Illustration */}
            <div className="flex justify-center mb-6">
              <Image
                src="/placeholder.svg?height=180&width=180"
                alt="Phone lens accessory"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Title and description */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#4A2E1D] mb-3">Do you need a free lens?</h1>
              <p className="text-[#4A2E1D]/80">We'll send a clip-on lens to help you capture accurate photos.</p>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <Button asChild className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg">
                <Link href="/address-details">Yes, send me one</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full py-6 text-lg"
              >
                <Link href="/dashboard">I already have one</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Optional additional information */}
        <p className="text-sm text-[#4A2E1D]/60 mt-6 text-center">
          The lens helps capture clearer, more detailed images for better assessment.
        </p>
      </div>
    </main>
  )
}
