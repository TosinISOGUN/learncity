import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  join: (name: string, email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    setUser({ name: email.split("@")[0], email });
  };

  const join = (name: string, email: string, _password: string) => {
    setUser({ name, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, join, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
