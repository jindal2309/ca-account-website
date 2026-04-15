import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sourabh Sharma & Company — CA firm in Jaipur. Call, WhatsApp, or fill our contact form for income tax, GST, and accounting services.",
};

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello! I would like to enquire about your CA services."
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Reach out by phone, WhatsApp, or email. You can also fill in the
              form below and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy-800 font-heading mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you have a quick query or need a detailed consultation,
                  we are here to help. Choose the most convenient way to reach
                  us.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                      className="font-semibold text-navy-800 hover:text-blue-600 transition-colors"
                    >
                      {FIRM.phone}
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Mon–Sat, 10 AM – 7 PM
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/${FIRM.whatsapp}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#25D366] hover:text-green-700 transition-colors"
                    >
                      Send WhatsApp Message
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Quick replies during business hours
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${FIRM.email}`}
                      className="font-semibold text-navy-800 hover:text-blue-600 transition-colors"
                    >
                      {FIRM.email}
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Office Address
                    </div>
                    <address className="not-italic font-medium text-navy-800 text-sm">
                      {FIRM.address.line1}
                      <br />
                      {FIRM.address.line2}
                      <br />
                      {FIRM.address.city}, {FIRM.address.state} —{" "}
                      {FIRM.address.pin}
                    </address>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Office Hours
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">
                          Monday – Friday
                        </span>
                        <span className="font-medium text-navy-800">
                          10:00 AM – 7:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Saturday</span>
                        <span className="font-medium text-navy-800">
                          10:00 AM – 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Sunday</span>
                        <span className="font-medium text-gray-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-navy-800 font-heading mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill in your details and we will get back to you within 24
                  business hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-80">
            <iframe
              src={FIRM.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Office location is approximate. Please call ahead for directions.
          </p>
        </div>
      </section>
    </>
  );
}
