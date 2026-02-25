"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface HomeButtonProps {
  variant?: "desktop" | "mobile"
  className?: string
}

export function HomeButton({ variant = "desktop", className }: HomeButtonProps) {
  const router = useRouter()

  const handleHomeClick = () => {
    router.push("/dashboard")
  }

  if (variant === "mobile") {
    return null // Mobile version is handled by BottomNav
  }

  return (
    <Button
      onClick={handleHomeClick}
      variant="outline"
      size="sm"
      className={cn(
        "fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm border-skin-beige hover:bg-skin-cream hover:border-skin-tan shadow-sm",
        "h-10 px-4 rounded-2xl font-medium text-foreground",
        "transition-all duration-200 hover:scale-105",
        className,
      )}
    >
      <Home className="w-4 h-4 mr-2" />
      Home
    </Button>
  )
}
