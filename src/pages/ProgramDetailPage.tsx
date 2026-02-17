import { useParams, Link } from "react-router-dom";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProgramDetailPage = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Program not found</h1>
          <Button asChild><Link to="/programs">Back to Programs</Link></Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/programs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Programs
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {program.school}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{program.title}</h1>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="font-display text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                  {program.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-4">
                  {program.curriculum.map((c, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {c.week}
                        </span>
                        <h3 className="font-display font-bold text-sm">{c.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {c.topics.map((t) => (
                          <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Your Instructor</h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-lg">
                      {program.instructor.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-bold">{program.instructor.name}</div>
                      <div className="text-sm text-muted-foreground">{program.instructor.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.instructor.bio}</p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="sticky top-24 bg-card border border-border rounded-xl p-6 card-elevated space-y-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold mb-1">{program.price}</div>
                  <div className="text-sm text-muted-foreground">Full program fee</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4" /> <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" /> <span>{program.level}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> <span>{program.format}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">Enroll Now</Button>
                <p className="text-xs text-center text-muted-foreground">
                  Flexible payment plans available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProgramDetailPage;
