import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Clock, Trophy, LogOut, ArrowRight, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const enrolledPrograms = [
  { id: "full-stack-development", title: "Full Stack Development", progress: 35, nextSession: "March 18, 2026 — 10:00 AM" },
  { id: "product-design", title: "Product Design", progress: 68, nextSession: "March 19, 2026 — 2:00 PM" },
];

const upcomingSessions = [
  { title: "React State Management", course: "Full Stack Development", date: "March 18, 2026", time: "10:00 AM" },
  { title: "Figma Prototyping Workshop", course: "Product Design", date: "March 19, 2026", time: "2:00 PM" },
  { title: "API Integration Lab", course: "Full Stack Development", date: "March 20, 2026", time: "10:00 AM" },
];

const DashboardPage = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Please Log In</h1>
          <p className="text-muted-foreground mb-6">You need to be logged in to access your dashboard.</p>
          <Button asChild><Link to="/login">Log In</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground text-sm mt-1">Here's your learning overview.</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => { logout(); navigate("/"); }}>
            <LogOut className="h-4 w-4 mr-2" /> Log Out
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <BookOpen className="h-5 w-5" />, label: "Enrolled Programs", value: "2" },
            { icon: <Clock className="h-5 w-5" />, label: "Hours Learned", value: "47" },
            { icon: <Trophy className="h-5 w-5" />, label: "Certificates", value: "0" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-5 card-elevated flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">{s.icon}</div>
              <div>
                <div className="font-display text-xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Your Programs</h2>
            <div className="space-y-4">
              {enrolledPrograms.map((p) => (
                <Link key={p.id} to={`/programs/${p.id}`} className="block bg-card border border-border rounded-xl p-5 card-elevated group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{p.progress}% complete</span>
                    <span>Next: {p.nextSession}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-3">
              {upcomingSessions.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/20 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.course}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.date} • {s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
