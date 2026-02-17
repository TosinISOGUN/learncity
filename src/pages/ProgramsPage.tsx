import { useState } from "react";
import { Link } from "react-router-dom";
import { programs, categories, levels } from "@/data/programs";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProgramsPage = () => {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filtered = programs.filter((p) => {
    const catMatch = category === "All" || p.category === category;
    const lvlMatch = level === "All" || p.level === level;
    return catMatch && lvlMatch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Programs</h1>
            <p className="text-muted-foreground max-w-xl">
              Explore our career-ready programs and find the perfect path for your tech journey.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">Category</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                      category === c
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">Level</span>
              <div className="flex flex-wrap gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                      level === l
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/programs/${p.id}`}
                  className="group block bg-card border border-border rounded-xl p-6 card-elevated h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {p.school}
                    </span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {p.level}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.duration}
                    </span>
                    <span className="font-display font-bold text-sm">{p.price}</span>
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No programs match your filters. Try adjusting your selection.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProgramsPage;
