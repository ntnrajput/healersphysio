import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import IndividualProgram from "./pages/IndividualProgram";
import MatraShakti from "./pages/MatraShaktiPage";
import NariShakti from "./pages/NariShaktiPage";
import FitMom from "./pages/FitMomPage";
import ProFlex from "./pages/ProFlexPage";
import SecondInn from "./pages/SecondInnPage";
import RapidiPhy from "./pages/RapidiPhy";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services/matra-shakti" element={<MatraShakti />} />
          <Route path="/services/nari-shakti" element={<NariShakti />} />
          <Route path="/services/fit-mom" element={<FitMom />} />
          <Route path="/services/pro-flex" element={<ProFlex />} />
          <Route path="/services/second-inn" element={<SecondInn />} />
          <Route path="/services/rapidi-phy" element={<RapidiPhy />} />
          <Route path="/individual-program" element={<IndividualProgram />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;