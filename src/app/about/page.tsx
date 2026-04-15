import type { Metadata } from "next";
import { CheckCircle2, Target, Heart, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sourabh Sharma & Company — our story, mission, values, and commitment to delivering trusted CA services in Jaipur.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              About Our Firm
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A dedicated Chartered Accountant firm committed to providing
              accurate, timely, and honest financial services to clients across
              Jaipur and Rajasthan.
            </p>
          </div>
        </div>
      </section>

      {/* Firm Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Our Story"
                title="Built on Trust, Driven by Expertise"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-800">{FIRM.name}</strong> was
                  established in {FIRM.established} by CA Sourabh Sharma with a
                  clear vision — to offer professional, dependable, and
                  accessible accounting and tax services to the people and
                  businesses of Jaipur.
                </p>
                <p>
                  From the very beginning, the firm has operated on the belief
                  that strong client relationships are built on transparency,
                  integrity, and consistent delivery. Every client — whether a
                  salaried individual or a multi-crore business — receives the
                  same degree of professional attention and care.
                </p>
                <p>
                  Over the years, the firm has expanded its expertise across
                  income tax, GST, audit, bookkeeping, financial reporting, and
                  advisory services. Our team stays updated with the latest
                  changes in tax law, GST notifications, and regulatory
                  requirements — so our clients always remain compliant.
                </p>
                <p>
                  Today, the firm proudly serves hundreds of clients including
                  individuals, HUFs, traders, retailers, startups, partnerships,
                  LLPs, and private limited companies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Mission */}
              <div className="bg-navy-50 border border-navy-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 text-lg mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To help individuals and businesses fulfil their tax and
                      compliance obligations with accuracy and ease, while
                      providing practical financial guidance that supports their
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 text-lg mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To be the most trusted CA practice in Jaipur — known for
                      our integrity, our technical depth, and the genuine
                      difference we make to every client we serve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 text-lg mb-2">
                      Our Values
                    </h3>
                    <ul className="space-y-1.5">
                      {[
                        "Integrity in every engagement",
                        "Accuracy and attention to detail",
                        "Timely delivery and responsiveness",
                        "Client confidentiality and trust",
                        "Continuous learning and professional growth",
                      ].map((v) => (
                        <li
                          key={v}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="A Decade of Professional Practice"
            subtitle="From a focused solo practice to a multi-service CA firm trusted by hundreds of clients."
          />
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                year: "2015",
                title: "Firm Established",
                desc: "CA Sourabh Sharma established the firm in Jaipur with a focus on income tax and accounting services for individuals and small businesses.",
              },
              {
                year: "2017",
                title: "GST Era Begins",
                desc: "As GST was introduced in India, the firm expanded its services to include GST registration, return filing, and reconciliation for clients across sectors.",
              },
              {
                year: "2019",
                title: "Audit Practice Grows",
                desc: "The firm began undertaking statutory and tax audits for partnership firms and private limited companies, adding audit and assurance to its service portfolio.",
              },
              {
                year: "2021",
                title: "Digital Transformation",
                desc: "Adopted cloud-based accounting tools, e-filing infrastructure, and Tally Prime to modernise service delivery and handle growing client volumes efficiently.",
              },
              {
                year: "2024",
                title: "500+ Clients Milestone",
                desc: "The firm crossed 500 active clients and continued to deepen its expertise in income tax advisory, GST compliance, project reporting, and financial statements.",
              },
            ].map((item, idx) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  {idx < 4 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="inline-block bg-navy-100 text-navy-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Approach */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="How We Work"
            subtitle="A structured, client-first process that ensures nothing falls through the cracks."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We start by understanding your business, your compliance obligations, and your financial goals.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "We create a compliance calendar and action plan specific to your entity type and tax profile.",
              },
              {
                step: "03",
                title: "Execute",
                desc: "We handle filings, audits, and documentation with precision and well ahead of deadlines.",
              },
              {
                step: "04",
                title: "Review & Advise",
                desc: "After every major filing cycle, we share insights and recommendations to help you plan better.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="text-5xl font-bold text-gray-100 font-heading absolute top-4 right-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy-800 text-lg mb-2 relative">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed relative">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
