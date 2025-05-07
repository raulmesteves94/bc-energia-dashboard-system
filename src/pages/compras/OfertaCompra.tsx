
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OfertaCompra = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Oferta de Compra</h1>
        <p className="text-muted-foreground">
          Gerencie as ofertas de compra
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Ofertas de Compra</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página está em desenvolvimento. Aqui serão exibidas as ofertas de compra e os formulários para criação de novas ofertas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfertaCompra;
