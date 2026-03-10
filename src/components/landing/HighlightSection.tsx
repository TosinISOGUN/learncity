import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import images for the carousel
import img1 from "@/assets/learncity_images/images/Eso-2-opt.webp";
import img2 from "@/assets/learncity_images/images/Eso-4-opt.webp";
import img3 from "@/assets/learncity_images/images/Eso-6-opt.webp";
import img4 from "@/assets/learncity_images/images/Eso-8-opt.webp";
import img5 from "@/assets/learncity_images/images/Eso-10-opt.webp";

// Accreditation logos
import logoPlaceholder from "@/assets/LC_logo.webp";
import aftLogo from "@/assets/aft-logo.webp";
import careerLinkLogo from "@/assets/career-link logo.webp";

const carouselImages = [img1, img2, img3, img4, img5];

const HighlightSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, playOnInit: true })
  ]);



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
                      alt={`Learncity campus and student activity spotlight ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={500}
                    />
                  </div>
                ))}
              </div>
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 mt-6" asChild>
                <Link to="/quiz">
                  Take Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex flex-col gap-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={aftLogo} alt="Adaptive Future Technologies Accreditation Logo" className="w-8 h-8 flex-shrink-0 object-contain rounded" />
                    <span className="font-bold uppercase tracking-wider text-[10px] sm:text-xs leading-tight">ADAPTIVE FUTURE TECHNOLOGIES</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-3">
                    <img src={careerLinkLogo} alt="CareerLink Partner Logo" className="w-8 h-8 flex-shrink-0 object-contain rounded" />
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

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
