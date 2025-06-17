import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const words = ['Unlock', 'Accelerate', 'Empower', 'Boost', 'Simplify']

export default function Home() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFade(false), 2200)
    const changeWordTimer = setTimeout(() => {
      setIndex(i => (i + 1) % words.length)
      setFade(true)
    }, 2500)
    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(changeWordTimer)
    }
  }, [index])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<div className="absolute inset-0 w-[110vw] left-[-5vw] animate-bg-pan">
    <Image
      src="/hero.jpg"
      alt="Business finance background"
      fill
      className="object-cover"
      priority
    />
  </div>


      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          <span
            key={words[index]}
            className={`inline-block transition-opacity duration-700 ease-in ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {words[index]}
          </span>{' '}
          Fast & Flexible Finance
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Bespoke bridging loans and tailor-made solutions to grow your business.
        </p>
        <div className="space-x-4">
          <Link href="/contact">
            <a className="btn-primary">Apply Now</a>
          </Link>
          <Link href="/services">
            <a className="btn-secondary">Our Services</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
