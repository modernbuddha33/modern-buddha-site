export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="pixel-heading text-4xl sm:text-5xl md:text-6xl">
            Contact
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your journey? Book a discovery call and let&apos;s explore how we can work together.
          </p>
          
          <div className="mt-12">
            <h2 className="pixel-heading text-2xl mb-6">Book a Discovery Call</h2>
            <p className="text-lg mb-8">
              Schedule a free consultation to discuss your goals and see if we&apos;re a good fit.
            </p>
            
            {/* Calendly Widget Placeholder */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <p className="text-lg font-medium mb-4">Calendly Widget</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A Calendly booking widget will be embedded here to allow visitors to schedule calls.
              </p>
              <div className="mt-4">
                <button className="pixel-button-primary px-6 py-3">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
