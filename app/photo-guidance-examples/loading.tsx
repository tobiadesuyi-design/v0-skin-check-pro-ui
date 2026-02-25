export default function Loading() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 bg-[#ECE5DF] rounded-lg mb-8 animate-pulse" />

        <div className="space-y-8">
          <div>
            <div className="h-6 bg-[#ECE5DF] rounded-lg mb-4 w-48 animate-pulse" />
            <div className="bg-white rounded-2xl p-6 border border-[#ECE5DF]">
              <div className="h-32 bg-[#ECE5DF] rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
