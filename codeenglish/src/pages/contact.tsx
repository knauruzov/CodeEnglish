import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after some time
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <Layout>
      <Head>
        <title>Контакты | CodeEnglish</title>
        <meta name="description" content="Свяжитесь с нами для получения дополнительной информации о наших курсах программирования и английского языка" />
      </Head>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 right-[30%] w-72 h-72 bg-accent rounded-full blur-[90px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div 
              className="inline-block mb-4"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 tracking-tight">
              Наши <span className="relative">
                <span className="text-primary inline-block">Контакты</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.span>
              </span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Есть вопросы или предложения? Свяжитесь с нами любым удобным способом
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute right-0 top-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 tracking-tight">Основательница</h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              <motion.div 
                className="lg:w-1/3 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/images/founder.jpg"
                      alt="Assem Amantayeva - Founder of CodeEnglish"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                      priority
                    />
                  </div>
                  
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">Assem Amantayeva</h3>
                <p className="text-primary/90 font-medium text-xl mb-6">University Admissions Consultant | Scholarships & International Programs</p>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    I help students navigate the path to fully funded university programs, scholarships, and international fellowships. With firsthand experience securing competitive opportunities like Global UGRAD and SUSI, I provide strategic guidance on applications, personal statements, and interview preparation.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">How I Can Help:</h4>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✔</span>
                      <span>Identify fully funded scholarships & exchange programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✔</span>
                      <span>Craft compelling motivation letters & personal statements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✔</span>
                      <span>Application strategy & interview coaching</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  <a 
                    href="mailto:info@codeenglish.com" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@codeenglish.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute left-0 top-0 w-full h-40 bg-gradient-to-b from-white to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <motion.div 
                className="lg:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-4">
                  <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
                
                <h2 className="text-3xl font-bold text-dark mb-6">Свяжитесь с нами</h2>
                <p className="text-gray-700 mb-8">
                  Задайте нам вопрос или оставьте комментарий. Мы ответим вам в ближайшее время.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">Телефон</h3>
                      <p className="text-gray-700">+7 (727) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">Email</h3>
                      <p className="text-gray-700">info@codeenglish.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">Адрес</h3>
                      <p className="text-gray-700">г. Актобе, ул. Абая 150</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Form */}
              <motion.div 
                className="lg:w-2/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Электронная почта</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Ваше сообщение</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={formStatus === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Отправка...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Отправлено!
                        </>
                      ) : (
                        <>
                          Отправить сообщение
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 