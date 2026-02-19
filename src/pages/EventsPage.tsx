import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  { title: "Tech Career Bootcamp", date: "March 15, 2026", time: "10:00 AM - 4:00 PM", location: "Lagos Hub", type: "Workshop", desc: "An intensive full-day workshop designed to help aspiring tech professionals explore career paths, build portfolios, and connect with hiring managers." },
  { title: "Design Thinking Workshop", date: "March 22, 2026", time: "2:00 PM - 5:00 PM", location: "Virtual", type: "Workshop", desc: "Learn the fundamentals of design thinking methodology and apply it to real-world product challenges in this interactive session." },
  { title: "Data Analytics Meetup", date: "April 5, 2026", time: "6:00 PM - 8:00 PM", location: "Abuja Campus", type: "Meetup", desc: "Join fellow data enthusiasts for an evening of networking, lightning talks, and hands-on data visualization exercises." },
  { title: "Open House: Tour Learncity", date: "April 12, 2026", time: "11:00 AM - 3:00 PM", location: "Lagos Hub", type: "Open House", desc: "Visit our campus, meet instructors, attend demo classes, and learn about our programs first-hand. Bring your questions!" },
  { title: "AI & the Future of Work Panel", date: "April 20, 2026", time: "3:00 PM - 5:00 PM", location: "Virtual", type: "Panel", desc: "Industry leaders discuss how AI is reshaping the job market and what skills you need to stay ahead in the evolving tech landscape." },
  { title: "Hackathon: Build for Impact", date: "May 3-4, 2026", time: "48-Hour Event", location: "Lagos Hub", type: "Hackathon", desc: "A weekend-long hackathon where teams build tech solutions for social impact. Open to all skill levels with mentorship provided." },
];

const EventsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-muted-foreground max-w-xl">
          Join our workshops, meetups, hackathons, and panels. Every event is an opportunity to learn, connect, and grow.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{e.type}</span>
            <h3 className="font-display font-bold text-lg mt-3 mb-2">{e.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {e.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
            </div>
            <Button size="sm" variant="outline">Register <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default EventsPage;
