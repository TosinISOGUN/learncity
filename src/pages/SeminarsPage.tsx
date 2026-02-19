import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";

const seminars = [
  { title: "Breaking into Tech Without a CS Degree", speaker: "Adewale Ojo", role: "CTO, TechVentures", date: "March 18, 2026", time: "7:00 PM WAT", format: "Virtual (Zoom)", desc: "A candid conversation about alternative pathways into the tech industry, featuring real stories from professionals who transitioned from non-tech backgrounds." },
  { title: "The Art of Building Products People Love", speaker: "Amina Bello", role: "Product Lead, FinStack", date: "March 25, 2026", time: "6:00 PM WAT", format: "Virtual (Zoom)", desc: "Explore the intersection of user research, design thinking, and agile development in creating products that solve real problems." },
  { title: "Cybersecurity in 2026: Threats & Opportunities", speaker: "Tunde Bakare", role: "Cybersecurity Consultant", date: "April 8, 2026", time: "5:00 PM WAT", format: "Virtual (Zoom)", desc: "Understand the current threat landscape, emerging cybersecurity roles, and how to position yourself for a career in digital security." },
  { title: "From Data to Decisions: Analytics in Practice", speaker: "Dr. Ngozi Uche", role: "AI Research Scientist", date: "April 15, 2026", time: "6:30 PM WAT", format: "Virtual (Zoom)", desc: "See how top organizations use data analytics to drive strategy, optimize operations, and gain competitive advantages." },
];

const SeminarsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Seminars</h1>
        <p className="text-muted-foreground max-w-xl">
          Free virtual seminars led by industry professionals. Gain insights, ask questions, and stay ahead of the curve — all from the comfort of your space.
        </p>
      </motion.div>

      <div className="space-y-6">
        {seminars.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 md:p-8 card-elevated">
            <div className="md:flex md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {s.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {s.time}</span>
                  <span className="flex items-center gap-1"><Video className="h-3.5 w-3.5" /> {s.format}</span>
                </div>
                <p className="text-sm"><span className="font-semibold">{s.speaker}</span> <span className="text-muted-foreground">— {s.role}</span></p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button>Reserve Spot <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default SeminarsPage;
