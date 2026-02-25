import { PhotoQualityGuide } from "@/app/components/photo-quality-guide"

export default function PhotoGuidanceExamples() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4A2E1D] mb-8 text-center">Photo Quality Guide Examples</h1>

        <div className="space-y-8">
          {/* Standalone Component */}
          <div>
            <h2 className="text-xl font-semibold text-[#4A2E1D] mb-4">Standalone Component</h2>
            <PhotoQualityGuide />
          </div>

          {/* Compact Version */}
          <div>
            <h2 className="text-xl font-semibold text-[#4A2E1D] mb-4">Usage in Different Contexts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PhotoQualityGuide className="h-fit" />
              <div className="bg-white rounded-2xl p-6 border border-[#ECE5DF]">
                <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4">Other Content</h3>
                <p className="text-[#4A2E1D]/80">
                  This shows how the photo quality guide can be used alongside other content in various layouts and
                  contexts throughout the application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
