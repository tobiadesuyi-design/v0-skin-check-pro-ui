"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, X, Camera, Plus, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface UploadedPhoto {
  id: string
  file: File
  url: string
  type: "close-up" | "wide-view" | "additional"
}

export default function UploadPhotosPage() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file, index) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newPhoto: UploadedPhoto = {
            id: Date.now().toString() + index,
            file,
            url: e.target?.result as string,
            type: photos.length === 0 ? "close-up" : photos.length === 1 ? "wide-view" : "additional",
          }
          setPhotos((prev) => [...prev, newPhoto])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id))
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const getPhotoTypeLabel = (type: string) => {
    switch (type) {
      case "close-up":
        return "Close-up"
      case "wide-view":
        return "Wide view"
      case "additional":
        return "Additional"
      default:
        return "Photo"
    }
  }

  const getPhotoTypeColor = (type: string) => {
    switch (type) {
      case "close-up":
        return "bg-blue-100 text-blue-800"
      case "wide-view":
        return "bg-green-100 text-green-800"
      case "additional":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const canContinue = photos.length >= 2

  return (
    <main className="min-h-screen bg-[#fdf4f2]">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <Link href="/photo-instructions" className="mr-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
            <span className="sr-only">Back to Photo Instructions</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-[#4A2E1D]">Upload photos of your mole</h1>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-white border-b border-[#ECE5DF]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#4A2E1D]">Step 4 of 5</span>
          <span className="text-sm text-[#4A2E1D]/70">80% complete</span>
        </div>
        <Progress value={80} className="h-2" />
      </div>

      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Instructions */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <p className="text-[#4A2E1D] text-center leading-relaxed">
              Take at least 2 clear photos — one close-up and one from further away. A 10x magnifier is recommended for
              accuracy.
            </p>
          </CardContent>
        </Card>

        {/* Upload Area */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div
              className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
                dragActive
                  ? "border-[#4A2E1D] bg-[#fbe9e7]"
                  : "border-[#ECE5DF] hover:border-[#a68c7b] hover:bg-[#fdf4f2]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 text-[#a68c7b] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#4A2E1D] mb-2">Drag photos here or click to browse</h3>
              <p className="text-[#4A2E1D]/70 mb-4">Supports JPG, PNG files up to 10MB each</p>
              <Button onClick={openFileDialog} className="bg-[#4A2E1D] hover:bg-[#3A2315] text-white rounded-full">
                <Camera className="h-4 w-4 mr-2" />
                Choose Photos
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Photos */}
        {photos.length > 0 && (
          <Card className="border-[#ECE5DF] rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#4A2E1D]">Uploaded Photos ({photos.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <div className="aspect-square rounded-xl overflow-hidden bg-[#ECE5DF]">
                      <img
                        src={photo.url || "/placeholder.svg"}
                        alt="Uploaded mole photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => removePhoto(photo.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="mt-2 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPhotoTypeColor(photo.type)}`}
                      >
                        {getPhotoTypeLabel(photo.type)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {photos.length < 6 && (
                <Button
                  onClick={openFileDialog}
                  variant="outline"
                  className="w-full mt-4 border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#fdf4f2] rounded-full bg-transparent"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add another photo
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Photo Tips */}
        <Card className="border-[#ECE5DF] rounded-2xl shadow-sm bg-[#e1cfc2]/20">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#4A2E1D]">Photo Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#4A2E1D] text-sm">Use natural daylight or bright indoor lighting</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#4A2E1D] text-sm">Hold your phone steady to avoid blur</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#4A2E1D] text-sm">Include some surrounding skin for context</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#4A2E1D] text-sm">Use a magnifying lens for close-up shots if available</p>
            </div>
          </CardContent>
        </Card>

        {/* Validation Message */}
        {photos.length > 0 && photos.length < 2 && (
          <Card className="border-orange-200 rounded-2xl shadow-sm bg-orange-50">
            <CardContent className="p-4 flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
              <p className="text-orange-800 text-sm">
                Please upload at least 2 photos (one close-up and one from further away) to continue.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Success Message */}
        {canContinue && (
          <Card className="border-green-200 rounded-2xl shadow-sm bg-green-50">
            <CardContent className="p-4 flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-sm">
                Great! You've uploaded {photos.length} photo{photos.length !== 1 ? "s" : ""}. Ready to continue.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Continue Button */}
        <Link href={canContinue ? "/contact-details" : "#"} className="block">
          <Button
            disabled={!canContinue}
            className={`w-full h-12 text-base font-medium rounded-full ${
              canContinue
                ? "bg-[#4A2E1D] hover:bg-[#3A2315] text-white"
                : "bg-[#ECE5DF] text-[#4A2E1D]/50 cursor-not-allowed"
            }`}
          >
            Continue
          </Button>
        </Link>
      </div>
    </main>
  )
}
