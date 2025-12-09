// src/components/ui/Card.tsx
import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={clsx(
      "rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-lg shadow-black/40 p-4",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
