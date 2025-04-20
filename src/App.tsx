
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryProvider } from "@/contexts/CategoryContext";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import SubmitDeal from "./pages/SubmitDeal";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CategoryProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/submit-deal" element={<SubmitDeal />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
