
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bcenergia-lightgray">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-bcenergia-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página não encontrada</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Button asChild>
          <Link to="/dashboard">Voltar para o Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
