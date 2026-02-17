import { motion } from "framer-motion";
import { Award, Users, Briefcase, MonitorPlay, FolderOpen, BadgeCheck } from "lucide-react";

const reasons = [
  { icon: <Award className="h-6 w-6" />, title: "Learn from the Best", desc: "Our tutors are skilled, experienced, and deeply invested in your growth." },
  { icon: <MonitorPlay className="h-6 w-6" />, title: "Flexibility in Learning", desc: "Join physically, virtually, or hybrid — learn at your own pace." },
  { icon: <FolderOpen className="h-6 w-6" />, title: "Portfolio Building", desc: "Work on real projects that actually get you noticed by employers." },
  { icon: <Users className="h-6 w-6" />, title: "Expand Your Network", desc: "Join a thriving community of learners, mentors, and creators." },
  { icon: <BadgeCheck className="h-6 w-6" />, title: "Accredited Certification", desc: "Graduate with a certificate that speaks for you anywhere." },
  { icon: <Briefcase className="h-6 w-6" />, title: "Job Referral Support", desc: "We actively recommend top graduates for jobs and gig opportunities." },
];

const WhyChooseUsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Learncity?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This isn't just another tech school — it's a place where beginners become pros. We walk with you until the results speak.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 card-elevated"
          >
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-4">
              {r.icon}
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
