"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { HomeButton } from "@/components/ui/home-button"
import { BottomNav } from "@/components/ui/bottom-nav"
import { Upload, Camera, X, CheckCircle, Heart, Plus, Eye, Zap, Check, Lightbulb } from "lucide-react"

interface UploadedPhoto {
  id: string
  file: File
  preview: string
  type: "close-up" | "distant" | "additional"
}

export default function PhotoUploadPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photos, setPhotos] = useState<UploadedPhoto[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newPhoto: UploadedPhoto = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string,
            type: photos.length === 0 ? "close-up" : photos.length === 1 ? "distant" : "additional",
          }
          setPhotos((prev) => [...prev, newPhoto])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id))
  }

  const getPhotoTypeColor = (type: string) => {
    switch (type) {
      case "close-up":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "distant":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "additional":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPhotoTypeLabel = (type: string) => {
    switch (type) {
      case "close-up":
        return "Close-up"
      case "distant":
        return "Distant view"
      case "additional":
        return "Additional"
      default:
        return "Photo"
    }
  }

  const canContinue =
    photos.length >= 2 && photos.some((p) => p.type === "close-up") && photos.some((p) => p.type === "distant")

  const handleContinue = () => {
    if (canContinue) {
      // Save photos to localStorage for demo purposes
      localStorage.setItem(
        "uploaded_photos",
        JSON.stringify(
          photos.map((p) => ({
            id: p.id,
            type: p.type,
            name: p.file.name,
          })),
        ),
      )
      router.push("/review")
    }
  }

  return (
    <div className="min-h-screen bg-skin-pearl pb-20 md:pb-0">
      {/* Desktop Home Button */}
      <HomeButton variant="desktop" className="hidden md:flex" />

      {/* Header */}
      <header className="bg-white border-b border-skin-beige">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-background" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">SkinCheck Pro</h1>
                <p className="text-sm text-muted-foreground">Step 3 of 4</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto px-6 py-4">
        <Progress value={75} className="h-2" />
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Title and Instructions */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Upload photos of your mole</h2>
            <p className="text-muted-foreground leading-relaxed">
              Take at least 2 clear photos — one close-up and one from further away. Use your lens to help us get the
              detail we need.
            </p>
          </div>

          {/* Requirements Card */}
          <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-orange-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-orange-900">Photo Requirements</h3>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>1 close-up photo with lens</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>1 distant view photo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Additional photos (optional)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Makes a Good Photo Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center">What makes a good photo?</h3>

            {/* Good vs Bad Examples */}
            <div className="grid grid-cols-2 gap-4">
              {/* Good Example */}
              <Card className="bg-white border-green-200">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-800">Good Example</span>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-green-50">
                    <img
                      src="/placeholder.svg?height=120&width=120&text=Clear+focused+mole+photo+with+good+lighting"
                      alt="Good photo example - clear, focused mole with good lighting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-xs text-green-700">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>Clear, focused image</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>Good lighting</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>Mole centred & visible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bad Example */}
              <Card className="bg-white border-red-200">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-800">Bad Example</span>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-red-50">
                    <img
                      src="/placeholder.svg?height=120&width=120&text=Blurry+dark+photo+with+obstructions"
                      alt="Bad photo example - blurry, dark photo with obstructions"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="space-y-1 text-xs text-red-700">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Blurry or dark photo</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Hair, shadow, finger</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Too far or unfocused</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tip Card */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-sm text-blue-800 leading-relaxed">
                    <em>
                      Use natural light. Take one close-up and one from further away. Make sure your skin is clean and
                      dry.
                    </em>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upload Section */}
          <Card className="bg-white border-skin-beige">
            <CardContent className="p-6 space-y-6">
              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-200 ${
                  dragActive
                    ? "border-orange-400 bg-orange-50"
                    : "border-skin-beige hover:border-skin-tan hover:bg-skin-cream"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-skin-blush rounded-3xl flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-skin-deep" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Choose Photos</h3>
                    <p className="text-sm text-muted-foreground">Drag and drop your photos here, or click to browse</p>
                  </div>
                  <Button onClick={() => fileInputRef.current?.click()} className="h-12" disabled={isUploading}>
                    <Camera className="w-4 h-4 mr-2" />
                    {isUploading ? "Uploading..." : "Choose Photos"}
                  </Button>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files)}
              />

              {/* Photo Previews */}
              {photos.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Uploaded Photos ({photos.length})</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {photos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-skin-cream">
                          <img
                            src={photo.preview || "/placeholder.svg"}
                            alt="Uploaded photo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge className={`absolute top-2 left-2 text-xs ${getPhotoTypeColor(photo.type)}`}>
                          {getPhotoTypeLabel(photo.type)}
                        </Badge>
                        <Button
                          onClick={() => removePhoto(photo.id)}
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add Another Photo Button */}
              {photos.length > 0 && (
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="w-full h-12 bg-transparent"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add another photo
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Status Message */}
          {photos.length > 0 && (
            <Card className={`${canContinue ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  {canContinue ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-yellow-600" />
                  )}
                  <div className="text-sm">
                    {canContinue ? (
                      <span className="text-green-800 font-medium">Ready to continue!</span>
                    ) : (
                      <span className="text-yellow-800">
                        Need {2 - photos.length} more photo{2 - photos.length !== 1 ? "s" : ""} to continue
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Continue Button */}
          <Button onClick={handleContinue} disabled={!canContinue} size="full" className="h-14 text-lg">
            <Zap className="w-5 h-5 mr-2" />
            Continue
          </Button>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
