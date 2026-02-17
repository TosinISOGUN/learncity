import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Can I access the courses anytime, anywhere?", a: "Yes — you can learn from home, the office, or on the go. Our courses are designed with flexibility in mind, offering both live and recorded sessions." },
  { q: "What courses are available, and who can take them?", a: "We offer a wide range of beginner-friendly and advanced programs across engineering, design, data, cybersecurity, management, and marketing. Everyone is welcome." },
  { q: "Will I receive a certificate upon completion?", a: "Absolutely. All our programs come with an industry-recognized certificate once you successfully complete the coursework." },
  { q: "What kind of support is available during my program?", a: "You'll have access to dedicated tutors, peer communities, and hands-on mentorship throughout your learning journey." },
  { q: "Are flexible payments available?", a: "Yes — we offer installment options to make learning accessible to everyone regardless of budget." },
  { q: "How long do the programs take?", a: "Programs range from 3 months to 11 months depending on the depth and scope. Each program page shows the exact duration." },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Got questions? We've got answers.</p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-display font-semibold text-sm hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
