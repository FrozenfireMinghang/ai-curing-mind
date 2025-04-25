import { UserMood } from "@/lib/types";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { MOOD_EMOJIS } from "@/lib/constants";

export function MoodSelector() {
  const { addMoodEntry, currentMood } = useUserStore();
  const [selectedMood, setSelectedMood] = useState<UserMood | undefined>(currentMood);
  const [notes, setNotes] = useState("");
  
  const handleMoodSelection = (mood: UserMood) => {
    setSelectedMood(mood);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMood) return;
    
    addMoodEntry(selectedMood, notes);
    setNotes("");
    
    // Alert the user that mood was recorded
    alert(`Your mood has been recorded as ${selectedMood}!`);
  };
  
  const moods: UserMood[] = ["happy", "calm", "neutral", "anxious", "stressed", "sad"];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
        <CardDescription>
          Tracking your mood helps us provide better support and allows you to see patterns over time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {moods.map((mood) => (
              <Button
                key={mood}
                type="button"
                variant={selectedMood === mood ? "default" : "outline"}
                className={`h-20 relative flex flex-col items-center justify-center transition-all ${
                  selectedMood === mood
                    ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
                onClick={() => handleMoodSelection(mood)}
              >
                <span className="text-2xl mb-1">{MOOD_EMOJIS[mood]}</span>
                <span className="capitalize text-xs">{mood}</span>
                {selectedMood === mood && (
                  <CheckCircle className="absolute top-1 right-1 h-4 w-4 text-primary" />
                )}
              </Button>
            ))}
          </div>
          
          <div>
            <Textarea
              placeholder="Add some notes about how you're feeling or what's on your mind (optional)"
              className="mt-4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>
          
          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-8"
              disabled={!selectedMood}
            >
              Record Mood
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}