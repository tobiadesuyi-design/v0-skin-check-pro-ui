import { UserCheck, Shield, EyeOff, Clock, Star } from "lucide-react"

export function CompactTrustSection() {
  return (
    <div className="bg-[#ECE5DF]/20 rounded-2xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#4A2E1D] mb-2">Your Privacy & Security</h3>
        <p className="text-[#4A2E1D]/70 text-sm">We prioritize your trust and confidentiality</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* UK GP Reviewed */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
            <UserCheck className="h-5 w-5 text-[#4A2E1D]" />
          </div>
          <div>
            <p className="font-medium text-[#4A2E1D]">UK GP Reviewed</p>
            <p className="text-[#4A2E1D]/70 text-xs">GMC-registered doctors</p>
          </div>
        </div>

        {/* Secure Image Upload */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
            <Shield className="h-5 w-5 text-[#4A2E1D]" />
          </div>
          <div>
            <p className="font-medium text-[#4A2E1D]">Secure Upload</p>
            <p className="text-[#4A2E1D]/70 text-xs">Encrypted transmission</p>
          </div>
        </div>

        {/* Private and Confidential */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
            <EyeOff className="h-5 w-5 text-[#4A2E1D]" />
          </div>
          <div>
            <p className="font-medium text-[#4A2E1D]">Confidential</p>
            <p className="text-[#4A2E1D]/70 text-xs">Your data stays private</p>
          </div>
        </div>

        {/* No NHS Waiting Times */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ECE5DF] flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-[#4A2E1D]" />
          </div>
          <div>
            <p className="font-medium text-[#4A2E1D]">No Waiting</p>
            <p className="text-[#4A2E1D]/70 text-xs">Results in 48 hours</p>
          </div>
        </div>
      </div>

      {/* Optional testimonial */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-[#4A2E1D]/80 text-sm italic">
          "The service was professional and discreet. I felt my privacy was respected throughout the process."
        </p>
        <p className="text-[#4A2E1D] text-sm font-medium mt-2">— Michael T., Manchester</p>
      </div>
    </div>
  )
}
