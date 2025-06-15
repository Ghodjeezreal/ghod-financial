import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// MobileLink reusable component (single definition)
function MobileLink({ href, label, active, noTopBorder }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`block px-2 py-3 ${
          noTopBorder ? '' : 'border-t border-gray-700'
        } ${active ? 'text-accent font-bold' : 'hover:text-accent'}`}
      >
        {label}
      </a>
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

  // For highlighting active links
  const isActive = (path) => router.pathname === path

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubMenuOpen(false)
    }
  }, [menuOpen])

  return (
    <header
      className={`${
        darkMode ? 'bg-[#0f172a]' : 'bg-white'
      } shadow-md sticky top-0 z-[999] transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-3">
            <Image src="/logo.png" alt="GHOD Logo" width={40} height={40} />
            <span
              className={`text-2xl font-bold tracking-widest ${
                darkMode ? 'text-white' : 'text-primary'
              }`}
            >
              GHOD
            </span>
          </a>
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
            title="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className={`text-2xl ${darkMode ? 'text-white' : 'text-primary'}`}
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-medium relative z-50">
          <li>
            <Link href="/" legacyBehavior>
              <a
                className={
                  isActive('/') ? 'text-accent font-bold' : 'hover:text-accent'
                }
              >
                Home
              </a>
            </Link>
          </li>

          <li className="relative group">
  {/* Clickable link */}
  <Link href="/about" legacyBehavior>
    <a className="hover:text-accent inline-block">
      About Us ▾
    </a>
  </Link>

  {/* Dropdown */}
  <div className="absolute left-0 mt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 bg-white shadow-xl rounded-lg w-56 z-[9999]">
    <ul className="flex flex-col divide-y divide-gray-200">
      <li>
        <Link href="/about/vision" legacyBehavior>
          <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap">
            Vision & Mission
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about/team" legacyBehavior>
          <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap">
            Global Team
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about/stories" legacyBehavior>
          <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap">
            Success Stories
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about/membership" legacyBehavior>
          <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap">
            Membership
          </a>
        </Link>
      </li>
    </ul>
  </div>
</li>


          <li>
            <Link href="/services" legacyBehavior>
              <a
                className={
                  isActive('/services')
                    ? 'text-accent font-bold'
                    : 'hover:text-accent'
                }
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior>
              <a
                className={
                  isActive('/news')
                    ? 'text-accent font-bold'
                    : 'hover:text-accent'
                }
              >
                Insights
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a
                className={
                  isActive('/contact')
                    ? 'text-accent font-bold'
                    : 'hover:text-accent'
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[998]"
          onClick={() => {
            setMenuOpen(false)
            setSubMenuOpen(false)
          }}
        ></div>
      )}

      {/* Mobile Main Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 ${
          darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
        }
                      z-[999] transform transition-transform duration-500 ease-in-out 
                      ${menuOpen && !subMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex flex-col h-full space-y-6 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl self-end"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Main Nav */}
          <nav className="flex flex-col space-y-1 text-sm uppercase tracking-wide font-semibold">
            <MobileLink
              href="/"
              label="Home"
              active={isActive('/')}
              noTopBorder
            />
            <button
              className="w-full text-left px-2 py-3 border-t border-gray-700 flex justify-between items-center hover:text-accent"
              onClick={() => setSubMenuOpen(true)}
            >
              About Us →
            </button>
            <MobileLink
              href="/services"
              label="Services"
              active={isActive('/services')}
            />
            <MobileLink
              href="/news"
              label="Highlights"
              active={isActive('/news')}
            />
            <MobileLink
              href="/ratings"
              label="Ratings"
              active={isActive('/ratings')}
            />
            <MobileLink
              href="/testimonials"
              label="Testimonials"
              active={isActive('/testimonials')}
            />
            <MobileLink
              href="/disclaimer"
              label="Disclaimer"
              active={isActive('/disclaimer')}
            />
            <MobileLink
              href="/blogs"
              label="Blogs"
              active={isActive('/blogs')}
            />
            <MobileLink
              href="/free-trade"
              label="Free Trade Finance"
              active={isActive('/free-trade')}
            />
          </nav>
        </div>
      </div>

      {/* Mobile Submenu: About Us */}
      <div
        className={`fixed top-0 right-0 h-full w-72 ${
          darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
        }
                      z-[999] transform transition-transform duration-500 ease-in-out 
                      ${subMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex flex-col h-full space-y-6 overflow-y-auto">
          {/* Back Button */}
          <button
            onClick={() => setSubMenuOpen(false)}
            className="text-sm flex items-center space-x-2"
          >
            <span className="text-xl">←</span>
            <span>Back</span>
          </button>

          <h3 className="uppercase tracking-wide font-bold text-sm pb-2">
            About Us
          </h3>

          <nav className="flex flex-col space-y-1 text-sm uppercase tracking-wide font-semibold">
            <MobileLink
              href="/about/vision"
              label="Vision & Mission"
              active={isActive('/about/vision')}
            />
            <MobileLink
              href="/about/team"
              label="Global Team"
              active={isActive('/about/team')}
            />
            <MobileLink
              href="/about/stories"
              label="Success Stories"
              active={isActive('/about/stories')}
            />
            <MobileLink
              href="/about/membership"
              label="Membership"
              active={isActive('/about/membership')}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
