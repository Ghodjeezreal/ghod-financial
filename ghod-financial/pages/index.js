import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Business finance background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Unlock Fast, Flexible Finance
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Bespoke bridging loans and tailor-made finance solutions to grow your business.
        </p>
        <div className="space-x-4">
          <Link href="/contact">
            <a className="btn-primary">Apply Now</a>
          </Link>
          <Link href="/services">
            <a className="btn-secondary border border-white text-white hover:bg-white hover:text-primary transition">
              Our Services
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
