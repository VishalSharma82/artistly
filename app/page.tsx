import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-r from-indigo-100 via-fuchsia-100 to-white">
      <Header />
      <Hero />
      <CategorySection />
    </main>
  );
}
