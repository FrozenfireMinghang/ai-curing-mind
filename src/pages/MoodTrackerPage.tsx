import { MoodSelector } from "@/components/custom/MoodSelector";
import { MoodHistory } from "@/components/custom/MoodHistory";

const MoodTrackerPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mood Tracker</h1>
        <p className="text-muted-foreground">
          Record your mood regularly to track patterns and gain insights into your emotional wellbeing.
        </p>
      </div>
      
      <MoodSelector />
      
      <MoodHistory />
    </div>
  );
};

export default MoodTrackerPage;