import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { BLOG_POSTS, FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description:
    "Read practical articles on income tax, GST, audit, and accounting from CA Sourabh Sharma — expert commentary for individuals and businesses in India.",
};

const CATEGORY_COLORS: Record<string, string> = {
  GST: "bg-green-50 text-green-700 border-green-100",
  "Income Tax": "bg-blue-50 text-blue-700 border-blue-100",
  Advisory: "bg-purple-50 text-purple-700 border-purple-100",
  Audit: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function InsightsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">
              Knowledge Centre
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Insights & Articles
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guidance on income tax, GST, audit, and financial
              compliance — written in plain language for individuals and business
              owners.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BLOG_POSTS.map((post) => {
              const colorClass =
                CATEGORY_COLORS[post.category] ||
                "bg-gray-50 text-gray-700 border-gray-200";

              return (
                <Card
                  key={post.slug}
                  className="group hover:shadow-md transition-shadow border-gray-200 overflow-hidden"
                >
                  {/* Color accent top bar */}
                  <div className="h-1 bg-navy-800" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1 border ${colorClass}`}
                      >
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-navy-800 font-heading leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 text-sm text-amber-800">
              <strong>Disclaimer:</strong> The articles published here are for
              general informational purposes only and do not constitute
              professional tax or legal advice. Tax laws change frequently —
              please consult {FIRM.partner} or our team directly for advice
              specific to your situation.
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe / Contact CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Stay Informed"
            title="Have a Tax or Compliance Question?"
            subtitle="Our team publishes practical insights regularly. If you need personalised guidance, reach out directly and we will be happy to assist."
          />
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-800 text-white px-8 py-3 rounded-md font-medium hover:bg-navy-900 transition-colors"
            >
              Contact Us for Expert Advice{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
