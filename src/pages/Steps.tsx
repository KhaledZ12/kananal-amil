import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Users, 
  FileText, 
  UserCheck, 
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Seo from '@/components/Seo';

const Steps = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'تواصل معنا',
      description: 'اتصل بنا أو تواصل عبر واتساب لتحديد احتياجاتك',
      details: [
        'مكالمة هاتفية أو واتساب',
        'استشارة مجانية',
        'تحديد نوع الخدمة المطلوبة',
        'اختيار الجنسية المفضلة'
      ],
      timeframe: 'فوري',
      color: 'primary'
    },
    {
      number: 2,
      icon: Users,
      title: 'اختيار الباقة والجنسية',
      description: 'حدد نوع الخدمة والجنسية المناسبة لاحتياجاتك',
      details: [
        'مراجعة الباقات المتاحة',
        'اختيار الجنسية المطلوبة',
        'تحديد المهارات المطلوبة',
        'مناقشة التفاصيل والتوقعات'
      ],
      timeframe: '30 دقيقة',
      color: 'secondary'
    },
    {
      number: 3,
      icon: FileText,
      title: 'توقيع العقد',
      description: 'توقيع العقد وتحديد الشروط والأحكام',
      details: [
        'مراجعة شروط العقد',
        'تحديد فترة التجربة',
        'توضيح الضمانات',
        'توقيع العقد الرسمي'
      ],
      timeframe: '1 ساعة',
      color: 'accent'
    },
    {
      number: 4,
      icon: UserCheck,
      title: 'استلام العاملة',
      description: 'استلام العاملة المدربة والمؤهلة',
      details: [
        'وصول العاملة في الموعد المحدد',
        'تقديم العاملة وأوراقها',
        'شرح المهام والتوقعات',
        'بدء فترة التجربة'
      ],
      timeframe: 'حسب الاتفاق',
      color: 'primary'
    }
  ];

  const requirements = [
    'صورة من الهوية الوطنية',
    'عقد الإيجار أو إثبات السكن',
    'كشف حساب بنكي حديث',
    'تحديد متطلبات العمل'
  ];

  const guarantees = [
    {
      title: 'فترة التجربة',
      description: 'أسبوع مجاني للتجربة',
      icon: Clock
    },
    {
      title: 'ضمان الاستبدال',
      description: 'استبدال مجاني خلال 3 أشهر',
      icon: UserCheck
    },
    {
      title: 'المتابعة الدورية',
      description: 'متابعة شهرية لضمان الرضا',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <Seo title="خطوات الخدمة" description="تعرف على خطوات الحصول على عاملة منزلية من مكتب كنان الأمل بسهولة وسرعة." image="/images/logo.png" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">خطوات الحصول على الخدمة</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            عملية بسيطة وواضحة للحصول على أفضل العمالة المنزلية في أقل وقت ممكن
          </p>
        </div>

        {/* Steps Process */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="service-card border-primary/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0 ${
                        step.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-dark' :
                        step.color === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary-dark' :
                        'bg-gradient-to-br from-accent to-accent-light'
                      }`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 space-x-reverse mb-2">
                          <step.icon className={`w-6 h-6 ${
                            step.color === 'primary' ? 'text-primary' :
                            step.color === 'secondary' ? 'text-secondary' :
                            'text-accent'
                          }`} />
                          <h3 className="text-xl font-bold arabic-heading">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground arabic-text mb-4">{step.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2 space-x-reverse arabic-text text-sm">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full text-sm ${
                          step.color === 'primary' ? 'bg-primary/20 text-primary' :
                          step.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                          'bg-accent/20 text-accent'
                        }`}>
                          <Clock className="w-4 h-4" />
                          <span className="arabic-text">{step.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <Card className="p-8 trust-gradient border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">المستندات المطلوبة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="arabic-text font-medium">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground arabic-text">
                  جميع المستندات يتم التعامل معها بسرية تامة وحسب أنظمة الخصوصية المعتمدة
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guarantees */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">ضماناتنا لك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="p-6 text-center border-secondary/20">
                <CardContent className="p-0">
                  <guarantee.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 arabic-heading">{guarantee.title}</h3>
                  <p className="text-muted-foreground arabic-text">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-background to-trust border-accent/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">الجدول الزمني المتوقع</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">فوري</div>
                  <div className="text-sm text-muted-foreground arabic-text">الاستشارة الأولى</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">1-2 يوم</div>
                  <div className="text-sm text-muted-foreground arabic-text">إعداد العقد</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">3-7 أيام</div>
                  <div className="text-sm text-muted-foreground arabic-text">اختيار العاملة</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">7-14 يوم</div>
                  <div className="text-sm text-muted-foreground arabic-text">وصول العاملة</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 hero-gradient text-white border-0">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4 arabic-heading">جاهز للبداية؟</h2>
              <p className="text-lg mb-6 arabic-text opacity-90">
                ابدأ رحلتك معنا الآن واحصل على أفضل عاملة منزلية في أقل وقت ممكن
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-4" 
                  asChild
                >
                  <a href="tel:0549784495">
                    <Phone className="w-5 h-5 ml-2" />
                    ابدأ الآن - اتصل بنا
                  </a>
                </Button>
                <a href="https://wa.me/966563617861" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-secondary/20 flex items-center gap-2">
                    <WhatsappIcon className="w-5 h-5" />
                    تواصل واتساب
                  </Button>
                </a>
              </div>
              
              {/* Related Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 arabic-text opacity-90">اكتشف المزيد</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/services/">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      خدماتنا
                    </Button>
                  </Link>
                  <Link to="/nationalities/">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      الجنسيات المتوفرة
                    </Button>
                  </Link>
                  <Link to="/why-us/">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      لماذا تختارنا؟
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Steps;