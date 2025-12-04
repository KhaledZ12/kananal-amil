import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Shield, 
  HeadphonesIcon, 
  Heart, 
  DollarSign, 
  CheckCircle,
  Award,
  Users,
  Star,
  Phone
} from 'lucide-react';
import Seo from '@/components/Seo';

const WhyUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'السرعة في الإنجاز',
      description: 'نوفر لك العاملة المناسبة في أقل وقت ممكن مع ضمان الجودة',
      details: ['خدمة فورية 24/7', 'استجابة سريعة للطلبات', 'إجراءات مبسطة'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'المصداقية والثقة',
      description: 'مكتب مرخص ومعتمد مع تاريخ طويل من النجاح والموثوقية',
      details: ['مرخص رسمياً', 'سجل نظيف', 'شهادات جودة معتمدة'],
      color: 'secondary'
    },
    {
      icon: HeadphonesIcon,
      title: 'خدمة عملاء متميزة',
      description: 'فريق متخصص لخدمتك على مدار الساعة بأعلى معايير الاحترافية',
      details: ['دعم فني متواصل', 'استجابة فورية', 'متابعة شخصية'],
      color: 'accent'
    },
    {
      icon: Heart,
      title: 'الجودة والاهتمام',
      description: 'نحرص على تقديم أفضل مستوى من الخدمة مع العناية بأدق التفاصيل',
      details: ['فحص دقيق للعمالة', 'تدريب متخصص', 'ضمان الجودة'],
      color: 'primary'
    },
    {
      icon: DollarSign,
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل الأسعار في السوق مع حزم متنوعة تناسب جميع الميزانيات',
      details: ['أسعار شفافة', 'عروض مميزة', 'لا توجد رسوم خفية'],
      color: 'secondary'
    },
    {
      icon: CheckCircle,
      title: 'ضمانات شاملة',
      description: 'نوفر ضمانات شاملة على جميع خدماتنا لراحة بالك التامة',
      details: ['ضمان الاستبدال', 'ضمان التدريب', 'ضمان الرضا'],
      color: 'accent'
    }
  ];

  const stats = [
    { number: '500+', label: 'عقد منجز بنجاح', icon: Award },
    { number: '450+', label: 'عميل راضي عن خدماتنا', icon: Users },
    { number: '98%', label: 'معدل رضا العملاء', icon: Star },
    { number: '5', label: 'سنوات من الخبرة', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'أحمد المحمد',
      rating: 5,
      comment: 'خدمة ممتازة وسرعة في الإنجاز. العاملة التي حصلت عليها كانت مدربة جداً ومهذبة.',
      service: 'خادمة منزلية'
    },
    {
      name: 'سارة العبدالله',
      rating: 5,
      comment: 'أفضل مكتب للعمالة المنزلية. الطباخة التي جاءت من عندهم رائعة والأكل لذيذ جداً.',
      service: 'طباخة'
    },
    {
      name: 'محمد الخالد',
      rating: 5,
      comment: 'مربية الأطفال التي حصلت عليها من المكتب ممتازة وأطفالي يحبونها كثيراً.',
      service: 'مربية أطفال'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <Seo title="لماذا نحن" description="سرعة إنجاز، ضمانات شاملة، وخدمة عملاء متميزة في مكتب كنان الأمل." image="/images/logo.png" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">لماذا تختارنا؟</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            نحن الخيار الأول لآلاف العملاء الذين يثقون بخدماتنا المتميزة والموثوقة
          </p>
        </div>

        {/* Reasons Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="service-card border-primary/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      reason.color === 'primary' ? 'bg-primary/20' :
                      reason.color === 'secondary' ? 'bg-secondary/20' :
                      'bg-accent/20'
                    }`}>
                      <reason.icon className={`w-8 h-8 ${
                        reason.color === 'primary' ? 'text-primary' :
                        reason.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 arabic-heading">{reason.title}</h3>
                    <p className="text-muted-foreground arabic-text mb-4">{reason.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {reason.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 space-x-reverse arabic-text text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="trust-gradient rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">أرقامنا تتحدث</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground arabic-text text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-accent/20">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-2 space-x-reverse mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground arabic-text mb-4 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="arabic-text">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-background to-trust border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">المقارنة مع الآخرين</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary arabic-heading">مع مكتب كنان الأمل</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>ضمان شامل لمدة 3 أشهر</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>خدمة عملاء 24/7</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>أسعار شفافة بلا رسوم خفية</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>تدريب متخصص للعمالة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>متابعة دورية ومستمرة</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-muted-foreground arabic-heading">مع المكاتب الأخرى</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                      <span>ضمان محدود أو غير موجود</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                      <span>خدمة عملاء في أوقات محددة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                      <span>رسوم إضافية غير معلنة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                      <span>تدريب أساسي فقط</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse arabic-text text-muted-foreground">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                      <span>لا توجد متابعة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 hero-gradient text-white border-0">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4 arabic-heading">مقتنع؟ ابدأ الآن!</h2>
              <p className="text-lg mb-6 arabic-text opacity-90">
                انضم إلى مئات العملاء السعداء واحصل على أفضل خدمة للعمالة المنزلية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open('tel:0549784495', '_blank')}>
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </Button>
                <Link to="/services/">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    خدماتنا
                  </Button>
                </Link>
                <Link to="/nationalities/">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    الجنسيات المتوفرة
                  </Button>
                </Link>
                <Link to="/why-us/">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
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

export default WhyUs;