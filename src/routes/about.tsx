import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | Tanya Cook Accounting' },
      { name: 'description', content: 'Learn more about Tanya and Bec, the professional team behind Tanya Cook Accounting in Goulburn.' }
    ],
  }),
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="h-1 w-20 bg-brand-green mx-auto"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green opacity-20 rounded-full"></div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6 relative">Your Local Financial Partners</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tanya Cook Accounting, also known as Town & Country Accounting, is a women-owned business based in the heart of Goulburn NSW. We pride ourselves on being more than just accountants; we are your partners in financial success.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With years of experience serving the local community, Tanya and her team understand the unique challenges faced by local businesses and individuals. Our approach is friendly, professional, and reliable, ensuring you always feel confident about your finances.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-brand-navy h-64 rounded-xl flex items-center justify-center text-white p-6 text-center">
                 <span className="font-bold">Professional Excellence</span>
              </div>
              <div className="bg-brand-green h-64 rounded-xl mt-8 flex items-center justify-center text-brand-navy p-6 text-center">
                 <span className="font-bold">Friendly Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Meet the Team</h2>
            <div className="h-1 w-20 bg-brand-green mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-brand-green">
                 <span className="text-4xl font-bold text-brand-navy">T</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Tanya Cook</h3>
              <p className="text-brand-green font-bold mb-4">Principal Accountant</p>
              <p className="text-gray-600">Tanya has been a pillar of the Goulburn accounting community for years, helping countless businesses navigate their tax and financial journeys.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-brand-green">
                 <span className="text-4xl font-bold text-brand-navy">B</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Bec</h3>
              <p className="text-brand-green font-bold mb-4">Senior Associate</p>
              <p className="text-gray-600">Bec brings a sharp eye for detail and a passion for helping clients stay organized and compliant with all their bookkeeping and BAS needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-6 flex items-center justify-center text-brand-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Trustworthy</h4>
              <p className="text-gray-400">Honesty and transparency in every transaction.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-6 flex items-center justify-center text-brand-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Approachability</h4>
              <p className="text-gray-400">We speak your language, not complex jargon.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-6 flex items-center justify-center text-brand-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4">Reliable</h4>
              <p className="text-gray-400">Consistent, high-quality service you can count on.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
