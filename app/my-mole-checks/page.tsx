"use client"

import { useState } from "react"
import { FilterTabs } from "../components/filter-tabs"
import { MoleCheckCard } from "../components/mole-check-card"
import { LensReorderCard } from "../components/lens-reorder-card"

export default function MyMoleChecksPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample data
  const moleChecks = [
    {
      id: "1",
      date: "15 May 2023",
      bodyPart: "Upper Back",
      status: "urgent",
      imageUrl: "/placeholder-f54em.png",
    },
    {
      id: "2",
      date: "3 April 2023",
      bodyPart: "Left Arm",
      status: "needs-review",
      imageUrl: "/skin-check.png",
    },
    {
      id: "3",
      date: "27 February 2023",
      bodyPart: "Right Leg",
      status: "completed",
      imageUrl: "/dermatology-concept.png",
    },
    {
      id: "4",
      date: "15 January 2023",
      bodyPart: "Chest",
      status: "referral-made",
      imageUrl: "/placeholder-m8n1o.png",
    },
  ]

  return (
    <div className="pb-8 w-full max-w-full">
      <header className="px-4 py-6 border-b mb-6">
        <h1 className="text-2xl font-bold text-primary">My Mole Checks</h1>
        <p className="text-sm text-muted-foreground mt-1">Track and manage your skin check history</p>
      </header>

      <div className="px-4 md:px-6 max-w-full">
        {/* Filter tabs with mobile-specific spacing */}
        <div className="mb-6 md:mb-6">
          <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        {/* Mobile-specific spacing between sections */}
        <div className="space-y-0 md:space-y-0">
          {/* Lens card with mobile-specific spacing */}
          <div className="mb-6 md:mb-6">
            <LensReorderCard />
          </div>

          {/* Mole check cards with mobile-specific spacing */}
          <div className="space-y-6 md:space-y-4">
            {moleChecks
              .filter((check) => activeFilter === "all" || check.status === activeFilter)
              .map((check) => (
                <MoleCheckCard
                  key={check.id}
                  date={check.date}
                  bodyPart={check.bodyPart}
                  status={check.status}
                  imageUrl={check.imageUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
