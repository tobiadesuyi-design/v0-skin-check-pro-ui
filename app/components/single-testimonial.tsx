import { Star, Quote } from "lucide-react"

interface SingleTestimonialProps {
  quote: string
  name: string
  location?: string
  stars?: number
  className?: string
}

export function SingleTestimonial({ quote, name, location, stars = 5, className = "" }: SingleTestimonialProps) {
  return (
    <div className={`bg-[#FAF6F2] p-5 rounded-lg relative ${className}`}>
      <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#ECE5DF] flex items-center justify-center">
        <Quote className="w-4 h-4 text-[#4A2E1D]" />
      </div>

      <div className="mb-3 pt-2">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 inline-block text-[#E6A65C] fill-[#E6A65C]" />
        ))}
      </div>

      <p className="text-[#4A2E1D]/80 mb-3 italic text-sm">"{quote}"</p>

      <div>
        <p className="font-semibold text-[#4A2E1D] text-sm">{name}</p>
        {location && <p className="text-xs text-[#4A2E1D]/60">{location}</p>}
      </div>
    </div>
  )
}
