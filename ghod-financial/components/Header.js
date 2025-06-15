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

        {/* Toggle buttons */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Dark mode switch */}
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

        {/* Desktop nav can go here if needed */}
      </div>

      {/* Dark overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[998]" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Sidebar menu */}
      <div className={`fixed top-0 right-0 h-full w-72 ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'} 
                      z-[999] transform transition-transform duration-500 ease-in-out 
                      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full space-y-6 overflow-y-auto">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="text-2xl self-end">
            ✕
          </button>

          {/* Menu Items */}
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

// Reusable link component with active styling
function SidebarLink({ href, label, active }) {
  return (
    <Link href={href}>
      <a className={`block px-2 py-3 border-t border-gray-700 ${active ? 'text-accent font-bold' : 'hover:text-accent'}`}>
        {label}
      </a>
    </Link>
  )
}
