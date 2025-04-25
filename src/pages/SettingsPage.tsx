import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/custom/LanguageSwitcher";
import { AccessibilitySettings } from "@/components/custom/AccessibilitySettings";
import { AIProviderSettings } from "@/components/custom/AIProviderSettings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserStore } from "@/store/userStore";
import { useChatStore } from "@/store/chatStore";
import { useState } from "react";

const SettingsPage = () => {
  const { profile, updateProfile, resetUserData } = useUserStore();
  const { resetChat } = useChatStore();
  const [username, setUsername] = useState(profile.name || "");
  const [isAnonymous, setIsAnonymous] = useState(profile.isAnonymous);
  
  const handleSaveProfile = () => {
    updateProfile({
      name: username,
      isAnonymous: isAnonymous,
    });
    alert("Profile settings saved!");
  };
  
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your data? This cannot be undone.")) {
      resetUserData();
      resetChat();
      alert("All data has been reset successfully.");
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your experience, manage your data, and adjust accessibility options.
        </p>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="data">Data & Privacy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>
                Manage your profile information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  disabled={isAnonymous}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="anonymous-mode">Anonymous Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    When enabled, your data won't be saved between sessions.
                  </p>
                </div>
                <Switch
                  id="anonymous-mode"
                  checked={isAnonymous}
                  onCheckedChange={setIsAnonymous}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <LanguageSwitcher />
              </div>
              
              <Button onClick={handleSaveProfile}>Save Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how the application looks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <ThemeSwitcher />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility" className="space-y-4">
          <AccessibilitySettings />
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-4">
          <AIProviderSettings />
        </TabsContent>
        
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
              <CardDescription>
                Manage your data and privacy settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your privacy is important to us. AI Curing Mind is designed with privacy in mind.
              </p>
              
              <div className="p-4 rounded-md bg-muted">
                <h3 className="font-medium mb-2">Data We Store</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Chat messages (stored locally on your device only)</li>
                  <li>Mood tracking entries (if not in anonymous mode)</li>
                  <li>Your preferences and settings</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20">
                <h3 className="font-medium text-destructive mb-2">Reset All Data</h3>
                <p className="text-sm mb-2">
                  This will permanently remove all chat history, mood entries, and reset your settings.
                </p>
                <Button variant="destructive" onClick={handleReset}>
                  Reset All Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;