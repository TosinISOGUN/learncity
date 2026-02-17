import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Before Learncity, I had no clue what UI/UX meant. Now I'm confidently designing interfaces and landing clients.",
    name: "Sarah A.",
    role: "Product Designer",
  },
  {
    quote: "The hands-on training made everything click. From Excel to Python, it all felt achievable and exciting.",
    name: "Olumide K.",
    role: "Data Analyst",
  },
  {
    quote: "Learncity didn't just teach me to code — they helped me land my first developer role within weeks of graduating.",
    name: "Chinedu O.",
    role: "Frontend Developer",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Alumni Say</h2>
        <p className="text-muted-foreground">Real stories from real graduates.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 card-elevated"
          >
            <Quote className="h-8 w-8 text-accent/50 mb-4" />
            <p className="text-sm text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <div className="font-display font-bold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
