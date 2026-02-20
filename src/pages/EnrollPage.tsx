import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronLeft, CheckCircle2, Send, Clock, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EnrollPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const program = programs.find((p) => p.id === id);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    mode: "",
    background: "",
    referral: "",
  });

  // Ensure page scrolls to top on mount or when success state triggers
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isSuccess]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xreaaypl", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          programTitle: program.title,
          programId: program.id
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Application Received!",
          description: "We've received your enrollment request. Our team will contact you shortly.",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Something went wrong while sending your application. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-[80vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for choosing Learncity, <strong>{formData.fullName}</strong>. Your enrollment request for <strong>{program.title}</strong> has been received and processed.
              </p>
              <div className="space-y-4">
                <Button className="w-full h-12 text-lg" asChild>
                  <Link to="/">Go back to Home</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-8">
                Our admissions team will review your application and reach out to you via email within 24-48 hours with the next steps.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </button>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side: Course Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="text-xs font-medium bg-white/20 w-fit px-3 py-1 rounded-full mb-4">
                    Program Summary
                  </div>
                  <CardTitle className="text-2xl font-display font-bold leading-tight">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80 mt-2">
                    {program.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-0">
                  <div className="text-4xl font-bold">{program.price}</div>

                  <div className="space-y-3 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 opacity-70" />
                      <span>{program.duration} Duration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 opacity-70" />
                      <span>{program.format} Learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 opacity-70" />
                      <span>{program.level} Level</span>
                    </div>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl space-y-2 mt-4">
                    <p className="text-sm font-semibold">What's included:</p>
                    <ul className="text-xs space-y-1 opacity-90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3" /> Industry-recognized Certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3" /> Job Placement Assistance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3" /> Access to Learncity Community
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right side: Enrollment Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <Card className="border-none shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-bold">Enrollment Form</CardTitle>
                  <CardDescription>
                    Fill in the details below to start your application. It only takes a minute.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="Your complete name"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Example@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+234 ..."
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mode">Preferred Learning Mode</Label>
                        <Select
                          required
                          onValueChange={(value) => setFormData({ ...formData, mode: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Physical">Physical (On-site)</SelectItem>
                            <SelectItem value="Virtual">Virtual (Online)</SelectItem>
                            <SelectItem value="Hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="background">Educational/Professional Background</Label>
                      <Textarea
                        id="background"
                        placeholder="Tell us a bit about what you do or have studied."
                        className="min-h-[100px]"
                        value={formData.background}
                        onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">How did you hear about us?</Label>
                      <Select
                        onValueChange={(value) => setFormData({ ...formData, referral: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Social Media">Social Media (Instagram/Twitter)</SelectItem>
                          <SelectItem value="Facebook">Facebook Ads</SelectItem>
                          <SelectItem value="Search">Search Engine (Google)</SelectItem>
                          <SelectItem value="Friend">From a Friend</SelectItem>
                          <SelectItem value="Billboard">Billboard/Flier</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Processing Application..." : "Enroll for Program"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EnrollPage;
