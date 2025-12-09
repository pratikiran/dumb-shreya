// src/pages/StudentDashboardPage.tsx
import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import StreakWidget from "../components/ui/StreakWidget";
import { useAuth } from "../context/AuthContext";
import type { ActivityLogEntry, StudentStats } from "../types";

const mockStats: StudentStats = {
  level: 5,
  currentXP: 320,
  xpToNextLevel: 500,
  streakDays: 7,
  badges: ["Early Bird", "Consistent Learner"],
  totalXP: 2100,
  academicXP: 1400,
  campusXP: 700,
};

const mockActivities: ActivityLogEntry[] = [
  {
    id: "1",
    title: "DSA Assignment 1",
    type: "academic",
    xpEarned: 50,
    date: "2025-12-01",
    status: "approved",
  },
  {
    id: "2",
    title: "Hackathon Participation",
    type: "campus",
    xpEarned: 80,
    date: "2025-12-02",
    status: "approved",
  },
  {
    id: "3",
    title: "Math Quiz",
    type: "academic",
    xpEarned: 30,
    date: "2025-12-03",
    status: "pending",
  },
];

const StudentDashboardPage = () => {
  const { user } = useAuth();
  const progressPercent =
    (mockStats.currentXP / mockStats.xpToNextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* Top: Greeting + main stats */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch">
        <Card className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="flex justify-between items-start gap-3 mb-3">
            <div>
              <p className="text-xs text-slate-400 mb-1">
                Welcome back,
              </p>
              <h1 className="text-xl font-semibold">
                {user?.name || "Student"}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Keep earning XP by completing activities and staying active on campus.
              </p>
            </div>
            <StreakWidget days={mockStats.streakDays} />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Current level</p>
                <p className="text-3xl font-bold text-emerald-400">
                  {mockStats.level}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">XP to next level</p>
                <p className="text-sm">
                  {mockStats.currentXP} / {mockStats.xpToNextLevel} XP
                </p>
              </div>
            </div>

            <ProgressBar value={progressPercent} />

            <div className="flex flex-wrap gap-2 mt-2 text-[11px]">
              {mockStats.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-200"
                >
                  🏅 {badge}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Quick XP breakdown */}
        <div className="w-full md:w-72 flex flex-col gap-3">
          <Card className="flex-1">
            <p className="text-xs text-slate-400 mb-2">Total XP</p>
            <p className="text-2xl font-semibold mb-1">
              {mockStats.totalXP}
            </p>
            <p className="text-[11px] text-slate-400">
              Across all academic and campus activities.
            </p>
          </Card>

          <Card className="flex-1">
            <p className="text-xs text-slate-400 mb-2">XP breakdown</p>
            <div className="text-xs space-y-1.5">
              <div className="flex justify-between">
                <span>Academic XP</span>
                <span className="text-emerald-300">
                  {mockStats.academicXP}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Campus XP</span>
                <span className="text-sky-300">
                  {mockStats.campusXP}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Activity history */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold">Recent activity</h2>
          <p className="text-[11px] text-slate-400">
            Last {mockActivities.length} submissions
          </p>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-slate-400 text-[11px] border-b border-slate-800">
                <tr>
                  <th className="text-left py-2 pr-4">Activity</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">XP</th>
                  <th className="text-left py-2 pr-4">Date</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockActivities.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-slate-900/60 last:border-0"
                  >
                    <td className="py-2 pr-4">{a.title}</td>
                    <td className="py-2 pr-4 capitalize text-slate-300">
                      {a.type}
                    </td>
                    <td className="py-2 pr-4 text-emerald-300">
                      +{a.xpEarned}
                    </td>
                    <td className="py-2 pr-4 text-slate-400">
                      {new Date(a.date).toLocaleDateString()}
                    </td>
                    <td className="py-2">
                      <span
                        className={
                          a.status === "approved"
                            ? "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                            : a.status === "pending"
                            ? "px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40"
                            : "px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/40"
                        }
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
