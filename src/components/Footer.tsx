import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="arabic-text">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <img
                src="/images/53e96e53-9676-4c04-8634-47e8f6f0d27e.png"
                alt="شعار مكتب كنان الأمل"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">مكتب كنان الأمل</h3>
                <p className="text-sm opacity-80">للتنازل عن العاملات المنزلية</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              نحن متخصصون في خدمات التنازل عن العاملات المنزلية ونقل الكفالة من مختلف الجنسيات
              لخدمة عملائنا الكرام في المملكة العربية السعودية.
            </p>
          </div>

          {/* Contact Info */}
          <div className="arabic-text">
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm">0563617861</p>
                  <p className="text-sm">0549784495</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-secondary" />
                <p className="text-sm">الرياض، المملكة العربية السعودية</p>
              </div>
              <a href="https://wa.me/966563617861" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                <Button
                  variant="outline"
                  className="bg-transparent border-background/20 text-background hover:bg-background/10 rounded-full px-4 py-2"
                >
                  <WhatsappIcon className="w-4 h-4 ml-2" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <InternalLinks variant="footer" />
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-center text-sm opacity-60 arabic-text">
          جميع الحقوق محفوظة لـ كنان الامل © 2025 By {'    '}
            <a
              href="https://pixelmarketng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              style={{ color: 'hsl(16 65% 55%)' }}
            >
              Pixel-DM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;