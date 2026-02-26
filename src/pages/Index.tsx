import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HighlightSection from "@/components/landing/HighlightSection";
import VideoIntroduction from "@/components/landing/VideoIntroduction";
import CoursesSection from "@/components/landing/CoursesSection";

// Lazy load deeper sections
const SchoolsSection = lazy(() => import("@/components/landing/SchoolsSection"));
const WhyChooseUsSection = lazy(() => import("@/components/landing/WhyChooseUsSection"));
const StatsSection = lazy(() => import("@/components/landing/StatsSection"));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection"));
const HowItWorksSection = lazy(() => import("@/components/landing/HowItWorksSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));

// Height-aware skeleton fallback to minimize CLS
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-muted/10 my-12 rounded-3xl mx-4 transition-all duration-500`} />
);

const Index = () => (
  <>
    <Navbar />
    <main className="scroll-smooth">
      <HeroSection />
      <HighlightSection />

      {/* Immediatately visible sections are static for smoothness */}
      <VideoIntroduction />
      <CoursesSection />

      {/* Deeper sections are individually lazy-loaded */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <SchoolsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <WhyChooseUsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[450px]" />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[700px]" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-80" />}>
        <CTASection />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default Index;
