import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
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

        {/* Main Navigation */}
        <ul className="flex space-x-8 items-center font-medium relative z-50">
          <li>
            <Link href="/"><a className="hover:text-accent">Home</a></Link>
          </li>

          {/* Services Dropdown - Clickable AND Hoverable */}
<li className="relative group">
  <Link href="/services">
    <a className="hover:text-accent focus:outline-none inline-block">Services ▾</a>
  </Link>

  {/* Hover Menu */}
  <ul className="absolute left-0 -mt+2 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg w-56
                 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform 
                 scale-95 group-hover:scale-100 z-[9999] py-2">
    <li>
      <Link href="/services/bridging-loans">
        <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap rounded-md transition-colors duration-200">
          Bridging Loans
        </a>
      </Link>
    </li>
    <li>
      <Link href="/services/real-estate">
        <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap rounded-md transition-colors duration-200">
          Real Estate Finance
        </a>
      </Link>
    </li>
    <li>
      <Link href="/services/development">
        <a className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap rounded-md transition-colors duration-200">
          Development Loans
        </a>
      </Link>
    </li>
  </ul>
</li>

          <li>
            <Link href="/news"><a className="hover:text-accent">Insights</a></Link>
          </li>
          <li>
            <Link href="/contact"><a className="hover:text-accent">Contact</a></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
