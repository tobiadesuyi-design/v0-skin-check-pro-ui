import { Check, X, Clock, PoundSterlingIcon as Pound, Shield, FileText, Brain, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MobileServiceComparison() {
  const services = [
    {
      id: "nhs",
      name: "NHS Referral",
      waitTime: { value: "2-4 months", status: "negative" },
      price: { value: "Free", status: "positive" },
      gpReview: { value: true, note: "" },
      aiScan: { value: false, note: "" },
      reportSpeed: { value: "1-2 weeks", status: "negative", note: "After appointment" },
      privacy: { value: true, note: "NHS records" },
    },
    {
      id: "private",
      name: "Private Dermatologist",
      waitTime: { value: "1-3 weeks", status: "neutral" },
      price: { value: "£150-£300", status: "negative" },
      gpReview: { value: false, note: "Dermatologist only" },
      aiScan: { value: false, note: "" },
      reportSpeed: { value: "1-7 days", status: "neutral", note: "After appointment" },
      privacy: { value: true, note: "Clinic records" },
    },
    {
      id: "skincheck",
      name: "SkinCheck Pro",
      waitTime: { value: "48 hours", status: "positive" },
      price: { value: "£99", status: "neutral" },
      gpReview: { value: true, note: "UK-registered GPs" },
      aiScan: { value: true, note: "Advanced analysis" },
      reportSpeed: { value: "48 hours", status: "positive", note: "From submission" },
      privacy: { value: true, note: "End-to-end encryption" },
    },
  ]

  return (
    <div className="md:hidden">
      <Tabs defaultValue="skincheck" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="nhs">NHS</TabsTrigger>
          <TabsTrigger value="private">Private</TabsTrigger>
          <TabsTrigger value="skincheck" className="bg-[#4A2E1D] text-white data-[state=active]:bg-[#4A2E1D]">
            SkinCheck
          </TabsTrigger>
        </TabsList>

        {services.map((service) => (
          <TabsContent key={service.id} value={service.id} className="mt-0">
            <Card
              className={`border-[#ECE5DF] ${service.id === "skincheck" ? "bg-[#ECE5DF]/20 border-[#4A2E1D]/20" : ""}`}
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4 text-center">{service.name}</h3>

                <div className="space-y-4">
                  {/* Wait Time */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#ECE5DF]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">Wait Time</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        service.waitTime.status === "positive"
                          ? "text-green-600"
                          : service.waitTime.status === "negative"
                            ? "text-red-600"
                            : "text-amber-600"
                      }`}
                    >
                      {service.waitTime.value}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#ECE5DF]">
                    <div className="flex items-center gap-2">
                      <Pound className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">Price</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        service.price.status === "positive"
                          ? "text-green-600"
                          : service.price.status === "negative"
                            ? "text-red-600"
                            : "text-amber-600"
                      }`}
                    >
                      {service.price.value}
                    </span>
                  </div>

                  {/* GP Review */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#ECE5DF]">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">GP Review</span>
                    </div>
                    <div className="flex flex-col items-end">
                      {service.gpReview.value ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                      {service.gpReview.note && (
                        <span className="text-xs text-[#4A2E1D]/60">{service.gpReview.note}</span>
                      )}
                    </div>
                  </div>

                  {/* AI Scan */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#ECE5DF]">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">AI Scan</span>
                    </div>
                    <div className="flex flex-col items-end">
                      {service.aiScan.value ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                      {service.aiScan.note && <span className="text-xs text-[#4A2E1D]/60">{service.aiScan.note}</span>}
                    </div>
                  </div>

                  {/* Report Speed */}
                  <div className="flex justify-between items-center pb-2 border-b border-[#ECE5DF]">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">Report Speed</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`text-sm font-medium ${
                          service.reportSpeed.status === "positive"
                            ? "text-green-600"
                            : service.reportSpeed.status === "negative"
                              ? "text-red-600"
                              : "text-amber-600"
                        }`}
                      >
                        {service.reportSpeed.value}
                      </span>
                      {service.reportSpeed.note && (
                        <span className="text-xs text-[#4A2E1D]/60">{service.reportSpeed.note}</span>
                      )}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#4A2E1D]/70" />
                      <span className="text-sm font-medium text-[#4A2E1D]">Privacy</span>
                    </div>
                    <div className="flex flex-col items-end">
                      {service.privacy.value ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                      {service.privacy.note && (
                        <span className="text-xs text-[#4A2E1D]/60">{service.privacy.note}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
