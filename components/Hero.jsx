export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        Discover & Book <br /> Performing Artists
      </h2>
      <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
        Connecting event planners with top talent across music, dance, speaking, and more.
      </p>
      <a
        href="/artist-listing"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
      >
        🎭 Explore Artists
      </a>
    </section>
  );
}
