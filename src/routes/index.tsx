import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Tanya Cook Accounting | Professional Goulburn Accountants' },
      { name: 'description', content: 'Professional, friendly, and reliable accounting services in Goulburn NSW. Women-owned and operated.' }
    ],
  }),
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white py-20 lg:py-32 overflow-hidden">
        {/* Decorative Hexagons (Simplified) */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-brand-green">
             <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Accounting Services for Your <span className="text-brand-green">Town & Country</span> Needs
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Tanya Cook Accounting provides professional, friendly, and reliable tax and bookkeeping services in Goulburn NSW.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-green hover:bg-brand-green/90 text-brand-navy font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Book a Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-navy font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-around items-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-navy">Women-Owned</p>
              <p className="text-gray-600">Local Business</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-navy">Goulburn Based</p>
              <p className="text-gray-600">Serving NSW</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-navy">Professional</p>
              <p className="text-gray-600">Reliable & Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-brand-green mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Tax Returns" 
              description="Personal and business tax returns handled with precision and care to maximize your benefits."
            />
            <ServiceCard 
              title="Bookkeeping" 
              description="Keep your finances organized and up-to-date with our comprehensive bookkeeping solutions."
            />
            <ServiceCard 
              title="BAS & GST" 
              description="Hassle-free Business Activity Statement preparation and GST compliance for your peace of mind."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="text-brand-navy font-bold hover:text-brand-green underline underline-offset-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center italic text-2xl md:text-3xl leading-relaxed">
            "Tanya and her team have been instrumental in helping our small business grow. Their attention to detail and approachable nature makes accounting easy to understand."
          </div>
          <p className="text-center mt-8 font-bold text-brand-green">— Local Business Owner, Goulburn</p>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-green hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-brand-navy mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  )
}
