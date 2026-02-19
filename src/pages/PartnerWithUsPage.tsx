import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Handshake, Building2, GraduationCap, Globe, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const partnerTypes = [
  { icon: <Building2 className="h-6 w-6" />, title: "Employer Partners", desc: "Hire from our talent pool. We prepare job-ready graduates in software engineering, design, data, and more." },
  { icon: <GraduationCap className="h-6 w-6" />, title: "Academic Partners", desc: "Co-develop curriculum, exchange resources, or offer joint certifications with Learncity." },
  { icon: <Globe className="h-6 w-6" />, title: "Community Partners", desc: "Collaborate on events, workshops, and initiatives that expand tech education access." },
  { icon: <Handshake className="h-6 w-6" />, title: "Sponsorship Partners", desc: "Fund scholarships, sponsor cohorts, or support underrepresented groups in tech." },
];

const PartnerWithUsPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ org: "", name: "", email: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Partnership inquiry sent!", description: "Our team will reach out within 48 hours." });
    setForm({ org: "", name: "", email: "", type: "", message: "" });
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Partner With Learncity</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Together, we can expand access to quality tech education and connect talented graduates with meaningful opportunities. Explore how your organization can partner with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {partnerTypes.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">{p.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-xl p-8 mb-16">
          <h2 className="font-display text-xl font-bold mb-4">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {["Access to a pipeline of skilled, job-ready graduates", "Custom training programs for your workforce", "Brand visibility among 2,000+ active learners", "Co-branded events and community initiatives", "Social impact through scholarship sponsorship", "Dedicated partnership manager for your organization"].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Start a Conversation</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Organization Name</label>
                <input type="text" required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Your Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Partnership Type</label>
                <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select type...</option>
                  <option>Employer Partner</option>
                  <option>Academic Partner</option>
                  <option>Community Partner</option>
                  <option>Sponsorship Partner</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your partnership goals..." />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg">Submit Inquiry <Send className="ml-2 h-4 w-4" /></Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default PartnerWithUsPage;
