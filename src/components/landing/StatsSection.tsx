import StatCounter from "./StatCounter";

const stats = [
  { value: "2,000+", label: "Students Trained" },
  { value: "12+", label: "Courses Running" },
  { value: "1,200+", label: "Graduates Thriving" },
  { value: "95%", label: "Completion Rate" },
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
