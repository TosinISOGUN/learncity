import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import CoursesPage from "./pages/CoursesPage";
import PrivateTutorPage from "./pages/PrivateTutorPage";
import EventsPage from "./pages/EventsPage";
import SeminarsPage from "./pages/SeminarsPage";
import TrainingPage from "./pages/TrainingPage";
import JobOpeningsPage from "./pages/JobOpeningsPage";
import AboutUsPage from "./pages/AboutUsPage";
import LocationsPage from "./pages/LocationsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from "./pages/ContactUsPage";
import PartnerWithUsPage from "./pages/PartnerWithUsPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:id" element={<ProgramDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/private-tutor" element={<PrivateTutorPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/seminars" element={<SeminarsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/jobs" element={<JobOpeningsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/partner" element={<PartnerWithUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
