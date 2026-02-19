import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Users, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  { icon: <Building2 className="h-6 w-6" />, title: "Corporate Training", desc: "Upskill your workforce with custom-designed training programs tailored to your organization's goals and tech stack." },
  { icon: <Users className="h-6 w-6" />, title: "Team Workshops", desc: "Intensive, hands-on workshops for teams looking to adopt new tools, frameworks, or methodologies together." },
  { icon: <Target className="h-6 w-6" />, title: "Bootcamp Intensives", desc: "Compressed, high-impact training sprints that cover essential skills in days instead of months." },
];

const topics = [
  "Web Development", "Cloud Computing", "Data Engineering", "DevOps & CI/CD",
  "Agile & Scrum", "UI/UX Design", "Cybersecurity Awareness", "Leadership & Communication",
];

const TrainingPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Training</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Whether you're an individual looking to deepen your expertise or an organization investing in your team, Learncity's professional training programs deliver measurable results through hands-on, expert-led instruction.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Get a Training Quote</Link>
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {offerings.map((o, i) => (
          <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-4">{o.icon}</div>
            <h3 className="font-display font-bold text-lg mb-2">{o.title}</h3>
            <p className="text-sm text-muted-foreground">{o.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold mb-6">Training Topics We Cover</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((t) => (
            <span key={t} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">{t}</span>
          ))}
        </div>
      </div>

      <div className="bg-hero-gradient rounded-xl p-8 md:p-12 text-primary-foreground">
        <h2 className="font-display text-2xl font-bold mb-4">Why Organizations Choose Learncity</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {["Customized curriculum aligned with business objectives", "Experienced trainers with real industry background", "Flexible delivery — on-site, virtual, or hybrid", "Post-training support and progress tracking", "Scalable programs for teams of any size", "Hands-on projects using your actual tools and workflows"].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default TrainingPage;
