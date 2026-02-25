"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Shield, AlertTriangle, Database, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface SectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}

function CollapsibleSection({ title, icon, children, defaultOpen = false }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card className="border-[#ECE5DF] shadow-sm">
      <CardHeader className="cursor-pointer hover:bg-[#FAF6F2] transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <CardTitle className="flex items-center justify-between text-[#4A2E1D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ECE5DF] flex items-center justify-center">{icon}</div>
            <span className="text-lg">{title}</span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#4A2E1D]/60" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#4A2E1D]/60" />
          )}
        </CardTitle>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0 pb-6">
          <div className="prose prose-sm max-w-none text-[#4A2E1D]/80 leading-relaxed">{children}</div>
        </CardContent>
      )}
    </Card>
  )
}

export default function TermsPrivacyPage() {
  const [hasAgreed, setHasAgreed] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF6F2]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#ECE5DF] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <ArrowLeft className="h-5 w-5 text-[#4A2E1D]" />
              <span className="sr-only">Back to dashboard</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#4A2E1D]">Our Terms and Privacy Policy</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Introduction */}
        <div className="mb-8 text-center">
          <p className="text-lg text-[#4A2E1D]/80 leading-relaxed max-w-2xl mx-auto">
            We believe in full transparency. Below you'll find the details on how we use your data and what you agree to
            when using SkinCheck Pro.
          </p>
          <p className="text-sm text-[#4A2E1D]/60 mt-4">Last updated: January 2025</p>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-6">
          {/* Terms of Use */}
          <CollapsibleSection
            title="Terms of Use"
            icon={<FileText className="h-4 w-4 text-[#4A2E1D]" />}
            defaultOpen={true}
          >
            <div className="space-y-4">
              <h3 className="font-semibold text-[#4A2E1D] text-base">Service Overview</h3>
              <p>
                SkinCheck Pro is a digital health screening service that allows users to submit photographs of skin
                lesions for review by qualified UK General Practitioners (GPs). Our service is designed to provide
                preliminary assessments and guidance, but does not replace comprehensive dermatological examination.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">User Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information about your health and medical history</li>
                <li>Submit clear, well-lit photographs as instructed in our photo guidelines</li>
                <li>Follow all recommendations provided in your clinical report</li>
                <li>Seek immediate medical attention for any concerning changes or symptoms</li>
                <li>Use the service only for yourself (not for others, including children under 16)</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Service Limitations</h3>
              <p>
                Our GPs provide clinical opinions based solely on the photographs and information you submit. This
                assessment has inherent limitations compared to in-person examination and should not be considered a
                definitive diagnosis. We strongly recommend following up with your local GP or dermatologist for any
                concerning findings.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Accuracy and Liability</h3>
              <p>
                While our GPs are qualified professionals, the accuracy of remote assessments depends on photo quality
                and the information provided. SkinCheck Pro cannot guarantee the detection of all skin conditions and is
                not liable for missed diagnoses or delayed treatment resulting from service limitations.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Payment and Refunds</h3>
              <p>
                Payment is required before clinical review. Refunds are available within 7 days if you're unsatisfied
                with the service quality, but not for clinical opinions you disagree with. Free rescans are offered
                within 30 days if photo quality was insufficient.
              </p>
            </div>
          </CollapsibleSection>

          {/* Privacy Policy */}
          <CollapsibleSection title="Privacy Policy" icon={<Shield className="h-4 w-4 text-[#4A2E1D]" />}>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#4A2E1D] text-base">Information We Collect</h3>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, date of birth
                </li>
                <li>
                  <strong>Health Information:</strong> Medical history, current medications, skin concern details
                </li>
                <li>
                  <strong>Photographs:</strong> Images of skin lesions submitted for clinical review
                </li>
                <li>
                  <strong>Technical Data:</strong> Device information, IP address, usage analytics
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details processed securely through our payment providers
                </li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide clinical assessment services through qualified GPs</li>
                <li>Communicate with you about your submissions and results</li>
                <li>Process payments and maintain account records</li>
                <li>Improve our service quality and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send service updates and health reminders (with your consent)</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Information Sharing</h3>
              <p>We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Licensed GPs who review your submissions</li>
                <li>Our secure cloud storage and processing providers</li>
                <li>Payment processors for transaction handling</li>
                <li>Legal authorities when required by law</li>
                <li>Your chosen healthcare providers (with explicit consent)</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Data Retention</h3>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. Clinical records are kept for 7 years in accordance with medical record retention
                requirements. You can request deletion of your account and data at any time, subject to legal retention
                requirements.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">International Transfers</h3>
              <p>
                Your data is primarily processed within the UK and EU. Any international transfers are protected by
                appropriate safeguards including adequacy decisions and standard contractual clauses.
              </p>
            </div>
          </CollapsibleSection>

          {/* Clinical Disclaimer */}
          <CollapsibleSection title="Clinical Disclaimer" icon={<AlertTriangle className="h-4 w-4 text-[#4A2E1D]" />}>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">
                  Important: SkinCheck Pro is a screening service and does not replace comprehensive medical
                  examination.
                </p>
              </div>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Service Scope</h3>
              <p>
                SkinCheck Pro provides preliminary skin lesion assessments by qualified UK General Practitioners. All
                clinical reviews are performed by doctors registered with the General Medical Council (GMC) and licensed
                to practice in the United Kingdom.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Limitations of Remote Assessment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cannot replace physical examination, dermoscopy, or biopsy procedures</li>
                <li>Limited by photograph quality, lighting, and angle</li>
                <li>Cannot assess texture, temperature, or other tactile characteristics</li>
                <li>May not detect subtle changes visible only through specialized equipment</li>
                <li>Cannot provide definitive cancer diagnosis - only risk assessment</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">When to Seek Immediate Care</h3>
              <p>Contact your GP or emergency services immediately if you experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rapidly changing or growing lesions</li>
                <li>Bleeding, ulceration, or persistent irritation</li>
                <li>New lesions appearing suddenly</li>
                <li>Any skin changes causing significant concern</li>
                <li>Symptoms affecting your daily life or wellbeing</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Follow-up Recommendations</h3>
              <p>
                Our reports may recommend in-person consultation with your GP or a dermatologist. These recommendations
                should be followed promptly. SkinCheck Pro can facilitate referrals to Skin Clinic Foreva for specialist
                consultation when appropriate.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Professional Standards</h3>
              <p>
                All clinical assessments adhere to GMC guidelines and professional medical standards. Our GPs maintain
                appropriate professional indemnity insurance and participate in continuing medical education to ensure
                high-quality care.
              </p>
            </div>
          </CollapsibleSection>

          {/* Data Protection */}
          <CollapsibleSection title="Data Protection" icon={<Database className="h-4 w-4 text-[#4A2E1D]" />}>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#4A2E1D] text-base">UK GDPR Compliance</h3>
              <p>
                SkinCheck Pro is fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data
                Protection Act 2018. We are registered with the Information Commissioner's Office (ICO) under
                registration number [ICO-REG-NUMBER].
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Your Rights</h3>
              <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right of Access:</strong> Request copies of your personal data
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Limit how we use your data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data in a structured format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based on legitimate interests
                </li>
                <li>
                  <strong>Rights Related to Automated Decision Making:</strong> Protection from automated profiling
                </li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Exercising Your Rights</h3>
              <p>
                To exercise any of these rights, contact our Data Protection Officer at privacy@skincheckpro.co.uk or
                use the data management tools in your account settings. We will respond to your request within one
                month.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Data Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud storage with regular security audits</li>
                <li>Access controls limiting data access to authorized personnel only</li>
                <li>Regular staff training on data protection and security</li>
                <li>Incident response procedures for any potential data breaches</li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Legal Basis for Processing</h3>
              <p>We process your data based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contract:</strong> To provide the clinical assessment service you've requested
                </li>
                <li>
                  <strong>Consent:</strong> For marketing communications and optional features
                </li>
                <li>
                  <strong>Legal Obligation:</strong> To comply with medical record retention requirements
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> To improve our services and prevent fraud
                </li>
              </ul>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Complaints</h3>
              <p>
                If you're not satisfied with how we handle your data, you can lodge a complaint with the Information
                Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113.
              </p>

              <h3 className="font-semibold text-[#4A2E1D] text-base">Contact Information</h3>
              <div className="bg-[#ECE5DF]/30 rounded-lg p-4">
                <p>
                  <strong>Data Protection Officer:</strong>
                </p>
                <p>Email: privacy@skincheckpro.co.uk</p>
                <p>Address: SkinCheck Pro Ltd, 123 Medical Centre, London, SW1A 1AA</p>
                <p>Phone: 020 7123 4567</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Agreement Checkbox */}
        <Card className="mt-8 border-[#4A2E1D]/20 bg-[#ECE5DF]/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Checkbox
                id="terms-agreement"
                checked={hasAgreed}
                onCheckedChange={(checked) => setHasAgreed(checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-2">
                <label
                  htmlFor="terms-agreement"
                  className="text-sm font-medium text-[#4A2E1D] cursor-pointer leading-relaxed"
                >
                  I have read and agree to the Terms of Use, Privacy Policy, Clinical Disclaimer, and Data Protection
                  terms outlined above.
                </label>
                <p className="text-xs text-[#4A2E1D]/60">
                  By checking this box, you confirm your understanding and acceptance of all terms and conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            className="border-[#4A2E1D] text-[#4A2E1D] hover:bg-[#ECE5DF] rounded-full px-8 bg-transparent"
          >
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
          <Button
            asChild
            disabled={!hasAgreed}
            className={`bg-[#4A2E1D] hover:bg-[#4A2E1D]/90 text-white rounded-full px-8 ${
              !hasAgreed ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Link href="/photo-upload">Back to Upload</Link>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#4A2E1D]/60">
            These terms were last updated on January 7, 2025. We may update these terms periodically, and will notify
            you of any significant changes.
          </p>
        </div>
      </main>
    </div>
  )
}
