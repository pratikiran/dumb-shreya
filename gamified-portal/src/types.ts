// src/types.ts
export type Role = "student" | "teacher" | "admin";

export type User = {
  id: string;
  name: string;
  role: Role;
};

export type XPType = "academic" | "campus" | "bonus";

export type StudentStats = {
  level: number;
  currentXP: number;
  xpToNextLevel: number;
  streakDays: number;
  badges: string[];
  totalXP: number;
  academicXP: number;
  campusXP: number;
};

export type ActivityLogEntry = {
  id: string;
  title: string;
  type: XPType;
  xpEarned: number;
  date: string; // ISO string
  status: "approved" | "pending" | "rejected";
};
