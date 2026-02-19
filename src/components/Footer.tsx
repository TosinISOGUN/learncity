import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Learncity</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Practical, career-focused tech education. We equip learners with the skills, mentorship, and confidence to thrive in the digital economy.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Learn</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Courses</Link></li>
            <li><Link to="/private-tutor" className="hover:opacity-100 transition-opacity">Private Tutor</Link></li>
            <li><Link to="/training" className="hover:opacity-100 transition-opacity">Training</Link></li>
            <li><Link to="/events" className="hover:opacity-100 transition-opacity">Events</Link></li>
            <li><Link to="/seminars" className="hover:opacity-100 transition-opacity">Seminars</Link></li>
            <li><Link to="/jobs" className="hover:opacity-100 transition-opacity">Job Openings</Link></li>
            <li><a href="https://www.youtube.com/@Learncityng" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">YouTube Channel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/locations" className="hover:opacity-100 transition-opacity">Locations</Link></li>
            <li><Link to="/testimonials" className="hover:opacity-100 transition-opacity">Testimonials</Link></li>
            <li><Link to="/partner" className="hover:opacity-100 transition-opacity">Partner With Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Learncity. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
