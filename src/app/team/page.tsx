import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FIRM, PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet the four Chartered Accountant partners of Sourabh Sharma & Company — CA Sourabh Sharma, CA Saurabh Jindal, CA Mohit Sharma, and CA Shailesh Patodia. Expert CA firm in Jaipur.",
};

export default function TeamPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello! I would like to discuss a professional engagement with your firm."
  );

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Meet Our Partners
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Four qualified and experienced Chartered Accountants committed to
              delivering professional, accurate, and reliable financial services
              from Jaipur.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNERS OVERVIEW GRID ──────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNERS.map((partner) => (
              <a
                key={partner.slug}
                href={`#${partner.slug}`}
                className="group bg-gray-50 hover:bg-navy-50 border border-gray-200 hover:border-navy-300 rounded-xl p-5 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-navy-800 group-hover:bg-navy-700 flex items-center justify-center text-white font-bold font-heading text-lg mb-3 transition-colors">
                  {partner.initials}
                </div>
                <div className="font-semibold text-navy-800 text-sm leading-tight">
                  {partner.name}
                </div>
                <div className="text-xs text-blue-600 mt-0.5 font-medium">
                  {partner.title}
                </div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">
                  {partner.specialization}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-navy-700 font-medium group-hover:gap-2 transition-all">
                  View profile <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL PARTNER SECTIONS ─────────────────── */}
      {PARTNERS.map((partner, idx) => (
        <section
          key={partner.slug}
          id={partner.slug}
          className={`section-padding ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* ── SIDEBAR CARD ──── */}
              <div className="lg:col-span-1">
                <div className="bg-navy-800 rounded-2xl p-7 text-white">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl font-bold font-heading">
                      {partner.initials}
                    </span>
                  </div>

                  <div className="text-center mb-5">
                    <h2 className="text-lg font-bold font-heading leading-tight">
                      {partner.name}
                    </h2>
                    <p className="text-blue-200 text-sm mt-1">
                      {partner.designation}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {partner.title}, {FIRM.shortName}
                    </p>
                  </div>

                  <div className="space-y-2.5 border-t border-white/10 pt-4 mb-5 text-xs">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                      {partner.location}
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400 mr-1">Specialisation:</span>
                      {partner.specialization}
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400 mr-1">Membership:</span>
                      ICAI Member
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${FIRM.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp the Firm
                      </a>
                    </Button>

                    {partner.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                        asChild
                      >
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                      asChild
                    >
                      <a href={`mailto:${FIRM.email}`}>Email the Firm</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* ── DETAILS ──── */}
              <div className="lg:col-span-2 space-y-8">

                {/* Bio */}
                <div>
                  <h2 className="text-2xl font-bold text-navy-800 font-heading mb-4">
                    About {partner.name}
                  </h2>
                  <div className="space-y-3 text-gray-600 leading-relaxed">
                    {partner.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-navy-800" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-800 font-heading">
                      Education & Qualifications
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {partner.education.map((edu) => (
                      <div
                        key={edu.degree}
                        className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <div className="w-1.5 rounded-full bg-navy-800 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy-800 text-sm">
                            {edu.degree}
                          </h4>
                          <p className="text-sm text-blue-600 mt-0.5">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {edu.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Highlights */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-navy-800" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-800 font-heading">
                      Professional Highlights
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {partner.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas of Practice */}
                <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
                  <h3 className="font-semibold text-navy-800 mb-3 text-sm uppercase tracking-wide">
                    Areas of Practice
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.areas.map((area) => (
                      <span
                        key={area}
                        className="text-xs bg-white border border-navy-200 text-navy-800 rounded-full px-3 py-1.5 font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Work with Our Team of Experts
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Four qualified CAs, one trusted firm. Get in touch to discuss your
            tax, audit, or accounting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
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
              size="lg"
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
