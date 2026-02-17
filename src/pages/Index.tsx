import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import CoursesSection from "@/components/landing/CoursesSection";
import SchoolsSection from "@/components/landing/SchoolsSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <CoursesSection />
      <SchoolsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
