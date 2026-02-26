import StatCounter from "./StatCounter";

const stats = [
  { value: "Thousands", label: "of Impactful Connections" },
  { value: "Diverse", label: "Tech Specializations" },
  { value: "Limitless", label: "Career Potential" },
  { value: "Verified", label: "Professional Growth" },
];

const StatsSection = () => (
  <section className="py-16 bg-hero-gradient">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
