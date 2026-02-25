import { Check, X, Clock, PoundSterlingIcon as Pound, Shield, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CompactComparison() {
  return (
    <Card className="border-[#ECE5DF] rounded-xl overflow-hidden">
      <div className="bg-[#4A2E1D] p-3 text-white text-center">
        <h3 className="font-semibold">Why Choose SkinCheck Pro?</h3>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 pb-2 border-b border-[#ECE5DF]">
            <div className="text-xs font-medium text-[#4A2E1D]/70"></div>
            <div className="text-xs font-medium text-[#4A2E1D]/70 text-center">Traditional</div>
            <div className="text-xs font-medium text-[#4A2E1D] text-center">SkinCheck Pro</div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center pb-2 border-b border-[#ECE5DF]">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#4A2E1D]/70" />
              <span className="text-xs font-medium text-[#4A2E1D]">Wait Time</span>
            </div>
            <div className="text-xs text-red-600 text-center">Weeks-Months</div>
            <div className="text-xs text-green-600 font-medium text-center">48 hours</div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center pb-2 border-b border-[#ECE5DF]">
            <div className="flex items-center gap-1">
              <Pound className="h-3 w-3 text-[#4A2E1D]/70" />
              <span className="text-xs font-medium text-[#4A2E1D]">Price</span>
            </div>
            <div className="text-xs text-center">£0-£300</div>
            <div className="text-xs font-medium text-center">£99</div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center pb-2 border-b border-[#ECE5DF]">
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3 text-[#4A2E1D]/70" />
              <span className="text-xs font-medium text-[#4A2E1D]">Report</span>
            </div>
            <div className="flex justify-center">
              <X className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex justify-center">
              <Check className="h-4 w-4 text-green-600" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-[#4A2E1D]/70" />
              <span className="text-xs font-medium text-[#4A2E1D]">Privacy</span>
            </div>
            <div className="flex justify-center">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex justify-center">
              <Check className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
