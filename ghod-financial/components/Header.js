import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// MobileLink reusable component
function MobileLink({ href, label, active, noTopBorder }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`block px-2 py-3 ${noTopBorder ? '' : 'border-t border-gray-700'} ${
          active ? 'text-accent font-bold' : 'hover:text-accent'
        }`}
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

  const isActive = (path) => router.pathname === path

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) setSubMenuOpen(false)
  }, [menuOpen])

  return (
    <header className={`sticky top-0 z-[999] shadow-md transition-colors duration-300 ${
      darkMode ? 'bg-[#0f172a]' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-3">
            <Image src="/logo.png" alt="GHOD Logo" width={40} height={40} />
            <span className={`text-2xl font-bold tracking-widest ${
              darkMode ? 'text-white' : 'text-primary'
            }`}>GHOD</span>
          </a>
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Dark Mode" className="text-xl">
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setMenuOpen(true)} className={`text-2xl ${
            darkMode ? 'text-white' : 'text-primary'
          }`}>☰</button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          <li>
            <Link href="/" legacyBehavior>
              <a className={isActive('/') ? 'text-accent font-bold' : 'hover:text-accent'}>
                Home
              </a>
            </Link>
          </li>

          {/* FIXED About Us Dropdown */}
          <li className="relative group">
            <Link href="/about" legacyBehavior>
              <a className="inline-block hover:text-accent">
                About Us ▾
              </a>
            </Link>
            <div
              className="
                absolute top-full left-0
                hidden group-hover:block
                bg-white shadow-xl rounded-lg w-56 z-50
              "
            >
              <ul className="divide-y divide-gray-200">
                <li>
                  <Link href="/about/vision" legacyBehavior>
                    <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap">
                      Vision &amp; Mission
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
              <a className={isActive('/services') ? 'text-accent font-bold' : 'hover:text-accent'}>
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior>
              <a className={isActive('/news') ? 'text-accent font-bold' : 'hover:text-accent'}>
                Insights
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className={isActive('/contact') ? 'text-accent font-bold' : 'hover:text-accent'}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Main Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-500 ease-in-out ${
        menuOpen && !subMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}>
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <button onClick={() => setMenuOpen(false)} className="self-end text-2xl mb-6">✕</button>
          <nav className="flex flex-col space-y-1 text-sm uppercase tracking-wide font-semibold">
            <MobileLink href="/" label="Home" active={isActive('/')} noTopBorder />
            <button
              className="w-full text-left px-2 py-3 border-t border-gray-700 flex justify-between hover:text-accent"
              onClick={() => setSubMenuOpen(true)}
            >
              About Us →
            </button>
            <MobileLink href="/services" label="Services" active={isActive('/services')} />
            <MobileLink href="/news" label="Insights" active={isActive('/news')} />
            <MobileLink href="/contact" label="Contact" active={isActive('/contact')} />
          </nav>
        </div>
      </div>

      {/* Mobile Submenu */}
      <div className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-500 ease-in-out ${
        subMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}>
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <button onClick={() => setSubMenuOpen(false)} className="flex items-center space-x-2 text-sm mb-4">
            ← <span>Back</span>
          </button>
          <h3 className="px-2 py-3 border-b border-gray-700 uppercase tracking-wide font-bold">
            About Us
          </h3>
          <nav className="flex flex-col space-y-1 text-sm uppercase tracking-wide font-semibold">
            <MobileLink href="/about/vision" label="Vision & Mission" active={isActive('/about/vision')} />
            <MobileLink href="/about/team" label="Global Team" active={isActive('/about/team')} />
            <MobileLink href="/about/stories" label="Success Stories" active={isActive('/about/stories')} />
            <MobileLink href="/about/membership" label="Membership" active={isActive('/about/membership')} />
          </nav>
        </div>
      </div>
    </header>
  )
}
