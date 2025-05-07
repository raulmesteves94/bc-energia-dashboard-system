
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Settings, 
  ShoppingCart, 
  FileText, 
  Package,
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';

type MenuItem = {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  submenu?: boolean;
  submenuItems?: MenuItem[];
  collapsed?: boolean;
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Home className="h-5 w-5" />
  },
  {
    title: 'Compras',
    icon: <ShoppingCart className="h-5 w-5" />,
    submenu: true,
    collapsed: true,
    submenuItems: [
      {
        title: 'Solicitação de Compra',
        path: '/compras/solicitacao',
        icon: <FileText className="h-4 w-4" />
      },
      {
        title: 'Oferta de Compra',
        path: '/compras/oferta',
        icon: <Package className="h-4 w-4" />
      },
    ]
  },
  {
    title: 'Administração',
    icon: <Settings className="h-5 w-5" />,
    submenu: true,
    collapsed: true,
    submenuItems: [
      {
        title: 'Usuários',
        path: '/admin/usuarios',
      },
      {
        title: 'Configurações',
        path: '/admin/configuracoes',
      },
    ]
  }
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [menuState, setMenuState] = useState(menuItems);

  const toggleMenu = (index: number) => {
    const newMenuState = [...menuState];
    newMenuState[index].collapsed = !newMenuState[index].collapsed;
    setMenuState(newMenuState);
  };

  return (
    <div 
      className={cn(
        "h-screen fixed top-0 left-0 z-40 bg-white border-r transition-all duration-300 pt-16",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="px-4 py-2">
          {collapsed ? null : (
            <h2 className="text-lg font-semibold text-bcenergia-darkblue mb-4">
              Sistema BC Energia
            </h2>
          )}
        </div>

        <nav className="flex-1">
          <ul className="space-y-1 px-2">
            {menuState.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center w-full p-2 text-base rounded-lg hover:bg-bcenergia-lightgray text-gray-700",
                        collapsed && "justify-center"
                      )}
                      onClick={() => toggleMenu(index)}
                    >
                      <span className="flex-shrink-0 text-bcenergia-blue">{item.icon}</span>
                      {!collapsed && (
                        <>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.title}</span>
                          {item.collapsed ? 
                            <ChevronRight className="w-4 h-4" /> : 
                            <ChevronDown className="w-4 h-4" />
                          }
                        </>
                      )}
                    </button>
                    
                    {item.submenu && !item.collapsed && !collapsed && (
                      <ul className="py-1 pl-4 space-y-1">
                        {item.submenuItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path || '#'}
                              className="flex items-center p-2 text-sm rounded-lg text-gray-700 hover:bg-bcenergia-gray"
                            >
                              {subItem.icon && <span className="mr-2 text-bcenergia-blue">{subItem.icon}</span>}
                              <span>{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className={cn(
                      "flex items-center p-2 text-base rounded-lg text-gray-700 hover:bg-bcenergia-lightgray",
                      collapsed && "justify-center"
                    )}
                  >
                    <span className="flex-shrink-0 text-bcenergia-blue">{item.icon}</span>
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
