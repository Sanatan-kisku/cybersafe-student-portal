const modules = [
  "Password Security",
  "Phishing Attacks",
  "Email Security",
  "Social Media Safety",
  "Online Banking",
  "Cyberbullying Awareness",
];

export default function LearningModules() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Learning Modules
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {modules.map((module) => (
            <div
              key={module}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="font-semibold text-xl">
                📚 {module}
              </h3>

              <p className="mt-3 text-gray-600">
                Interactive learning content to help students stay safe online.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}