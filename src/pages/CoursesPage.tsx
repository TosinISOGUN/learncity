import { useState } from "react";
import { Link } from "react-router-dom";
import { programs, categories, levels } from "@/data/programs";
import { Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const CoursesPage = () => {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = programs.filter((p) => {
    const catMatch = category === "All" || p.category === category;
    const lvlMatch = level === "All" || p.level === level;
    const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.shortDescription.toLowerCase().includes(search.toLowerCase());
    return catMatch && lvlMatch && searchMatch;
  });

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Courses & Programs</h1>
          <p className="text-muted-foreground max-w-xl">
            Discover career-transforming courses designed by industry professionals. Whether you're starting out or leveling up, there's a path for you.
          </p>
        </motion.div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex flex-wrap gap-6 mb-10">
          <div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">Category</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${category === c ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">Level</span>
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button key={l} onClick={() => setLevel(l)} className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${level === l ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50"}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/programs/${p.id}`} className="group block bg-card border border-border rounded-xl p-6 card-elevated h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.school}</span>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">{p.level}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration}</span>
                  <span className="font-display font-bold text-sm">{p.price}</span>
                </div>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No courses match your search. Try different filters or keywords.</div>
        )}
      </div>
    </PageLayout>
  );
};

export default CoursesPage;
