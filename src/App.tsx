
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Добавляем скрипт Koalendar
    if (!window.Koalendar) {
      window.Koalendar = window.Koalendar || function(){(window.Koalendar.props = window.Koalendar.props || []).push(arguments)};
      
      const script = document.createElement('script');
      script.src = 'https://koalendar.com/assets/widget.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        window.Koalendar('widget', {
          "url": "https://koalendar.com/e/diagnostika",
          "text": "Запись на встречу",
          "shape": "rounded-full",
          "backgroundColor": "#4A90A4",
          "textColor": "#FFFFFF",
          "position": "bottom-right",
          "icon": "calendar"
        });
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
