// src/components/ui/StreakWidget.tsx
const StreakWidget = ({ days }: { days: number }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/40 text-xs text-orange-200">
    <span>🔥</span>
    <span>{days}-day streak</span>
  </div>
);

export default StreakWidget;
