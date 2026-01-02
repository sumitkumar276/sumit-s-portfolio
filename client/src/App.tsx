import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Sumit Kumar Prajapati Portfolio - Cyberpunk Minimalist Theme
 * 
 * Theme Configuration:
 * - defaultTheme: "dark" - Pure black background with neon green accents
 * - Color Palette: Black (#000000), Neon Green (#00FF41), Slate Gray (#475569)
 * - Typography: IBM Plex Mono (headings), Inter (body)
 * - Design: Minimal, high-contrast, geometric accents
 */

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
