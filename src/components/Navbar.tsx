import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  to: string;
  label: string;
}

interface NavItem {
  label: string;
  to?: string;
  items?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Enroll",
    items: [
      { to: "/courses", label: "Courses" },
      { to: "/private-tutor", label: "Private Tutor" },
      { to: "/events", label: "Events" },
      { to: "/seminars", label: "Seminars" },
      { to: "/training", label: "Training" },
      { to: "/jobs", label: "Job Openings" },
    ],
  },
  {
    label: "About Us",
    items: [
      { to: "/about", label: "About Us" },
      { to: "/locations", label: "Locations" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  { label: "Partner With Us", to: "/partner" },
];

const DesktopDropdown = ({ items, label }: { items: DropdownItem[]; label: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
        {label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-popover border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
              {items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tight">
          Learncity
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.items ? (
              <DesktopDropdown key={item.label} items={item.items} label={item.label} />
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <Button size="sm" onClick={() => navigate("/dashboard")}>Dashboard</Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Log In</Button>
              <Button size="sm" onClick={() => navigate("/join")}>Join Learncity</Button>
            </>
          )}
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item.items ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-foreground"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {item.items.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-border mt-2 flex flex-col gap-2">
                {isAuthenticated ? (
                  <Button size="sm" onClick={() => { setOpen(false); navigate("/dashboard"); }}>Dashboard</Button>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => { setOpen(false); navigate("/login"); }}>Log In</Button>
                    <Button size="sm" onClick={() => { setOpen(false); navigate("/join"); }}>Join Learncity</Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
