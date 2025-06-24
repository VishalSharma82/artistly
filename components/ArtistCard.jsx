import { motion } from "framer-motion";

export default function ArtistCard({ name, category, price, location }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">🎭 {category}</p>
      <p className="text-sm text-gray-500 mb-1">📍 {location}</p>
      <p className="text-base font-semibold text-indigo-600 mt-2">
        💰 {price}
      </p>
      <button className="mt-5 w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-95 transition-transform duration-200">
        Ask for Quote
      </button>
    </motion.div>
  );
}
