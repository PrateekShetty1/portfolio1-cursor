import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prateek Shetty - Product Manager",
  description:
    "Professional portfolio of Prateek Shetty, a Product Manager based in Boston, MA with expertise in product strategy, user research, and data-driven decision making.",
  keywords: [
    "Product Manager",
    "Prateek Shetty",
    "Boston",
    "Product Management",
    "User Research",
    "Data-Driven",
    "Portfolio",
  ],
  authors: [{ name: "Prateek Shetty", url: "https://www.linkedin.com/in/prateeknshetty/" }],
  creator: "Prateek Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prateekshetty.vercel.app",
    title: "Prateek Shetty - Product Manager",
    description: "Professional portfolio of Prateek Shetty, a Product Manager based in Boston, MA.",
    siteName: "Prateek Shetty Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Shetty - Product Manager",
    description: "Professional portfolio of Prateek Shetty, a Product Manager based in Boston, MA.",
    creator: "@prateeknshetty",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
