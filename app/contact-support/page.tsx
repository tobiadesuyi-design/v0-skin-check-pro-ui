"use client"

import Link from "next/link"
import { ArrowLeft, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/support-faq" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back to FAQ</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-[#4A2E1D]">Contact Support</h1>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Response Time Info */}
          <Card className="border-[#ECE5DF] mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex items-center gap-2 text-[#4A2E1D]">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Response Time</span>
                </div>
                <div className="text-[#4A2E1D]/80">
                  We typically respond within 2 hours during business hours (9am-6pm, Mon-Fri)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-[#ECE5DF]">
            <CardHeader>
              <CardTitle className="text-[#4A2E1D]">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#4A2E1D] font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#4A2E1D] font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#4A2E1D] font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[#4A2E1D] font-medium">
                  What can we help you with?
                </Label>
                <Select>
                  <SelectTrigger className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scan-question">Question about my scan</SelectItem>
                    <SelectItem value="report-help">Help understanding my report</SelectItem>
                    <SelectItem value="photo-quality">Photo quality issues</SelectItem>
                    <SelectItem value="account-issue">Account or billing issue</SelectItem>
                    <SelectItem value="technical-problem">Technical problem</SelectItem>
                    <SelectItem value="general-inquiry">General inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#4A2E1D] font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Please describe your question or issue in detail..."
                  rows={5}
                  className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scanId" className="text-[#4A2E1D] font-medium">
                  Scan ID (if applicable)
                </Label>
                <Input
                  id="scanId"
                  placeholder="e.g. SC-2024-001234"
                  className="border-[#ECE5DF] focus:border-[#4A2E1D] focus:ring-[#4A2E1D]"
                />
                <p className="text-sm text-[#4A2E1D]/70">You can find your Scan ID in your report or dashboard</p>
              </div>

              <Button className="w-full bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full py-6">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="border-[#ECE5DF]">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-[#4A2E1D] mb-2">Urgent Medical Concerns</h3>
                <p className="text-sm text-[#4A2E1D]/80 mb-3">For urgent health matters, contact your GP or NHS 111</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:111">Call NHS 111</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#ECE5DF]">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-[#4A2E1D] mb-2">Phone Support</h3>
                <p className="text-sm text-[#4A2E1D]/80 mb-3">Mon-Fri, 9am-6pm</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#4A2E1D] hover:text-white rounded-full bg-transparent"
                  asChild
                >
                  <a href="tel:+442071234567">020 7123 4567</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
