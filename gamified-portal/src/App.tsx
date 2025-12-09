// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./components/auth/RequireAuth";
import AppLayout from "./components/layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <AppLayout>
              <StudentDashboardPage />
            </AppLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <AppLayout>
              <StudentDashboardPage />
            </AppLayout>
          </RequireAuth>
        }
      />

      {/* Placeholders for later stages */}
      {/* <Route
        path="/activities"
        element={
          <RequireAuth>
            <AppLayout>
              <div className="text-sm text-slate-300">
                Activities page coming soon…
              </div>
            </AppLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <RequireAuth>
            <AppLayout>
              <div className="text-sm text-slate-300">
                Leaderboard page coming soon…
              </div>
            </AppLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <AppLayout>
              <div className="text-sm text-slate-300">
                Admin control centre coming soon…
              </div>
            </AppLayout>
          </RequireAuth>
        }
      /> */}

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
