import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/Home";
import OfficeServices from "./pages/OfficeServices";
import About from "./pages/About";
import Services from "./pages/Services";
import Nationalities from "./pages/Nationalities";
import WhyUs from "./pages/WhyUs";
import Steps from "./pages/Steps";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import FloatingActions from "./components/FloatingActions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Breadcrumbs />
          <main className="flex-1">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/domesticwork" element={<OfficeServices />} />
              <Route path="/domesticwork/" element={<OfficeServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/" element={<Services />} />
              <Route path="/nationalities" element={<Nationalities />} />
              <Route path="/nationalities/" element={<Nationalities />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/why-us/" element={<WhyUs />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/steps/" element={<Steps />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/faq/" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/terms-conditions/" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <FloatingActions />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;