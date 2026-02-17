import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Enroll for a program", desc: "Browse our catalog, pick a program, and sign up in minutes." },
  { num: "02", title: "Learn from the best", desc: "Get hands-on training from experienced industry professionals." },
  { num: "03", title: "Build real projects", desc: "Apply your skills on real-world projects for your portfolio." },
  { num: "04", title: "Graduate & get hired", desc: "Earn your certificate and tap into our job referral network." },
];

const HowItWorksSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Becoming Tech-Savvy</h2>
        <p className="text-muted-foreground">Four simple steps. One life-changing outcome.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl font-bold text-primary/20 mb-3">{s.num}</div>
            <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
