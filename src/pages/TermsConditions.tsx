import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Scale } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Seo from '@/components/Seo';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="الشروط والأحكام - مكتب كنان الأمل للتنازل عن العاملات المنزلية"
        description="الشروط والأحكام لمكتب كنان الأمل للتنازل عن العاملات المنزلية ونقل الكفالة. تعرف على حقوقك وواجباتك عند استخدام خدماتنا."
        keywords="الشروط والأحكام, التنازل عن العاملات المنزلية, نقل الكفالة, مكتب كنان الأمل, القوانين واللوائح, حقوق المستخدم"
        image="/images/logo.png"
      />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-12 h-12 text-yellow-300 ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold arabic-heading">
              الشروط والأحكام
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-95 arabic-text">
            تعرف على حقوقك وواجباتك عند استخدام خدماتنا
          </p>
          <div className="mt-6 text-sm opacity-80 arabic-text">
            آخر تحديث: 01-09-2030
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">1. المقدمة</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    مرحبًا بك في مكتب كنان الأمل للتنازل عن العاملات المنزلية ونقل الكفالة ("الشركة"، "نحن"، "لنا").
                  </p>
                  <p>
                    تحكم هذه الشروط والأحكام ("الشروط") استخدامك لموقعنا الإلكتروني الموجود على: <strong>https://kanan-alamil.com/</strong> (ويشار إليه فيما بعد بـ "الخدمة") والذي تديره كنان الأمل.
                  </p>
                  <p>
                    كما أن سياسة الخصوصية الخاصة بنا تحكم أيضًا استخدامك للخدمة وتوضح كيف نقوم بجمع المعلومات وحمايتها والإفصاح عنها نتيجة لاستخدامك لموقعنا.
                  </p>
                  <p>
                    موافقتك معنا تتضمن هذه الشروط وسياسة الخصوصية ("الاتفاقيات"). وباستخدامك للخدمة، فإنك تقر بأنك قد قرأت وفهمت هذه الاتفاقيات، وتوافق على الالتزام بها.
                  </p>
                  <p>
                    إذا لم توافق على هذه الاتفاقيات (أو لم تتمكن من الالتزام بها)، فلا يجوز لك استخدام الخدمة، ولكن يرجى إبلاغنا عبر البريد الإلكتروني: <a href="mailto:info@kanan-alamil.com" className="text-primary hover:underline">info@kanan-alamil.com</a> حتى نحاول إيجاد حل.
                  </p>
                  <p>
                    تنطبق هذه الشروط على جميع الزوار والمستخدمين والآخرين الذين يرغبون في الوصول إلى الخدمة أو استخدامها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Communications */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">2. الاتصالات</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    باستخدامك للخدمة، فإنك توافق على الاشتراك في النشرات الإخبارية أو المواد الترويجية أو أي معلومات أخرى قد نرسلها لك.
                  </p>
                  <p>
                    يمكنك إلغاء الاشتراك في أي من هذه الرسائل عبر رابط الإلغاء المرفق أو عبر مراسلتنا على: <a href="mailto:info@kanan-alamil.com" className="text-secondary hover:underline">info@kanan-alamil.com</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Purchases */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">3. المشتريات</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    إذا رغبت في شراء أي منتج أو خدمة متاحة عبر الخدمة ("شراء")، قد يُطلب منك تزويدنا بمعلومات تتعلق بعملية الشراء مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>رقم البطاقة البنكية</li>
                    <li>تاريخ انتهاء البطاقة</li>
                    <li>عنوان الفواتير</li>
                    <li>عنوان الشحن</li>
                  </ul>
                  <p>
                    وتقر وتضمن بأن لديك الحق القانوني في استخدام البطاقة أو وسيلة الدفع هذه، وأن جميع البيانات التي تقدمها صحيحة وكاملة.
                  </p>
                  <p>
                    قد نستعين بخدمات طرف ثالث لتسهيل الدفع. باستخدامك للخدمة، فإنك تمنحنا الحق في مشاركة بياناتك مع هذه الأطراف وفقًا لسياسة الخصوصية الخاصة بنا.
                  </p>
                  <p>
                    نحتفظ بحق إلغاء أي طلبية في أي وقت لأسباب منها: عدم توافر المنتج أو وجود خطأ في السعر أو الشروط أو الاشتباه في عملية غير قانونية.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contests and Promotions */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">4. المسابقات والعروض الترويجية</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    قد نوفر عبر الخدمة مسابقات أو عروض ترويجية ("العروض")، وتخضع هذه العروض لقواعد منفصلة عن هذه الشروط.
                  </p>
                  <p>
                    في حال وجود تعارض بين الشروط وقواعد العرض، تسري قواعد العرض.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Subscriptions */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">5. الاشتراكات</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    بعض خدماتنا متاحة عبر الاشتراك الدوري ("الاشتراك").
                  </p>
                  <p>
                    سيتم تجديد الاشتراك تلقائيًا ما لم تقم بإلغائه قبل نهاية دورة الفوترة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Free Trial */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">6. الفترة التجريبية المجانية</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    قد نوفر اشتراكًا مجانيًا لفترة محدودة وفقًا لتقديرنا.
                  </p>
                  <p>
                    في حال إدخال بيانات الدفع عند التسجيل، فلن يتم خصم أي رسوم إلا بعد انتهاء الفترة التجريبية، ما لم يتم إلغاء الاشتراك قبل انتهائها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fee Changes */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">7. تغيير الرسوم</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    تحتفظ كنان الأمل بالحق في تعديل رسوم الاشتراك في أي وقت، على أن يتم إخطارك مسبقًا.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refund Policy */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">8. سياسة الاسترداد</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    يمكنك طلب استرداد الأموال خلال 14 يومًا من تاريخ الشراء.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">9. المحتوى</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    جميع المحتويات المعروضة عبر الخدمة مملوكة لـ كنان الأمل أو مستخدمة بتصريح. لا يجوز نسخها أو إعادة نشرها أو استخدامها لأغراض تجارية دون إذن كتابي مسبق.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">10. الاستخدامات المحظورة</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p>تتعهد بعدم استخدام الخدمة لأي غرض:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>غير قانوني أو يضر بالآخرين</li>
                    <li>للتشهير أو الاحتيال</li>
                    <li>انتهاك الحقوق الفكرية</li>
                    <li>نشر الفيروسات</li>
                    <li>محاولة اختراق أنظمة الشركة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">11. التحليلات</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد نستعين بمقدمي خدمات من طرف ثالث لمتابعة وتحليل استخدام الخدمة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Age Restriction */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">12. منع استخدام القُصّر</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    الخدمة موجهة فقط للأشخاص بعمر 18 سنة فأكثر.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accounts */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">13. الحسابات</h2>
                <div className="arabic-text space-y-4 text-muted-foreground">
                  <p>
                    عند إنشاء حساب لدينا، فإنك تتحمل مسؤولية دقة بياناتك وحماية كلمة مرورك.
                  </p>
                  <p>
                    يحق لنا إلغاء الحسابات التي تحتوي على بيانات غير صحيحة أو مخالفة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">14. الملكية الفكرية</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    الخدمة وجميع ميزاتها وحقوقها الفكرية مملوكة لـ كنان الأمل ولا يجوز استخدامها دون إذن كتابي.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Copyright Policy */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">15. سياسة حقوق الطبع والنشر</h2>
                <div className="arabic-text space-y-4 text-muted-foreground">
                  <p>
                    نحترم حقوق الملكية الفكرية.
                  </p>
                  <p>
                    إذا كنت ترى أن محتوى ما ينتهك حقوقك، يرجى مراسلتنا على: <a href="mailto:info@kanan-alamil.com" className="text-accent hover:underline">info@kanan-alamil.com</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* DMCA Notices */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">16. الإشعارات بموجب DMCA</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    يمكن إرسال إشعارات التعدي على حقوق النشر إلينا مع التفاصيل الكاملة وفقًا للقانون الأمريكي (DMCA).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Error Reporting */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">17. الإبلاغ عن الأخطاء والملاحظات</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    يمكنك تزويدنا بالملاحظات أو المقترحات عبر: <a href="mailto:info@kanan-alamil.com" className="text-secondary hover:underline">info@kanan-alamil.com</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">18. الروابط لمواقع أخرى</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد تحتوي الخدمة على روابط لمواقع طرف ثالث، ونحن غير مسؤولين عن محتواها أو سياساتها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">19. إخلاء المسؤولية</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    الخدمة مقدمة "كما هي" دون أي ضمانات بشأن الدقة أو التوافر أو خلوها من الأخطاء أو الفيروسات.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">20. حدود المسؤولية</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    لا نتحمل أي مسؤولية عن الأضرار غير المباشرة أو الخسائر الناتجة عن استخدام الخدمة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">21. إنهاء الخدمة</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    يجوز لنا إنهاء أو تعليق حسابك في أي وقت إذا خالفت الشروط.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">22. القانون الواجب التطبيق</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    تخضع هذه الشروط وتفسر وفقًا لقوانين المملكة العربية السعودية.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Modifications */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">23. التعديلات على الخدمة</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    يجوز لنا تعديل الخدمة أو إيقافها في أي وقت دون إشعار مسبق.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms Modifications */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">24. تعديل الشروط</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    نحتفظ بالحق في تعديل هذه الشروط، ويعتبر استمرارك في استخدام الخدمة موافقة منك على الشروط الجديدة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Severability */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">25. التنازل وقابلية الفصل</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    في حال اعتبرت أي مادة من هذه الشروط غير قانونية أو غير قابلة للتنفيذ، تظل باقي الشروط سارية.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Acknowledgment */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">26. الإقرار</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    باستخدامك للخدمة، فإنك تقر بأنك قد قرأت هذه الشروط وتوافق على الالتزام بها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="p-8 border-accent/20 bg-gradient-to-br from-background to-trust">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">27. اتصل بنا</h2>
                <div className="arabic-text space-y-4 text-muted-foreground">
                  <p>
                    للاستفسارات أو الدعم الفني، يمكنك مراسلتنا على:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Mail className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold arabic-text">البريد الإلكتروني</p>
                        <a 
                          href="mailto:info@kanan-alamil.com" 
                          className="text-primary hover:underline arabic-text"
                        >
                          info@kanan-alamil.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Phone className="w-6 h-6 text-secondary" />
                      <div>
                        <p className="font-semibold arabic-text">الهاتف</p>
                        <a 
                          href="tel:0549784495" 
                          className="text-secondary hover:underline arabic-text"
                        >
                          0549784495
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-secondary text-white"
                      onClick={() => window.open('https://wa.me/966563617861', '_blank')}
                    >
                      <WhatsappIcon className="w-5 h-5 ml-2" />
                      تواصل عبر الواتساب
                    </Button>
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm arabic-text">
                      <strong>تحرير:</strong> تمت ترجمة هذا المستند بالاعتماد على النموذج المولد من موقع PolicyMaker.io.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
