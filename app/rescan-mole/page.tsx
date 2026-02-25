import Link from "next/link"
import { ArrowLeft, Camera, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RescanMolePage() {
  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/need-help" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Rescan Your Mole</h1>
      </div>

      <div className="px-6 py-6">
        {/* Introduction */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#4A2E1D] mb-3">Get a Fresh Assessment</h2>
          <p className="text-[#4A2E1D]/80 leading-relaxed">
            If you think your original photos weren't clear enough, you can submit new images of the same mole for a
            fresh professional review.
          </p>
        </div>

        {/* Why Rescan */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-[#4A2E1D]" />
              When to Consider a Rescan
            </h3>
            <div className="space-y-3 text-[#4A2E1D]/80">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>Your original photos were blurry or out of focus</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>The lighting wasn't good enough to see details clearly</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>The mole wasn't properly centered in the frame</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>You didn't use the magnifying lens for close-up shots</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You'll Need */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-[#4A2E1D]" />
              What You'll Need
            </h3>
            <div className="space-y-3 text-[#4A2E1D]/80">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>Your SkinCheck Pro magnifying lens (if you have one)</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>Good natural lighting or a bright lamp</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>A steady hand or someone to help take the photos</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4A2E1D] rounded-full mt-2 flex-shrink-0"></div>
                <p>About 5-10 minutes of your time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Info */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm mb-8">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-[#4A2E1D]">Free</span>
              <span className="text-[#4A2E1D]/70 ml-2">rescan within 30 days</span>
            </div>
            <p className="text-[#4A2E1D]/80 text-sm">
              No additional charge for rescanning the same mole within 30 days of your original submission
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-4 text-lg font-semibold flex items-center justify-center"
            asChild
          >
            <Link href="/photo-capture">
              <Camera className="h-5 w-5 mr-2" />
              Start New Scan
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full py-3 bg-transparent"
            asChild
          >
            <Link href="/photo-instructions">Review Photo Guidelines</Link>
          </Button>
        </div>

        {/* Help Note */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-6 border border-[#ECE5DF] shadow-sm">
            <p className="text-[#4A2E1D]/80 leading-relaxed">
              <strong className="text-[#4A2E1D]">Need your lens?</strong> If you don't have your SkinCheck Pro lens, you
              can{" "}
              <Link href="/lens-order" className="text-[#4A2E1D] font-medium underline">
                order a replacement
              </Link>{" "}
              or take photos without it (though the lens provides better image quality).
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
