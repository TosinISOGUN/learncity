import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Enroll",
    items: [
      { title: "Courses", to: "/programs", description: "Explore our career-ready programs." },
      { title: "Private Tutor", to: "/tutor", description: "Get personalized 1-on-1 mentorship." },
    ],
  },
  {
    title: "Events",
    items: [
      { title: "Seminars", to: "/events/seminars", description: "Join our industry webinars and events." },
      { title: "Job Openings", to: "/events/jobs", description: "Find your next career opportunity." },
      { title: "Training", to: "/events/training", description: "Specialized corporate and group training." },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "Locations", to: "/about/locations", description: "Find our physical study centers." },
      { title: "Testimonial", to: "/about/testimonials", description: "Hear from our successful alumni." },
      { title: "FAQ", to: "/about/faq", description: "Get answers to common questions." },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { title: "Partner with Us", to: "/contact/partner", description: "Collaborate with Learncity." },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tight">
          Learncity
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Home
                </Link>
              </NavigationMenuItem>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <li key={subItem.to}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.to}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Join Learncity</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
              <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold">
                Home
              </Link>
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    {item.title}
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.to}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <hr className="border-border" />
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="outline" className="w-full justify-center">Log In</Button>
                <Button className="w-full justify-center">Join Learncity</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
