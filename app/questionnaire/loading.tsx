export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-4 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="flex-1 text-center">
          <div className="w-32 h-5 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>
      </header>

      <div className="px-6 mb-8">
        <div className="w-full h-2 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      <main className="px-6 max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-full h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="space-y-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-16 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>

        <div className="w-full h-12 bg-gray-200 rounded-full animate-pulse"></div>
      </main>
    </div>
  )
}
