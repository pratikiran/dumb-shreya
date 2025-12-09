// src/components/layout/AppLayout.tsx
// src/components/layout/AppLayout.tsx
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

const navLinkBase =
  "text-sm px-3 py-1.5 rounded-lg transition hover:bg-slate-800/70";
const activeNav =
  "bg-slate-800/80 text-emerald-300 font-medium border border-slate-700";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <header className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 gap-4">
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                XP
              </div>
              <span className="font-semibold tracking-tight text-sm sm:text-base">
                CampusXP
              </span>
            </Link>
          </div>

          {user && (
            <nav className="hidden sm:flex items-center gap-2 text-xs sm:text-sm">
              {user.role === "student" && (
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? `${navLinkBase} ${activeNav}` : navLinkBase
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/activities"
                    className={({ isActive }) =>
                      isActive ? `${navLinkBase} ${activeNav}` : navLinkBase
                    }
                  >
                    Activities
                  </NavLink>
                  <NavLink
                    to="/leaderboard"
                    className={({ isActive }) =>
                      isActive ? `${navLinkBase} ${activeNav}` : navLinkBase
                    }
                  >
                    Leaderboard
                  </NavLink>
                </>
              )}

              {(user.role === "teacher" || user.role === "admin") && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? `${navLinkBase} ${activeNav}` : navLinkBase
                  }
                >
                  Control Centre
                </NavLink>
              )}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="hidden sm:flex flex-col items-end text-xs leading-tight">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-slate-400 capitalize">
                    {user.role}
                  </span>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs uppercase">
                  {user.name.charAt(0)}
                </div>
                <Button variant="ghost" onClick={logout} className="text-xs">
                  Log out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="text-xs">Log in</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-6">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
