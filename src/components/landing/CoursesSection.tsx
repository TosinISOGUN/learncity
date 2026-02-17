import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CoursesSection = () => {
  const featured = programs.slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs You Can Enroll In</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Career-ready programs designed by industry experts. Hands-on, practical, and built for results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/programs/${p.id}`}
                className="group block bg-card border border-border rounded-xl p-6 card-elevated h-full"
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {p.school}
                </span>
                <h3 className="font-display font-bold text-lg mt-4 mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.shortDescription}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {p.duration}
                  </span>
                  <span className="font-display font-bold text-sm">{p.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/programs">
              See All Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
