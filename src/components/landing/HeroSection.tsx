import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const skills = [
  "Product Design", "Data Analysis", "Cybersecurity", "Software Engineering",
  "Digital Marketing", "Frontend Development", "Project Management", "AI & Machine Learning",
];

const HeroSection = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            New cohort starting soon 🚀
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Future in Tech{" "}
            <span className="text-gradient-hero">Starts Here.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Learncity transforms ambitious beginners into skilled professionals. Master in-demand tech skills through hands-on, expert-led programs — and launch a career you're proud of.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/courses">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/join">Join Learncity</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden card-elevated">
            <img src={heroImage} alt="Students collaborating at Learncity" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-display font-bold text-sm shadow-lg">
            2,000+ Students Trained
          </div>
        </motion.div>
      </div>
    </div>

    {/* Skill marquee */}
    <div className="mt-16 overflow-hidden border-y border-border py-4">
      <div className="marquee flex gap-8 whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((s, i) => (
          <span key={i} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
