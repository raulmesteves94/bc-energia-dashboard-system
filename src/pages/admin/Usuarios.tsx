
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Usuarios = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Gerenciamento de Usuários</h1>
        <p className="text-muted-foreground">
          Administre os usuários do sistema
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Esta página está em desenvolvimento. Aqui será exibida a lista de usuários e as opções para gerenciamento de permissões.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Usuarios;
