import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variants for animations
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

  const float = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  const wave = {
    initial: { pathLength: 0, pathOffset: 0 },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <Layout>
      <Head>
        <title>О нас | CodeEnglish</title>
        <meta name="description" content="Узнайте больше о нашей образовательной платформе CodeEnglish, которая помогает студентам 7-11 классов изучать программирование и улучшать знания английского языка" />
      </Head>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 right-[30%] w-72 h-72 bg-accent rounded-full blur-[90px]"></div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent backdrop-blur-[1px]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.08]">
            <motion.path
              d="M 0,100 C 0,30 30,0 100,0 S 200,30 200,100 170,200 100,200 0,170 0,100"
              fill="none"
              strokeWidth="1"
              stroke="url(#linearGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-secondary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
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
              О платформе <span className="relative">
                <span className="text-primary inline-block">Code<span className="text-secondary">English</span></span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.span>
              </span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-2xl text-gray-700 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Образовательная платформа для учеников 7-11 классов, которая помогает изучать программирование и улучшать знания английского языка
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="/courses" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Выбрать курс</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating icons decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
          <motion.div 
            className="absolute top-[20%] left-[10%] text-4xl opacity-20"
            variants={float}
            initial="initial"
            animate="animate"
          >
            &lt;/&gt;
          </motion.div>
          <motion.div 
            className="absolute top-[30%] right-[15%] text-4xl opacity-20"
            variants={float}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          >
            &lt;div&gt;
          </motion.div>
          <motion.div 
            className="absolute bottom-[25%] left-[20%] text-4xl opacity-20"
            variants={float}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            {}
          </motion.div>
        </div>
      </section>

      {/* Our Mission with Enhanced Design */}
      <section className="py-20 bg-white relative">
        <div className="absolute right-0 top-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeIn}
            >
              <div className="inline-block mb-4">
                <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 tracking-tight">Наша миссия</h2>
              
              <div className="space-y-5">
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Мы создали <span className="text-primary font-medium">CodeEnglish</span> с целью трансформировать образовательный опыт учеников, объединяя изучение программирования с улучшением языковых навыков.
                </motion.p>
                
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Наша миссия — сделать обучение программированию <span className="text-secondary font-medium">доступным, интересным и эффективным</span> для учеников 7-11 классов, помогая им одновременно совершенствовать английский язык, необходимый в современной IT-индустрии.
                </motion.p>
                
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Мы верим, что каждый ученик может освоить программирование и английский язык при правильном подходе и интерактивных методах обучения.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative h-96"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4">
                <div className="relative w-full h-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <motion.div 
                    className="relative z-10 flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0] 
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30"></div>
                      <div className="relative text-9xl text-primary">🚀</div>
                    </div>
                  </motion.div>
                  
                  {/* Orbiting elements */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-1/4 -right-5 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🔤</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute bottom-1/4 -left-5 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach with Enhanced Design */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute left-0 top-0 w-full h-40 bg-gradient-to-b from-white to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 tracking-tight">Наш подход</h2>
            <p className="text-gray-700 text-lg">
              Мы разработали инновационную методику, которая объединяет изучение программирования и английского языка в увлекательном и эффективном формате.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:rotate-3">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors duration-300">Интерактивное обучение</h3>
                <p className="text-gray-700 leading-relaxed">
                  Практические задания и проекты, которые позволяют ученикам сразу применять полученные знания и видеть результат.
                </p>
                
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-primary/0 transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-all duration-300 transform group-hover:rotate-3">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4 group-hover:text-secondary transition-colors duration-300">Контекстное изучение</h3>
                <p className="text-gray-700 leading-relaxed">
                  Изучение английского языка происходит в контексте программирования, что делает процесс более эффективным и практичным.
                </p>
                
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-secondary to-secondary/0 transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 transform group-hover:rotate-3">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4 group-hover:text-accent transition-colors duration-300">Адаптивные курсы</h3>
                <p className="text-gray-700 leading-relaxed">
                  Наши курсы адаптируются к уровню знаний каждого ученика, обеспечивая оптимальный темп обучения и сложность материала.
                </p>
                
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-accent to-accent/0 transition-all duration-500"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
        
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 right-0 h-20 opacity-20"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: '100% 0%' }}
            transition={{ repeat: Infinity, duration: 20, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'white\' stroke-width=\'0.5\' opacity=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1.5 bg-white rounded-full mx-auto"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Начните учиться с нами сегодня</h2>
            <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к нашей образовательной платформе и получите доступ к уникальной методике обучения программированию и английскому языку.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/courses" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform w-full sm:w-auto"
                >
                  <span>Выбрать курс</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform w-full sm:w-auto"
                >
                  <span>Связаться с нами</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </section>
    </Layout>
  );
} 