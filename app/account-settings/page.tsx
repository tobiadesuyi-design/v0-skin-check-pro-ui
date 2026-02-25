"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, User, Bell, Shield, FileText, Trash2, ExternalLink, Eye, LogOut, Download } from "lucide-react"

export default function AccountSettingsPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [reminderNotifications, setReminderNotifications] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  // Form state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    mobile: "+44 7700 900123",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleBack = () => {
    router.push("/my-reports")
  }

  const handleSavePersonalInfo = () => {
    // In real app, save to backend
    alert("Personal information updated successfully!")
  }

  const handleChangePassword = () => {
    router.push("/change-password")
  }

  const handleLogoutAllDevices = () => {
    // In real app, logout from all devices
    alert("Logged out from all devices successfully!")
  }

  const handleRequestData = () => {
    // In real app, initiate data export
    alert("Your data export request has been submitted. You'll receive an email when it's ready.")
  }

  const handleDeleteAccount = () => {
    if (showDeleteConfirm) {
      // In real app, delete account
      alert("Account deletion initiated. You'll receive a confirmation email.")
      router.push("/")
    } else {
      setShowDeleteConfirm(true)
    }
  }

  const handleViewPrivacyPolicy = () => {
    // In real app, open privacy policy
    window.open("/privacy-policy", "_blank")
  }

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? "fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2 -ml-2 hover:bg-gray-50 rounded-xl touch-target"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-black tracking-tight">Account Settings</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Personal Information */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-black">Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={personalInfo.firstName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
                  className="rounded-xl border-gray-200 focus:border-black focus:ring-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={personalInfo.lastName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
                  className="rounded-xl border-gray-200 focus:border-black focus:ring-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-black focus:ring-black"
              />
              <p className="text-xs text-gray-500">Changing your email will require verification</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                Mobile Number <span className="text-gray-400">(optional)</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={personalInfo.mobile}
                onChange={(e) => setPersonalInfo({ ...personalInfo, mobile: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-black focus:ring-black"
                placeholder="+44 7700 900000"
              />
            </div>

            <Button
              onClick={handleSavePersonalInfo}
              className="w-full bg-black hover:bg-gray-800 text-white rounded-2xl h-12 font-medium"
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-black">Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium text-black">Email me when my report is ready</p>
                <p className="text-sm text-gray-600">Get notified as soon as your scan results are available</p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-black"
              />
            </div>

            <Separator className="bg-gray-100" />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium text-black">Remind me to scan again in 3 months</p>
                <p className="text-sm text-gray-600">Helpful reminders for regular skin monitoring</p>
              </div>
              <Switch
                checked={reminderNotifications}
                onCheckedChange={setReminderNotifications}
                className="data-[state=checked]:bg-black"
              />
            </div>

            <Separator className="bg-gray-100" />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium text-black">Push notifications</p>
                <p className="text-sm text-gray-600">Receive notifications on your device</p>
              </div>
              <Switch
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-black"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-black">Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleChangePassword}
              variant="outline"
              className="w-full justify-start border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
            >
              <Eye className="w-4 h-4 mr-3 text-gray-600" />
              Change Password
            </Button>

            <Button
              onClick={handleLogoutAllDevices}
              variant="outline"
              className="w-full justify-start border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-3 text-gray-600" />
              Log out of all devices
            </Button>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-black">Data & Privacy</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleViewPrivacyPolicy}
              variant="outline"
              className="w-full justify-start border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-3 text-gray-600" />
              View Privacy Policy
            </Button>

            <Button
              onClick={handleRequestData}
              variant="outline"
              className="w-full justify-start border-gray-200 hover:bg-gray-50 rounded-2xl h-12 font-medium bg-transparent"
            >
              <Download className="w-4 h-4 mr-3 text-gray-600" />
              Request my data
            </Button>

            <Separator className="bg-gray-100 my-4" />

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <h4 className="font-medium text-red-900 mb-2">Delete Account</h4>
                <p className="text-sm text-red-700 mb-3">
                  This will permanently delete your account and all associated data. This action cannot be undone.
                </p>
                {showDeleteConfirm && (
                  <div className="bg-red-100 border border-red-300 rounded-xl p-3 mb-3">
                    <p className="text-sm text-red-800 font-medium">
                      Are you sure? This will permanently delete all your reports and account data.
                    </p>
                  </div>
                )}
                <Button
                  onClick={handleDeleteAccount}
                  variant="outline"
                  className={`w-full justify-start border-red-300 text-red-700 hover:bg-red-50 rounded-2xl h-12 font-medium ${
                    showDeleteConfirm ? "bg-red-100" : ""
                  }`}
                >
                  <Trash2 className="w-4 h-4 mr-3" />
                  {showDeleteConfirm ? "Confirm Delete Account" : "Delete my account"}
                </Button>
                {showDeleteConfirm && (
                  <Button
                    onClick={() => setShowDeleteConfirm(false)}
                    variant="ghost"
                    className="w-full mt-2 text-gray-600 hover:bg-gray-50 rounded-2xl h-10"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center py-4 space-y-2">
          <p className="text-sm text-gray-500">SkinCheck Pro</p>
          <p className="text-xs text-gray-400">Version 1.0.0</p>
        </div>
      </main>
    </div>
  )
}
