import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  Link,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tanya Cook Accounting',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </RootDocument>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg group-hover:bg-brand-green transition-colors">
             <span className="text-white font-bold text-xl italic text-center">TC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-navy font-bold text-lg leading-tight">Tanya Cook</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">Accounting</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-brand-navy font-medium hover:text-brand-green transition-colors [&.active]:text-brand-green">Home</Link>
          <Link to="/about" className="text-brand-navy font-medium hover:text-brand-green transition-colors [&.active]:text-brand-green">About Us</Link>
          <Link to="/services" className="text-brand-navy font-medium hover:text-brand-green transition-colors [&.active]:text-brand-green">Services</Link>
          <Link to="/contact" className="text-brand-navy font-medium hover:text-brand-green transition-colors [&.active]:text-brand-green">Contact</Link>
          <Link to="/contact" className="bg-brand-green text-brand-navy font-bold py-2 px-5 rounded hover:bg-brand-green/90 transition-colors shadow-sm">
            Book Now
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-navy p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 absolute w-full shadow-xl">
          <div className="flex flex-col gap-6">
            <Link 
              to="/" 
              className="text-brand-navy font-medium text-lg" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-brand-navy font-medium text-lg" 
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-brand-navy font-medium text-lg" 
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-brand-navy font-medium text-lg" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-brand-green text-brand-navy font-bold py-3 px-5 rounded text-center" 
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-lg">
                <span className="text-brand-navy font-bold text-xl italic">TC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">Tanya Cook</span>
                <span className="text-brand-green text-xs tracking-widest uppercase">Accounting</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Town & Country Accounting. Professional, friendly, and reliable accounting services in Goulburn NSW.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Tax Returns</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Bookkeeping</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">BAS & GST</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Business Advisory</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-green">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 italic">
                <span>1/378 Auburn St, Goulburn NSW 2580</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">Phone:</span> 0403 277 066
              </li>
              <li className="flex gap-3">
                <span className="font-bold">Hours:</span> Mon-Fri: 9am - 5pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tanya Cook Accounting. All rights reserved.</p>
          <p>ABN: 12 345 678 910</p>
          <p>Women-Owned Business</p>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
