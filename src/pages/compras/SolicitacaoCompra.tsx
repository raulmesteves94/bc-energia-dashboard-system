
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolicitacaoCompra = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Solicitação de Compra</h1>
        <p className="text-muted-foreground">
          Gerencie suas solicitações de compra
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Solicitações de Compra</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página está em desenvolvimento. Aqui serão exibidas as solicitações de compra e os formulários para criação de novas solicitações.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolicitacaoCompra;
