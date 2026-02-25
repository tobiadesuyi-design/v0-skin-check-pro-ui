import { UserCheck, Shield, EyeOff, Clock } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {/* UK GP Reviewed */}
      <div className="flex items-center gap-2 bg-[#ECE5DF]/30 px-4 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
          <UserCheck className="h-4 w-4 text-[#4A2E1D]" />
        </div>
        <span className="text-sm font-medium text-[#4A2E1D]">UK GP Reviewed</span>
      </div>

      {/* Secure Image Upload */}
      <div className="flex items-center gap-2 bg-[#ECE5DF]/30 px-4 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
          <Shield className="h-4 w-4 text-[#4A2E1D]" />
        </div>
        <span className="text-sm font-medium text-[#4A2E1D]">Secure Image Upload</span>
      </div>

      {/* Private and Confidential */}
      <div className="flex items-center gap-2 bg-[#ECE5DF]/30 px-4 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
          <EyeOff className="h-4 w-4 text-[#4A2E1D]" />
        </div>
        <span className="text-sm font-medium text-[#4A2E1D]">Private & Confidential</span>
      </div>

      {/* No NHS Waiting Times */}
      <div className="flex items-center gap-2 bg-[#ECE5DF]/30 px-4 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
          <Clock className="h-4 w-4 text-[#4A2E1D]" />
        </div>
        <span className="text-sm font-medium text-[#4A2E1D]">No NHS Waiting Times</span>
      </div>
    </div>
  )
}
