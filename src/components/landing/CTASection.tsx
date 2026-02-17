import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 bg-hero-gradient">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Start Your Tech Journey?
        </h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Join thousands of learners who transformed their careers with Learncity. Your future self will thank you.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/programs">
            Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
