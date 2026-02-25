"use client"

import { useState, useRef, useEffect } from "react"

interface FilterTabsProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function FilterTabs({ activeFilter, setActiveFilter }: FilterTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current
        setShowScrollIndicator(scrollWidth > clientWidth)
      }
    }

    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const filters = [
    { id: "all", label: "All" },
    { id: "urgent", label: "Urgent" },
    { id: "needs-review", label: "Needs Review" },
    { id: "completed", label: "Completed" },
    { id: "referral-made", label: "Referral Made" },
  ]

  return (
    <div className="relative">
      {/* Mobile-optimized scrollable tabs */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-2 hide-scrollbar -mx-1 px-1"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium min-h-[44px] flex items-center justify-center min-w-[80px] ${
                activeFilter === filter.id
                  ? "bg-secondary text-secondary-foreground font-semibold"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator for mobile */}
      {showScrollIndicator && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      )}
    </div>
  )
}
