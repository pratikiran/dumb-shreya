// src/pages/LoginPage.tsx
import { type FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { Role } from "../types";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || "/dashboard";

  const [name, setName] = useState("");
  const [role, setRole] = useState<Role>("student");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(name || "Demo User", role);
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-xl font-semibold mb-1">Welcome to CampusXP</h1>
        <p className="text-xs text-slate-400 mb-4">
          Gamified student engagement. Log in with a demo role to explore.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1 text-sm">
            <label className="block text-slate-200">Name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="e.g. Ananya"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-slate-200">Role</label>
            <select
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
            >
              <option value="student">Student (default)</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <Button type="submit" className="w-full mt-2">
            Log in
          </Button>

          <p className="text-[11px] text-slate-500 mt-2">
            This is a demo login — no real auth yet. Frontend only.
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
