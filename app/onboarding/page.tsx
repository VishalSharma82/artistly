import Header from "../../components/Header";
import ArtistForm from "../../components/ArtistForm";

export default function OnboardingPage() {
  return (
    <main>
      <Header />
      <section className="px-6 py-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Onboard as an Artist</h2>
        <ArtistForm />
      </section>
    </main>
  );
}
