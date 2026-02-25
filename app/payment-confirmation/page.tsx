import Link from "next/link"
import { CheckCircle, Calendar, Bell, ArrowRight } from "lucide-react"

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] flex items-center justify-center mobile-padding py-8">
      <div className="max-w-md mx-auto text-center">
        {/* Success animation */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-full animate-soft-pulse"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <CheckCircle className="h-16 w-16 text-green-600 animate-gentle-bounce" />
          </div>
        </div>

        <h1 className="text-heading-1 text-foreground mb-4">Payment received</h1>

        <p className="text-body text-muted-foreground mb-8 leading-relaxed">
          Your image has been sent to a clinician. A GMC-registered UK doctor will review your image and respond within
          24 hours. You'll be notified when your report is ready.
        </p>

        {/* Status card */}
        <div className="card-premium p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-soft-pulse"></div>
            <span className="text-body font-medium text-foreground">Review in progress...</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-body-sm font-medium text-foreground">Expected completion</p>
                <p className="text-body-sm text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-body-sm font-medium text-foreground">Notification method</p>
                <p className="text-body-sm text-muted-foreground">Email and app notification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order reference */}
        <div className="bg-secondary rounded-2xl p-4 mb-8">
          <p className="text-body-sm text-muted-foreground">
            Order reference: <span className="font-mono text-foreground">#SC-2023-001</span>
          </p>
          <p className="text-body-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link href="/my-reports" className="btn-primary mobile-full-width flex items-center justify-center gap-2">
            Return to My Reports
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link href="/support" className="text-primary hover:underline text-body-sm">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
