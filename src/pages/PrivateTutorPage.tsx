import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Clock, Target, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: <Target className="h-6 w-6" />, title: "Personalized Curriculum", desc: "Lessons tailored to your goals, learning speed, and current skill level." },
  { icon: <Clock className="h-6 w-6" />, title: "Flexible Scheduling", desc: "Book sessions at times that fit your life — mornings, evenings, or weekends." },
  { icon: <Users className="h-6 w-6" />, title: "One-on-One Attention", desc: "Get undivided focus from a dedicated tutor who tracks your progress." },
  { icon: <Star className="h-6 w-6" />, title: "Expert Tutors", desc: "All tutors are vetted professionals with real industry experience." },
];

const subjects = [
  "Frontend Development", "Backend Development", "Data Analysis", "Product Design",
  "Cybersecurity", "Digital Marketing", "Project Management", "AI & Machine Learning",
];

const PrivateTutorPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Private Tutoring</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Accelerate your learning with one-on-one sessions. Our private tutors adapt to your pace, answer your questions in real time, and create a personalized roadmap to help you reach your goals faster.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Request a Tutor</Link>
        </Button>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {benefits.map((b, i) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">{b.icon}</div>
            <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold mb-6">Available Subjects</h2>
        <div className="flex flex-wrap gap-3">
          {subjects.map((s) => (
            <span key={s} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">{s}</span>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 card-elevated">
        <h2 className="font-display text-2xl font-bold mb-4">How It Works</h2>
        <div className="space-y-4">
          {["Fill out the request form with your learning goals and preferred subject.", "We match you with a tutor who specializes in your area of interest.", "Schedule your first session and start learning at your own pace.", "Track your progress and adjust your learning plan as needed."].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default PrivateTutorPage;
