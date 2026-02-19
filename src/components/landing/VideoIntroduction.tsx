import { motion } from "framer-motion";
import { Youtube, Play, ArrowRight } from "lucide-react";
import introVideo from "@/assets/LC_introduction.mp4";
import { Button } from "@/components/ui/button";

const VideoIntroduction = () => {
  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <Youtube className="h-4 w-4" /> Watch & Learn
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Experience the <span className="text-primary italic">Learncity</span> Advantage
            </h2>

            <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
              Discover how we're transforming tech education across Africa. Watch our introduction to see our facilities, meet our mentors, and understand the practical journey that awaits you.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none">
                <a href="https://www.youtube.com/@Learncityng" target="_blank" rel="noopener noreferrer">
                  Join Our YouTube Channel <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/40 italic">
              Subscribe for weekly masterclasses, tech tutorials, and career insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group lg:ml-auto w-full max-w-2xl"
          >
            {/* Video Container with Premium styling */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
              <video
                src={introVideo}
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg"
              />

              {/* Optional overlay if muted/autoplay or just for aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
