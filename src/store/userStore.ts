import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile, MoodEntry, UserMood } from '@/lib/types';

interface UserState {
  profile: UserProfile;
  moodEntries: MoodEntry[];
  currentMood?: UserMood;
  updateProfile: (updates: Partial<UserProfile>) => void;
  addMoodEntry: (mood: UserMood, notes?: string) => void;
  setCurrentMood: (mood: UserMood) => void;
  resetUserData: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: {
        id: uuidv4(),
        isAnonymous: true,
        preferredLanguage: 'en',
        aiProvider: 'chatgpt',
      },
      moodEntries: [],
      currentMood: undefined,
      
      updateProfile: (updates) => {
        set((state) => ({
          profile: {
            ...state.profile,
            ...updates,
          },
        }));
      },
      
      addMoodEntry: (mood, notes) => {
        const newEntry: MoodEntry = {
          id: uuidv4(),
          mood,
          notes,
          timestamp: new Date(),
        };
        
        set((state) => ({
          moodEntries: [...state.moodEntries, newEntry],
          currentMood: mood,
        }));
      },
      
      setCurrentMood: (mood) => {
        set({ currentMood: mood });
      },
      
      resetUserData: () => {
        set({
          profile: {
            id: uuidv4(),
            isAnonymous: true,
            preferredLanguage: 'en',
            aiProvider: 'chatgpt',
          },
          moodEntries: [],
          currentMood: undefined,
        });
      },
    }),
    {
      name: 'curing-mind-user-storage',
      partialize: (state) => ({
        // Only persist these fields, exclude sensitive data
        profile: {
          ...state.profile,
          // If anonymous, don't persist ID
          id: state.profile.isAnonymous ? uuidv4() : state.profile.id,
        },
        // Only persist mood entries if user is not anonymous
        moodEntries: state.profile.isAnonymous ? [] : state.moodEntries,
      }),
    }
  )
);