import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xreaaypl", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We've received your inquiry and will get back to you within 24 hours."
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly at hello@learncity.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    { city: "Ibadan (HQ)", address: "3, Olubi Close, New Bodija Estate, Ibadan, Oyo State", phone: "+234 810 792 7525", email: "infolearncity@gmail.com", hours: "Mon – Fri: 8AM – 6PM, Sat: 9AM – 3PM", desc: "Our main campus in the historic city of Ibadan. Fully equipped labs, collaborative spaces, and a vibrant learning community." },
    { city: "Lagos", address: "42 Adeola Odeku Street, Victoria Island, Lagos", phone: "+234 801 234 5678", email: "lagos@learncity.com", hours: "Mon – Fri: 8AM – 6PM, Sat: 9AM – 3PM", desc: "A modern learning center in the heart of Lagos. Ideal for professionals and students in the commercial hub." },
    { city: "Virtual Campus", address: "Anywhere with internet", phone: "+234 810 792 7525", email: "infolearncity@gmail.com", hours: "Flexible scheduling available", desc: "Can't visit in person? Our virtual campus brings the full Learncity experience to your screen — live classes, mentorship, and community." },
  ];

  const ibadanLocation = locations[0];

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question, feedback, or partnership inquiry? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Subject</label>
                <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="What's this about?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us more..." />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 card-elevated">
              <h3 className="font-display font-bold mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3"><Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><div><div className="font-medium text-foreground">Email</div>infolearncity@gmail.com</div></div>
                <div className="flex items-start gap-3"><Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><div><div className="font-medium text-foreground">Phone</div>+234 810 792 7525</div></div>
                <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><div><div className="font-medium text-foreground">Address</div>3, Olubi Close, New Bodija Estate, Ibadan, Oyo State</div></div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6">
              <h3 className="font-display font-bold mb-2">Office Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday – Friday: 9AM – 5PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUsPage;
