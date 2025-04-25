import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from '@/lib/types';
import { DEFAULT_AI_GREETING } from '@/lib/constants';

interface ChatState {
  messages: ChatMessage[];
  isLoadingResponse: boolean;
  addMessage: (content: string, role: "user" | "assistant") => void;
  resetChat: () => void;
  simulateAIResponse: (userMessage: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id: uuidv4(),
      content: DEFAULT_AI_GREETING,
      role: "assistant",
      timestamp: new Date(),
    },
  ],
  isLoadingResponse: false,
  
  addMessage: (content, role) => {
    const newMessage: ChatMessage = {
      id: uuidv4(),
      content,
      role,
      timestamp: new Date(),
    };
    
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
    
    return newMessage;
  },
  
  resetChat: () => {
    set({
      messages: [
        {
          id: uuidv4(),
          content: DEFAULT_AI_GREETING,
          role: "assistant",
          timestamp: new Date(),
        },
      ],
    });
  },
  
  // This is a simplified simulation of AI responses
  // In a real application, this would connect to an AI API
  simulateAIResponse: async (userMessage) => {
    set({ isLoadingResponse: true });
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simple response logic based on keywords
    let response = "";
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("anxious") || lowerCaseMessage.includes("anxiety")) {
      response = "I notice you're feeling anxious. Let's try a quick breathing exercise: Breathe in slowly for 4 counts, hold for 2, and exhale for 6. Repeat this a few times. How are you feeling after trying this?";
    } else if (lowerCaseMessage.includes("sad") || lowerCaseMessage.includes("depressed")) {
      response = "I'm sorry to hear you're feeling down. Remember that it's okay to feel this way sometimes. Would you like to talk about what's causing these feelings, or would you prefer some suggestions for mood-lifting activities?";
    } else if (lowerCaseMessage.includes("job") || lowerCaseMessage.includes("laid off") || lowerCaseMessage.includes("unemployed")) {
      response = "Losing a job can be really challenging. It's normal to feel a mix of emotions. I'm here to support you through this transition. Would you like some resources on job searching, or would you prefer to talk about how this change is affecting you emotionally?";
    } else if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("resources")) {
      response = "I'd be happy to help connect you with resources. Are you looking for information on mental health support, career guidance, or perhaps financial assistance? Let me know what would be most helpful right now.";
    } else {
      response = "Thank you for sharing that with me. How else can I support you today? I'm here to listen, offer guidance, or simply be a space where you can express yourself without judgment.";
    }
    
    get().addMessage(response, "assistant");
    set({ isLoadingResponse: false });
  },
}));