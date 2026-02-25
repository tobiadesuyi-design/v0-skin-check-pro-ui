import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Phone, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
              <span className="text-teal-700 font-semibold">SF</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Skin Clinic Foreva</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-teal-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-teal-600 font-medium">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-teal-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consultations available for acne, psoriasis, eczema, and mole checks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Clinic Info */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Clinic Information</h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-700">Location</h3>
                        <p className="text-gray-600">123 Skin Street, Dermatology District, DD1 2SC</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-700">Opening Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                        <p className="text-gray-600">Saturday: 10am - 2pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-teal-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-700">Contact</h3>
                        <p className="text-gray-600">Phone: (01) 234 5678</p>
                        <p className="text-gray-600">Email: appointments@skinclinicforeva.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Our Services</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        Acne Treatment
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        Psoriasis Management
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        Eczema Care
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        Mole Checks & Removal
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                        Skin Cancer Screening
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Options */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Choose Your Booking Method</h2>

                  <Tabs defaultValue="embed">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="embed">Embedded Calendar</TabsTrigger>
                      <TabsTrigger value="external">External Booking</TabsTrigger>
                    </TabsList>

                    <TabsContent value="embed" className="space-y-4">
                      <div className="bg-white border rounded-lg p-4 h-96 flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                          <p className="text-gray-600 mb-4">
                            Embedded calendar would appear here, integrated with your booking system.
                          </p>
                          <Button className="bg-teal-600 hover:bg-teal-700">Book Now</Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium text-gray-700 mb-2">About Our Appointments</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <Clock className="h-4 w-4 text-teal-600 mt-1 mr-2" />
                            Initial consultations are 30 minutes
                          </li>
                          <li className="flex items-start">
                            <Clock className="h-4 w-4 text-teal-600 mt-1 mr-2" />
                            Follow-up appointments are 15 minutes
                          </li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="external" className="space-y-4">
                      <div className="bg-white border rounded-lg p-8 text-center">
                        <Image
                          src="/placeholder.svg?height=100&width=300&text=External+Booking+Partner"
                          alt="External booking partner logo"
                          width={300}
                          height={100}
                          className="mx-auto mb-6"
                        />

                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          We use a secure external booking system to manage our appointments. Click the button below to
                          be redirected to our booking portal.
                        </p>

                        <Button className="bg-teal-600 hover:bg-teal-700 flex items-center">
                          Book Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium text-gray-700 mb-2">What to Expect</h3>
                        <p className="text-gray-600">
                          After booking, you'll receive a confirmation email with details about your appointment. Please
                          arrive 10 minutes early to complete any necessary paperwork.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-3">Appointment Types</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Card className="bg-teal-50 border-teal-100">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-teal-800 mb-2">New Patient Consultation</h4>
                          <p className="text-gray-600 text-sm">Comprehensive assessment for new patients.</p>
                          <p className="text-teal-700 font-medium mt-2">30 minutes · £120</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-teal-50 border-teal-100">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-teal-800 mb-2">Follow-up Appointment</h4>
                          <p className="text-gray-600 text-sm">Review progress and adjust treatment plans.</p>
                          <p className="text-teal-700 font-medium mt-2">15 minutes · £80</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-teal-50 border-teal-100">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-teal-800 mb-2">Mole Check & Skin Cancer Screening</h4>
                          <p className="text-gray-600 text-sm">Thorough examination of concerning moles.</p>
                          <p className="text-teal-700 font-medium mt-2">45 minutes · £150</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-teal-50 border-teal-100">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-teal-800 mb-2">Minor Procedure</h4>
                          <p className="text-gray-600 text-sm">Including mole removal and skin biopsies.</p>
                          <p className="text-teal-700 font-medium mt-2">60 minutes · £200+</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Booking?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our friendly staff is ready to assist you with any questions about our services or the booking process.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600"
            >
              Call Us: (01) 234 5678
            </Button>
            <Button className="bg-white text-teal-600 hover:bg-teal-50">Email Us</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Skin Clinic Foreva</h3>
              <p className="text-sm">Providing expert dermatological care and treatments for all skin conditions.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-white">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-white">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <address className="text-sm not-italic">
                123 Skin Street
                <br />
                Dermatology District
                <br />
                DD1 2SC
                <br />
                <br />
                Phone: (01) 234 5678
                <br />
                Email: info@skinclinicforeva.com
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Skin Clinic Foreva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
