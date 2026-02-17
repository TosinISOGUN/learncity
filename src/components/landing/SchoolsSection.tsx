import { schools } from "@/data/programs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Palette, Database, Shield, BarChart3, Megaphone } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Design: <Palette className="h-6 w-6" />,
  Data: <Database className="h-6 w-6" />,
  Engineering: <GraduationCap className="h-6 w-6" />,
  Security: <Shield className="h-6 w-6" />,
  Management: <BarChart3 className="h-6 w-6" />,
  Marketing: <Megaphone className="h-6 w-6" />,
};

const SchoolsSection = () => (
  <section className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Schools</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Six specialized schools, each dedicated to a unique path in tech and business.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to="/programs"
              className="group flex items-start gap-4 bg-card border border-border rounded-xl p-6 card-elevated"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                {iconMap[s.category]}
              </div>
              <div>
                <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolsSection;
