// src/components/ui/ProgressBar.tsx
type ProgressBarProps = {
  value: number; // 0 - 100
};

const ProgressBar = ({ value }: ProgressBarProps) => (
  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
    <div
      className="h-full rounded-full bg-emerald-400 transition-[width] duration-500"
      style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
    />
  </div>
);

export default ProgressBar;
