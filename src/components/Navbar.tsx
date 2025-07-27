import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { useAppContext } from '@/contexts/AppContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar } = useAppContext();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              React Demo App
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;