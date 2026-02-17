import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Learncity</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Learn the skills that get you paid. We make tech education simple, practical, and career-focused.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/programs" className="hover:opacity-100 transition-opacity">All Programs</Link></li>
            <li><Link to="/programs" className="hover:opacity-100 transition-opacity">Engineering</Link></li>
            <li><Link to="/programs" className="hover:opacity-100 transition-opacity">Design</Link></li>
            <li><Link to="/programs" className="hover:opacity-100 transition-opacity">Data & AI</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-70">
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
