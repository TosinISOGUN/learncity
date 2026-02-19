import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl font-bold text-primary">Learncity</Link>
          <h1 className="font-display text-2xl font-bold mt-6 mb-2">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">Log in to continue your learning journey.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 card-elevated">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full" size="lg">Log In <LogIn className="ml-2 h-4 w-4" /></Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account? <Link to="/join" className="text-primary font-medium hover:underline">Join Learncity</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
