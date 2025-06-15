import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const router = useRouter()
  const isActive = (href) => router.pathname === href

  return (
    <header className={`${darkMode ? 'bg-[#0f172a]' : 'bg-white'} shadow-md sticky top-0 z-[999] transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="GHOD Logo" width={40} height={40} />
            <span className={`text-2xl font-bold tracking-widest ${darkMode ? 'text-white' : 'text-primary'}`}>GHOD</span>
          </div>
        </Link>

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

        {/* Mobile controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
            title="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          {/* Menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`text-2xl ${darkMode ? 'text-white' : 'text-primary'}`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dark Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[998]" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'} 
                      z-[999] transform transition-transform duration-500 ease-in-out 
                      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full space-y-6 overflow-y-auto">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="text-2xl self-end">
            ✕
          </button>

          {/* Mobile Menu Items */}
          <nav className="flex flex-col space-y-1 text-sm uppercase tracking-wide font-semibold">
            <SidebarLink href="/" label="Home" active={isActive('/')} />
            <div>
              <button
                className="w-full text-left py-3 border-t border-gray-700 flex justify-between items-center"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us
                <span>{aboutOpen ? '−' : '+'}</span>
              </button>
              {aboutOpen && (
                <div className="pl-4 text-sm space-y-2 mt-2">
                  <SidebarLink href="/about/vision" label="Vision & Mission" active={isActive('/about/vision')} />
                  <SidebarLink href="/about/team" label="Global Team" active={isActive('/about/team')} />
                  <SidebarLink href="/about/stories" label="Success Stories" active={isActive('/about/stories')} />
                  <SidebarLink href="/about/membership" label="Membership" active={isActive('/about/membership')} />
                </div>
              )}
            </div>
            <SidebarLink href="/services" label="Services" active={isActive('/services')} />
            <SidebarLink href="/news" label="Highlights" active={isActive('/news')} />
            <SidebarLink href="/ratings" label="Ratings" active={isActive('/ratings')} />
            <SidebarLink href="/testimonials" label="Testimonials" active={isActive('/testimonials')} />
            <SidebarLink href="/disclaimer" label="Disclaimer" active={isActive('/disclaimer')} />
            <SidebarLink href="/blogs" label="Blogs" active={isActive('/blogs')} />
            <SidebarLink href="/free-trade" label="Free Trade Finance" active={isActive('/free-trade')} />
          </nav>
        </div>
      </div>
    </header>
  )
}

function SidebarLink({ href, label, active }) {
  return (
    <Link href={href}>
      <a className={`block px-2 py-3 border-t border-gray-700 ${active ? 'text-accent font-bold' : 'hover:text-accent'}`}>
        {label}
      </a>
    </Link>
  )
}
