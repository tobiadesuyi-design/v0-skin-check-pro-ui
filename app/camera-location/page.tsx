import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CameraLocationScreen() {
  return (
    <main className="min-h-screen bg-[#fdf4f2] px-6 py-8 flex flex-col">
      {/* Optional logo */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#ECE5DF] flex items-center justify-center">
          <span className="text-[#4A2E1D] font-bold text-lg">SC</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#4A2E1D] mb-6 text-center">Where is your camera located?</h1>
        <p className="text-[#4A2E1D]/80 mb-8 text-center">We'll send you the right lens attachment for your phone.</p>

        {/* Camera location options */}
        <div className="w-full space-y-6">
          <Button
            asChild
            variant="outline"
            className="w-full h-auto border-2 border-[#ECE5DF] hover:border-[#4A2E1D] hover:bg-[#ECE5DF]/30 bg-white text-[#4A2E1D] rounded-2xl p-6 flex flex-col items-center"
          >
            <Link href="/lens-confirmation?position=center">
              <div className="w-full flex flex-col items-center">
                {/* Phone with center camera illustration */}
                <div className="relative w-40 h-64 mb-4 border-2 border-[#4A2E1D] rounded-3xl flex justify-center">
                  <div className="absolute top-3 w-20 h-6 bg-[#4A2E1D] rounded-full"></div>
                  <div className="absolute top-4 w-3 h-3 bg-[#fdf4f2] rounded-full"></div>
                </div>
                <span className="font-medium text-lg">Top centre</span>
              </div>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full h-auto border-2 border-[#ECE5DF] hover:border-[#4A2E1D] hover:bg-[#ECE5DF]/30 bg-white text-[#4A2E1D] rounded-2xl p-6 flex flex-col items-center"
          >
            <Link href="/lens-confirmation?position=left">
              <div className="w-full flex flex-col items-center">
                {/* Phone with left camera illustration */}
                <div className="relative w-40 h-64 mb-4 border-2 border-[#4A2E1D] rounded-3xl flex justify-center">
                  <div className="absolute top-3 left-6 w-10 h-6 bg-[#4A2E1D] rounded-full"></div>
                  <div className="absolute top-4 left-8 w-3 h-3 bg-[#fdf4f2] rounded-full"></div>
                </div>
                <span className="font-medium text-lg">Top left</span>
              </div>
            </Link>
          </Button>
        </div>

        {/* Help text */}
        <p className="text-sm text-[#4A2E1D]/60 mt-8 text-center">
          Not sure? Most newer phones have the camera in the center.
        </p>
      </div>
    </main>
  )
}
