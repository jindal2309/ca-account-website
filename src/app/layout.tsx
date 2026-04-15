import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FIRM } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sourabhsharmaca.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${FIRM.name} — ${FIRM.designation}, Jaipur`,
    template: `%s | ${FIRM.name}`,
  },
  description:
    "Sourabh Sharma & Company is a trusted Chartered Accountant firm in Jaipur offering income tax filing, GST compliance, tax audit, accounting, financial statements, and advisory services.",
  keywords: [
    "Chartered Accountant Jaipur",
    "CA firm Jaipur",
    "GST filing Jaipur",
    "income tax return Jaipur",
    "tax audit",
    "accounting services Jaipur",
    "GST registration",
    "Sourabh Sharma CA",
    "CA near me Jaipur",
  ],
  authors: [{ name: FIRM.partner }],
  creator: FIRM.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: FIRM.name,
    title: `${FIRM.name} — ${FIRM.designation}, Jaipur`,
    description:
      "Trusted CA services in Jaipur — income tax, GST, audit, accounting, and financial advisory for individuals and businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FIRM.name} — Chartered Accountants, Jaipur`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FIRM.name} — ${FIRM.designation}`,
    description:
      "Trusted CA services in Jaipur — income tax, GST, audit, and accounting.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
