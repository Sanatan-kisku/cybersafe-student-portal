const items = [
  {
    icon: "🔒",
    title: "Password Security",
    desc: "Learn how to create strong passwords and secure your online accounts.",
  },
  {
    icon: "🎣",
    title: "Phishing Awareness",
    desc: "Recognize phishing emails and fake websites before they trick you.",
  },
  {
    icon: "🌐",
    title: "Safe Browsing",
    desc: "Develop safe internet browsing habits to avoid online threats.",
  },
  {
    icon: "📱",
    title: "Social Media Safety",
    desc: "Protect your privacy and stay safe while using social media.",
  },
];

export default function WhyCyberSafe() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Cyber Safety Matters
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Every student uses the internet daily. Understanding cyber safety
          helps prevent identity theft, phishing, scams, and online fraud.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}