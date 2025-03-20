import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend
      console.log('Subscription email:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* О нас */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold inline-flex items-center">
                <span className="text-primary">Code</span>
                <span className="text-secondary">English</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Образовательная платформа для изучения программирования и английского языка в Казахстане.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="#" ariaLabel="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" ariaLabel="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.225-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.121.13.156.305.165.472.009.167-.018.37-.027.522z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" ariaLabel="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialLink>
            </div>
          </div>
          
          {/* Курсы */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold mb-5 border-b border-gray-800 pb-2">Курсы</h3>
            <ul className="space-y-3">
              <FooterLink href="/courses/python-start">Python Start</FooterLink>
              <FooterLink href="/courses/html-css">HTML + CSS</FooterLink>
              <FooterLink href="/courses/algorithms">Алгоритмы</FooterLink>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold mb-5 border-b border-gray-800 pb-2">Контакты</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 mt-0.5 text-gray-500 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-gray-300 transition-colors">г. Актобе, ул. Абая 150</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 mt-0.5 text-gray-500 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-gray-300 transition-colors">+7 (727) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 mt-0.5 text-gray-500 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-gray-300 transition-colors">info@codeenglish.kz</span>
              </li>
            </ul>
          </div>
          
          {/* Подписка */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold mb-5 border-b border-gray-800 pb-2">Подписка</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Подпишитесь на нашу рассылку, чтобы получать новости и обновления о курсах.
            </p>
            {isSubscribed ? (
              <div className="p-3 bg-green-900/30 border border-green-800 rounded-md text-green-400">
                Спасибо за подписку! Мы отправили вам письмо для подтверждения.
              </div>
            ) : (
              <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-md bg-gray-800/70 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  Подписаться
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Нижняя часть футера */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CodeEnglish. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components with proper TypeScript types
interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, ariaLabel, children }: SocialLinkProps) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/60"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <Link 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors flex items-center group"
    >
      <span className="mr-1 text-gray-600 group-hover:text-primary transition-colors">▸</span>
      <span>{children}</span>
    </Link>
  </li>
);

export default Footer; 