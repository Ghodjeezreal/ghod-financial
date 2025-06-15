import { useRouter } from 'next/router'
export default function Article() {
  const { id } = useRouter().query
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-primary">
        <h1>Article {id}</h1>
        <p>Full article content goes here.</p>
      </div>
    </section>
  )
}