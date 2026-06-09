import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About";
import Media from "./pages/Media";
import ScrollToHash from "./components/ScrolltoHash";
import Broadcast from "./pages/Broadcast";
import Live from "./pages/Livefeed";
import Interviews from "./pages/Interviews";
import Coverage from "./pages/Coverage";
import ScrollToTop from "./pages/ScrollToTop";
import Stringers from "./pages/Stringers";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
  <ScrollToHash />
  <ScrollToTop />

  <Routes>
  <Route path="/stringers" element={<Stringers />} />
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/media" element={<Media />} />
  <Route path="/media/broadcast" element={<Broadcast />} />
  <Route path="/media/livefeed" element={<Live />} />
  <Route path="/media/interviews" element={<Interviews />} />
  <Route path="/media/coverage" element={<Coverage />} />

  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
    
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
