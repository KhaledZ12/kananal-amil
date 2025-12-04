import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Star, Award, Users } from 'lucide-react';

const Nationalities = () => {
  const nationalities = [
    {
      country: 'الفلبين',
      flag: '🇵🇭',
      specialties: ['خدمة منزلية شاملة', 'رعاية أطفال', 'طبخ', 'تنظيف'],
      characteristics: ['تحدث الإنجليزية', 'مدربة جيداً', 'صبورة مع الأطفال', 'ماهرة في التنظيف'],
      rating: 4.8,
      available: true
    },
    {
      country: 'الهند',
      flag: '🇮🇳',
      specialties: ['طبخ هندي وآسيوي', 'تنظيف', 'رعاية مسنين', 'خدمة عامة'],
      characteristics: ['مهارات طبخ متميزة', 'تحدث الإنجليزية', 'خبرة في الرعاية', 'التزام عالي'],
      rating: 4.6,
      available: true
    },
    {
      country: 'إثيوبيا',
      flag: '🇪🇹',
      specialties: ['تنظيف منزلي', 'رعاية أطفال', 'خدمة عامة', 'مساعدة منزلية'],
      characteristics: ['سرعة في التعلم', 'صبر وهدوء', 'احترام التقاليد', 'إخلاص في العمل'],
      rating: 4.5,
      available: true
    },
    {
      country: 'أوغندا',
      flag: '🇺🇬',
      specialties: ['رعاية مسنين', 'تنظيف', 'خدمة منزلية', 'مساعدة شخصية'],
      characteristics: ['تعامل ممتاز مع كبار السن', 'هدوء ولطف', 'قوة بدنية', 'تحمل المسؤولية'],
      rating: 4.4,
      available: false
    },
    {
      country: 'كينيا',
      flag: '🇰🇪',
      specialties: ['خدمة منزلية', 'تنظيف', 'رعاية أطفال', 'طبخ أفريقي'],
      characteristics: ['نشاط وحيوية', 'تحدث الإنجليزية', 'مرونة في العمل', 'تعلم سريع'],
      rating: 4.3,
      available: true
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <Seo title="الجنسيات" description="جنسيات متعددة للعمالة المنزلية المدربة لتلبية احتياجاتكم في الرياض." image="/images/logo.png" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">الجنسيات المتوفرة</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            نوفر لك عمالة منزلية من أفضل الجنسيات المدربة والمؤهلة لخدمة عملائنا الكرام
          </p>
        </div>

        {/* Nationalities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {nationalities.map((nationality, index) => (
            <Card key={index} className={`service-card border-primary/20 overflow-hidden ${!nationality.available ? 'opacity-75' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse mb-6">
                  <div className="text-4xl">{nationality.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold arabic-heading">{nationality.country}</h3>
                    <div className="flex items-center space-x-2 space-x-reverse mt-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm text-muted-foreground">{nationality.rating}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        nationality.available 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {nationality.available ? 'متوفرة' : 'غير متوفرة حالياً'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 arabic-text">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {nationality.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-trust text-trust-foreground rounded-full text-sm arabic-text">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary mb-2 arabic-text">المميزات:</h4>
                    <ul className="space-y-1">
                      {nationality.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-center space-x-2 space-x-reverse arabic-text text-sm">
                          <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selection Process */}
        <section className="trust-gradient rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">عملية الاختيار</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2 arabic-heading">اختيار دقيق</h3>
              <p className="text-sm text-muted-foreground arabic-text">نختار أفضل العمالة من كل جنسية</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2 arabic-heading">تدريب مكثف</h3>
              <p className="text-sm text-muted-foreground arabic-text">برامج تدريب متخصصة</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2 arabic-heading">ضمان الجودة</h3>
              <p className="text-sm text-muted-foreground arabic-text">معايير صارمة للجودة</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2 arabic-heading">المتابعة المستمرة</h3>
              <p className="text-sm text-muted-foreground arabic-text">متابعة دورية للأداء</p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">توصياتنا حسب الحاجة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">👶</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">رعاية الأطفال</h3>
                <p className="text-muted-foreground arabic-text mb-4">للأسر التي لديها أطفال</p>
                <div className="text-primary font-semibold arabic-text">الأنسب: الفلبين</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-secondary/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">👴</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">رعاية المسنين</h3>
                <p className="text-muted-foreground arabic-text mb-4">للعناية بكبار السن</p>
                <div className="text-secondary font-semibold arabic-text">الأنسب: أوغندا</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-accent/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">🍳</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">الطبخ المتخصص</h3>
                <p className="text-muted-foreground arabic-text mb-4">للمأكولات المتنوعة</p>
                <div className="text-accent font-semibold arabic-text">الأنسب: الهند</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-background to-trust border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4 arabic-heading">هل تريد معرفة المزيد؟</h2>
              <p className="text-muted-foreground text-lg mb-6 arabic-text">
                اكتشف خدماتنا وخطوات الحصول على العاملة المناسبة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                    خدماتنا
                  </Button>
                </Link>
                <Link to="/steps">
                  <Button size="lg" variant="outline">
                    خطوات الخدمة
                  </Button>
                </Link>
                <Link to="/why-us">
                  <Button size="lg" variant="outline">
                    لماذا تختارنا؟
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nationalities;