"use client"

import { useRouter, usePathname } from "next/navigation"
import { Home, Upload, FileText, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    {
      icon: Home,
      label: "Home",
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      icon: Upload,
      label: "New Scan",
      href: "/",
      isActive: pathname === "/" || pathname.startsWith("/onboarding") || pathname.startsWith("/photo-upload"),
    },
    {
      icon: FileText,
      label: "My Reports",
      href: "/my-reports",
      isActive: pathname === "/my-reports" || pathname.startsWith("/report-viewer"),
    },
    {
      icon: HelpCircle,
      label: "Help",
      href: "/support-faq",
      isActive: pathname === "/support-faq" || pathname.startsWith("/support"),
    },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-skin-beige z-50">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "flex flex-col items-center py-2 px-3 rounded-2xl transition-all duration-200 touch-target",
                  item.isActive
                    ? "bg-skin-blush text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-skin-cream",
                )}
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
