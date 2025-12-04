import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about/', label: 'من نحن' },
    { href: '/services/', label: 'خدماتنا' },
    { href: '/nationalities/', label: 'الجنسيات' },
    { href: '/steps/', label: 'خطوات الخدمة' },
    { href: '/faq/', label: 'الأسئلة الشائعة' },
    { href: '/contact/', label: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <img 
              src="/images/53e96e53-9676-4c04-8634-47e8f6f0d27e.png" 
              alt="مكتب كنان الأمل للتنازل عن العاملات المنزلية" 
              className="h-12 w-auto"
            />
            <div className="arabic-text block">
              <h1 className="text-lg font-bold text-foreground">مكتب كنان الأمل</h1>
              <p className="text-sm text-muted-foreground">للتنازل عن العاملات المنزلية</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-foreground hover:text-primary transition-colors duration-200 arabic-text',
                  (location.pathname.replace(/\/+$/, '') === item.href.replace(/\/+$/, '')) && 'text-primary font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a href="https://wa.me/966563617861" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2">
                <WhatsappIcon className="w-4 h-4" />
                تواصل معنا
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium arabic-text transition-colors',
                    (location.pathname.replace(/\/+$/, '') === item.href.replace(/\/+$/, ''))
                      ? 'text-primary bg-muted'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href="https://wa.me/966563617861" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="default" className="w-full bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2">
                    <WhatsappIcon className="w-4 h-4" />
                    تواصل معنا
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;