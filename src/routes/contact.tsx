import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Tanya Cook Accounting' },
      { name: 'description', content: 'Get in touch with Tanya Cook Accounting in Goulburn. Call 0403 277 066 or visit our office at 1/378 Auburn St.' }
    ],
  }),
  component: ContactComponent,
})

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="h-1 w-20 bg-brand-green mx-auto"></div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-brand-navy mb-8">Get In Touch Today</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-brand-green shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Our Office</h4>
                    <p className="text-gray-600 italic">1/378 Auburn St, Goulburn NSW 2580</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-brand-green shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Phone Number</h4>
                    <p className="text-gray-600">0403 277 066</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-brand-green shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder */}
              <div className="mt-12 bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 overflow-hidden relative border border-gray-200">
                <div className="absolute inset-0 bg-brand-navy opacity-5"></div>
                <div className="relative text-center p-6">
                  <svg className="w-12 h-12 mx-auto mb-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-bold text-brand-navy">Visit Our Goulburn Office</p>
                  <p className="text-sm">1/378 Auburn St</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-brand-navy">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy">Thank You!</h3>
                  <p className="text-gray-600 text-lg">Your message has been sent successfully. We'll be in touch with you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-green font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Your Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">How can we help?</label>
                      <textarea 
                        required
                        rows={5}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                        placeholder="Tell us about your accounting needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-green text-brand-navy font-bold py-4 rounded-lg hover:bg-brand-green/90 transition-colors shadow-lg text-lg"
                    >
                      Schedule Your Appointment
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
