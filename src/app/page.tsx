import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="pixel-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2">
            Wake up to what&apos;s
            <br />
            already here.
          </h1>

          {/* Subtext */}
          <p className="pixel-text text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Modern spirituality without the fluff. Turn your &apos;mess&apos; into your message 
            and live from the first-person experience of consciousness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="pixel-button-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Book a discovery call
              </button>
            </Link>
            <Link href="/resources" className="w-full sm:w-auto">
              <button className="pixel-button-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Free resources
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
