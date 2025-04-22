import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
