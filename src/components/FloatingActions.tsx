import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { trackButtonClick } from '@/lib/analytics';

type FloatingActionsProps = {
  primaryPhone?: string;   // e.g., '0563617861'
  secondaryPhone?: string; // e.g., '0549784495'
};

const FloatingActions = ({
  primaryPhone = '0563617861',
  secondaryPhone = '0549784495',
}: FloatingActionsProps) => {
  const [open, setOpen] = useState(true);

  const commonBtn =
    'w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300';

  const toWaLink = (localPhone: string) => {
    const digits = localPhone.replace(/\D/g, '');
    const intl = digits.startsWith('0') ? `966${digits.slice(1)}` : digits;
    return `https://wa.me/${intl}`;
  };

  const handleButtonClick = (buttonType: 'call' | 'whatsapp', phoneNumber: string) => {
    trackButtonClick(buttonType, phoneNumber, 'floating_actions');
  };

  const items = [
    { 
      key: 'call-secondary', 
      href: `tel:${secondaryPhone}`, 
      label: 'اتصال', 
      icon: <Phone className="w-6 h-6" />,
      onClick: () => handleButtonClick('call', secondaryPhone)
    },
    { 
      key: 'wa-primary', 
      href: toWaLink(primaryPhone), 
      label: 'واتساب', 
      icon: <WhatsappIcon className="w-6 h-6" />, 
      external: true,
      onClick: () => handleButtonClick('whatsapp', primaryPhone)
    },
  ];

  return (
    <div className="fixed right-4 bottom-8 z-50">
      {/* Speed-dial items */}
      <div className="relative flex flex-col items-end">
        {items.map((item, index) => {
          const offset = (index + 1) * 56; // spacing per step (px)
          return (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
              className={`${commonBtn}`}
              onClick={item.onClick}
              style={{
                backgroundColor: item.key === 'call-secondary' ? '#10B981' : '#25D366',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: open ? `translateY(-${offset}px)` : 'translateY(0)',
                opacity: open ? 1 : 0,
                pointerEvents: open ? 'auto' : 'none',
              }}
            >
              {item.icon}
            </a>
          );
        })}

        {/* Main toggle with label */}
        <div className="flex items-center gap-2 mb-0">
          <button
            type="button"
            aria-label="تواصل"
            onClick={() => setOpen(!open)}
            className={`${commonBtn} shake-soft bg-gradient-to-r from-primary to-secondary text-white`}
          >
            {open ? <span className="text-lg">×</span> : <MessageCircle className="w-5 h-5" />}
          </button>
          <span className={`arabic-text text-sm hidden sm:inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground shadow ${open ? 'opacity-100' : 'opacity-90'}`}>
            تواصل معنا
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;


