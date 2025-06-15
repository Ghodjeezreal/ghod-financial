import Link from 'next/link'
export default function NewsIndex() {
  const articles = [
    { id: '1', title: 'How Bridging Loans Fuel Growth', date: '2025-06-10' },
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-8">Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(a => (
            <div key={a.id} className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500 text-sm">{a.date}</p>
              <Link href={`/news/${a.id}`}>
                <a className="text-xl font-semibold text-primary hover:text-accent">{a.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}