import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  { city: "Ibadan (HQ)", address: "3, Olubi Close, New Bodija Estate, Ibadan, Oyo State", phone: "+234 810 792 7525", email: "infolearncity@gmail.com", hours: "Mon – Fri: 9AM – 5PM", desc: "Our primary campus in Ibadan. Fully equipped labs, collaborative spaces, and a vibrant learning community." },
  { city: "Lagos Hub", address: "Connect with us for Lagos schedules", phone: "+234 810 792 7525", email: "infolearncity@gmail.com", hours: "By Appointment", desc: "Flexible learning options and periodic workshops in Lagos. Contact us for the current schedule." },
  { city: "Virtual Campus", address: "Anywhere with internet", phone: "+234 810 792 7525", email: "infolearncity@gmail.com", hours: "Flexible scheduling available", desc: "Our virtual campus brings the full Learncity experience to your screen — live classes, mentorship, and community." },
];

const LocationsPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h1>
        <p className="text-muted-foreground max-w-xl">
          Learn where it's most convenient for you. Visit one of our physical campuses or join from anywhere through our virtual campus.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((l, i) => (
          <motion.div key={l.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-6 card-elevated">
            <h3 className="font-display font-bold text-xl mb-2">{l.city}</h3>
            <p className="text-sm text-muted-foreground mb-4">{l.desc}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />{l.address}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0 text-primary" />{l.phone}</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0 text-primary" />{l.email}</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 flex-shrink-0 text-primary" />{l.hours}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default LocationsPage;
