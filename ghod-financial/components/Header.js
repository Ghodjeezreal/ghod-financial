import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-[999]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="GHOD Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-primary tracking-widest">GHOD</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-primary text-2xl"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-medium relative z-50">
          <li><Link href="/"><a className="hover:text-accent">Home</a></Link></li>
          <li className="relative group">
            <Link href="/services">
              <a className="hover:text-accent inline-block">Services ▾</a>
            </Link>
            <ul className="absolute left-0 -mt-1 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg w-56
                           opacity-0 group-hover:opacity-100 transition-all duration-300 transform 
                           scale-95 group-hover:scale-100 z-[9999] py-2">
              <li><Link href="/services/bridging-loans"><a className="block px-4 py-3 hover:bg-gray-100">Bridging Loans</a></Link></li>
              <li><Link href="/services/real-estate"><a className="block px-4 py-3 hover:bg-gray-100">Real Estate Finance</a></Link></li>
              <li><Link href="/services/development"><a className="block px-4 py-3 hover:bg-gray-100">Development Loans</a></Link></li>
            </ul>
          </li>
          <li><Link href="/news"><a className="hover:text-accent">Insights</a></Link></li>
          <li><Link href="/contact"><a className="hover:text-accent">Contact</a></Link></li>
        </ul>
      </div>

      {/* Mobile Slide-In Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[998]" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#111827] text-white z-[999] transform transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full space-y-6">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="text-2xl self-end text-white">
            ✕
          </button>

          <nav className="flex flex-col space-y-4 text-sm uppercase tracking-wide font-semibold">
            <Link href="/"><a className="hover:text-accent">Home</a></Link>
            <Link href="/about"><a className="hover:text-accent">About Us</a></Link>
            <Link href="/services"><a className="hover:text-accent">Services</a></Link>
            <Link href="/news"><a className="hover:text-accent">Highlights</a></Link>
            <Link href="/ratings"><a className="hover:text-accent">Ratings</a></Link>
            <Link href="/testimonials"><a className="hover:text-accent">Testimonials</a></Link>
            <Link href="/disclaimer"><a className="hover:text-accent">Disclaimer</a></Link>
            <Link href="/blogs"><a className="hover:text-accent">Blogs</a></Link>
            <Link href="/free-trade"><a className="hover:text-accent">Free Trade Finance</a></Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
