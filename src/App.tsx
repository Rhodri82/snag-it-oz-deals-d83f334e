import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryProvider } from "@/contexts/CategoryContext";
import Footer from "./components/Footer";
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
import Discussions from "./pages/Discussions";
import Vouchers from "./pages/Vouchers";

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
        <div className="min-h-screen flex flex-col">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/vouchers" element={<Vouchers />} />
              <Route path="/submit-deal" element={<SubmitDeal />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/community-guidelines" element={<CommunityGuidelines />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </CategoryProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
