import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import images for the carousel
import img1 from "@/assets/learncity_images/images/Eso-2.webp";
import img2 from "@/assets/learncity_images/images/Eso-4.webp";
import img3 from "@/assets/learncity_images/images/Eso-6.webp";
import img4 from "@/assets/learncity_images/images/Eso-8.webp";
import img5 from "@/assets/learncity_images/images/Eso-10.webp";

// Mock accreditation logos/images if not available
import logoPlaceholder from "@/assets/LC_logo.png";

const carouselImages = [img1, img2, img3, img4, img5];

const HighlightSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, playOnInit: true })
  ]);

  // Stop autoplay when not in view
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            autoplay.play();
          } else {
            autoplay.stop();
          }
        });
      },
      { threshold: 0.1 }
    );

    const emblaNode = emblaApi.rootNode();
    observer.observe(emblaNode);

    return () => observer.disconnect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative pt-0 pb-4 md:pt-0 md:pb-8 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">

          {/* Section 1: Carousel Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative group h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden rounded-3xl will-change-transform"
          >
            <div className="embla h-full" ref={emblaRef}>
              <div className="embla__container h-full flex">
                {carouselImages.map((src, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%] h-full will-change-transform">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Branding */}
            <div className="absolute top-8 left-8">
              <h2 className="text-4xl font-bold text-white tracking-tighter drop-shadow-lg">
                Learncity
              </h2>
            </div>
          </motion.div>

          {/* Section 2: Middle Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 h-[400px] md:h-[500px] lg:h-[500px]">
            {/* Quiz Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-primary/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start border border-primary/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                Confused on what skill to enroll for?
              </h3>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 mt-6">
                Take Quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Accreditation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary rounded-3xl p-6 md:p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="font-medium text-white/90 mb-2 text-sm md:text-base">Learncity is Proudly Accredited by:</p>
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex flex-col gap-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={logoPlaceholder} alt="Accreditation" className="w-5 h-5 flex-shrink-0 object-contain invert" />
                    <span className="font-bold uppercase tracking-wider text-[10px] sm:text-xs leading-tight">ADAPTIVE FUTURE TECHNOLOGIES</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-3">
                    <img src={logoPlaceholder} alt="Accreditation" className="w-5 h-5 flex-shrink-0 object-contain invert" />
                    <span className="font-bold uppercase tracking-wider text-[10px] sm:text-xs leading-tight">CAREERLINK</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Large Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 bg-primary rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between h-[400px] md:h-[500px] lg:h-[500px]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-bold leading-none select-none">
                LC
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <p className="text-white font-semibold text-sm">
                  Elevate your skills <span className="text-accent font-bold">Today.</span>
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                Unlock your potential <br />
                with professional <br />
                <span className="text-accent italic subrayado">training.</span>
              </h2>
            </div>

            <div className="relative z-10 flex justify-end mt-auto h-1/2">
              <div className="relative h-full w-full flex justify-end">
                <img
                  src={img2}
                  alt="Student Success"
                  className="h-full w-auto object-contain rounded-2xl shadow-2xl mix-blend-overlay brightness-125"
                />
                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 rotate-12">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/40 to-white/10 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
