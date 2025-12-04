import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'الجودة',
      description: 'نلتزم بتقديم أعلى مستويات الجودة في الخدمة'
    },
    {
      icon: Users,
      title: 'الثقة',
      description: 'بناء علاقات طويلة الأمد مع عملائنا الكرام'
    },
    {
      icon: Target,
      title: 'الالتزام',
      description: 'الوفاء بجميع التزاماتنا في الوقت المحدد'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <Seo 
        title="من نحن - مكتب كنان الأمل للتنازل عن العاملات المنزلية"
        description="تعرف على رؤيتنا ورسالتنا وقصتنا في مكتب كنان الأمل للتنازل عن العاملات المنزلية. خبرة 5 سنوات في خدمات التنازل ونقل الكفالة بالرياض."
        keywords="من نحن, مكتب كنان الأمل, تنازل عن عاملات, قصة المكتب, رؤية ورسالة, خبرة التنازل"
        url="/about/"
        image="/images/logo.png" 
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">من نحن</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            نحن مكتب متخصص في توفير العمالة المنزلية المدربة والموثوقة لخدمة عملائنا الكرام
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-16">
          <Card className="p-8 trust-gradient border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-6 arabic-heading">قصتنا</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="arabic-text space-y-4">
                  <p className="text-lg leading-relaxed">
                    بدأت رحلتنا من رؤية واضحة لتقديم خدمات العمالة المنزلية بأعلى معايير الجودة والمهنية.
                    منذ تأسيسنا، نسعى لتوفير حلول شاملة تلبي احتياجات الأسر السعودية.
                  </p>
                  <p className="text-lg leading-relaxed">
                    نفخر بخبرتنا الطويلة في هذا المجال، والتي مكنتنا من بناء شبكة واسعة من الشراكات
                    الموثوقة مع أفضل مكاتب الاستقدام المعتمدة.
                  </p>
                  <p className="text-lg leading-relaxed">
                    اليوم، نحن واحد من أبرز مكاتب العمالة المنزلية في المملكة، ونخدم مئات الأسر
                    بكفاءة ومهنية عالية.
                  </p>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img 
                    src="/images/8d4e9246-3b92-4d2d-980b-d99e6fafb847.png" 
                    alt="Professional cleaning services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold arabic-heading">رؤيتنا</h3>
                </div>
                <p className="text-lg arabic-text leading-relaxed">
                  أن نكون الخيار الأول والأكثر ثقة لخدمات العمالة المنزلية في المملكة العربية السعودية،
                  من خلال تقديم خدمات متميزة تتجاوز توقعات عملائنا.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold arabic-heading">رسالتنا</h3>
                </div>
                <p className="text-lg arabic-text leading-relaxed">
                  توفير عمالة منزلية مدربة ومؤهلة من مختلف الجنسيات، مع ضمان أعلى معايير الجودة
                  والمهنية، وتقديم خدمة عملاء استثنائية تبني الثقة والرضا.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-background to-trust border-accent/20">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-8 text-center arabic-heading">أهدافنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">تقديم خدمات عالية الجودة تفوق توقعات العملاء</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">بناء علاقات طويلة الأمد مع العملاء</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">التوسع في خدماتنا لتغطية احتياجات أكبر</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">الحفاظ على أعلى معايير التدريب والتأهيل</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">تطوير تقنيات جديدة لتحسين الخدمة</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <p className="arabic-text">المساهمة في تطوير قطاع العمالة المنزلية</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section>
          <h3 className="text-3xl font-bold mb-8 text-center arabic-heading">قيمنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center service-card border-primary/20">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3 arabic-heading">{value.title}</h4>
                  <p className="text-muted-foreground arabic-text">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Related Links */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-6 arabic-heading">اكتشف المزيد</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                  خدماتنا
                </Button>
              </Link>
              <Link to="/why-us/">
                <Button size="lg" variant="outline">
                  لماذا تختارنا؟
                </Button>
              </Link>
              <Link to="/contact/">
                <Button size="lg" variant="outline">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;