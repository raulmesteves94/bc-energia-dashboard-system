
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  onLogout: () => void;
}

export function Header({ collapsed, setCollapsed, onLogout }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm h-16">
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="mr-4 text-bcenergia-blue"
          >
            {collapsed ? <Menu /> : <X />}
          </Button>
          
          <Link to="/dashboard" className="flex items-center">
            {/* Replace with actual logo */}
            <div className="flex items-center">
              <div className="bg-bcenergia-blue h-8 w-8 rounded-md flex items-center justify-center text-white font-bold mr-2">
                BC
              </div>
              <span className="text-xl font-bold text-bcenergia-darkblue hidden md:block">
                BC Energia
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5 text-bcenergia-blue" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="rounded-full bg-bcenergia-lightgray p-1">
                  <User className="h-5 w-5 text-bcenergia-blue" />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Usuário da Silva</p>
                  <p className="text-xs text-muted-foreground">usuario@bcenergia.com.br</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/perfil" className="cursor-pointer">
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-destructive cursor-pointer"
                onClick={onLogout}
              >
                <LogOut className="mr-2 h-4 w-4" /> Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
