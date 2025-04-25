import { useSettingsStore } from "@/store/settingsStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export function AccessibilitySettings() {
  const { 
    fontSize, 
    setFontSize, 
    reduceAnimations, 
    toggleReduceAnimations,
    highContrast,
    toggleHighContrast
  } = useSettingsStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility Settings</CardTitle>
        <CardDescription>
          Customize your experience to make the application more accessible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="font-size">Font Size</Label>
          <RadioGroup
            id="font-size"
            value={fontSize}
            onValueChange={(value) => setFontSize(value as "normal" | "large" | "extra-large")}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="normal" id="normal" />
              <Label htmlFor="normal" className="text-base">Normal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large" className="text-lg">Large</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="extra-large" id="extra-large" />
              <Label htmlFor="extra-large" className="text-xl">Extra Large</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="flex justify-between items-center">
          <Label htmlFor="reduce-animations">Reduce Animations</Label>
          <Switch
            id="reduce-animations"
            checked={reduceAnimations}
            onCheckedChange={toggleReduceAnimations}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <Label htmlFor="high-contrast">High Contrast Mode</Label>
          <Switch
            id="high-contrast"
            checked={highContrast}
            onCheckedChange={toggleHighContrast}
          />
        </div>
      </CardContent>
    </Card>
  );
}