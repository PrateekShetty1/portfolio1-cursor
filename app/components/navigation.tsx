"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Menu } from "lucide-react"

type NavItem = {
  name: string;
  href: string;
  highlight?: boolean;
}

type NavigationProps = {
  navItems: NavItem[];
}

export function Navigation({ navItems }: NavigationProps) {
  const [activeSection, setActiveSection] = React.useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        top: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }))

      const scrollPosition = window.scrollY + 100

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.top) {
          return section.id
        }
        return acc
      }, sections[0]?.id)

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex h-full items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
              PS
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100
                    ${activeSection === item.href.substring(1) 
                      ? "text-gray-900 dark:text-gray-100" 
                      : "text-gray-600 dark:text-gray-400"}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
} 