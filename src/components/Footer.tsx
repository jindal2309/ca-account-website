import Link from "next/link";
import { Scale, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FIRM } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Income Tax Filing", href: "/services#income-tax" },
    { label: "GST Filing & Reconciliation", href: "/services#gst" },
    { label: "Tax Audit", href: "/services#tax-audit" },
    { label: "Accounting & Bookkeeping", href: "/services#accounting" },
    { label: "Financial Statements", href: "/services#financial-statements" },
    { label: "Project Reports", href: "/services#project-reports" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Partner", href: "/team" },
    { label: "Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">
                  {FIRM.name}
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {FIRM.designation}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A trusted Chartered Accountant firm in Jaipur providing expert
              taxation, audit, GST, and accounting services to individuals,
              startups, and businesses.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {FIRM.phone}
              </a>
              <a
                href={`mailto:${FIRM.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {FIRM.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {FIRM.address.line1}, {FIRM.address.line2},{" "}
                  {FIRM.address.city} — {FIRM.address.pin}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Useful Resources
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Income Tax Portal", href: "https://www.incometax.gov.in" },
                { label: "GST Portal", href: "https://www.gst.gov.in" },
                { label: "MCA21 Portal", href: "https://www.mca.gov.in" },
                { label: "EPFO Portal", href: "https://www.epfindia.gov.in" },
                { label: "ICAI Website", href: "https://www.icai.org" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} {FIRM.name}, {FIRM.designation}. All rights
              reserved. Est. {FIRM.established}.
            </p>
            <p className="text-xs text-gray-600 text-center md:text-right max-w-lg">
              <strong className="text-gray-500">Disclaimer:</strong> The
              information on this website is for general informational purposes
              only and does not constitute professional tax, legal, or financial
              advice. Please consult us directly for advice specific to your
              situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
