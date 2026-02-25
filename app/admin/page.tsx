"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function AdminPage() {
  const [showOnlyUnreviewed, setShowOnlyUnreviewed] = useState(false)
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      date: "May 12, 2025",
      status: "unreviewed",
      statusText: "Unreviewed",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      date: "May 11, 2025",
      status: "unreviewed",
      statusText: "Unreviewed",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      date: "May 10, 2025",
      status: "reviewed",
      statusText: "Reviewed",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma@example.com",
      date: "May 9, 2025",
      status: "reviewed",
      statusText: "Reviewed",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david@example.com",
      date: "May 8, 2025",
      status: "reviewed",
      statusText: "Reviewed",
    },
  ])

  const filteredSubmissions = showOnlyUnreviewed
    ? submissions.filter((sub) => sub.status === "unreviewed")
    : submissions

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#4A2E1D] mb-8">Admin Dashboard</h1>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1E1E1E]/60" />
            <Input placeholder="Search submissions..." className="pl-10 rounded-lg border-[#ECE5DF]" />
          </div>

          <div className="flex items-center gap-2">
            <Switch id="unreviewed" checked={showOnlyUnreviewed} onCheckedChange={setShowOnlyUnreviewed} />
            <Label htmlFor="unreviewed" className="cursor-pointer">
              Show Only Unreviewed
            </Label>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-[#ECE5DF]/50">
              <TableRow>
                <TableHead className="font-semibold text-[#4A2E1D]">Name</TableHead>
                <TableHead className="font-semibold text-[#4A2E1D]">Email</TableHead>
                <TableHead className="font-semibold text-[#4A2E1D]">Date</TableHead>
                <TableHead className="font-semibold text-[#4A2E1D]">Status</TableHead>
                <TableHead className="font-semibold text-[#4A2E1D]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`
                        ${submission.status === "unreviewed" ? "bg-amber-50 text-amber-700 border-amber-200" : ""}
                        ${submission.status === "reviewed" ? "bg-green-50 text-green-700 border-green-200" : ""}
                      `}
                    >
                      {submission.statusText}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full">
                      View Images
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
