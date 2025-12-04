import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Users, 
  Award, 
  Clock, 
  Star, 
  CheckCircle, 
  Target, 
  Eye, 
  Shield, 
  HeadphonesIcon, 
  Heart, 
  DollarSign 
} from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { trackButtonClick, trackServiceInterest } from '@/lib/analytics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const Home = () => {
  const services = [
    { 
      title: 'تنازل عن خادمات', 
      description: 'تنازل عن خادمات مدربات للأعمال المنزلية', 
      image: '/images/bf49d7a8-9eca-495d-aac9-c356789abfc8.png'
    },
    { 
      title: 'تنازل عن طباخات', 
      description: 'تنازل عن طباخات ماهرات للمأكولات المختلفة', 
      image: '/images/b948dc8c-1152-4c5f-bbd9-1e99095e08ff.png'
    },
    { 
      title: 'تنازل عن مربيات', 
      description: 'تنازل عن مربيات متخصصات في رعاية الأطفال', 
      image: '/images/20e8a503-fab3-411e-a7ac-2f74d7f4c36e.png'
    },
    { 
      title: 'نقل كفالة', 
      description: 'نقل كفالة العاملات بجميع الإجراءات القانونية', 
      image: '/images/e38a8a55-47ee-4873-b698-0beb024ee5f9.png'
    },
  ];

  const stats = [
    { number: '500+', label: 'تنازل مُنجز', icon: Award },
    { number: '450+', label: 'عميل سعيد', icon: Users },
    { number: '5', label: 'سنوات خبرة', icon: Clock },
    { number: '4.9', label: 'تقييم العملاء', icon: Star },
  ];

  const advantages = [
    'سرعة في إنجاز التنازل',
    'مصداقية وثقة',
    'خدمة عملاء متميزة',
    'ضمانات شاملة',
    'أسعار تنافسية',
    'متابعة دورية'
  ];

  // About page data
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

  // Nationalities data
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

  // Why Us data
  const reasons = [
    {
      icon: Clock,
      title: 'السرعة في التنازل',
      description: 'نوفر لك التنازل المناسب في أقل وقت ممكن مع ضمان الجودة',
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
      description: 'نحرص على تقديم أفضل مستوى من خدمة التنازل مع العناية بأدق التفاصيل',
      details: ['فحص دقيق للعاملات', 'تدريب متخصص', 'ضمان الجودة'],
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

  const testimonials = [
    {
      name: 'أحمد المحمد',
      rating: 5,
      comment: 'خدمة ممتازة وسرعة في التنازل. العاملة التي حصلت عليها كانت مدربة جداً ومهذبة.',
      service: 'تنازل عن خادمة'
    },
    {
      name: 'سارة العبدالله',
      rating: 5,
      comment: 'أفضل مكتب للتنازل عن العاملات. الطباخة التي جاءت من عندهم رائعة والأكل لذيذ جداً.',
      service: 'تنازل عن طباخة'
    },
    {
      name: 'محمد الخالد',
      rating: 5,
      comment: 'مربية الأطفال التي حصلت عليها من المكتب ممتازة وأطفالي يحبونها كثيراً.',
      service: 'تنازل عن مربية'
    }
  ];

  // FAQ data
  const faqs = [
    {
      category: 'عام',
      questions: [
        {
          question: 'ما هي فترة التجربة المتاحة للتنازل؟',
          answer: 'نوفر فترة تجربة مجانية لمدة أسبوع كامل للتأكد من رضاكم عن خدمة التنازل. خلال هذه الفترة يمكنكم تقييم أداء العاملة وفي حال عدم الرضا يمكن الاستبدال مجاناً.'
        },
        {
          question: 'هل تقدمون ضمان على خدمة التنازل؟',
          answer: 'نعم، نقدم ضمان شامل لمدة 3 أشهر يشمل الاستبدال المجاني في حال عدم الرضا عن أداء العاملة، بالإضافة إلى متابعة دورية لضمان جودة الخدمة.'
        },
        {
          question: 'ما هي المناطق التي تغطونها للتنازل؟',
          answer: 'نغطي جميع أحياء مدينة الرياض والمناطق المجاورة لها. كما نقدم خدمات التنازل في المدن الكبرى بالمملكة العربية السعودية.'
        }
      ]
    },
    {
      category: 'التدريب والمهارات',
      questions: [
        {
          question: 'هل العاملات المتاحة للتنازل مدربات؟',
          answer: 'جميع العاملات المتاحة للتنازل يخضعن لبرامج تدريب مكثفة ومتخصصة قبل بدء العمل. التدريب يشمل المهارات المنزلية، آداب التعامل، وأساسيات اللغة العربية.'
        },
        {
          question: 'هل يمكن طلب مهارات معينة في التنازل؟',
          answer: 'بالطبع، يمكنكم تحديد المهارات المطلوبة مثل الطبخ، رعاية الأطفال، رعاية المسنين، أو التنظيف المتخصص. سنختار لكم العاملة الأنسب للتنازل حسب متطلباتكم.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="مكتب كنان الأمل للتنازل عن العاملات المنزلية - الرياض"
        description="أفضل مكتب للتنازل عن العاملات المنزلية في الرياض: تنازل عن خادمات، طباخات، مربيات، نقل كفالة بخبرة وثقة."
        keywords="تنازل عن عاملات, تنازل عن خادمات, تنازل عن طباخات, تنازل عن مربيات, نقل كفالة, الرياض, مكتب كنان الأمل"
        url="/"
        image="/images/logo.png"
      />
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/07f9de6f-720f-4288-96e4-c19cde485df5.png" 
            alt="Professional cleaning team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 arabic-heading leading-tight">
              <span className="text-white drop-shadow-lg">مكتب كنان الأمل</span>
              <br />
              <span className="text-yellow-300 drop-shadow-lg">  للعمالة المنزلية</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 arabic-text opacity-95 max-w-4xl mx-auto leading-relaxed">
            نحن متخصصون في خدمات التنازل عن العاملات المنزليات ونقل الكفالة بنظام احترافي ومتطور، مع ضمان إتمام جميع الإجراءات القانونية بسرعة وأمان مع توفير جميع الجنسيات مع عقود موثقة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                asChild
              >
                <a 
                  href="tel:0549784495"
                  onClick={() => trackButtonClick('call', '0549784495', 'hero_section')}
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center gap-2"
                asChild
              >
                <a 
                  href="https://wa.me/966563617861"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackButtonClick('whatsapp', '0563617861', 'hero_section')}
                >
                  <WhatsappIcon className="w-5 h-5" />
                  تواصل واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 trust-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground arabic-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* About Section */}
      <section className="py-16 trust-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">من نحن</h2>
            <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
              نحن مكتب متخصص في خدمات التنازل عن العاملات المنزلية ونقل الكفالة لخدمة عملائنا الكرام
            </p>
          </div>

          {/* Company Story */}
          <Card className="p-8 border-primary/20 mb-16">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-6 arabic-heading">قصتنا</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="arabic-text space-y-4">
                  <p className="text-lg leading-relaxed">
                    بدأت رحلتنا من رؤية واضحة لتقديم خدمات التنازل عن العاملات المنزلية ونقل الكفالة بأعلى معايير الجودة والمهنية.
                    منذ تأسيسنا، نسعى لتوفير حلول شاملة تلبي احتياجات الأسر السعودية.
                  </p>
                  <p className="text-lg leading-relaxed">
                    نفخر بخبرتنا الطويلة في هذا المجال، والتي مكنتنا من بناء شبكة واسعة من الشراكات
                    الموثوقة مع أفضل مكاتب التنازل المعتمدة.
                  </p>
                  <p className="text-lg leading-relaxed">
                    اليوم، نحن واحد من أبرز مكاتب التنازل عن العاملات المنزلية في المملكة، ونخدم مئات الأسر
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

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold arabic-heading">رؤيتنا</h3>
                </div>
                <p className="text-lg arabic-text leading-relaxed">
                  أن نكون الخيار الأول والأكثر ثقة لخدمات التنازل عن العاملات المنزلية ونقل الكفالة في المملكة العربية السعودية،
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
                  توفير خدمات تنازل عن العاملات المنزلية ونقل الكفالة بجميع الإجراءات القانونية، مع ضمان أعلى معايير الجودة
                  والمهنية، وتقديم خدمة عملاء استثنائية تبني الثقة والرضا.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading">خدماتنا الرئيسية</h2>
            <p className="text-muted-foreground text-lg arabic-text">نوفر لك أفضل خدمات التنازل ونقل الكفالة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card text-center group cursor-pointer"
                onClick={() => trackServiceInterest(service.title)}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 arabic-heading">{service.title}</h3>
                <p className="text-muted-foreground arabic-text">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                  عرض جميع خدمات التنازل
                </Button>
              </Link>
              <Link to="/nationalities/">
                <Button size="lg" variant="outline">
                  الجنسيات المتوفرة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 trust-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading">مميزاتنا الرئيسية</h2>
            <p className="text-muted-foreground text-lg arabic-text">لماذا تختارنا من بين الآخرين؟</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 space-x-reverse bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="arabic-text font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Nationalities Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">الجنسيات المتوفرة للتنازل</h2>
            <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
              نوفر لك تنازل عن عاملات منزلية من أفضل الجنسيات المدربة والمؤهلة لخدمة عملائنا الكرام
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

          {/* Recommendations */}
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">توصياتنا حسب الحاجة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">👶</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">تنازل عن مربيات</h3>
                <p className="text-muted-foreground arabic-text mb-4">للأسر التي لديها أطفال</p>
                <div className="text-primary font-semibold arabic-text">الأنسب: الفلبين</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-secondary/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">👴</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">تنازل عن ممرضات</h3>
                <p className="text-muted-foreground arabic-text mb-4">للعناية بكبار السن</p>
                <div className="text-secondary font-semibold arabic-text">الأنسب: أوغندا</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-accent/20">
              <CardContent className="p-0 text-center">
                <div className="text-3xl mb-4">🍳</div>
                <h3 className="text-xl font-bold mb-3 arabic-heading">تنازل عن طباخات</h3>
                <p className="text-muted-foreground arabic-text mb-4">للمأكولات المتنوعة</p>
                <div className="text-accent font-semibold arabic-text">الأنسب: الهند</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 trust-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">لماذا تختارنا للتنازل؟</h2>
            <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
              نحن الخيار الأول لآلاف العملاء الذين يثقون بخدمات التنازل المتميزة والموثوقة
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Testimonials */}
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">الأسئلة الشائعة</h2>
            <p className="text-xl text-muted-foreground arabic-text">
              إجابات شاملة على أكثر الأسئلة التي يطرحها عملاؤنا
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqs.map((faq, categoryIndex) => (
              <Card key={categoryIndex} className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 arabic-heading text-primary">
                    {faq.category}
                  </h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {faq.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-border">
                        <AccordionTrigger className="text-right arabic-text hover:no-underline hover:text-primary">
                          <span className="font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-right arabic-text text-muted-foreground leading-relaxed pt-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-trust">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4 arabic-heading">هل تحتاج إلى تنازل عن عاملة منزلية؟</h2>
              <p className="text-muted-foreground text-lg mb-6 arabic-text">
                نحن هنا لمساعدتك في الحصول على أفضل خدمات التنازل عن العاملات المنزلية ونقل الكفالة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/966563617861" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackButtonClick('whatsapp', '0563617861', 'final_cta')}
                >
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2">
                    <WhatsappIcon className="w-5 h-5" />
                  تواصل معنا
                </Button>
                </a>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/steps/">
                    <Button size="lg" variant="outline">
                      خطوات الحصول على الخدمة
                    </Button>
                  </Link>
                  <Link to="/why-us/">
                    <Button size="lg" variant="outline">
                      لماذا تختارنا؟
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;