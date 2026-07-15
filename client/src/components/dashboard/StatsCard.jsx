export default function StatsCard({
  title,
  value,
  color = "bg-blue-600",
}) {
  return (
    <div
      className={`${color}
rounded-xl
shadow-lg
p-6
text-white
hover:scale-105
transition
duration-300`}
    >
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}