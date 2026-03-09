import { motion, useInView } from "framer-motion";
import { Youtube, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const VideoIntroduction = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Video autoplay failed (probably browser policy):", err);
      });
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  // Once the source is loaded (hasStarted), try playing it
  useEffect(() => {
    if (hasStarted && videoRef.current && !isPlaying) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Video play error on source load:", err);
      });
    }
  }, [hasStarted]);

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

            <div className="hidden lg:flex flex-wrap gap-4 pt-4">
              <Button asChild className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none">
                <a href="https://www.youtube.com/@Learncityng" target="_blank" rel="noopener noreferrer">
                  Join Our YouTube Channel <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="hidden lg:block text-sm text-primary-foreground/40 italic">
              Subscribe for weekly masterclasses, tech tutorials, and career insights.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 relative group lg:ml-auto w-full max-w-2xl"
          >
            {/* Video Container with Premium styling */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black group/video">
              <video
                ref={videoRef}
                src={hasStarted ? "/LC_introduction.mp4" : undefined}
                className="w-full h-full object-cover"
                controls={hasStarted}
                muted
                loop
                playsInline
                preload="none"
                onPlay={() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {!hasStarted && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={handlePlay}
                >
                  {/* Play Nudge Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 md:h-10 md:w-10 fill-current ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 uppercase tracking-widest pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    30s Intro
                  </div>
                </motion.div>
              )}

              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              )}
            </div>

            {/* Mobile CTA: Relocated to the bottom */}
            <div className="flex lg:hidden flex-col gap-4">
              <Button asChild className="w-full h-12 text-md bg-primary hover:bg-primary/90 text-primary-foreground border-none">
                <a href="https://www.youtube.com/@Learncityng" target="_blank" rel="noopener noreferrer">
                  Join Our YouTube Channel <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-center text-xs text-primary-foreground/40 italic">
                Subscribe for weekly masterclasses & tutorials.
              </p>
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
