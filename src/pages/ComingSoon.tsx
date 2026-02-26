import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Rocket } from "lucide-react";
import logo from "@/assets/LC_logo.png";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center z-10"
      >
        <img src={logo} alt="Learncity" className="h-16 w-auto mx-auto mb-8" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6 border border-accent/20">
          <Rocket size={16} /> Something big is brewing
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          We're Crafting <br />
          <span className="text-gradient-hero">The Future.</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
          Our registration portal is currently under refinement to ensure you have the best possible learning experience. We'll be live very soon!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-full px-8 h-12"
          >
            <ChevronLeft size={18} /> Go Back
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12"
          >
            Explore Home
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/courses")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 h-12"
          >
            Enroll Now
          </Button>
        </div>
      </motion.div>

      <p className="absolute bottom-8 text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
        Learncity &copy; 2026 • Premium Tech Education
      </p>
    </div>
  );
};

export default ComingSoon;
