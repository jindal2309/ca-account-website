import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Users,
  ShieldCheck,
  Lightbulb,
  FileText,
  Receipt,
  ClipboardCheck,
  BookOpen,
  BarChart2,
  TrendingUp,
  BadgeCheck,
  Shield,
  Star,
  MapPin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { FIRM, SERVICES, PARTNERS, WHY_CHOOSE_US, TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home — Chartered Accountants Jaipur",
  description:
    "Sourabh Sharma & Company — trusted CA firm in Jaipur offering income tax, GST, audit, and accounting services to individuals and businesses.",
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

const WHY_ICONS: Record<string, React.ElementType> = {
  Award,
  Clock,
  Users,
  ShieldCheck,
  Lightbulb,
  Phone,
};

export default function HomePage() {
  const whatsappMsg = encodeURIComponent(
    "Hello! I would like to enquire about your CA services."
  );

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-sm text-gray-200">
                Established {FIRM.established} · Jaipur, Rajasthan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight mb-4">
              {FIRM.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 font-medium mb-2">
              {FIRM.designation}
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {FIRM.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
                <a href={`tel:${FIRM.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {FIRM.phone}
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                "ICAI Registered",
                "GST Practitioner",
                "Tax Audit Expert",
                "Tally Certified",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "4", label: "CA Partners" },
              { value: "10+", label: "Years of Practice" },
              { value: "8+", label: "Core Services" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-navy-800 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            subtitle="Comprehensive financial and compliance services tailored to individuals, startups, and growing businesses."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || FileText;
              return (
                <Card
                  key={service.slug}
                  className="group hover:shadow-md transition-shadow duration-200 border-gray-200"
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center mb-3 group-hover:bg-navy-100 transition-colors">
                      <Icon className="w-5 h-5 text-navy-800" />
                    </div>
                    <CardTitle className="text-base text-navy-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="navy-outline" size="lg" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT SUMMARY ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                About the Firm
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 font-heading leading-tight mb-5">
                A Partner You Can Rely On for All Your Financial Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded by <strong>CA Sourabh Sharma</strong> and strengthened
                by a team of four qualified Chartered Accountants, our firm has
                built its reputation on one principle — providing honest,
                accurate, and timely financial services. We work with
                individuals, traders, small businesses, startups, and companies
                across Jaipur and Rajasthan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need to file your income tax return, sort out a GST
                notice, get your books audited, or prepare a project report for
                a bank loan — we bring the expertise and attention your
                situation deserves.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Income Tax Filing",
                  "GST Compliance",
                  "Tax Audit",
                  "Bookkeeping",
                  "Financial Statements",
                  "Loan Documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="navy" size="lg" asChild>
                <Link href="/about">
                  About Our Firm <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Visual block — 4 partners */}
            <div className="relative">
              <div className="bg-navy-800 rounded-2xl p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
                  Our Partners
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {PARTNERS.map((p) => (
                    <div
                      key={p.slug}
                      className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-3.5 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold font-heading flex-shrink-0">
                        {p.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-xs leading-tight truncate">
                          {p.name}
                        </div>
                        <div className="text-gray-400 text-xs mt-0.5">
                          {p.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed border-l-2 border-blue-400 pl-4 mb-6">
                  &ldquo;We believe every client deserves the same level of care,
                  transparency, and professional rigour — regardless of the size
                  of their business.&rdquo;
                </blockquote>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors font-medium"
                >
                  Meet all four partners <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-navy-100 rounded-full opacity-50 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Clients Choose Us"
            title="The Sourabh Sharma & Co. Difference"
            subtitle="We combine professional expertise with a genuinely client-first approach."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = WHY_ICONS[item.icon] || CheckCircle2;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-navy-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-navy-800" />
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Client Testimonials"
            title="What Our Clients Say"
            subtitle="We are proud to have earned the trust of hundreds of clients across Jaipur and Rajasthan."
            titleClassName="text-white"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                  Ready to Simplify Your Tax & Accounting?
                </h2>
                <p className="text-gray-300 mb-6">
                  Call us, send a WhatsApp message, or fill out our contact
                  form. We will get back to you within 24 hours.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-300" />
                    <a
                      href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      {FIRM.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <a
                      href={`mailto:${FIRM.email}`}
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      {FIRM.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      {FIRM.address.line1}, {FIRM.address.line2},{" "}
                      {FIRM.address.city}, {FIRM.address.state} —{" "}
                      {FIRM.address.pin}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="flex-1 lg:flex-none"
                  asChild
                >
                  <a
                    href={`https://wa.me/${FIRM.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="flex-1 lg:flex-none border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/contact">
                    Send Us a Message <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
