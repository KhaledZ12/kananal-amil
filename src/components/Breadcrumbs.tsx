import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // إنشاء breadcrumb paths
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    const breadcrumbs = [
      { name: 'الرئيسية', href: '/', current: location.pathname === '/' }
    ];
    
    if (pathSegments.length === 0) {
      return breadcrumbs;
    }
    
    // تحديد أسماء الصفحات
    const pageNames: { [key: string]: string } = {
      'domesticwork': 'العمالة المنزلية',
      'about': 'من نحن',
      'services': 'خدماتنا',
      'nationalities': 'الجنسيات المتوفرة',
      'why-us': 'لماذا تختارنا',
      'steps': 'خطوات الخدمة',
      'faq': 'الأسئلة الشائعة',
      'contact': 'تواصل معنا',
      'privacy-policy': 'سياسة الخصوصية',
      'terms-conditions': 'الشروط والأحكام'
    };
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        name: pageNames[segment] || segment,
        href: currentPath,
        current: isLast
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs();
  
  // لا تظهر breadcrumbs في الصفحة الرئيسية
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <nav className="bg-muted/50 border-b border-border" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 space-x-reverse py-3">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="الرئيسية"
          >
            <Home className="h-4 w-4" />
          </Link>
          
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center space-x-2 space-x-reverse">
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              {breadcrumb.current ? (
                <span className="text-sm font-medium text-foreground arabic-text">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors arabic-text"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
