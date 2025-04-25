export type ChatMessage = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

export type UserMood = "happy" | "sad" | "anxious" | "calm" | "stressed" | "neutral";

export type MoodEntry = {
  id: string;
  mood: UserMood;
  notes?: string;
  timestamp: Date;
};

export type UserProfile = {
  id: string;
  name?: string;
  isAnonymous: boolean;
  preferredLanguage: string;
  aiProvider: "chatgpt" | "deepseek";
};

export type AIProvider = {
  id: string;
  name: string;
  isAvailable: boolean;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "career" | "mental-health" | "financial" | "general";
};