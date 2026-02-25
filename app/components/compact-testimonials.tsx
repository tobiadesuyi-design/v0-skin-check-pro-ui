import { Star, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  stars: number
}

export function CompactTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "I was worried about a mole for months. SkinCheck Pro gave me an answer in 2 days.",
      name: "Sarah M.",
      stars: 5,
    },
    {
      quote: "The lens made taking clear photos easy. Results came faster than promised.",
      name: "James T.",
      stars: 5,
    },
    {
      quote: "After using SkinCheck Pro, I finally got the referral I needed.",
      name: "Emma L.",
      stars: 5,
    },
  ]

  return (
    <div className="py-6 px-4">
      <h3 className="text-xl font-bold text-center text-[#4A2E1D] mb-4">Real Patients. Real Results.</h3>

      <div className="space-y-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#FAF6F2] p-4 rounded-md flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#ECE5DF] flex-shrink-0 flex items-center justify-center mt-1">
              <Quote className="w-3 h-3 text-[#4A2E1D]" />
            </div>

            <div>
              <p className="text-sm text-[#4A2E1D]/80 mb-1">"{testimonial.quote}"</p>

              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold text-[#4A2E1D]">{testimonial.name}</p>
                <div>
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 inline-block text-[#E6A65C] fill-[#E6A65C]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
