import { useUserStore } from "@/store/userStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from "recharts";
import { MOOD_EMOJIS } from "@/lib/constants";
import { UserMood } from "@/lib/types";

// Helper function to convert mood to numerical value for chart
const moodToValue = (mood: UserMood): number => {
  const values: Record<UserMood, number> = {
    happy: 5,
    calm: 4,
    neutral: 3,
    anxious: 2,
    stressed: 1,
    sad: 0,
  };
  return values[mood];
};

// Custom tooltip to display the emoji instead of the numerical value
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const mood = payload[0].payload.mood as UserMood;
    return (
      <div className="bg-background border border-border p-3 rounded-md shadow-md">
        <p className="text-sm">{format(new Date(label), "MMM d, h:mm a")}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl">{MOOD_EMOJIS[mood]}</span>
          <span className="capitalize font-medium">{mood}</span>
        </div>
        {payload[0].payload.notes && (
          <p className="text-sm mt-2 max-w-xs text-muted-foreground">{payload[0].payload.notes}</p>
        )}
      </div>
    );
  }

  return null;
};

export function MoodHistory() {
  const { moodEntries } = useUserStore();

  // Prepare data for chart
  const chartData = moodEntries.map((entry) => ({
    timestamp: entry.timestamp,
    value: moodToValue(entry.mood),
    mood: entry.mood,
    notes: entry.notes,
  }));

  // Sort by timestamp, most recent last
  chartData.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  // Get most recent entries for the list (up to 5)
  const recentEntries = [...moodEntries]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mood History</CardTitle>
        </CardHeader>
        <CardContent>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis 
                  dataKey="timestamp" 
                  tickFormatter={(tick) => format(new Date(tick), "MMM d")}
                  stroke="var(--muted-foreground)"
                />
                <YAxis 
                  stroke="var(--muted-foreground)"
                  tickFormatter={(value) => {
                    const moods = ["sad", "stressed", "anxious", "neutral", "calm", "happy"];
                    return moods[value];
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No mood entries yet. Start tracking your mood to see your history here.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Mood Entries</CardTitle>
        </CardHeader>
        <CardContent>
          {recentEntries.length > 0 ? (
            <div className="space-y-4">
              {recentEntries.map((entry) => (
                <div key={entry.id} className="flex items-start gap-3 p-3 border border-border rounded-md">
                  <div className="text-2xl">{MOOD_EMOJIS[entry.mood]}</div>
                  <div>
                    <div className="font-medium capitalize">{entry.mood}</div>
                    <div className="text-xs text-muted-foreground">
                      {format(new Date(entry.timestamp), "MMM d, yyyy 'at' h:mm a")}
                    </div>
                    {entry.notes && (
                      <div className="mt-2 text-sm">{entry.notes}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              <p>No recent entries.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}