import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/custom/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar opener */}
      {isMobile && !showSidebar && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50"
          onClick={() => setShowSidebar(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
      
      {/* Conditionally rendered sidebar for mobile */}
      {(isMobile && showSidebar) && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setShowSidebar(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 z-50 w-64">
            <Sidebar />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4"
              onClick={() => setShowSidebar(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </>
      )}
      
      {/* Desktop sidebar */}
      {!isMobile && (
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="container mx-auto py-8 px-4 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;