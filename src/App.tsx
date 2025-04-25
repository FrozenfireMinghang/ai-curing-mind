import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useSettingsStore } from "./store/settingsStore";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ResourcesPage from "./pages/ResourcesPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/custom/Layout";
import "@/App.css";

const queryClient = new QueryClient();

// Create routes using createHashRouter
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "mood",
        element: <MoodTrackerPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  const { theme, fontSize } = useSettingsStore();

  // Apply theme based on user settings
  useEffect(() => {
    // Set theme
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemTheme === "dark");
    } else {
      root.classList.toggle("dark", theme === "dark");
    }

    // Set font size
    if (fontSize === "large") {
      root.style.fontSize = "18px";
    } else if (fontSize === "extra-large") {
      root.style.fontSize = "20px";
    } else {
      root.style.fontSize = "16px";
    }

  }, [theme, fontSize]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;