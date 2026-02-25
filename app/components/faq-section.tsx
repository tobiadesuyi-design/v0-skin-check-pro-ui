"use client"

import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Who reviews my scan?",
      answer:
        "All scans are reviewed by UK-registered General Practitioners (GPs) with specialized training in dermatology. Our doctors are GMC-registered and have extensive experience in skin health assessment. Each scan is also pre-analyzed by our AI technology to assist the doctors, but the final assessment is always made by a qualified medical professional.",
    },
    {
      question: "What if something looks suspicious?",
      answer:
        "If our doctors identify anything concerning, we'll clearly explain what we've found and provide specific next steps. This may include a recommendation to see your GP or a dermatologist for an in-person examination. In urgent cases, we'll highlight the urgency and provide guidance on how quickly you should seek further medical attention. We can also provide a referral letter for your GP if needed.",
    },
    {
      question: "Is this safe for kids?",
      answer:
        "Yes, our service is safe for children of all ages, but a parent or guardian must create the account and submit the images on behalf of anyone under 16. The process is non-invasive and simply involves taking photographs. For children's privacy and protection, we recommend parents help with taking and uploading the images. Our doctors are experienced in assessing skin conditions in patients of all ages.",
    },
    {
      question: "What kind of images do I need to upload?",
      answer:
        "You'll need to upload three clear images of each mole: a close-up showing detail, a wider view showing the mole in context, and a photo showing where on the body the mole is located. Our app provides guidance on how to take these photos. For best results, use good lighting, keep the camera steady, and use the clip-on lens we provide. The images should be in focus and show the mole clearly without any obstructions.",
    },
    {
      question: "How is my data handled?",
      answer:
        "We take data protection extremely seriously. All images and personal information are encrypted both during transmission and storage. Your data is only accessible to the medical professionals reviewing your case. We are fully GDPR compliant and registered with the Information Commissioner's Office (ICO). We never share your data with third parties without your explicit consent, and you can request deletion of your data at any time after your assessment is complete.",
    },
    {
      question: "How quickly will I get my results?",
      answer:
        "Most assessments are completed within 48 hours of submission. You'll receive a notification by email when your results are ready to view in your account. For urgent cases, our doctors prioritize reviews and may provide results sooner. You can check the status of your submission at any time in your dashboard.",
    },
    {
      question: "What does the assessment include?",
      answer:
        "Your assessment includes a thorough review of your mole images by a UK GP, a detailed report explaining their findings, a risk assessment, and clear recommendations for next steps. If needed, we'll also provide guidance on how to monitor the mole for changes and when you should consider a follow-up check. The report can be downloaded as a PDF for your records or to share with your regular doctor.",
    },
    {
      question: "Can I use this service for multiple moles?",
      answer:
        "Yes, you can submit multiple moles for assessment. Each mole requires a separate submission with its own set of images. If you have several moles you're concerned about, we recommend starting with the one that concerns you most. We also offer discounted packages for checking multiple moles.",
    },
    {
      question: "Is this a replacement for seeing a dermatologist?",
      answer:
        "Our service provides a convenient first assessment, but it's not a complete replacement for an in-person examination by a dermatologist in all cases. It's ideal for initial screening, monitoring known moles, or getting a quick opinion when you can't get a timely appointment. If our doctors identify anything that requires further investigation, we'll always recommend an in-person follow-up with the appropriate specialist.",
    },
  ]

  return (
    <section className="py-8 px-6 bg-[#FAF6F2]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#4A2E1D] mb-3">Frequently Asked Questions</h2>
          <p className="text-[#4A2E1D]/80">Find answers to common questions about our digital mole check service.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#ECE5DF] rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#ECE5DF]/20 transition-colors">
                <span className="text-left font-medium text-[#4A2E1D]">{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-[#4A2E1D] shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-[#4A2E1D]/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-[#4A2E1D]/70 text-sm">
            Can't find what you're looking for?{" "}
            <a href="/contact" className="text-[#4A2E1D] font-medium underline underline-offset-2">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
