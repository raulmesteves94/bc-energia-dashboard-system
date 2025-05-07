
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // In a real app, you would call an API here
      console.log("Login attempt:", values);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Login realizado com sucesso");
      navigate('/dashboard');
    } catch (error) {
      toast.error("Erro ao fazer login");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* Left side with brand information */}
      <div className="hidden md:flex md:w-1/2 app-gradient flex-col justify-center items-center text-white p-8">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Sistema de Gestão</h1>
          <h2 className="text-2xl font-bold mb-6">BC Energia</h2>
          <p className="text-lg opacity-80">
            Acesse o sistema para gerenciar todas as operações relacionadas à energia de forma eficiente e integrada.
          </p>
        </div>
      </div>
      
      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
          <div className="flex justify-center mb-6">
            {/* Replace with actual logo */}
            <div className="bg-bcenergia-blue h-12 w-12 rounded-md flex items-center justify-center text-white font-bold text-xl">
              BC
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="seu.email@bcenergia.com.br" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input 
                        type="password"
                        placeholder="******" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-bcenergia-blue hover:bg-bcenergia-darkblue"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
              
              <div className="text-center text-sm">
                <a 
                  href="#" 
                  className="text-bcenergia-blue hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
