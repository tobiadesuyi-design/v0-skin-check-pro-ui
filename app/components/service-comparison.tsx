import { Check, X, Clock, PoundSterlingIcon as Pound, Shield, FileText, Brain, User } from "lucide-react"

export function ServiceComparison() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[640px]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left bg-[#ECE5DF]/50 border-b border-[#ECE5DF] rounded-tl-xl"></th>
              <th className="p-4 text-center bg-[#ECE5DF]/50 border-b border-[#ECE5DF] text-[#4A2E1D]">NHS Referral</th>
              <th className="p-4 text-center bg-[#ECE5DF]/50 border-b border-[#ECE5DF] text-[#4A2E1D]">
                Private Dermatologist
              </th>
              <th className="p-4 text-center bg-[#4A2E1D] text-white border-b border-[#4A2E1D] rounded-tr-xl">
                SkinCheck Pro
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Wait Time */}
            <tr className="border-b border-[#ECE5DF]">
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>Wait Time</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <span className="text-red-600 font-medium">2-4 months</span>
              </td>
              <td className="p-4 text-center">
                <span className="text-amber-600 font-medium">1-3 weeks</span>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20">
                <span className="text-green-600 font-medium">48 hours</span>
              </td>
            </tr>

            {/* Price */}
            <tr className="border-b border-[#ECE5DF]">
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50">
                <div className="flex items-center gap-2">
                  <Pound className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>Price</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <span className="text-green-600 font-medium">Free</span>
              </td>
              <td className="p-4 text-center">
                <span className="text-red-600 font-medium">£150-£300</span>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20">
                <span className="text-amber-600 font-medium">£99</span>
              </td>
            </tr>

            {/* GP Review */}
            <tr className="border-b border-[#ECE5DF]">
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>GP Review</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">Dermatologist only</span>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">UK-registered GPs</span>
              </td>
            </tr>

            {/* AI Scan */}
            <tr className="border-b border-[#ECE5DF]">
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>AI Scan</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">Advanced analysis</span>
              </td>
            </tr>

            {/* Report Speed */}
            <tr className="border-b border-[#ECE5DF]">
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>Report Speed</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <span className="text-red-600 font-medium">1-2 weeks</span>
                <div className="text-xs text-[#4A2E1D]/60">After appointment</div>
              </td>
              <td className="p-4 text-center">
                <span className="text-amber-600 font-medium">1-7 days</span>
                <div className="text-xs text-[#4A2E1D]/60">After appointment</div>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20">
                <span className="text-green-600 font-medium">48 hours</span>
                <div className="text-xs text-[#4A2E1D]/60">From submission</div>
              </td>
            </tr>

            {/* Privacy */}
            <tr>
              <td className="p-4 font-medium text-[#4A2E1D] bg-[#FAF6F2]/50 rounded-bl-xl">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#4A2E1D]/70" />
                  <span>Privacy</span>
                </div>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">NHS records</span>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">Clinic records</span>
              </td>
              <td className="p-4 text-center bg-[#ECE5DF]/20 rounded-br-xl">
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-[#4A2E1D]/60">End-to-end encryption</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
