
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryProvider } from "@/contexts/CategoryContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BottomNav } from "./components/layout/BottomNav";
import Layout from "./components/Layout";

import Index from "./pages/Index";
import Categories from "./pages/Categories";
import SubmitDeal from "./pages/SubmitDeal";
import DealDetail from "./pages/DealDetail";
import Alerts from "./pages/Alerts";
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CategoryProvider>
          <BrowserRouter>
            <TooltipProvider>
              <div className="min-h-screen flex flex-col">
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Layout><Index /></Layout>} />
                  <Route path="/categories" element={<Layout><Categories /></Layout>} />
                  <Route path="/discussions" element={<Layout><Discussions /></Layout>} />
                  <Route path="/vouchers" element={<Layout><Vouchers /></Layout>} />
                  <Route path="/submit-deal" element={<Layout><SubmitDeal /></Layout>} />
                  <Route path="/deal/:id" element={<Layout><DealDetail /></Layout>} />
                  <Route path="/alerts" element={<Layout><Alerts /></Layout>} />
                  <Route path="/about" element={<Layout><About /></Layout>} />
                  <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                  <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
                  <Route path="/community-guidelines" element={<Layout><CommunityGuidelines /></Layout>} />
                  <Route path="/legal" element={<Layout><Legal /></Layout>} />
                  <Route path="/contact" element={<Layout><Contact /></Layout>} />
                  <Route path="*" element={<Layout><NotFound /></Layout>} />
                </Routes>
                <BottomNav />
              </div>
            </TooltipProvider>
          </BrowserRouter>
        </CategoryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
