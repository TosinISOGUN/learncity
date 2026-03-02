import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Rocket, Palette, Code, Shield, BarChart, Users, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { programs } from "@/data/programs";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    icon: React.ReactNode;
    weights: Record<string, number>;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What kind of work excites you most?",
    options: [
      { text: "Building products and automated systems", icon: <Code className="h-5 w-5" />, weights: { Engineering: 3, AI: 2 } },
      { text: "Designing beautiful visuals and layouts", icon: <Palette className="h-5 w-5" />, weights: { Design: 3, Creative: 2 } },
      { text: "Finding insights and patterns in data", icon: <BarChart className="h-5 w-5" />, weights: { Data: 3, AI: 1 } },
      { text: "Defending systems and solving security puzzles", icon: <Shield className="h-5 w-5" />, weights: { Security: 3 } },
      { text: "Coordinating teams and managing projects", icon: <Users className="h-5 w-5" />, weights: { Management: 3 } },
      { text: "Creating content and growing brands", icon: <Zap className="h-5 w-5" />, weights: { Marketing: 3, Creative: 2 } },
    ],
  },
  {
    id: 2,
    text: "How do you naturally approach problem-solving?",
    options: [
      { text: "Logical and systematic, step-by-step", icon: <Code className="h-5 w-5" />, weights: { Engineering: 2, Data: 2, Security: 2 } },
      { text: "Empathetic and visual-first", icon: <Palette className="h-5 w-5" />, weights: { Design: 3, Marketing: 1 } },
      { text: "Strategic and focused on the big picture", icon: <Users className="h-5 w-5" />, weights: { Management: 2, Marketing: 2 } },
      { text: "Creative and experimental", icon: <Zap className="h-5 w-5" />, weights: { Creative: 3, Design: 1 } },
    ],
  },
  {
    id: 3,
    text: "Which of these sounds like your ideal tool to master?",
    options: [
      { text: "Programming languages (JavaScript, Python)", icon: <Code className="h-5 w-5" />, weights: { Engineering: 3, Data: 1 } },
      { text: "Creative Suites (Figma, Photoshop, Premiere)", icon: <Palette className="h-5 w-5" />, weights: { Design: 2, Creative: 3 } },
      { text: "Analytics and Dashboards (Power BI, SQL)", icon: <BarChart className="h-5 w-5" />, weights: { Data: 3 } },
      { text: "AI Tools and Prompting", icon: <Zap className="h-5 w-5" />, weights: { AI: 3, Marketing: 1 } },
    ],
  },
  {
    id: 4,
    text: "What type of legacy would you rather leave behind?",
    options: [
      { text: "Software used by millions of people", icon: <Code className="h-5 w-5" />, weights: { Engineering: 2 } },
      { text: "An iconic brand identity or piece of art", icon: <Palette className="h-5 w-5" />, weights: { Design: 2, Creative: 2 } },
      { text: "A revolutionary scientific or data-driven discovery", icon: <BarChart className="h-5 w-5" />, weights: { Data: 2, AI: 2 } },
      { text: "A safer, more secure digital world", icon: <Shield className="h-5 w-5" />, weights: { Security: 3 } },
    ],
  },
];

const CareerQuiz = () => {
  const [step, setStep] = useState(0); // -1 for start, 0..N for questions, -2 for results
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (weights: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(weights).forEach(([cat, val]) => {
      newScores[cat] = (newScores[cat] || 0) + val;
    });
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getResult = () => {
    // Find the category with the highest score
    let bestCat = "";
    let highestScore = -1;

    Object.entries(scores).forEach(([cat, score]) => {
      if (score > highestScore) {
        highestScore = score;
        bestCat = cat;
      }
    });

    // Pick a primary program from that category
    // Using a mapping if necessary or just find the first match
    const recommendation = programs.find(p => p.category === bestCat) || programs[0];
    return { category: bestCat, program: recommendation };
  };

  if (isFinished) {
    const { category, program } = getResult();
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Rocket className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Future is in {category}!</h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Based on your answers, you have a natural affinity for <strong>{category}</strong>.
              We recommend starting with our <strong>{program.title}</strong> program.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 card-elevated mb-10 text-left">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{program.school}</h3>
              <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
              <p className="text-muted-foreground mb-6">{program.shortDescription}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-background px-4 py-2 rounded-lg border border-border text-sm font-medium">
                  {program.duration}
                </div>
                <div className="bg-background px-4 py-2 rounded-lg border border-border text-sm font-medium">
                  {program.level}
                </div>
              </div>
              <Button size="lg" className="w-full" onClick={() => navigate(`/programs/${program.id}`)}>
                View Course Details
              </Button>
            </div>

            <Button variant="ghost" onClick={() => { setIsFinished(false); setStep(0); setScores({}); }}>
              Restart Quiz
            </Button>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  const currentQuestion = questions[step];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
              <span className="text-xs text-muted-foreground">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                className="h-full bg-primary"
              />
            </div>
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-10 leading-tight">{currentQuestion.text}</h2>
            <div className="grid gap-4">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt.weights)}
                  className="group w-full p-6 text-left bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-6 card-elevated"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary flex items-center justify-center transition-colors">
                    {opt.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-lg">{opt.text}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </motion.div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-8 text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Go back
            </button>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default CareerQuiz;
