// This is a mock service for demo purposes
// In a real app, this would connect to a backend API

// Store credit information in localStorage for persistence across page refreshes
export const creditService = {
  // Check if user has an active credit
  hasActiveCredit: (): boolean => {
    if (typeof window === "undefined") return false

    const credits = localStorage.getItem("skincheck_credits")
    return credits !== null && Number.parseInt(credits) > 0
  },

  // Add a credit after payment
  addCredit: (): void => {
    if (typeof window === "undefined") return

    const currentCredits = localStorage.getItem("skincheck_credits")
    const newCredits = currentCredits ? Number.parseInt(currentCredits) + 1 : 1
    localStorage.setItem("skincheck_credits", newCredits.toString())
  },

  // Use a credit when submitting a scan
  useCredit: (): boolean => {
    if (typeof window === "undefined") return false

    const currentCredits = localStorage.getItem("skincheck_credits")
    if (!currentCredits || Number.parseInt(currentCredits) <= 0) return false

    const newCredits = Number.parseInt(currentCredits) - 1
    localStorage.setItem("skincheck_credits", newCredits.toString())
    return true
  },

  // Get current credit count
  getCreditCount: (): number => {
    if (typeof window === "undefined") return 0

    const credits = localStorage.getItem("skincheck_credits")
    return credits ? Number.parseInt(credits) : 0
  },
}
