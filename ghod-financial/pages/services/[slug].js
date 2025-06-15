import { useRouter } from 'next/router'
export default function ServiceDetail() {
  const { slug } = useRouter().query
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-4">{slug?.replace('-', ' ')}</h1>
        <p className="text-gray-700">Detailed content for {slug}</p>
      </div>
    </section>
  )
}