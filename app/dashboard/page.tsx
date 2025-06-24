import Header from "../../components/Header";
import SubmissionTable from "../../components/SubmissionTable";
import submissions from "../../data/submissions.json";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Artist Submissions</h2>
        <SubmissionTable artists={submissions} />
      </section>
    </main>
  );
}
