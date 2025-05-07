
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Configuracoes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações do Sistema</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações globais
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página está em desenvolvimento. Aqui serão exibidas as configurações do sistema.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Configuracoes;
