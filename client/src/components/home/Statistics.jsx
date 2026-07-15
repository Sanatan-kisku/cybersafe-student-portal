const stats = [
  { value: "6+", label: "Learning Modules" },
  { value: "2", label: "Interactive Games" },
  { value: "1", label: "Cyber Safety Quiz" },
  { value: "100%", label: "Free for Students" },
];

export default function Statistics() {
  return (
    <section className="bg-blue-700 text-white py-20">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-3">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}