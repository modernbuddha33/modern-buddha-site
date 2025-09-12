'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { LogoPixel } from './LogoPixel'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <LogoPixel
              size="sm"
              variant={theme === 'dark' ? 'white' : 'default'}
              className="group-hover:scale-110 transition-transform duration-200 sm:hidden"
            />
            <LogoPixel
              size="md"
              variant={theme === 'dark' ? 'white' : 'default'}
              className="group-hover:scale-110 transition-transform duration-200 hidden sm:block"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1">
              <span className="logo-text text-xs sm:text-sm font-bold leading-tight">The Modern</span>
              <span className="logo-text text-xs sm:text-sm font-bold leading-tight sm:hidden">Buddha</span>
              <span className="logo-text text-xs sm:text-sm font-bold leading-tight hidden sm:inline">Buddha</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="pixel-text text-sm hover:text-honey transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - CTA and Theme Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/contact" className="hidden sm:block">
              <button className="pixel-button-primary px-3 sm:px-4 py-2 text-xs sm:text-sm">
                Book a Call
              </button>
            </Link>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 border-t border-black/10 dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pixel-text text-sm px-3 py-2 hover:text-honey transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="pixel-button-primary w-full px-4 py-2 text-sm">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
