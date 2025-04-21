export default function FilterButtons({ filter, setFilter }) {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md ${
            filter === f
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
