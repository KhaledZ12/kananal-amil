import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Clock,
  Mail,
  Users
} from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const Contact = () => {
  const phoneNumbers = [
    {
      number: '0563617861',
      displayNumber: '0563617861',
      whatsappLink: 'https://wa.me/966563617861'
    },
    {
      number: '0549784495', 
      displayNumber: '0549784495',
      whatsappLink: 'https://wa.me/966549784495'
    }
  ];

  const contactMethods = [
    {
      icon: MapPin,
      title: 'موقعنا',
      details: ['الرياض', 'المملكة العربية السعودية'],
      description: 'نخدم جميع أحياء الرياض',
      color: 'accent',
      action: null
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: 'فيسبوك', url: '#' },
    { icon: Instagram, name: 'انستقرام', url: '#' },
    { icon: Twitter, name: 'تويتر', url: '#' },
  ];

  const workingHours = [
    { day: 'السبت - الأربعاء', hours: '24 ساعة' },
    { day: 'الخميس', hours: '24 ساعة' },
    { day: 'الجمعة', hours: '24 ساعة' },
  ];


  return (
    <div className="min-h-screen py-16">
      <Seo 
        title="اتصل بنا - مكتب كنان الأمل للتنازل عن العاملات المنزلية"
        description="تواصل مع مكتب كنان الأمل للتنازل عن العاملات المنزلية بالرياض. خدمة عملاء 24/7 - هاتف: 0563617861 - واتساب متاح."
        keywords="اتصل بنا, تواصل معنا, أرقام الهاتف, مكتب كنان الأمل, الرياض, خدمة عملاء, واتساب"
        url="/contact/"
        image="/images/logo.png" 
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">تواصل معنا</h1>
          <p className="text-xl text-muted-foreground arabic-text max-w-3xl mx-auto">
            نحن هنا لخدمتك على مدار الساعة. تواصل معنا بالطريقة التي تناسبك
          </p>
        </div>

        {/* Phone Numbers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 arabic-heading">أرقام التواصل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {phoneNumbers.map((phone, index) => (
              <Card key={index} className="service-card border-primary/20 text-center overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 arabic-heading">{phone.displayNumber}</h3>
                  
                  <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center gap-2" 
                    asChild
                  >
                    <a href={`tel:${phone.number}`}>
                      <span>📞</span>
                      اتصال مباشر
                    </a>
                  </Button>

                  <Button 
                    className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white flex items-center justify-center gap-2" 
                    asChild
                  >
                    <a href={phone.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <WhatsappIcon className="w-5 h-5" />
                      واتساب
                    </a>
                  </Button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="service-card border-primary/20 text-center overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.color === 'primary' ? 'bg-primary/20' :
                    method.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <method.icon className={`w-8 h-8 ${
                      method.color === 'primary' ? 'text-primary' :
                      method.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 arabic-heading">{method.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-lg font-semibold text-foreground">{detail}</p>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground arabic-text mb-4">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Working Hours */}
            <Card className="p-8 trust-gradient border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 space-x-reverse mb-6 justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold arabic-heading">ساعات العمل</h2>
                </div>
                
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="arabic-text font-medium">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm arabic-text text-center">
                    <strong>خدمة الطوارئ:</strong> متاحة 24 ساعة للعملاء الحاليين
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Media - removed by request */}

        {/* FAQ Link */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0 text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-2" />
              <h2 className="text-3xl font-bold mb-2 arabic-heading">أسئلة شائعة؟</h2>
              <p className="text-muted-foreground text-lg mb-4 arabic-text">
                قد تجد إجابة سؤالك في قسم الأسئلة الشائعة
              </p>
              <Link to="/faq/" className="inline-block">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  اطلع على الأسئلة الشائعة
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
        
        {/* Related Links */}
        <section className="mb-16">
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

        {/* Emergency Contact */}
        <section>
          <Card className="p-8 hero-gradient text-white border-0">
            <CardContent className="p-0 text-center">
              <Phone className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 arabic-heading">للحالات العاجلة</h2>
              <p className="text-lg mb-6 arabic-text opacity-90">
                في حالة وجود مشكلة عاجلة مع العاملة، اتصل بنا فوراً
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4 flex items-center justify-center gap-2"
                asChild
              >
                <a href="tel:0563617861">
                  <span>📞</span>
                  اتصل الآن - 0563617861
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center gap-2"
                asChild
              >
                <a href="https://wa.me/966563617861" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="w-5 h-5" />
                  واتساب فوري
                </a>
              </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;