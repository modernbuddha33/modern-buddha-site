'use client'

import { useTheme } from 'next-themes'
import { LogoPixel } from '@/components/LogoPixel'

export default function StyleGuidePage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pixel-heading text-4xl sm:text-5xl md:text-6xl mb-6">
            Style Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete design system for The Modern Buddha website. 
            All components, colors, typography, and interactive elements.
          </p>
        </div>

        {/* Logo Section */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="pixel-text text-lg mb-4">Default (64px)</h3>
              <LogoPixel size="md" variant="default" className="mx-auto" />
              <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">Main logo for light mode</p>
            </div>
            <div className="text-center p-6 border border-black/10 dark:border-white/10 rounded-lg bg-dark text-white">
              <h3 className="pixel-text text-lg mb-4">White (64px)</h3>
              <LogoPixel size="md" variant="white" className="mx-auto" />
              <p className="text-sm mt-4 text-gray-400">White version for dark mode</p>
            </div>
            <div className="text-center p-6 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="pixel-text text-lg mb-4">Small (32px)</h3>
              <LogoPixel size="sm" variant="default" className="mx-auto" />
              <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">Mobile and footer use</p>
            </div>
            <div className="text-center p-6 border border-black/10 dark:border-white/10 rounded-lg bg-dark text-white">
              <h3 className="pixel-text text-lg mb-4">Small White (32px)</h3>
              <LogoPixel size="sm" variant="white" className="mx-auto" />
              <p className="text-sm mt-4 text-gray-400">Mobile dark mode</p>
            </div>
          </div>
          
          {/* Logo Text Example */}
          <div className="mt-8 p-6 border border-black/10 dark:border-white/10 rounded-lg">
            <h3 className="pixel-heading text-xl mb-4">Logo Text</h3>
            <div className="flex items-center space-x-3">
              <LogoPixel size="md" variant={theme === 'dark' ? 'white' : 'default'} />
              <div className="flex flex-col">
                <span className="logo-text text-sm font-bold">The Modern Buddha</span>
              </div>
            </div>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
              Logo text uses Press Start 2P font (smaller size to fit on one line)
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-full h-24 bg-white border-2 border-black/20 rounded-lg mb-3"></div>
              <h3 className="pixel-text font-bold">White</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Light mode background</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-dark border-2 border-white/20 rounded-lg mb-3"></div>
              <h3 className="pixel-text font-bold text-white">Dark (#0E0F10)</h3>
              <p className="text-sm text-gray-400">Dark mode background</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-honey border-2 border-black/20 rounded-lg mb-3"></div>
              <h3 className="pixel-text font-bold">Honey (#F0C674)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Accent color</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-black border-2 border-white/20 rounded-lg mb-3"></div>
              <h3 className="pixel-text font-bold text-white">Black</h3>
              <p className="text-sm text-gray-400">Text and borders</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Typography</h2>
          
          {/* Outfit Font - Headings */}
          <div className="mb-12">
            <h3 className="pixel-heading text-2xl mb-6">Outfit (Headings)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Clean, modern sans-serif for headings and titles
            </p>
            <div className="space-y-4">
              <div>
                <h1 className="pixel-heading text-4xl sm:text-5xl md:text-6xl">Heading 1 (6xl)</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Main page headlines - "Wake up to what's already here"</p>
              </div>
              <div>
                <h2 className="pixel-heading text-3xl sm:text-4xl md:text-5xl">Heading 2 (5xl)</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Section titles</p>
              </div>
              <div>
                <h3 className="pixel-heading text-2xl sm:text-3xl md:text-4xl">Heading 3 (4xl)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Subsection titles</p>
              </div>
              <div>
                <h4 className="pixel-heading text-xl sm:text-2xl md:text-3xl">Heading 4 (3xl)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Component titles</p>
              </div>
              <div>
                <h5 className="pixel-heading text-lg sm:text-xl md:text-2xl">Heading 5 (2xl)</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Small titles</p>
              </div>
              <div>
                <h6 className="pixel-heading text-base sm:text-lg md:text-xl">Heading 6 (xl)</h6>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Micro titles</p>
              </div>
            </div>
          </div>

          {/* Silkscreen Font - Body Text & UI */}
          <div className="mb-12">
            <h3 className="pixel-heading text-2xl mb-6">Silkscreen (Body Text & UI)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Pixelated font for body text, buttons, navigation, and all UI elements
            </p>
            <div className="space-y-4">
              <div>
                <p className="pixel-text text-2xl">Large Body Text (2xl)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Hero subtext and large paragraphs</p>
              </div>
              <div>
                <p className="pixel-text text-xl">Body Text (xl)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Page descriptions and main content</p>
              </div>
              <div>
                <p className="pixel-text text-lg">Medium Body Text (lg)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Regular paragraphs and content</p>
              </div>
              <div>
                <p className="pixel-text text-base">Base Body Text (base)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Default body text size</p>
              </div>
              <div>
                <p className="pixel-text text-sm">Small Text (sm)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Captions, navigation, and small details</p>
              </div>
              <div>
                <p className="pixel-text text-xs">Extra Small Text (xs)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Footer text and micro details</p>
              </div>
            </div>
          </div>

          {/* Press Start 2P Font - Logo */}
          <div>
            <h3 className="pixel-heading text-2xl mb-6">Press Start 2P (Logo)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Highly pixelated font for logo text only
            </p>
            <div className="space-y-4">
              <div>
                <p className="logo-text text-sm">Logo Text (sm)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Brand logo text</p>
              </div>
              <div>
                <p className="logo-text text-xs">Small Logo Text (xs)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Mobile and footer logo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Buttons</h2>
          
          {/* Primary Buttons */}
          <div className="mb-12">
            <h3 className="pixel-heading text-2xl mb-6">Primary Buttons (Honey)</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="pixel-button-primary px-8 py-4 text-lg">
                Large Primary
              </button>
              <button className="pixel-button-primary px-6 py-3 text-base">
                Medium Primary
              </button>
              <button className="pixel-button-primary px-4 py-2 text-sm">
                Small Primary
              </button>
              <button className="pixel-button-primary px-3 py-1 text-xs">
                Extra Small
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="mb-12">
            <h3 className="pixel-heading text-2xl mb-6">Secondary Buttons (Outline)</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="pixel-button-secondary px-8 py-4 text-lg">
                Large Secondary
              </button>
              <button className="pixel-button-secondary px-6 py-3 text-base">
                Medium Secondary
              </button>
              <button className="pixel-button-secondary px-4 py-2 text-sm">
                Small Secondary
              </button>
              <button className="pixel-button-secondary px-3 py-1 text-xs">
                Extra Small
              </button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <h3 className="pixel-heading text-2xl mb-6">Button States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="pixel-heading text-lg mb-4">Primary Button States</h4>
                <div className="space-y-3">
                  <button className="pixel-button-primary px-6 py-3 text-base">
                    Normal State
                  </button>
                  <button className="pixel-button-primary px-6 py-3 text-base opacity-50 cursor-not-allowed">
                    Disabled State
                  </button>
                </div>
              </div>
              <div>
                <h4 className="pixel-heading text-lg mb-4">Secondary Button States</h4>
                <div className="space-y-3">
                  <button className="pixel-button-secondary px-6 py-3 text-base">
                    Normal State
                  </button>
                  <button className="pixel-button-secondary px-6 py-3 text-base opacity-50 cursor-not-allowed">
                    Disabled State
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Interactive Elements</h2>
          
          {/* Theme Toggle */}
          <div className="mb-8">
            <h3 className="pixel-heading text-2xl mb-4">Theme Toggle</h3>
            <div className="flex items-center gap-4">
              <button className="pixel-button-secondary px-4 py-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Toggle between light and dark mode
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-8">
            <h3 className="pixel-heading text-2xl mb-4">Navigation Links</h3>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                Coaching
              </a>
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                About
              </a>
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                Blog
              </a>
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                Resources
              </a>
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                Testimonials
              </a>
              <a href="#" className="pixel-text text-sm hover:text-honey transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Spacing & Layout</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="pixel-heading text-2xl mb-6">Spacing Scale</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-honey"></div>
                  <span className="text-sm">2px (0.5)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-honey"></div>
                  <span className="text-sm">4px (1)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-honey"></div>
                  <span className="text-sm">8px (2)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-honey"></div>
                  <span className="text-sm">12px (3)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-honey"></div>
                  <span className="text-sm">16px (4)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-honey"></div>
                  <span className="text-sm">20px (5)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="pixel-heading text-2xl mb-6">Container Widths</h3>
              <div className="space-y-4">
                <div className="border-2 border-honey p-4">
                  <p className="text-sm">Max Width: 7xl (80rem / 1280px)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Main container for content</p>
                </div>
                <div className="border-2 border-honey p-4 max-w-4xl">
                  <p className="text-sm">Max Width: 4xl (56rem / 896px)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Content sections</p>
                </div>
                <div className="border-2 border-honey p-4 max-w-2xl">
                  <p className="text-sm">Max Width: 2xl (42rem / 672px)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Text content</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background Patterns */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Background Patterns</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="pixel-heading text-xl mb-4">Pixel Grid (Light Mode)</h3>
              <div className="w-full h-32 bg-white" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Subtle pixel grid pattern for light mode
              </p>
            </div>
            
            <div className="p-8 border border-black/10 dark:border-white/10 rounded-lg bg-dark text-white">
              <h3 className="pixel-heading text-xl mb-4">Pixel Grid (Dark Mode)</h3>
              <div className="w-full h-32 bg-dark" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              <p className="text-sm text-gray-400 mt-2">
                Subtle pixel grid pattern for dark mode
              </p>
            </div>
          </div>
        </section>

        {/* Current Theme Info */}
        <section className="mb-16">
          <h2 className="pixel-heading text-3xl mb-8">Current Theme</h2>
          <div className="p-6 border border-black/10 dark:border-white/10 rounded-lg">
            <p className="text-lg">
              <span className="font-bold">Current Theme:</span> {theme || 'system'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This page automatically adapts to the current theme setting.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
