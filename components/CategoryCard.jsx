export default function CategoryCard({ title, image }) {
  return (
    <div className="relative bg-gray-100 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 border border-gray-200 group">
      <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Hidden Title initially, appears on hover */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
}
