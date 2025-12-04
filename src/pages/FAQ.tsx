import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, HelpCircle } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Seo from '@/components/Seo';

const FAQ = () => {
  const faqs = [
    {
      category: 'عام',
      questions: [
        {
          question: 'ما هي فترة التجربة المتاحة؟',
          answer: 'نوفر فترة تجربة مجانية لمدة أسبوع كامل للتأكد من رضاكم عن الخدمة. خلال هذه الفترة يمكنكم تقييم أداء العاملة وفي حال عدم الرضا يمكن الاستبدال مجاناً.'
        },
        {
          question: 'هل تقدمون ضمان على الخدمة؟',
          answer: 'نعم، نقدم ضمان شامل لمدة 3 أشهر يشمل الاستبدال المجاني في حال عدم الرضا عن أداء العاملة، بالإضافة إلى متابعة دورية لضمان جودة الخدمة.'
        },
        {
          question: 'ما هي المناطق التي تغطونها؟',
          answer: 'نغطي جميع أحياء مدينة الرياض والمناطق المجاورة لها. كما نقدم خدماتنا في المدن الكبرى بالمملكة العربية السعودية.'
        },
        {
          question: 'كم من الوقت يستغرق الحصول على العاملة؟',
          answer: 'عادة ما يستغرق الأمر من 7 إلى 14 يوم عمل من تاريخ توقيع العقد، وذلك حسب نوع الخدمة المطلوبة والجنسية المختارة.'
        }
      ]
    },
    {
      category: 'التدريب والمهارات',
      questions: [
        {
          question: 'هل العاملات مدربات؟',
          answer: 'جميع العاملات لدينا يخضعن لبرامج تدريب مكثفة ومتخصصة قبل بدء العمل. التدريب يشمل المهارات المنزلية، آداب التعامل، وأساسيات اللغة العربية.'
        },
        {
          question: 'هل يمكن طلب مهارات معينة؟',
          answer: 'بالطبع، يمكنكم تحديد المهارات المطلوبة مثل الطبخ، رعاية الأطفال، رعاية المسنين، أو التنظيف المتخصص. سنختار لكم العاملة الأنسب حسب متطلباتكم.'
        },
        {
          question: 'هل تتحدث العاملات العربية؟',
          answer: 'معظم العاملات لديهن إلمام أساسي باللغة العربية، وجميعهن يخضعن لدورات تدريبية في اللغة العربية قبل بدء العمل.'
        }
      ]
    },
    {
      category: 'الأوراق والإجراءات',
      questions: [
        {
          question: 'ما هي الأوراق المطلوبة مني؟',
          answer: 'المطلوب منكم: صورة من الهوية الوطنية، عقد الإيجار أو إثبات السكن، كشف حساب بنكي حديث، وتحديد متطلبات العمل بوضوح.'
        },
        {
          question: 'هل العاملات لديهن إقامة سارية؟',
          answer: 'جميع العاملات لديهن إقامة سارية وأوراق رسمية مكتملة. كما أنهن يخضعن لفحوصات طبية دورية ولديهن تأمين صحي.'
        },
        {
          question: 'كيف يتم التعامل مع الإقامة والتأشيرة؟',
          answer: 'نحن نتولى جميع إجراءات الإقامة والتأشيرة نيابة عنكم. العاملة تصل إليكم بأوراق مكتملة وجاهزة للعمل فوراً.'
        }
      ]
    },
    {
      category: 'الأسعار والدفع',
      questions: [
        {
          question: 'ما هي تكلفة الخدمة؟',
          answer: 'الأسعار تختلف حسب نوع الخدمة والجنسية المطلوبة. نقدم أسعار تنافسية وشفافة بدون رسوم خفية. تواصلوا معنا للحصول على عرض سعر مفصل.'
        },
        {
          question: 'هل توجد رسوم إضافية؟',
          answer: 'لا توجد أي رسوم خفية. جميع التكاليف واضحة ومحددة في العقد من البداية، بما في ذلك رسوم التدريب والمتابعة.'
        },
        {
          question: 'ما هي طرق الدفع المتاحة؟',
          answer: 'نقبل جميع طرق الدفع: نقداً، تحويل بنكي، أو الدفع الإلكتروني. يمكن تقسيط المبلغ حسب الاتفاق.'
        }
      ]
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen py-16">
      <Seo title="الأسئلة الشائعة" description="إجابات شاملة لأكثر الأسئلة شيوعًا حول خدمات مكتب كنان الأمل." image="/images/logo.png" />
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">الأسئلة الشائعة</h1>
          <p className="text-xl text-muted-foreground arabic-text">
            إجابات شاملة على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const categoryFaqs = faqs.find(faq => faq.category === category);
            return (
              <Card key={categoryIndex} className="border-primary/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">
                    {category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {categoryFaqs?.questions.map((item, index) => (
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
            );
          })}
        </div>

        {/* Quick Contact */}
        <section className="mt-16">
          <Card className="p-8 trust-gradient border-primary/20">
            <CardContent className="p-0 text-center">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 arabic-heading">لم تجد إجابة لسؤالك؟</h2>
              <p className="text-muted-foreground text-lg mb-6 arabic-text">
                فريق خدمة العملاء لدينا جاهز للرد على جميع استفساراتكم على مدار الساعة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary text-white flex-1" 
                  asChild
                >
                  <a href="tel:0549784495">
                    <Phone className="w-5 h-5 ml-2" />
                    اتصل بنا
                  </a>
                </Button>
                <a href="https://wa.me/966549784495" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full hover:bg-secondary/10 hover:text-secondary">
                    <WhatsappIcon className="w-5 h-5 ml-2" />
                    واتساب
                  </Button>
                </a>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground arabic-text">
                  أوقات العمل: من السبت إلى الخميس، 24 ساعة
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Related Links */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">اكتشف المزيد</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/services/">
              <Button size="lg" variant="outline" className="w-full">
                خدماتنا
              </Button>
            </Link>
            <Link to="/nationalities/">
              <Button size="lg" variant="outline" className="w-full">
                الجنسيات المتوفرة
              </Button>
            </Link>
            <Link to="/steps/">
              <Button size="lg" variant="outline" className="w-full">
                خطوات الخدمة
              </Button>
            </Link>
            <Link to="/why-us/">
              <Button size="lg" variant="outline" className="w-full">
                لماذا تختارنا؟
              </Button>
            </Link>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">المواضيع الأكثر بحثاً</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 service-card border-secondary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2 arabic-heading">فترة التجربة</h3>
                <p className="text-sm text-muted-foreground arabic-text">كل ما تحتاج معرفته عن فترة التجربة المجانية</p>
              </CardContent>
            </Card>
            
            <Card className="p-4 service-card border-secondary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2 arabic-heading">الضمانات</h3>
                <p className="text-sm text-muted-foreground arabic-text">تفاصيل الضمانات الشاملة التي نقدمها</p>
              </CardContent>
            </Card>
            
            <Card className="p-4 service-card border-secondary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2 arabic-heading">التدريب</h3>
                <p className="text-sm text-muted-foreground arabic-text">برامج التدريب المتخصصة للعاملات</p>
              </CardContent>
            </Card>
            
            <Card className="p-4 service-card border-secondary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2 arabic-heading">الأسعار</h3>
                <p className="text-sm text-muted-foreground arabic-text">هيكل الأسعار والرسوم بشفافية كاملة</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;