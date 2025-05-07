
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SolicitacaoCompra from "./pages/compras/SolicitacaoCompra";
import OfertaCompra from "./pages/compras/OfertaCompra";
import Usuarios from "./pages/admin/Usuarios";
import Configuracoes from "./pages/admin/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/compras/solicitacao" element={<SolicitacaoCompra />} />
            <Route path="/compras/oferta" element={<OfertaCompra />} />
            <Route path="/admin/usuarios" element={<Usuarios />} />
            <Route path="/admin/configuracoes" element={<Configuracoes />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
