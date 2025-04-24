"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

type NavItem = {
  href: string;
  label: string;
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
        id: item.href.replace("#", ""),
        top: document.getElementById(item.href.replace("#", ""))?.offsetTop || 0
      }))

      const scrollPosition = window.scrollY + 100

      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.top ? section.id : acc
      }, "")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      const chatButton = document.querySelector('[data-chat-button]');
      if (chatButton instanceof HTMLElement) {
        chatButton.click();
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(href.substring(1));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                activeSection === item.href.replace("#", "")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors
                    ${activeSection === item.href.substring(1)
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-600 dark:text-gray-400"}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 