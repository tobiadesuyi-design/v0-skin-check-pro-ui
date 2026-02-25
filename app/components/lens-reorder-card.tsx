import Link from "next/link"
import { Camera } from "lucide-react"

export function LensReorderCard() {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 overflow-hidden mobile-card">
      <div className="p-4 md:p-4">
        <div className="flex flex-col">
          <h3 className="font-medium text-foreground mb-1">Need a new lens?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Reorder your SkinCheck Pro lens for better image quality.
          </p>
          <Link
            href="/lens-order"
            className="flex items-center justify-center h-11 px-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <Camera className="w-4 h-4 mr-2" />
            Reorder Lens
          </Link>
        </div>
      </div>
    </div>
  )
}
