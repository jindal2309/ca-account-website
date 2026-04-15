export const FIRM = {
  name: "Sourabh Sharma & Company",
  shortName: "SS & Co.",
  designation: "Chartered Accountants",
  tagline: "Trusted Financial Guidance. Precise Compliance. Lasting Relationships.",
  taglineShort: "Your Trusted CA Partner in Jaipur",
  partner: "CA Sourabh Sharma",
  email: "info@sourabhsharma.ca",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: {
    line1: "123, Vaishali Nagar",
    line2: "Near XYZ Bank, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    pin: "302021",
  },
  established: "2015",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmFpc2hhbGkgTmFnYXIsIEphaXB1cg!5e0!3m2!1sen!2sin!4v1234567890",
  socialLinks: {
    linkedin: "https://linkedin.com",
  },
};

export const SERVICES = [
  {
    slug: "income-tax",
    title: "Income Tax Filing & Advisory",
    icon: "FileText",
    shortDesc:
      "Individual, partnership, and corporate ITR filing with expert tax planning guidance.",
    description:
      "We handle income tax return filing for individuals, HUFs, firms, LLPs, and companies. Our team ensures accurate computation, timely filing, and maximisation of legitimate tax benefits. We also provide proactive tax planning advice to help you reduce your tax liability legally.",
    highlights: [
      "ITR filing for individuals, firms, and companies",
      "Advance tax computation and challan filing",
      "Tax planning and optimisation advisory",
      "Assessment proceedings and notice handling",
    ],
  },
  {
    slug: "gst",
    title: "GST Filing & Reconciliation",
    icon: "Receipt",
    shortDesc:
      "End-to-end GST compliance including GSTR-1, GSTR-3B, annual returns, and reconciliation.",
    description:
      "Our GST team manages your complete goods and services tax compliance cycle — from registration and monthly/quarterly filings to annual returns and GSTR-2A/2B reconciliation. We identify mismatches, help resolve disputes, and keep your ITC claims accurate.",
    highlights: [
      "GSTR-1, GSTR-3B, GSTR-9 filing",
      "GST registration and amendments",
      "ITC reconciliation and mismatch resolution",
      "GST notices and departmental correspondence",
    ],
  },
  {
    slug: "tax-audit",
    title: "Tax Audit & Compliance",
    icon: "ClipboardCheck",
    shortDesc:
      "Statutory and tax audits under the Income Tax Act with comprehensive reporting.",
    description:
      "We conduct tax audits under Section 44AB of the Income Tax Act for businesses and professionals crossing the prescribed turnover threshold. Our audit process is thorough, documentation-driven, and fully compliant with ICAI standards.",
    highlights: [
      "Audit under Section 44AB of the Income Tax Act",
      "Form 3CA, 3CB, and 3CD preparation",
      "Audit report submission and compliance",
      "Management information reporting",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    icon: "BookOpen",
    shortDesc:
      "Systematic Tally Prime and Excel-based accounting for businesses of all sizes.",
    description:
      "Accurate books of accounts are the foundation of any well-run business. We maintain your day-to-day accounts in Tally Prime, record journal and adjustment entries, perform bank and ledger reconciliations, and ensure your financial data is always up to date.",
    highlights: [
      "Day-to-day bookkeeping in Tally Prime",
      "Bank reconciliation and ledger maintenance",
      "Adjustment entries and closing entries",
      "MIS reports and Excel-based analytics",
    ],
  },
  {
    slug: "financial-statements",
    title: "Financial Statement Preparation",
    icon: "BarChart2",
    shortDesc:
      "Preparation of P&L, balance sheet, and cash flow statements as per accounting standards.",
    description:
      "We prepare financial statements — profit and loss accounts, balance sheets, and cash flow statements — in compliance with the applicable Accounting Standards (AS) and Schedule III requirements under the Companies Act. Our statements are audit-ready and lender-ready.",
    highlights: [
      "Profit & loss account preparation",
      "Balance sheet and notes to accounts",
      "Cash flow statement preparation",
      "Compliance with Accounting Standards (AS)",
    ],
  },
  {
    slug: "project-reports",
    title: "Project Reports & Loan Documentation",
    icon: "TrendingUp",
    shortDesc:
      "Detailed project reports and CMA data for bank loans and government schemes.",
    description:
      "We prepare bankable project reports and CMA (Credit Monitoring Arrangement) data for entrepreneurs seeking term loans, working capital limits, MUDRA loans, and government scheme financing. Our reports are structured to meet the documentation standards of banks and NBFCs.",
    highlights: [
      "Project reports for bank loans",
      "CMA data preparation",
      "MUDRA and startup scheme documentation",
      "Profitability and viability analysis",
    ],
  },
  {
    slug: "gst-registration",
    title: "GST Registration & Cancellation",
    icon: "BadgeCheck",
    shortDesc:
      "Hassle-free GST registration, amendments, and voluntary cancellation services.",
    description:
      "Whether you are a new business needing GST registration or an existing taxpayer needing to amend your registration details or apply for cancellation, we handle the complete process seamlessly on the GST portal.",
    highlights: [
      "New GST registration",
      "Core and non-core field amendments",
      "GST cancellation and revocation",
      "LUT filing for exporters",
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance Services",
    icon: "Shield",
    shortDesc:
      "Statutory, internal, and management audits for businesses, trusts, and societies.",
    description:
      "Our audit and assurance practice covers statutory audits, internal audits, and management audits for companies, partnership firms, trusts, and co-operative societies. We bring objectivity, professional scepticism, and a thorough review process to every engagement.",
    highlights: [
      "Statutory audit under Companies Act",
      "Internal audit and process review",
      "Management audit and risk assessment",
      "Audit of trusts and charitable organisations",
    ],
  },
];

export const SKILLS = [
  { name: "Tally Prime", level: 95 },
  { name: "GST Portal & Filing", level: 95 },
  { name: "Income Tax Portal", level: 90 },
  { name: "Microsoft Excel", level: 92 },
  { name: "Financial Statement Analysis", level: 88 },
  { name: "Tax Audit (Sec 44AB)", level: 90 },
  { name: "Account Reconciliation", level: 93 },
  { name: "Accounting Standards (AS)", level: 85 },
];

export const PARTNERS = [
  {
    slug: "sourabh-sharma",
    name: "CA Sourabh Sharma",
    initials: "SS",
    title: "Partner",
    designation: "Chartered Accountant",
    location: "Jaipur, Rajasthan",
    linkedin: "",
    specialization: "Income Tax · GST · Audit",
    bio: [
      "CA Sourabh Sharma is a practising Chartered Accountant and the founding partner of Sourabh Sharma & Company. With over a decade of professional experience, he has built deep expertise across income tax compliance, GST, statutory and tax audits, financial statement preparation, and business advisory.",
      "Having worked with a diverse client base — from individual taxpayers and salaried professionals to retailers, traders, startups, and private limited companies — he brings a practical, solution-oriented approach to every engagement.",
      "CA Sourabh is known among his clients for his accessibility, clear communication, and ability to explain complex tax provisions in plain language. The firm follows a documentation-first, deadline-driven work culture that keeps clients free from penalties and compliance stress.",
    ],
    education: [
      {
        degree: "Chartered Accountant (CA)",
        institution: "Institute of Chartered Accountants of India (ICAI)",
        detail:
          "Cleared all three levels — CPT, IPCC, and Final — and completed articleship training.",
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        institution: "University of Rajasthan, Jaipur",
        detail:
          "Specialisation in Accounting and Finance.",
      },
    ],
    highlights: [
      "Member, Institute of Chartered Accountants of India (ICAI)",
      "Handled tax audits for businesses with turnover from ₹1 crore to ₹10 crore+",
      "Filed 1000+ income tax returns for individuals, firms, and companies",
      "Represented clients in GST and income tax assessment proceedings",
      "Prepared 100+ bankable project reports for MSME and startup loan applications",
      "Expert in GST reconciliation, ITC claim management, and GSTR-9 filing",
    ],
    areas: [
      "Income Tax Advisory",
      "GST Compliance",
      "Tax Audit (Sec 44AB)",
      "Statutory Audit",
      "Financial Statement Preparation",
      "Project Report & CMA Data",
      "GST Registration",
      "Bookkeeping (Tally Prime)",
      "MIS & Excel Reporting",
      "Assessment Proceedings",
    ],
  },
  {
    slug: "saurabh-jindal",
    name: "CA Saurabh Jindal",
    initials: "SJ",
    title: "Partner",
    designation: "Chartered Accountant",
    location: "Jaipur, Rajasthan",
    linkedin: "https://www.linkedin.com/in/saurabh-jindal-846aa5164/",
    specialization: "Direct Tax · Indirect Tax · Financial Reporting",
    bio: [
      "CA Saurabh Jindal is a Partner at Sourabh Sharma & Company with extensive expertise in direct and indirect taxation. He brings deep knowledge of the Income Tax Act and GST framework, helping clients navigate complex compliance requirements with clarity and efficiency.",
      "With around a decade of hands-on experience, CA Saurabh specialises in tax planning, GST compliance, financial reporting, and audit & assurance services. He works closely with businesses and professionals to ensure accurate and timely compliance.",
      "CA Saurabh is known for his analytical approach to tax matters and his ability to develop practical solutions for clients facing complex financial and regulatory challenges.",
    ],
    education: [
      {
        degree: "Chartered Accountant (CA)",
        institution: "Institute of Chartered Accountants of India (ICAI)",
        detail:
          "Qualified CA with comprehensive training in direct taxation, indirect taxation, and audit.",
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        institution: "University of Rajasthan, Jaipur",
        detail:
          "Strong foundation in commerce, accounting, and financial principles.",
      },
    ],
    highlights: [
      "Member, Institute of Chartered Accountants of India (ICAI)",
      "~10 years of experience in direct and indirect taxation",
      "Expert in GST compliance, return filing, and ITC reconciliation",
      "Handles income tax advisory for individuals, firms, and companies",
      "Proficient in financial reporting and financial statement analysis",
      "Experience in audit & assurance engagements across multiple sectors",
    ],
    areas: [
      "Direct Taxation",
      "Indirect Taxation (GST)",
      "Tax Planning & Advisory",
      "GST Compliance & Filing",
      "Financial Reporting",
      "Audit & Assurance",
      "Income Tax Assessment",
      "GST Reconciliation",
      "Corporate Compliance",
    ],
  },
  {
    slug: "mohit-sharma",
    name: "CA Mohit Sharma",
    initials: "MS",
    title: "Partner",
    designation: "Chartered Accountant",
    location: "Jaipur, Rajasthan",
    linkedin: "https://www.linkedin.com/in/ca-mohit-sharma-5611a2180/",
    specialization: "Taxation · Audit · Compliance",
    bio: [
      "CA Mohit Sharma is a Partner at Sourabh Sharma & Company and a qualified Chartered Accountant practising in Jaipur, Rajasthan. He brings strong expertise in taxation, auditing, and financial compliance across diverse client segments.",
      "CA Mohit works with businesses, firms, and individuals to manage their end-to-end compliance requirements — from income tax and GST filings to statutory audits and financial statement preparation. His thorough and methodical approach ensures that every engagement meets the highest standards of accuracy.",
      "With a client-first mindset and a strong command of regulatory requirements, CA Mohit is a trusted advisor for clients navigating complex tax and compliance landscapes.",
    ],
    education: [
      {
        degree: "Chartered Accountant (CA)",
        institution: "Institute of Chartered Accountants of India (ICAI)",
        detail:
          "ICAI member with rigorous training in audit, taxation, and financial reporting.",
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        institution: "University of Rajasthan, Jaipur",
        detail:
          "Core background in commerce, accounting principles, and business law.",
      },
    ],
    highlights: [
      "Member, Institute of Chartered Accountants of India (ICAI)",
      "Handles income tax and GST compliance for a wide range of clients",
      "Experience in statutory audit for companies and partnership firms",
      "Manages financial statement preparation and reporting",
      "Assists clients with tax planning and optimisation",
      "Experienced in handling GST notices and assessment proceedings",
    ],
    areas: [
      "Income Tax Filing",
      "GST Compliance",
      "Statutory Audit",
      "Financial Statement Preparation",
      "Tax Planning",
      "GST Registration & Amendments",
      "Bookkeeping & Accounts",
      "MIS Reporting",
      "Compliance Management",
    ],
  },
  {
    slug: "shailesh-patodia",
    name: "CA Shailesh Patodia",
    initials: "SP",
    title: "Partner",
    designation: "Chartered Accountant",
    location: "Jaipur, Rajasthan",
    linkedin: "https://www.linkedin.com/in/spatodiaca/",
    specialization: "Audit · Advisory · Business Compliance",
    bio: [
      "CA Shailesh Patodia is a Partner at Sourabh Sharma & Company and a practising Chartered Accountant with strong expertise in audit, business advisory, and financial compliance. Based in Jaipur, CA Patodia brings a structured and detail-oriented approach to every client engagement.",
      "With experience spanning statutory audit, tax audit, GST compliance, and business advisory services, CA Patodia works with businesses across various sectors to help them maintain robust financial records and meet their regulatory obligations efficiently.",
      "Known for thorough documentation and a methodical working style, CA Patodia adds significant depth to the firm's audit and advisory practice.",
    ],
    education: [
      {
        degree: "Chartered Accountant (CA)",
        institution: "Institute of Chartered Accountants of India (ICAI)",
        detail:
          "Qualified CA with specialised training in audit, assurance, and financial advisory.",
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        institution: "University of Rajasthan, Jaipur",
        detail:
          "Strong academic foundation in commerce, accounts, and business management.",
      },
    ],
    highlights: [
      "Member, Institute of Chartered Accountants of India (ICAI)",
      "Practising CA in Jaipur with expertise in audit and assurance",
      "Handles statutory audit for companies and partnership firms",
      "Experience in tax audit under Section 44AB of the Income Tax Act",
      "Provides advisory services for MSMEs and growing businesses",
      "Assists with GST registration, compliance, and return filing",
    ],
    areas: [
      "Statutory Audit",
      "Tax Audit (Sec 44AB)",
      "Audit & Assurance",
      "Business Advisory",
      "GST Compliance",
      "Financial Statements",
      "Tax Compliance",
      "Project Reports",
      "Internal Audit",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Qualified & Experienced",
    desc: "Led by a practising Chartered Accountant with hands-on expertise in taxation, audit, and accounting.",
  },
  {
    icon: "Clock",
    title: "Timely Compliance",
    desc: "We prioritise deadlines. Your filings are always submitted on time, keeping you free from penalties.",
  },
  {
    icon: "Users",
    title: "Personalised Attention",
    desc: "As a focused firm, every client gets dedicated attention — not a token relationship.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparent Fees",
    desc: "No hidden charges. We discuss fees upfront and deliver full value for every rupee you invest.",
  },
  {
    icon: "Lightbulb",
    title: "Practical Advice",
    desc: "We translate complex tax laws into clear, actionable guidance that helps your business grow.",
  },
  {
    icon: "Phone",
    title: "Always Reachable",
    desc: "You can reach us by phone, WhatsApp, or email. Quick responses when you need answers.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rakesh Agarwal",
    role: "Proprietor, Agarwal Traders",
    text: "Sourabh Sharma & Co. has been managing our GST and income tax filings for three years. The team is thorough, punctual, and genuinely helpful. Highly recommended.",
  },
  {
    name: "Priya Meena",
    role: "Founder, TechStart Solutions",
    text: "As a startup founder, I needed clear guidance on GST registration and compliance. CA Sourabh gave us a complete roadmap and has been our trusted advisor since day one.",
  },
  {
    name: "Vijay Sharma",
    role: "Director, Sharma Infra Pvt Ltd",
    text: "The project report they prepared for our bank loan was excellent. Detailed, well-structured, and approved in the first submission itself. Great professional work.",
  },
];

export const FAQ = [
  {
    q: "Who needs to file an Income Tax Return?",
    a: "Any individual, HUF, firm, LLP, or company whose income exceeds the basic exemption limit is required to file an ITR. It is also advisable to file even if income is below the limit to claim refunds and maintain a financial record.",
  },
  {
    q: "What documents are needed for GST registration?",
    a: "You typically need PAN card, Aadhaar, proof of business address, bank account details, and photographs of the promoters. We guide you through the complete list based on your entity type.",
  },
  {
    q: "What is a Tax Audit and who needs it?",
    a: "A Tax Audit under Section 44AB of the Income Tax Act is mandatory for businesses with turnover exceeding ₹1 crore (or ₹10 crore if 95%+ transactions are digital) and professionals with gross receipts exceeding ₹50 lakh.",
  },
  {
    q: "Can you help with GST notices from the department?",
    a: "Yes. We assist with drafting replies to GST notices, representing clients before the GST officer, and resolving discrepancies in returns and reconciliations.",
  },
  {
    q: "What accounting software do you use?",
    a: "We primarily work with Tally Prime for bookkeeping and Microsoft Excel for MIS, reconciliation, and financial analysis. We can adapt to your existing setup if required.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "gst-annual-return-guide",
    title: "GSTR-9 Annual Return: A Complete Guide for Businesses",
    date: "March 20, 2025",
    category: "GST",
    excerpt:
      "The GSTR-9 annual return is mandatory for regular GST taxpayers. Here is what you need to know about its structure, due dates, and how to file it correctly.",
  },
  {
    slug: "new-tax-regime-fy2025",
    title: "New vs Old Tax Regime — Which Should You Choose in FY 2025-26?",
    date: "March 5, 2025",
    category: "Income Tax",
    excerpt:
      "The new tax regime has become the default for AY 2025-26. We break down who benefits from it and when the old regime is still worth choosing.",
  },
  {
    slug: "gst-itc-reconciliation",
    title: "How to Reconcile Your ITC with GSTR-2B — Step by Step",
    date: "February 18, 2025",
    category: "GST",
    excerpt:
      "Input Tax Credit reconciliation between your purchase register and GSTR-2B is critical to avoid notices. Here is a practical step-by-step process.",
  },
  {
    slug: "project-report-bank-loan",
    title: "What Goes Into a Bankable Project Report for SME Loans?",
    date: "January 30, 2025",
    category: "Advisory",
    excerpt:
      "Banks evaluate your project report carefully before sanctioning loans. Learn what sections matter most and how to present your business case effectively.",
  },
];
