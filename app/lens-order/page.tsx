import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LensOrderPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2]">
      <div className="container px-4 py-12 flex flex-col items-center">
        <Card className="max-w-md w-full shadow-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#4A2E1D] mb-4">Get Your Complimentary Lens</h1>
              <p className="text-[#1E1E1E]">
                We'll send you a clip-on lens to help capture dermatologist-quality images
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Hand holding clip-on lens"
                width={200}
                height={200}
                className="max-w-full h-auto"
              />
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6 text-lg">
                <Link href="/payment">Order My Lens</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full py-6 text-lg"
              >
                <Link href="/payment">I Already Have a Lens</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
