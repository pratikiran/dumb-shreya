// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Role, User } from "../types";

type AuthContextValue = {
  user: User | null;
  login: (name: string, role: Role) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, role: Role) => {
    setUser({
      id: crypto.randomUUID(),
      name: name || "Student",
      role,
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
