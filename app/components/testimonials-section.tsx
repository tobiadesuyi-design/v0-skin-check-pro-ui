"use client"

import type React from "react"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  location: string
  stars: number
  date: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "I was worried about a mole for months but couldn't get a GP appointment. SkinCheck Pro gave me an answer in 2 days. The doctor was thorough and reassuring.",
      name: "Sarah M.",
      location: "London",
      stars: 5,
      date: "March 2023",
    },
    {
      quote:
        "The lens attachment made taking clear photos so easy. I received my results faster than promised and the doctor even followed up with additional advice.",
      name: "James T.",
      location: "Manchester",
      stars: 5,
      date: "April 2023",
    },
    {
      quote:
        "After using SkinCheck Pro, I finally got the referral I needed. The process was simple and the peace of mind was worth every penny.",
      name: "Emma L.",
      location: "Edinburgh",
      stars: 5,
      date: "May 2023",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrevious()
    }
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A2E1D] mb-2">Real Patients. Real Results.</h2>
        <p className="text-center text-[#4A2E1D]/70 mb-12 max-w-2xl mx-auto">
          See what our patients say about their experience with SkinCheck Pro
        </p>

        {/* Desktop View - All Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-[#4A2E1D]" : "bg-[#ECE5DF]"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-[#4A2E1D]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-[#4A2E1D]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#FAF6F2] p-6 rounded-lg shadow-sm relative">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#ECE5DF] flex items-center justify-center">
        <Quote className="w-4 h-4 text-[#4A2E1D]" />
      </div>

      <div className="mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 inline-block text-[#E6A65C] fill-[#E6A65C]" />
        ))}
      </div>

      <p className="text-[#4A2E1D]/80 mb-4 italic">"{testimonial.quote}"</p>

      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-[#4A2E1D]">{testimonial.name}</p>
          <p className="text-sm text-[#4A2E1D]/60">{testimonial.location}</p>
        </div>
        <p className="text-xs text-[#4A2E1D]/40">{testimonial.date}</p>
      </div>
    </div>
  )
}
