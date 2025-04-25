import { useUserStore } from "@/store/userStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AI_PROVIDERS } from "@/lib/constants";

export function AIProviderSettings() {
  const { profile, updateProfile } = useUserStore();

  const handleProviderChange = (value: string) => {
    updateProfile({ 
      aiProvider: value as "chatgpt" | "deepseek" 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Provider</CardTitle>
        <CardDescription>
          Select which AI provider you prefer for your conversations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={profile.aiProvider}
          onValueChange={handleProviderChange}
        >
          {AI_PROVIDERS.filter(p => p.isAvailable).map((provider) => (
            <div key={provider.id} className="flex items-center space-x-2 py-2">
              <RadioGroupItem value={provider.id} id={provider.id} />
              <Label htmlFor={provider.id} className="font-medium">
                {provider.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}