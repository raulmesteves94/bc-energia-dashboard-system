
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { Header } from './header';
import { Sidebar } from './sidebar';

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd handle logout logic here
    toast.success("Sessão encerrada com sucesso");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-bcenergia-lightgray">
      <Header 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        onLogout={handleLogout} 
      />
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />
      <main className={`pt-16 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
