import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, BarChart3, BookOpen, Settings, HelpCircle, Home } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";

interface SidebarNavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      isActive
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export function Sidebar() {
  const location = useLocation();
  const currentMood = useUserStore((state) => state.currentMood);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <aside className="flex h-full flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-sidebar-foreground">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-info flex items-center justify-center text-white">
            AI
          </div>
          <span>{APP_NAME}</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-6 px-3">
        <nav className="flex flex-col gap-1">
          <SidebarNavItem to="/" icon={<Home size={20} />} label="Home" isActive={isActive("/")} />
          <SidebarNavItem 
            to="/chat" 
            icon={<MessageSquare size={20} />} 
            label="Chat" 
            isActive={isActive("/chat")} 
          />
          <SidebarNavItem 
            to="/mood" 
            icon={<BarChart3 size={20} />} 
            label="Mood Tracker" 
            isActive={isActive("/mood")} 
          />
          <SidebarNavItem 
            to="/resources" 
            icon={<BookOpen size={20} />} 
            label="Resources" 
            isActive={isActive("/resources")} 
          />
        </nav>
        
        {/* Current mood indicator */}
        {currentMood && (
          <div className="mt-6 p-4 rounded-lg bg-sidebar-accent/50 border border-sidebar-border">
            <p className="text-sm font-medium text-sidebar-foreground mb-1">Current Mood:</p>
            <div className="flex items-center gap-2">
              {currentMood === "happy" && <span className="text-xl">😊</span>}
              {currentMood === "sad" && <span className="text-xl">😔</span>}
              {currentMood === "anxious" && <span className="text-xl">😰</span>}
              {currentMood === "calm" && <span className="text-xl">😌</span>}
              {currentMood === "stressed" && <span className="text-xl">😓</span>}
              {currentMood === "neutral" && <span className="text-xl">😐</span>}
              <span className="capitalize">{currentMood}</span>
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-sidebar-border p-3">
        <nav className="flex flex-col gap-1">
          <SidebarNavItem 
            to="/settings" 
            icon={<Settings size={20} />} 
            label="Settings" 
            isActive={isActive("/settings")} 
          />
          <SidebarNavItem 
            to="/about" 
            icon={<HelpCircle size={20} />} 
            label="About" 
            isActive={isActive("/about")} 
          />
        </nav>
      </div>
    </aside>
  );
}