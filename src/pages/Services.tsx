import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';

const Services = () => {
  const services = [
    {
      title: 'تنازل عن خادمات',
      description: 'تنازل عن خادمات مدربات على جميع الأعمال المنزلية من تنظيف وترتيب وغسيل',
      features: ['تنظيف المنزل', 'ترتيب الغرف', 'غسيل الملابس', 'كي الملابس'],
      image: '/images/bf49d7a8-9eca-495d-aac9-c356789abfc8.png'
    },
    {
      title: 'تنازل عن طباخات',
      description: 'تنازل عن طباخات ماهرات في إعداد المأكولات العربية والعالمية',
      features: ['الطبخ العربي', 'المأكولات العالمية', 'الحلويات', 'المعجنات'],
      image: '/images/b948dc8c-1152-4c5f-bbd9-1e99095e08ff.png'
    },
    {
      title: 'تنازل عن مربيات',
      description: 'تنازل عن مربيات متخصصات في رعاية الأطفال بجميع الأعمار',
      features: ['رعاية الرضع', 'تعليم الأطفال', 'الأنشطة الترفيهية', 'المتابعة الصحية'],
      image: '/images/20e8a503-fab3-411e-a7ac-2f74d7f4c36e.png'
    },
    {
      title: 'تنازل عن ممرضات',
      description: 'تنازل عن ممرضات متخصصات في رعاية كبار السن بأعلى معايير الجودة والاهتمام',
      features: ['الرعاية الصحية', 'المرافقة', 'المساعدة اليومية', 'الدعم النفسي'],
      image: '/images/e38a8a55-47ee-4873-b698-0beb024ee5f9.png'
    },
    {
      title: 'تنازل عن عمال',
      description: 'تنازل عن عمال مهرة للأعمال المنزلية والصيانة',
      features: ['الصيانة المنزلية', 'أعمال البستنة', 'التنظيف الشامل', 'النقل'],
      image: '/images/9ae86b16-c49a-4230-9871-da27f5d6d803.png'
    },
    {
      title: 'تنازل عن سائقين',
      description: 'تنازل عن سائقين محترفين ومرخصين للنقل الشخصي والعائلي',
      features: ['رخصة سارية', 'خبرة طويلة', 'التزام بالمواعيد', 'معرفة بالطرق'],
      image: '/images/9614185e-5be4-4b0c-bc1d-b75bcb946e8d.png'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <Seo 
        title="خدماتنا - تنازل عن العاملات المنزلية بجميع التخصصات"
        description="خدمات تنازل شاملة: تنازل عن خادمات، طباخات، مربيات، ممرضات، عمال، سائقين. جميع الجنسيات متوفرة مع ضمانات شاملة بالرياض."
        keywords="تنازل عن خادمات, تنازل عن طباخات, تنازل عن مربيات, تنازل عن ممرضات, تنازل عن عمال, تنازل عن سائقين, خدمات التنازل"
        url="/services/"
        image="/images/logo.png" 
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">خدماتنا</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            نوفر لك مجموعة شاملة من خدمات العمالة المنزلية المتخصصة والمدربة على أعلى مستوى
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2 arabic-heading">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground arabic-text mb-4">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary arabic-text">ما نقدمه:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 space-x-reverse arabic-text">
                          <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <section className="trust-gradient rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">عملية اختيار العاملة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2 arabic-heading">التقييم والفحص</h3>
              <p className="text-muted-foreground arabic-text">فحص شامل للخلفية والمهارات</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2 arabic-heading">التدريب المتخصص</h3>
              <p className="text-muted-foreground arabic-text">تدريب مكثف على المهام المطلوبة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2 arabic-heading">الضمان والمتابعة</h3>
              <p className="text-muted-foreground arabic-text">ضمان شامل ومتابعة دورية</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-background to-trust border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4 arabic-heading">هل تحتاج إلى إحدى هذه الخدمات؟</h2>
              <p className="text-muted-foreground text-lg mb-6 arabic-text">
                تواصل معنا الآن للحصول على استشارة مجانية واختيار العاملة المناسبة لك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary text-white"
                  asChild
                >
                  <a href="tel:0549784495">
                    تواصل معنا الآن
                  </a>
                </Button>
                <Link to="/nationalities/">
                  <Button size="lg" variant="outline">
                    الجنسيات المتوفرة
                  </Button>
                </Link>
                <Link to="/steps/">
                  <Button size="lg" variant="outline">
                    خطوات الخدمة
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

export default Services;