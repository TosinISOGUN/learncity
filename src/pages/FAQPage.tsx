import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      { q: "Who can enroll at Learncity?", a: "Anyone! Our programs are designed for beginners with no prior tech experience, as well as professionals looking to upskill. There are no prerequisites for beginner-level courses." },
      { q: "How do I sign up for a program?", a: "Browse our programs page, select the one that interests you, and click 'Enroll Now.' You'll be guided through a simple registration process." },
      { q: "What learning formats are available?", a: "We offer physical (in-person), virtual (live online), and hybrid options. You can choose the format that best suits your schedule and location." },
      { q: "Do I need a laptop or special equipment?", a: "A working laptop is recommended for most programs. Specific requirements are listed on each program's detail page." },
    ],
  },
  {
    title: "Programs & Curriculum",
    faqs: [
      { q: "How long are the programs?", a: "Program durations range from 3 months to 11 months depending on the depth and scope. Each program page lists the exact timeline." },
      { q: "Are the programs self-paced?", a: "Our programs follow a structured, cohort-based schedule with live sessions. However, recorded materials are available for review at your own pace." },
      { q: "Will I work on real projects?", a: "Absolutely. Every program includes hands-on projects and a capstone that you can add to your professional portfolio." },
      { q: "Do you offer certifications?", a: "Yes. All graduates receive an industry-recognized Learncity certificate upon successful completion of their program." },
    ],
  },
  {
    title: "Payments & Pricing",
    faqs: [
      { q: "What are the payment options?", a: "We accept full upfront payment, installment plans (2-4 months), and bank transfers. Details are provided during enrollment." },
      { q: "Are there scholarships available?", a: "We offer partial scholarships on a case-by-case basis. Contact us for more information about eligibility and application." },
      { q: "What is the refund policy?", a: "We offer a 7-day refund window from the start of your program. After that, partial refunds may be considered based on circumstances." },
    ],
  },
  {
    title: "Career Support",
    faqs: [
      { q: "Do you help with job placement?", a: "Yes. We provide job referral support, resume reviews, interview preparation, and connections to our employer network for qualifying graduates." },
      { q: "Can I get mentorship after graduating?", a: "Alumni have continued access to our community, events, and mentorship network. We believe learning doesn't stop at graduation." },
      { q: "Do employers recognize Learncity certificates?", a: "Our curriculum is developed in consultation with industry professionals, and many of our graduates have been hired by companies that value practical skills." },
    ],
  },
];

const FAQPage = () => (
  <PageLayout>
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Everything you need to know about Learncity. Can't find your answer? Reach out to us.</p>
      </motion.div>

      {faqCategories.map((cat, ci) => (
        <div key={cat.title} className="mb-10">
          <h2 className="font-display text-xl font-bold mb-4">{cat.title}</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {cat.faqs.map((f, i) => (
              <AccordionItem key={`${ci}-${i}`} value={`faq-${ci}-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-sm hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}

      <div className="text-center mt-12 bg-secondary/50 rounded-xl p-8">
        <h3 className="font-display font-bold text-lg mb-2">Still Have Questions?</h3>
        <p className="text-sm text-muted-foreground mb-4">Our team is happy to help. Reach out and we'll get back to you promptly.</p>
        <Button asChild><Link to="/contact">Contact Us</Link></Button>
      </div>
    </div>
  </PageLayout>
);

export default FAQPage;
