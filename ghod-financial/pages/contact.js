export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea rows="5" placeholder="Message" className="w-full p-3 border rounded" />
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}