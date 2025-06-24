import CategoryCard from "./CategoryCard";
import categories from "../data/categories.json";

export default function CategorySection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-tight">
        Explore Artist Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
        ))}
      </div>
    </section>
  );
}
