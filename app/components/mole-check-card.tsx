import Link from "next/link"
import Image from "next/image"
import { StatusBadge } from "./status-badge"

interface MoleCheckCardProps {
  date: string
  bodyPart: string
  status: string
  imageUrl: string
}

export function MoleCheckCard({ date, bodyPart, status, imageUrl }: MoleCheckCardProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card mobile-card">
      <div className="p-4 md:p-4 flex flex-col h-full">
        {/* Top metadata with proper mobile spacing */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
            <Image src={imageUrl || "/placeholder.svg"} alt={`Mole on ${bodyPart}`} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">{date}</span>
              <span className="font-medium text-foreground mb-3">{bodyPart}</span>
              <StatusBadge status={status} />
            </div>
          </div>
        </div>

        {/* Spacer to push the button to the bottom on mobile */}
        <div className="flex-grow min-h-[12px]"></div>

        {/* View Report link with proper mobile tap target and positioning */}
        <Link
          href={`/report-detail/${encodeURIComponent(bodyPart)}`}
          className="block w-full text-center py-3 px-4 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors mt-3 min-h-[44px] flex items-center justify-center"
        >
          View Report
        </Link>
      </div>
    </div>
  )
}
