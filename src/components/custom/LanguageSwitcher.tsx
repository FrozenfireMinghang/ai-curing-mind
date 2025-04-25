import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LANGUAGES } from "@/lib/constants";
import { useUserStore } from "@/store/userStore";

export function LanguageSwitcher() {
  const { profile, updateProfile } = useUserStore();

  const handleLanguageChange = (value: string) => {
    updateProfile({ preferredLanguage: value });
  };

  return (
    <Select value={profile.preferredLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}