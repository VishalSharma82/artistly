export default function SubmissionTable({ artists }) {
  if (artists.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">
        No submissions found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-600">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Fee</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {artists.map((artist) => (
            <tr key={artist.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium">{artist.name}</td>
              <td className="px-6 py-4">{artist.category}</td>
              <td className="px-6 py-4">{artist.location}</td>
              <td className="px-6 py-4">{artist.fee}</td>
              <td className="px-6 py-4">
                <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-500 transition">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
