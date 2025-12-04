import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Seo from '@/components/Seo';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="سياسة الخصوصية - مكتب كنان الأمل للتنازل عن العاملات المنزلية"
        description="سياسة الخصوصية لمكتب كنان الأمل للتنازل عن العاملات المنزلية ونقل الكفالة. نلتزم بحماية بياناتك الشخصية وخصوصيتك."
        keywords="سياسة الخصوصية, حماية البيانات, التنازل عن العاملات المنزلية, نقل الكفالة, مكتب كنان الأمل, الخصوصية والأمان"
        image="/images/logo.png"
      />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 arabic-heading">
            سياسة الخصوصية
          </h1>
          <p className="text-lg md:text-xl opacity-95 arabic-text">
            نلتزم بحماية خصوصيتك وبياناتك الشخصية
          </p>
          <div className="mt-6 text-sm opacity-80 arabic-text">
            تاريخ السريان: 01-09-2030
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
                    مرحبًا بك في مكتب كنان الأمل للتنازل عن العاملات المنزلية ونقل الكفالة.
                  </p>
                  <p>
                    يقوم موقع <strong>https://kanan-alamil.com/</strong> (المشار إليه لاحقًا باسم "الخدمة") بتشغيله مكتب كنان الأمل ("نحن"، "لنا" أو "خاصتنا").
                  </p>
                  <p>
                    تحكم سياسة الخصوصية هذه زيارتك لموقعنا، وتوضح كيف نقوم بجمع المعلومات وحمايتها والكشف عنها نتيجة لاستخدامك لخدمتنا.
                  </p>
                  <p>
                    نستخدم بياناتك لتقديم الخدمة وتحسينها. باستخدامك للخدمة، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة. ما لم يتم تعريفها بخلاف ذلك في هذه السياسة، فإن المصطلحات الواردة لها نفس المعاني الواردة في الشروط والأحكام الخاصة بنا.
                  </p>
                  <p>
                    تشكل الشروط والأحكام ("الشروط") وسياسة الخصوصية معًا اتفاقك معنا ("الاتفاقية").
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">2. التعريفات</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p><strong>الخدمة:</strong> تعني موقعنا الإلكتروني https://kanan-alamil.com/ الذي تديره شركة كنان الأمل.</p>
                  <p><strong>البيانات الشخصية:</strong> تعني البيانات المتعلقة بفرد حي يمكن التعرف عليه من تلك البيانات.</p>
                  <p><strong>بيانات الاستخدام:</strong> هي البيانات التي يتم جمعها تلقائيًا عند استخدام الخدمة (مثل مدة زيارة الصفحة).</p>
                  <p><strong>ملفات تعريف الارتباط (Cookies):</strong> ملفات صغيرة تُخزن على جهازك (كمبيوتر أو هاتف محمول).</p>
                  <p><strong>مراقب البيانات (Data Controller):</strong> الشخص أو الكيان المسؤول عن تحديد كيفية وأسباب معالجة البيانات الشخصية.</p>
                  <p><strong>معالجو البيانات (Data Processors / Service Providers):</strong> الأشخاص أو الجهات الذين يعالجون البيانات نيابةً عن مراقب البيانات.</p>
                  <p><strong>موضوع البيانات (Data Subject):</strong> هو الفرد الذي تتعلق به البيانات الشخصية.</p>
                  <p><strong>المستخدم:</strong> هو الفرد الذي يستخدم خدمتنا.</p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">3. جمع المعلومات واستخدامها</h2>
                <div className="arabic-text space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    نقوم بجمع عدة أنواع مختلفة من البيانات لأغراض متعددة بهدف توفير الخدمة وتحسينها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Types */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">4. أنواع البيانات التي يتم جمعها</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 arabic-heading text-secondary">البيانات الشخصية</h3>
                    <div className="arabic-text space-y-3 text-muted-foreground">
                      <p>
                        عند استخدامك لخدمتنا قد نطلب منك تزويدنا ببعض المعلومات الشخصية التي يمكن استخدامها للتواصل معك أو التعرف عليك. قد تشمل هذه المعلومات (على سبيل المثال لا الحصر):
                      </p>
                      <ul className="list-disc list-inside space-y-2 mr-4">
                        <li>البريد الإلكتروني</li>
                        <li>الاسم الأول واسم العائلة</li>
                        <li>رقم الهاتف</li>
                        <li>العنوان، الدولة، المحافظة، الرمز البريدي، المدينة</li>
                      </ul>
                      <p>
                        قد نستخدم بياناتك للتواصل معك عبر نشرات إخبارية أو عروض ترويجية. ويمكنك إلغاء الاشتراك في أي وقت.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 arabic-heading text-secondary">بيانات الاستخدام</h3>
                    <div className="arabic-text text-muted-foreground">
                      <p>
                        نقوم بجمع معلومات يرسلها متصفحك عند زيارة موقعنا، مثل عنوان الـ IP، نوع المتصفح، الصفحات التي زرتها، وقت وتاريخ الزيارة، مدة البقاء، معرفات الأجهزة وغيرها من البيانات التشخيصية.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 arabic-heading text-secondary">بيانات الموقع الجغرافي</h3>
                    <div className="arabic-text text-muted-foreground">
                      <p>
                        قد نستخدم معلومات عن موقعك (إذا منحت الإذن) لتحسين الخدمة. يمكنك تفعيل أو تعطيل مشاركة الموقع من إعدادات جهازك.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 arabic-heading text-secondary">ملفات تعريف الارتباط (Cookies)</h3>
                    <div className="arabic-text text-muted-foreground">
                      <p>
                        نستخدم ملفات تعريف الارتباط لأغراض تشغيلية وأمنية وتحليلية. يمكنك ضبط المتصفح لرفضها، لكن بعض أجزاء الخدمة قد لا تعمل بدونها.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">5. استخدام البيانات</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p>نستخدم البيانات للأغراض التالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>لتقديم وصيانة الخدمة.</li>
                    <li>لإخطارك بأي تغييرات.</li>
                    <li>للسماح لك باستخدام الميزات التفاعلية.</li>
                    <li>لتقديم الدعم الفني.</li>
                    <li>لجمع التحليلات وتحسين الخدمة.</li>
                    <li>لمراقبة الاستخدام والكشف عن المشاكل الفنية.</li>
                    <li>للامتثال للالتزامات القانونية وتنفيذ الحقوق.</li>
                    <li>لإرسال العروض والإشعارات المهمة.</li>
                    <li>لأي غرض آخر يتم الكشف عنه عند تزويدنا بالمعلومات.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">6. الاحتفاظ بالبيانات</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    نحتفظ ببياناتك الشخصية فقط للمدة اللازمة للأغراض المذكورة في سياسة الخصوصية.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Transfer */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">7. نقل البيانات</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد يتم نقل بياناتك إلى خوادم خارج دولتك. باستخدامك للخدمة، فإنك توافق على هذا النقل طالما تم اتخاذ التدابير الأمنية اللازمة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Disclosure */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">8. الإفصاح عن البيانات</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p>قد نكشف عن بياناتك في الحالات التالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>إذا طُلب منا قانونيًا.</li>
                    <li>في حالة اندماج أو استحواذ.</li>
                    <li>للشركات التابعة أو مقدمي الخدمات.</li>
                    <li>لحماية حقوق الشركة أو العملاء.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">9. أمن البيانات</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    نسعى لحماية بياناتك باستخدام وسائل آمنة، لكن لا يوجد نظام عبر الإنترنت آمن 100%.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* GDPR Rights */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">10. حقوقك وفقًا للـ GDPR (الاتحاد الأوروبي)</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p>إذا كنت مقيمًا في الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية، لك حقوق مثل:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الوصول للبيانات وتصحيحها أو حذفها.</li>
                    <li>تقييد أو الاعتراض على المعالجة.</li>
                    <li>سحب الموافقة في أي وقت.</li>
                    <li>تقديم شكوى للجهات المختصة.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* CalOPPA Rights */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">11. حقوقك وفقًا لقانون CalOPPA (كاليفورنيا)</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>يمكنك زيارة الموقع دون الإفصاح عن هويتك.</li>
                    <li>سنخطرك بأي تغييرات في هذه السياسة.</li>
                    <li>يمكنك تعديل بياناتك بالتواصل معنا عبر البريد الإلكتروني.</li>
                    <li>نلتزم بإشارات "عدم التتبع" في المتصفحات.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* CCPA Rights */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">12. حقوقك وفقًا لقانون CCPA (كاليفورنيا)</h2>
                <div className="arabic-text space-y-3 text-muted-foreground">
                  <p>إذا كنت مقيمًا في كاليفورنيا، يحق لك:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>معرفة ما نجمعه من بيانات عنك.</li>
                    <li>طلب حذف بياناتك.</li>
                    <li>الاعتراض على بيع بياناتك (نحن لا نبيع بياناتك).</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Providers */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">13. مزودو الخدمة</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد نستعين بجهات خارجية لتشغيل خدمات معينة بالنيابة عنا (مثل الاستضافة أو التحليلات أو الإعلانات).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">14. الروابط لمواقع أخرى</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد يحتوي موقعنا على روابط لمواقع أخرى ولسنا مسؤولين عن سياسات الخصوصية الخاصة بها.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Children Privacy */}
            <Card className="p-8 border-accent/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-accent">15. خصوصية الأطفال</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    خدماتنا غير موجهة للأطفال أقل من 18 عامًا. إذا تم جمع بياناتهم عن طريق الخطأ، سنقوم بحذفها فورًا.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Changes */}
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-primary">16. تغييرات على سياسة الخصوصية</h2>
                <div className="arabic-text text-muted-foreground">
                  <p>
                    قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنخطرك عبر البريد الإلكتروني أو من خلال إشعار بارز على موقعنا.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="p-8 border-secondary/20 bg-gradient-to-br from-background to-trust">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 arabic-heading text-secondary">17. تواصل معنا</h2>
                <div className="arabic-text space-y-4 text-muted-foreground">
                  <p>
                    إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:
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
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
