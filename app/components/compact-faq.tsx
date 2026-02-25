"use client"

import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CompactFAQ() {
  const faqs = [
    {
      question: "Who reviews my scan?",
      answer: "All scans are reviewed by UK-registered GPs with specialized training in dermatology.",
    },
    {
      question: "What if something looks suspicious?",
      answer:
        "We'll provide clear next steps and recommendations, which may include seeing your GP or a dermatologist.",
    },
    {
      question: "How quickly will I get my results?",
      answer: "Most assessments are completed within 48 hours of submission.",
    },
    {
      question: "How is my data handled?",
      answer:
        "All images and personal information are encrypted. We are GDPR compliant and never share your data without consent.",
    },
  ]

  return (
    <div className="bg-[#FAF6F2] rounded-xl p-4">
      <h3 className="text-lg font-semibold text-[#4A2E1D] mb-4">Common Questions</h3>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-[#ECE5DF] rounded-lg overflow-hidden bg-white"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
              <span className="text-left text-sm font-medium text-[#4A2E1D]">{faq.question}</span>
              <ChevronDown className="h-4 w-4 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 pt-1 text-sm text-[#4A2E1D]/80">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-3 text-center">
        <a href="/faq" className="text-sm text-[#4A2E1D] font-medium">
          View all FAQs
        </a>
      </div>
    </div>
  )
}
