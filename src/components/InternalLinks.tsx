import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Briefcase, 
  Globe, 
  Award, 
  List, 
  HelpCircle, 
  Phone,
  FileText,
  Shield
} from 'lucide-react';

interface InternalLinksProps {
  currentPage?: string;
  showTitle?: boolean;
  variant?: 'grid' | 'list' | 'footer';
}

const InternalLinks = ({ currentPage, showTitle = true, variant = 'grid' }: InternalLinksProps) => {
  const links = [
    {
      href: '/',
      label: 'الصفحة الرئيسية',
      description: 'مكتب كنان الأمل للتنازل عن العاملات المنزلية',
      icon: Home,
      keywords: 'الرئيسية، مكتب كنان الأمل، تنازل عاملات'
    },
    {
      href: '/domesticwork/',
      label: 'خدمات المكتب',
      description: 'تعرف على جميع خدمات التنازل ونقل الكفالة',
      icon: Briefcase,
      keywords: 'خدمات المكتب، تنازل، نقل كفالة'
    },
    {
      href: '/about/',
      label: 'من نحن',
      description: 'قصتنا ورؤيتنا في مجال التنازل عن العاملات',
      icon: Users,
      keywords: 'من نحن، قصة المكتب، رؤية ورسالة'
    },
    {
      href: '/services/',
      label: 'خدماتنا',
      description: 'تنازل عن خادمات، طباخات، مربيات، ممرضات',
      icon: List,
      keywords: 'خدماتنا، تنازل خادمات، تنازل طباخات، تنازل مربيات'
    },
    {
      href: '/nationalities/',
      label: 'الجنسيات المتوفرة',
      description: 'عاملات من الفلبين، الهند، إثيوبيا، أوغندا، كينيا',
      icon: Globe,
      keywords: 'الجنسيات، فلبينيات، هنديات، إثيوبيات، أوغنديات'
    },
    {
      href: '/why-us/',
      label: 'لماذا تختارنا',
      description: 'مميزاتنا الفريدة في خدمات التنازل',
      icon: Award,
      keywords: 'لماذا تختارنا، مميزات المكتب، أفضل مكتب تنازل'
    },
    {
      href: '/steps/',
      label: 'خطوات الخدمة',
      description: 'دليل شامل لخطوات التنازل ونقل الكفالة',
      icon: FileText,
      keywords: 'خطوات التنازل، إجراءات نقل الكفالة، كيفية التنازل'
    },
    {
      href: '/faq/',
      label: 'الأسئلة الشائعة',
      description: 'إجابات على أكثر الأسئلة شيوعاً حول خدماتنا',
      icon: HelpCircle,
      keywords: 'أسئلة شائعة، استفسارات التنازل، معلومات العاملات'
    },
    {
      href: '/contact/',
      label: 'اتصل بنا',
      description: 'تواصل معنا: 0563617861 - خدمة عملاء 24/7',
      icon: Phone,
      keywords: 'اتصل بنا، تواصل معنا، أرقام الهاتف، الرياض'
    }
  ];

  const legalLinks = [
    {
      href: '/privacy-policy/',
      label: 'سياسة الخصوصية',
      description: 'سياسة حماية البيانات والخصوصية',
      icon: Shield,
      keywords: 'سياسة الخصوصية، حماية البيانات'
    },
    {
      href: '/terms-conditions/',
      label: 'الشروط والأحكام',
      description: 'شروط وأحكام استخدام خدماتنا',
      icon: FileText,
      keywords: 'الشروط والأحكام، قوانين الاستخدام'
    }
  ];

  const filteredLinks = links.filter(link => link.href !== currentPage);
  const filteredLegalLinks = legalLinks.filter(link => link.href !== currentPage);

  if (variant === 'footer') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 arabic-heading">الصفحات الرئيسية</h3>
          <ul className="space-y-2">
            {filteredLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors arabic-text"
                  title={link.description}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 arabic-heading">خدماتنا</h3>
          <ul className="space-y-2">
            {filteredLinks.slice(4).map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors arabic-text"
                  title={link.description}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 arabic-heading">معلومات قانونية</h3>
          <ul className="space-y-2">
            {filteredLegalLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors arabic-text"
                  title={link.description}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="space-y-4">
        {showTitle && (
          <h2 className="text-2xl font-bold mb-6 arabic-heading">صفحات أخرى قد تهمك</h2>
        )}
        <div className="space-y-3">
          {filteredLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.href} to={link.href} className="block">
                <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold arabic-heading">{link.label}</h3>
                    <p className="text-sm text-muted-foreground arabic-text">{link.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <h2 className="text-2xl font-bold mb-6 text-center arabic-heading">تصفح المزيد من صفحاتنا</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link key={link.href} to={link.href}>
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 space-x-reverse mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold arabic-heading">{link.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground arabic-text leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      
      {filteredLegalLinks.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredLegalLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button variant="outline" size="sm" className="arabic-text">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternalLinks;
