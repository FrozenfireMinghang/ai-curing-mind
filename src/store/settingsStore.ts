import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'normal' | 'large' | 'extra-large';
  reduceAnimations: boolean;
  highContrast: boolean;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  toggleReduceAnimations: () => void;
  toggleHighContrast: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'system',
      fontSize: 'normal',
      reduceAnimations: false,
      highContrast: false,
      
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleReduceAnimations: () => set((state) => ({ reduceAnimations: !state.reduceAnimations })),
      toggleHighContrast: () => set((state) => ({ highContrast: !state.highContrast })),
    }),
    {
      name: 'curing-mind-settings',
    }
  )
);