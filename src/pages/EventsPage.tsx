import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Video, CalendarCheck2, Sparkles } from "lucide-react";

const pastEvents = [
  {
    title: "Learncity Cohort 1 Onboarding Session",
    date: "February 28, 2026",
    time: "10:00 AM - 12:30 PM",
    location: "Google Meet",
    type: "Onboarding",
    desc: "A welcoming session for the new cohort where students will be introduced to their instructors and will be provided with the necessary information and roadmaps to help them be successful in their respective programs.",
  },
];

const EventsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Events</h1>
        <p className="text-muted-foreground max-w-xl">
          Join our workshops, meetups, hackathons, and panels. Every event is an opportunity to learn, connect, and grow.
        </p>
      </motion.div>

      {/* Upcoming Events - Coming Soon */}
      <section className="mb-20">
        <h2 className="font-display text-2xl font-bold mb-8">Upcoming Events</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-card border-2 border-dashed border-primary/30 rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Animated background sparkles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute top-4 right-8 text-primary/10"
          >
            <Sparkles className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute bottom-6 left-10 text-accent/10"
          >
            <Sparkles className="h-12 w-12" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6"
          >
            <CalendarCheck2 className="h-10 w-10" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Exciting Events Coming Soon!
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
            We're planning something special. Upcoming workshops, meetups, and hackathons will appear here — stay tuned!
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-8 mx-auto max-w-xs rounded-full"
          />
        </motion.div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-8">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-elevated relative"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{e.type}</span>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Completed</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {e.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
                <span className="flex items-center gap-1"><Video className="h-3.5 w-3.5" /> {e.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </PageLayout>
);

export default EventsPage;
