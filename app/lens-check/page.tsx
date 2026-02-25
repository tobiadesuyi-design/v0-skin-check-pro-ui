import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function LensCheckScreen() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6 overflow-hidden">
          <CardContent className="p-6 text-center">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=180&width=180&text=Lens+Image"
                alt="Smartphone lens attachment"
                width={180}
                height={180}
                className="mx-auto"
              />
            </div>

            <h1 className="text-2xl font-bold text-[#4A2E1D] mb-4">Do you already have your lens?</h1>

            <p className="text-[#4A2E1D]/80 mb-8">
              Our clip-on lens helps capture clear, detailed images of your mole for better assessment.
            </p>

            <div className="space-y-4">
              <Button asChild className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg">
                <Link href="/complete-scan-payment">Yes, I have one</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full py-6 text-lg"
              >
                <Link href="/lens-address">No, send me a free lens</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-[#4A2E1D]/70">
          <p>The lens helps capture dermatologist-quality images for more accurate assessment.</p>
        </div>
      </div>
    </main>
  )
}
