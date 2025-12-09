// src/components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-4 py-2 shadow-md shadow-emerald-500/20",
    ghost: "bg-transparent text-slate-200 hover:bg-slate-800/60 px-3 py-1.5",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
};

export default Button;
