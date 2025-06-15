import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="GHOD Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-primary tracking-widest">GHOD</span>
        </Link>

        <nav className="space-x-6 relative group">
          <Link href="/"><a>Home</a></Link>
          <div className="relative group">
  <button className="focus:outline-none">Services ▾</button>
  <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded mt-2 z-50 w-52 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform 
                  scale-95 group-hover:scale-100 origin-top">
    <Link href="/services/bridging-loans">
      <a className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Bridging Loans</a>
    </Link>
    <Link href="/services/real-estate">
      <a className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Real Estate Finance</a>
    </Link>
    <Link href="/services/development">
      <a className="px-4 py-3 hover:bg-gray-100 whitespace-nowrap">Development Loans</a>
    </Link>
  </div>
</div>
                    <Link href="/news"><a>Insights</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
