import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "I came to Learncity with zero coding experience. Within 4 months, I built my first web app and landed a junior developer role. The hands-on approach made all the difference.", name: "Chidinma E.", role: "Frontend Developer", program: "Frontend Development", rating: 5 },
  { quote: "The product design program completely changed my career trajectory. The mentors didn't just teach tools — they taught me how to think like a designer.", name: "Ayomide T.", role: "Product Designer", program: "Product Design", rating: 5 },
  { quote: "As someone transitioning from banking, I was nervous about data analysis. Learncity made complex topics feel approachable. Now I'm a data analyst at a fintech startup.", name: "Olumide K.", role: "Data Analyst", program: "Data Analysis", rating: 5 },
  { quote: "The cybersecurity program was rigorous but rewarding. I went from knowing nothing about security to passing my CompTIA Security+ on the first try.", name: "Tolu A.", role: "Security Analyst", program: "Cybersecurity Professional", rating: 5 },
  { quote: "Private tutoring sessions helped me catch up quickly. My tutor adapted every lesson to my pace and made sure I understood before moving on.", name: "Grace O.", role: "Full Stack Developer", program: "Full Stack Development", rating: 5 },
  { quote: "The project management program gave me practical frameworks I use daily. The Agile training was especially valuable for my team leadership role.", name: "Emeka N.", role: "Project Manager", program: "Project Management", rating: 4 },
  { quote: "Learncity's digital marketing course helped me triple my freelance income. The real campaigns we ran during training were exactly what I needed.", name: "Blessing I.", role: "Digital Marketer", program: "Digital Marketing", rating: 5 },
  { quote: "What sets Learncity apart is the community. Even after graduating, I still attend events, network with alumni, and get career advice from my mentors.", name: "Samuel D.", role: "Software Engineer", program: "Full Stack Development", rating: 5 },
];

const TestimonialsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real results from real people. Hear how Learncity helped our students launch and advance their tech careers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <Quote className="h-6 w-6 text-accent/40 mb-3" />
            <p className="text-sm text-foreground leading-relaxed mb-5">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-sm">{t.name.charAt(0)}</div>
              <div>
                <div className="font-display font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role} • {t.program}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default TestimonialsPage;
