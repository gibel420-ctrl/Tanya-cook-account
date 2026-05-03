import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Accounting Services | Tanya Cook Accounting' },
      { name: 'description', content: 'Explore our range of professional accounting, bookkeeping, tax, and BAS services in Goulburn NSW.' }
    ],
  }),
  component: ServicesComponent,
})

function ServicesComponent() {
  const services = [
    {
      title: "Tax Returns",
      description: "Comprehensive tax preparation for individuals, partnerships, companies, and trusts. We ensure you maximize your deductions and stay fully compliant with ATO regulations.",
      features: ["Personal Tax Returns", "Business Tax Compliance", "Rental Properties", "Capital Gains Tax"]
    },
    {
      title: "Bookkeeping",
      description: "Let us handle the numbers so you can focus on running your business. We provide end-to-end bookkeeping solutions tailored to your needs.",
      features: ["Accounts Payable/Receivable", "Bank Reconciliation", "Payroll Processing", "Financial Reporting"]
    },
    {
      title: "BAS & GST",
      description: "Business Activity Statement preparation can be stressful. We simplify the process, ensuring your GST, PAYG, and other obligations are reported correctly and on time.",
      features: ["BAS Preparation", "IAS Preparation", "GST Compliance", "ATO Liaison"]
    },
    {
      title: "Business Advisory",
      description: "Beyond just compliance, we offer strategic advice to help your business thrive. From startup advice to growth strategies, we're with you every step of the way.",
      features: ["New Business Setup", "Cash Flow Forecasting", "Budgeting", "Business Performance Reviews"]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <div className="h-1 w-20 bg-brand-green mx-auto"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-2xl border-l-8 border-brand-green hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-brand-navy font-medium">
                      <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-brand-navy text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution for your business?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 font-medium">
            We understand that every business is unique. Contact us today to discuss a tailored service package that fits your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-navy text-white font-bold py-4 px-10 rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg text-lg inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
