import { AlertCircle, Clock, CheckCircle, FileText } from "lucide-react"

interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let color = ""
  let bgColor = ""
  let icon = null
  let label = ""

  switch (status) {
    case "urgent":
      color = "text-red-700"
      bgColor = "bg-red-50"
      icon = <AlertCircle className="w-4 h-4 mr-1" />
      label = "Urgent"
      break
    case "needs-review":
      color = "text-orange-700"
      bgColor = "bg-orange-50"
      icon = <Clock className="w-4 h-4 mr-1" />
      label = "Needs Review"
      break
    case "completed":
      color = "text-green-700"
      bgColor = "bg-green-50"
      icon = <CheckCircle className="w-4 h-4 mr-1" />
      label = "Completed"
      break
    case "referral-made":
      color = "text-brown-700"
      bgColor = "bg-brown-50"
      icon = <FileText className="w-4 h-4 mr-1" />
      label = "Referral Made"
      break
    default:
      color = "text-gray-700"
      bgColor = "bg-gray-100"
      label = status
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${color} ${bgColor}`}>
      {icon}
      {label}
    </span>
  )
}
