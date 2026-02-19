import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const jobs = [
  { title: "Frontend Development Instructor", department: "Education", location: "Lagos (Hybrid)", type: "Full-Time", desc: "Teach modern frontend technologies (HTML, CSS, JavaScript, React) to our students. Develop curriculum, lead live sessions, and mentor learners through projects." },
  { title: "Student Success Coordinator", department: "Operations", location: "Lagos", type: "Full-Time", desc: "Support students throughout their learning journey. Track progress, coordinate schedules, resolve issues, and ensure high completion and satisfaction rates." },
  { title: "Content Creator & Social Media Manager", department: "Marketing", location: "Remote", type: "Full-Time", desc: "Create engaging educational content across social media platforms. Build Learncity's brand presence and drive enrollment through creative storytelling." },
  { title: "Data Analysis Tutor", department: "Education", location: "Abuja (Hybrid)", type: "Part-Time", desc: "Guide students through data analysis fundamentals including Excel, SQL, Python, and visualization tools. Provide personalized feedback on assignments." },
  { title: "UX/UI Design Mentor", department: "Education", location: "Remote", type: "Contract", desc: "Mentor aspiring designers through portfolio reviews, design critiques, and career guidance. Help students bridge the gap from learning to working." },
  { title: "Community Manager", department: "Community", location: "Lagos", type: "Full-Time", desc: "Build and nurture the Learncity alumni network. Organize meetups, manage online communities, and facilitate connections between graduates and employers." },
];

const JobOpeningsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-muted-foreground max-w-xl">
          We're building the future of tech education — and we need passionate people to make it happen. Explore open roles and find where you fit.
        </p>
      </motion.div>

      <div className="space-y-6">
        {jobs.map((j, i) => (
          <motion.div key={j.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg mb-1">{j.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{j.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {j.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" size="sm">Apply <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16 bg-secondary/50 rounded-xl p-8">
        <h2 className="font-display text-xl font-bold mb-3">Don't See Your Role?</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">We're always looking for talented people. Send us your resume and tell us how you'd contribute to Learncity.</p>
        <Button variant="outline">Send Open Application</Button>
      </div>
    </div>
  </PageLayout>
);

export default JobOpeningsPage;
