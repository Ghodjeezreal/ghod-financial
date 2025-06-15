import Link from 'next/link'
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Ghods</a>
        </Link>
        <nav className="space-x-6">
          <Link href="/"><a>Home</a></Link>
          <Link href="/services/bridging-loans"><a>Services</a></Link>
          <Link href="/news"><a>Insights</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
