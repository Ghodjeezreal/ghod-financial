export default function Home() {
  return (
    <section className="relative bg-primary text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Unlock Fast, Flexible Finance
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Bespoke bridging loans designed to fit your business timeline.
        </p>
        <a href="/contact" className="btn-primary text-lg inline-block">
          Apply Now
        </a>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-10"></div>
    </section>
  );
}
