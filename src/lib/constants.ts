import { UserMood } from "./types";

export const APP_NAME = "AI Curing Mind";

export const MOOD_EMOJIS: Record<UserMood, string> = {
  happy: "😊",
  sad: "😔",
  anxious: "😰",
  calm: "😌",
  stressed: "😓",
  neutral: "😐",
};

export const MOOD_COLORS: Record<UserMood, string> = {
  happy: "bg-success/20 text-success-foreground",
  sad: "bg-info/20 text-info-foreground",
  anxious: "bg-warning/20 text-warning-foreground",
  calm: "bg-primary/20 text-primary-foreground",
  stressed: "bg-destructive/20 text-destructive-foreground",
  neutral: "bg-muted text-muted-foreground",
};

export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "zh", name: "Chinese" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "hi", name: "Hindi" },
  { code: "ar", name: "Arabic" },
];

export const AI_PROVIDERS = [
  { id: "chatgpt", name: "ChatGPT", isAvailable: true },
  { id: "deepseek", name: "Deepseek", isAvailable: true },
];

export const SAMPLE_RESOURCES = [
  {
    id: "1",
    title: "Career Transition Guide",
    description: "Helpful steps for navigating a job loss and finding new opportunities.",
    url: "https://example.com/career-guide",
    category: "career",
  },
  {
    id: "2",
    title: "Anxiety Management Techniques",
    description: "Evidence-based approaches to manage anxiety symptoms.",
    url: "https://example.com/anxiety",
    category: "mental-health",
  },
  {
    id: "3",
    title: "Financial Assistance Programs",
    description: "Resources for financial support during challenging times.",
    url: "https://example.com/financial-help",
    category: "financial",
  },
  {
    id: "4",
    title: "5-Minute Meditation Guide",
    description: "Quick meditation exercises for stress relief.",
    url: "https://example.com/meditation",
    category: "mental-health",
  },
  {
    id: "5",
    title: "Resume Building Workshop",
    description: "Free online course to create an effective resume.",
    url: "https://example.com/resume",
    category: "career",
  },
];

export const DEFAULT_AI_GREETING = "Hello! I'm your AI companion from Curing Mind. I'm here to listen, offer support, and help you navigate whatever challenges you're facing. How are you feeling today?";