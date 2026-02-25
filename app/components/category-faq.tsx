"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

type FAQCategory = {
  name: string
  questions: {
    question: string
    answer: string
  }[]
}

export function CategoryFAQ() {
  const categories: FAQCategory[] = [
    {
      name: "About the Service",
      questions: [
        {
          question: "Who reviews my scan?",
          answer:
            "All scans are reviewed by UK-registered General Practitioners (GPs) with specialized training in dermatology. Our doctors are GMC-registered and have extensive experience in skin health assessment.",
        },
        {
          question: "How quickly will I get my results?",
          answer:
            "Most assessments are completed within 48 hours of submission. You'll receive a notification by email when your results are ready to view in your account.",
        },
        {
          question: "What does the assessment include?",
          answer:
            "Your assessment includes a thorough review of your mole images by a UK GP, a detailed report explaining their findings, a risk assessment, and clear recommendations for next steps.",
        },
      ],
    },
    {
      name: "Medical Concerns",
      questions: [
        {
          question: "What if something looks suspicious?",
          answer:
            "If our doctors identify anything concerning, we'll clearly explain what we've found and provide specific next steps. This may include a recommendation to see your GP or a dermatologist for an in-person examination.",
        },
        {
          question: "Is this safe for kids?",
          answer:
            "Yes, our service is safe for children of all ages, but a parent or guardian must create the account and submit the images on behalf of anyone under 16.",
        },
        {
          question: "Is this a replacement for seeing a dermatologist?",
          answer:
            "Our service provides a convenient first assessment, but it's not a complete replacement for an in-person examination by a dermatologist in all cases.",
        },
      ],
    },
    {
      name: "Technical Questions",
      questions: [
        {
          question: "What kind of images do I need to upload?",
          answer:
            "You'll need to upload three clear images of each mole: a close-up showing detail, a wider view showing the mole in context, and a photo showing where on the body the mole is located.",
        },
        {
          question: "Can I use my smartphone camera?",
          answer:
            "Yes, most modern smartphone cameras are suitable. For best results, we recommend using the clip-on lens we provide, which helps capture more detailed images.",
        },
        {
          question: "What if my images are blurry?",
          answer:
            "Our system will check your images for quality. If they're not clear enough for assessment, we'll let you know and guide you on how to take better photos.",
        },
      ],
    },
    {
      name: "Privacy & Data",
      questions: [
        {
          question: "How is my data handled?",
          answer:
            "We take data protection extremely seriously. All images and personal information are encrypted both during transmission and storage. Your data is only accessible to the medical professionals reviewing your case.",
        },
        {
          question: "Can I delete my data after the assessment?",
          answer:
            "Yes, you can request deletion of your data at any time after your assessment is complete. We retain records for medical and legal purposes, but can anonymize your personal information upon request.",
        },
        {
          question: "Who has access to my images?",
          answer:
            "Only the medical professionals directly involved in reviewing your case have access to your images. Our administrative staff cannot access your medical information or images.",
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  return (
    <div className="bg-[#FAF6F2] p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-[#4A2E1D] mb-6">Frequently Asked Questions</h3>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={activeCategory === category.name ? "default" : "outline"}
            className={
              activeCategory === category.name
                ? "bg-[#4A2E1D] text-white rounded-full"
                : "border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full"
            }
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Questions for active category */}
      <Accordion type="single" collapsible className="space-y-3">
        {categories
          .find((category) => category.name === activeCategory)
          ?.questions.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#ECE5DF] rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <AccordionTrigger className="px-5 py-3 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
                <span className="text-left font-medium text-[#4A2E1D]">{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-3 pt-1 text-[#4A2E1D]/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  )
}
