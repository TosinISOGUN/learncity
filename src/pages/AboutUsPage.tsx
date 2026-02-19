import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, GraduationCap, Globe } from "lucide-react";

const values = [
  { icon: <Target className="h-6 w-6" />, title: "Practical Learning", desc: "Every lesson is designed around real-world application. We don't teach theory for theory's sake — we teach what gets results." },
  { icon: <Heart className="h-6 w-6" />, title: "Student-First Approach", desc: "Your growth is our priority. From flexible schedules to mentorship, everything we do is designed around your success." },
  { icon: <Globe className="h-6 w-6" />, title: "Accessibility", desc: "Great education shouldn't be exclusive. We offer flexible payment plans and multiple learning formats to reach everyone." },
  { icon: <Users className="h-6 w-6" />, title: "Community", desc: "Learning is better together. Our students join a lifelong network of peers, mentors, and industry professionals." },
];

const team = [
  { name: "Chuka Eze", role: "Founder & CEO", bio: "EdTech entrepreneur with a vision to democratize tech education across Africa." },
  { name: "Amara Nwosu", role: "Head of Curriculum", bio: "Former product designer turned educator. Ensures every program meets industry standards." },
  { name: "David Okonkwo", role: "Head of Engineering Programs", bio: "Senior software engineer who built curriculum used by 2,000+ students." },
  { name: "Funke Olawale", role: "Head of Growth", bio: "Marketing strategist passionate about connecting learners with life-changing opportunities." },
];

const AboutUsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Learncity</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Learncity was founded on a simple belief: everyone deserves access to high-quality tech education, regardless of background. We bridge the gap between ambition and ability — turning curious beginners into confident professionals ready for the modern workforce.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-xl p-8 card-elevated">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="font-display text-xl font-bold mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">To become Africa's most trusted learning platform — where anyone, anywhere, can gain the skills to thrive in the digital economy.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-8 card-elevated">
          <div className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className="font-display text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">To deliver practical, career-focused tech education through expert-led programs, mentorship, and hands-on projects that prepare learners for real-world success.</p>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="font-display text-2xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">{v.icon}</div>
              <div>
                <h3 className="font-display font-bold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 text-center card-elevated">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center font-display font-bold text-xl mb-4">{t.name.charAt(0)}</div>
              <h3 className="font-display font-bold">{t.name}</h3>
              <p className="text-xs text-primary mb-2">{t.role}</p>
              <p className="text-sm text-muted-foreground">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default AboutUsPage;
