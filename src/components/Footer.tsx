'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { LogoPixel } from './LogoPixel'

const navLinks = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/50 dark:bg-dark/50 border-t border-black/10 dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-3">
            <LogoPixel
              size="sm"
              variant={theme === 'dark' ? 'white' : 'default'}
            />
            <div className="flex flex-col">
              <span className="logo-text text-xs font-bold">The Modern Buddha</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                © {currentYear} All rights reserved
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="pixel-text text-xs hover:text-honey transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
