import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Receipt,
  ClipboardCheck,
  BookOpen,
  BarChart2,
  TrendingUp,
  BadgeCheck,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { FIRM, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of CA services — income tax, GST, tax audit, bookkeeping, financial statements, project reports, and more in Jaipur.",
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  FileText,
  Receipt,
  ClipboardCheck,
  BookOpen,
  BarChart2,
  TrendingUp,
  BadgeCheck,
  Shield,
};

export default function ServicesPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello! I would like to enquire about your services."
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Our Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From income tax filing to statutory audit, we offer end-to-end
              financial and compliance services for individuals, startups, and
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || FileText;
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-navy-800 bg-gray-50 hover:bg-navy-50 rounded-lg px-3 py-2.5 border border-gray-200 hover:border-navy-200 transition-all"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="leading-tight">{service.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {SERVICES.map((service, idx) => {
        const Icon = SERVICE_ICONS[service.icon] || FileText;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`section-padding ${isEven ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                      Service {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-800 font-heading mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="navy" asChild>
                    <Link href="/contact">
                      Enquire About This Service{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-8 text-white">
                    <Icon className="w-12 h-12 text-blue-200 mb-6" />
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                    <div className="border-t border-white/10 pt-5 space-y-3">
                      {service.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                          <span className="text-sm text-gray-300">{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <a
                        href={`https://wa.me/${FIRM.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-200 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp us about this service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Get Started"
            title="Not Sure Which Service You Need?"
            subtitle="Just get in touch. We will understand your situation and guide you to the right solution."
            titleClassName="text-white"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/${FIRM.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent"
              asChild
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
