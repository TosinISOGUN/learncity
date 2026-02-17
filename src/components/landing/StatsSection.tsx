import { motion } from "framer-motion";

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
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{s.value}</div>
            <div className="text-sm text-primary-foreground/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
