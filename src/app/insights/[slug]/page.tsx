import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react";
import { BLOG_POSTS, FIRM } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

// Sample article body content per slug
const ARTICLE_CONTENT: Record<string, string> = {
  "gst-annual-return-guide": `
## What is GSTR-9?

GSTR-9 is the annual return that every regular GST taxpayer must file once per financial year. It is a consolidation of all the monthly or quarterly returns (GSTR-1 and GSTR-3B) filed during the year.

## Who Must File GSTR-9?

All regular taxpayers registered under GST whose aggregate annual turnover exceeds ₹2 crore must file GSTR-9. For taxpayers with turnover below ₹2 crore, filing is optional but recommended.

**Exempted from GSTR-9:**
- Composition scheme taxpayers (they file GSTR-9A)
- Casual taxable persons
- Input Service Distributors
- Non-resident taxable persons

## Due Date

The due date for GSTR-9 is typically **31st December** of the year following the relevant financial year. For example, GSTR-9 for FY 2024-25 is due by 31st December 2025.

## Key Sections in GSTR-9

1. **Part I** — Basic details (GSTIN, trade name, FY)
2. **Part II** — Details of outward and inward supplies declared in returns
3. **Part III** — Details of ITC as declared in returns
4. **Part IV** — Details of tax paid as declared in returns
5. **Part V** — Particulars of transactions for the previous FY declared in April to September
6. **Part VI** — Other information (refunds, demands, HSN summary)

## Common Mistakes to Avoid

- Turnover mismatch between GSTR-1 and GSTR-9
- ITC differences between GSTR-3B and auto-populated values
- Missing B2B invoices or amendments
- Incorrect HSN summary reporting

## Our Advice

Always reconcile your books with GSTR-1, GSTR-3B, and GSTR-2B before preparing GSTR-9. Discrepancies discovered late attract interest and penalties. If you need help, contact our team.
  `,
  "new-tax-regime-fy2025": `
## Background

The new tax regime was introduced in Budget 2020 and made the default regime from FY 2023-24 onwards (AY 2024-25). From FY 2024-25, the new tax regime continues as the default, with revised slabs.

## Tax Slabs Under the New Regime (FY 2025-26)

| Income Slab | Tax Rate |
|-------------|----------|
| Up to ₹3,00,000 | Nil |
| ₹3,00,001 – ₹7,00,000 | 5% |
| ₹7,00,001 – ₹10,00,000 | 10% |
| ₹10,00,001 – ₹12,00,000 | 15% |
| ₹12,00,001 – ₹15,00,000 | 20% |
| Above ₹15,00,000 | 30% |

A **rebate under Section 87A** is available for income up to ₹7,00,000, effectively making it zero tax up to this level.

## What You Give Up in the New Regime

- Deduction under Section 80C (PF, PPF, ELSS, LIC, etc.)
- House Rent Allowance (HRA)
- Standard Deduction of ₹50,000 (for salaried — now ₹75,000 from FY 2024-25)
- Leave Travel Allowance (LTA)
- Interest on housing loan (Section 24)
- Most other deductions and exemptions

## When is the New Regime Better?

The new regime is generally better if:
- You have low or no investments under 80C
- You do not claim HRA or home loan deduction
- Your total exemptions/deductions are less than ₹3-4 lakh

## When to Stick with the Old Regime

Stick with the old regime if:
- You have significant 80C investments
- You are claiming HRA for a rented accommodation
- You have a home loan with substantial interest
- You have NPS contributions under 80CCD

**Our recommendation:** Always calculate your tax liability under both regimes before filing. The right choice depends entirely on your individual income and investment profile. Contact us for a personalised assessment.
  `,
  "gst-itc-reconciliation": `
## Why ITC Reconciliation Matters

Input Tax Credit (ITC) is one of the most important aspects of GST. Incorrectly claimed ITC or unreconciled differences between your purchase register and GSTR-2B can attract notices, interest demands, and penalties from the GST department.

## What is GSTR-2B?

GSTR-2B is an auto-generated, static ITC statement generated for each taxpayer on the basis of GSTR-1/IFF filed by their suppliers. It shows ITC available to you from your suppliers' filings.

## Step-by-Step Reconciliation Process

**Step 1: Download your purchase register**
Export your purchase data from Tally Prime or your accounting software for the relevant month.

**Step 2: Download GSTR-2B**
Log in to the GST portal, go to Services > Returns > GSTR-2B, and download the Excel file.

**Step 3: Match invoices**
Compare your purchase register with GSTR-2B on:
- Supplier GSTIN
- Invoice number
- Invoice date
- Taxable value
- GST amount (IGST/CGST/SGST)

**Step 4: Identify mismatches**
- Invoices in your register but not in GSTR-2B (supplier has not filed)
- Invoices in GSTR-2B but not in your register (purchases you may have missed)
- Value or tax amount differences

**Step 5: Follow up with suppliers**
For invoices not reflected in GSTR-2B, follow up with your supplier to file their GSTR-1 promptly.

**Step 6: Claim only eligible ITC**
Claim ITC in GSTR-3B only for invoices that appear in GSTR-2B (or are eligible under Rule 36(4)).

## Common ITC Issues

- Supplier filing GSTR-1 late
- Incorrect GSTIN or invoice number
- Reverse charge mechanism (RCM) transactions
- Blocked credits under Section 17(5)

Need help with ITC reconciliation? Our team handles this for clients every month.
  `,
  "project-report-bank-loan": `
## What Banks Look For

When you apply for an MSME loan, term loan, or working capital limit, the bank evaluates your project report to determine:
- Viability of the business
- Your repayment capacity
- The security and risk involved
- Whether the projected cash flows support the loan servicing

## Key Sections of a Bankable Project Report

### 1. Executive Summary
A 1-2 page overview covering the promoter background, nature of business, loan amount required, and purpose of the loan.

### 2. Promoter Profile
Details of the proprietor, partners, or directors — their education, experience, and past business track record.

### 3. Business Description
- Nature and type of business
- Products or services offered
- Target market and customers
- Location and infrastructure

### 4. Market Analysis
- Industry overview
- Market size and demand estimation
- Competition analysis
- Marketing strategy

### 5. Project Cost and Means of Finance

| Item | Cost (₹) |
|------|----------|
| Land & Building | XX,XX,XXX |
| Plant & Machinery | XX,XX,XXX |
| Working Capital | XX,XX,XXX |
| Preliminary Expenses | XX,XXX |
| **Total Project Cost** | **XX,XX,XXX** |

Means of finance should show own contribution + bank loan split.

### 6. Financial Projections (5 Years)
- Revenue projections
- Cost of goods sold
- Operating expenses
- EBITDA and net profit
- Cash flow statement
- Balance sheet projections

### 7. CMA Data
Credit Monitoring Arrangement (CMA) data is a standardised format required by most banks for working capital assessments. It includes fund flow statements, ratio analysis, and comparative financial data.

### 8. Repayment Schedule
Show the proposed loan repayment — monthly installments, interest, total outflow — mapped to projected cash flows.

## Tips for Approval

1. Be realistic in your projections — banks cross-check with industry benchmarks
2. Ensure the promoter contribution is clearly documented
3. Highlight existing orders, contracts, or client relationships
4. Keep GST and income tax returns filed and up to date
5. Maintain clean bank statements for 12 months before applying

Our firm has prepared 100+ bankable project reports. Contact us if you need a professional report for your loan application.
  `,
};

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = ARTICLE_CONTENT[params.slug] || post.excerpt;
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full px-3 py-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading max-w-3xl leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 mt-4 text-sm">
            By <span className="text-white font-medium">{FIRM.partner}</span>
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
                <div className="prose prose-gray prose-headings:font-heading prose-headings:text-navy-800 prose-a:text-blue-600 max-w-none">
                  {content.split("\n").map((line, i) => {
                    if (line.startsWith("## ")) {
                      return (
                        <h2 key={i} className="text-xl font-bold text-navy-800 font-heading mt-8 mb-3 first:mt-0">
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-lg font-semibold text-navy-800 font-heading mt-6 mb-2">
                          {line.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <p key={i} className="font-semibold text-navy-800 mt-4 mb-2">
                          {line.replace(/\*\*/g, "")}
                        </p>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li key={i} className="text-gray-600 text-sm ml-4 list-disc mb-1">
                          {line.replace("- ", "")}
                        </li>
                      );
                    }
                    if (line.startsWith("|")) {
                      // Render table rows as plain text skip header separator
                      if (line.startsWith("|---")) return null;
                      const cells = line.split("|").filter(Boolean).map(c => c.trim());
                      return (
                        <div key={i} className="flex gap-4 border-b border-gray-100 py-2 text-sm">
                          {cells.map((cell, ci) => (
                            <span key={ci} className={`flex-1 ${ci === 0 ? "text-gray-700" : "text-navy-800 font-medium"}`}>
                              {cell}
                            </span>
                          ))}
                        </div>
                      );
                    }
                    if (line.trim() === "") return <br key={i} />;
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-[0.95rem] mb-3">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
                <strong>Disclaimer:</strong> This article is for general
                informational purposes only and does not constitute professional
                tax or legal advice. Please consult our team for advice tailored
                to your specific situation.
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Author */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm">
                    SS
                  </div>
                  <div>
                    <div className="font-semibold text-navy-800 text-sm">
                      {FIRM.partner}
                    </div>
                    <div className="text-xs text-gray-400">
                      Chartered Accountant, Jaipur
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  CA Sourabh Sharma is a practising Chartered Accountant with
                  expertise in income tax, GST, audit, and financial advisory.
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 hover:text-blue-800"
                >
                  View Profile <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="bg-navy-800 rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-2 text-sm">
                  Need Expert Guidance?
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  Our team is here to help with all your tax and compliance
                  queries.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-navy-800 rounded-md py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Related */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-navy-800 text-sm mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/insights/${rp.slug}`}
                        className="block group"
                      >
                        <span className="text-xs text-blue-600 font-medium">
                          {rp.category}
                        </span>
                        <p className="text-sm text-gray-700 group-hover:text-navy-800 font-medium leading-tight mt-0.5 transition-colors">
                          {rp.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
