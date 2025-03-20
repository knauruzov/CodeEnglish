import Link from 'next/link';
import { useState, useEffect, ReactNode } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{name: string, email: string} | null>(null);
  
  // Add scroll detection for enhanced header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check login status on mount
  useEffect(() => {
    const checkLoginStatus = () => {
      try {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
          const userData = JSON.parse(currentUser);
          setIsLoggedIn(true);
          setUserData(userData);
        } else {
          setIsLoggedIn(false);
          setUserData(null);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    };
    
    // Check on mount
    checkLoginStatus();
    
    // Listen for storage events (for when user logs in/out in another tab)
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);
  
  const handleLogout = () => {
    try {
      localStorage.removeItem('currentUser');
      setIsLoggedIn(false);
      setUserData(null);
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <span className="text-primary font-bold text-2xl md:text-3xl transition-all duration-300 group-hover:opacity-90">
                  Code<span className="text-secondary">English</span>
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Курсы с выпадающим меню */}
            <div className="relative group z-50">
              <NavLink href="/courses">
                <span className="flex items-center">
                  Курсы
                  <svg 
                    className="inline-block ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </NavLink>
              
              {/* Выпадающее меню */}
              <div 
                className="absolute left-0 mt-2 w-80 rounded-xl shadow-2xl overflow-hidden transform origin-top-left transition-all duration-300 
                opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 p-3 divide-y divide-gray-100">
                  <div className="grid grid-cols-1 gap-2 pb-2">
                    <CourseCard
                      href="/courses/python-start"
                      title="Python Start"
                      description="Для начинающих программистов"
                      icon={
                        <div className="flex items-center justify-center">
                          <svg viewBox="0 0 128 128" className="w-8 h-8">
                            <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                              <stop offset="0" stopColor="#5A9FD4" />
                              <stop offset="1" stopColor="#306998" />
                            </linearGradient>
                            <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                              <stop offset="0" stopColor="#FFD43B" />
                              <stop offset="1" stopColor="#FFE873" />
                            </linearGradient>
                            <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
                            <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
                            <path opacity=".444" fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
                          </svg>
                        </div>
                      }
                    />
                    
                    <CourseCard
                      href="/courses/html-css"
                      title="HTML + CSS"
                      description="Основы веб-разработки"
                      icon={
                        <div className="flex items-center justify-center relative">
                          <div className="absolute -left-1 -top-1">
                            <svg viewBox="0 0 128 128" className="w-5 h-5">
                              <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
                              <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
                              <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
                              <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
                            </svg>
                          </div>
                          <div className="absolute -right-1 -top-1">
                            <svg viewBox="0 0 128 128" className="w-5 h-5">
                              <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
                              <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
                              <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
                              <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
                              <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
                              <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
                            </svg>
                          </div>
                          <div className="w-6 h-6"></div>
                        </div>
                      }
                    />
                    
                    <CourseCard
                      href="/courses/algorithms"
                      title="Алгоритмы"
                      description="Продвинутый уровень"
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" fill="currentColor"/>
                        </svg>
                      }
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Link 
                      href="/courses" 
                      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group/link"
                    >
                      <span className="font-medium text-gray-700 group-hover/link:text-primary">Все курсы</span>
                      <span className="bg-gray-100 p-1.5 rounded-full transform transition-all duration-200 group-hover/link:bg-primary/10 group-hover/link:translate-x-1">
                        <svg className="w-4 h-4 text-gray-500 group-hover/link:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <NavLink href="/about">О нас</NavLink>
            <NavLink href="/contact">Контакты</NavLink>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile"
                  className="flex items-center text-gray-700 hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-medium mr-2">
                    {userData?.name.charAt(0) || 'U'}
                  </div>
                  <span className="font-medium">
                    {userData?.name || 'Пользователь'}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn bg-gray-100 text-dark hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded-md hover:shadow-sm"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="btn bg-gray-100 text-dark hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded-md hover:shadow-sm"
                >
                  Вход
                </Link>
                <Link 
                  href="/register" 
                  className="btn bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-5 py-2 rounded-md hover:shadow-md"
                >
                  Регистрация
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6 text-gray-700"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 mb-4">
            {/* Мобильное меню для курсов с вложенными элементами */}
            <div>
              <div 
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer font-medium flex items-center justify-between"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                <span className="flex items-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary mr-2">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
                  </svg>
                  Курсы
                </span>
                <span className={`bg-gray-100 p-1.5 rounded-full transition-all duration-300 ${mobileCoursesOpen ? 'bg-primary/10 rotate-180' : ''}`}>
                  <svg 
                    className={`w-3.5 h-3.5 transition-colors duration-200 ${mobileCoursesOpen ? 'text-primary' : 'text-gray-500'}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileCoursesOpen ? 'max-h-96 opacity-100 mt-2 mb-2' : 'max-h-0 opacity-0 mt-0 mb-0'
                }`}
              >
                <div className="bg-gray-50 rounded-lg p-2 space-y-2">
                  <MobileCourseItem 
                    href="/courses/python-start"
                    onClick={() => setMobileMenuOpen(false)}
                    icon={
                      <div className="flex items-center justify-center">
                        <svg viewBox="0 0 128 128" className="w-7 h-7">
                          <linearGradient id="python-original-a-mobile" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                            <stop offset="0" stopColor="#5A9FD4" />
                            <stop offset="1" stopColor="#306998" />
                          </linearGradient>
                          <linearGradient id="python-original-b-mobile" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                            <stop offset="0" stopColor="#FFD43B" />
                            <stop offset="1" stopColor="#FFE873" />
                          </linearGradient>
                          <path fill="url(#python-original-a-mobile)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
                          <path fill="url(#python-original-b-mobile)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
                        </svg>
                      </div>
                    }
                    title="Python Start"
                    description="Для начинающих программистов"
                  />
                  
                  <MobileCourseItem 
                    href="/courses/html-css"
                    onClick={() => setMobileMenuOpen(false)}
                    icon={
                      <div className="flex items-center justify-center relative">
                        <div className="absolute -left-1 -top-1">
                          <svg viewBox="0 0 128 128" className="w-4.5 h-4.5">
                            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
                            <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
                            <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
                            <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
                          </svg>
                        </div>
                        <div className="absolute -right-1 -top-1">
                          <svg viewBox="0 0 128 128" className="w-4.5 h-4.5">
                            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
                            <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
                            <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
                            <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
                            <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
                            <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
                          </svg>
                        </div>
                        <div className="w-6 h-6"></div>
                      </div>
                    }
                    title="HTML + CSS" 
                    description="Основы веб-разработки"
                  />
                  
                  <MobileCourseItem 
                    href="/courses/algorithms"
                    onClick={() => setMobileMenuOpen(false)}
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-accent">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" fill="currentColor"/>
                      </svg>
                    }
                    title="Алгоритмы"
                    description="Продвинутый уровень"
                  />
                  
                  <div className="pt-1 border-t border-gray-200 mt-1">
                    <MobileNavLink href="/courses" onClick={() => setMobileMenuOpen(false)}>
                      <span className="flex items-center justify-between w-full">
                        <span className="font-medium">Все курсы</span>
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </MobileNavLink>
                  </div>
                </div>
              </div>
            </div>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
              <span className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                </svg>
                О нас
              </span>
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <span className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary mr-2">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" fill="currentColor"/>
                </svg>
                Контакты
              </span>
            </MobileNavLink>
          </nav>
          
          {/* Mobile Login/Register Buttons */}
          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
            {isLoggedIn ? (
              <>
                <Link 
                  href="/profile"
                  className="px-3 py-2.5 text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 rounded-lg font-medium flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-7 h-7 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
                    {userData?.name.charAt(0) || 'U'}
                  </div>
                  Мой профиль
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2.5 text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 rounded-lg font-medium"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-3 py-2.5 text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Вход
                </Link>
                <Link 
                  href="/register" 
                  className="px-3 py-2.5 bg-primary text-white hover:bg-primary/90 transition-all rounded-lg font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Регистрация
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Type definitions
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

interface CourseCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface MobileCourseItemProps extends Omit<CourseCardProps, 'icon'> {
  icon: ReactNode;
  onClick: () => void;
}

// Компонент для десктопной навигации
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link 
    href={href} 
    className="relative text-gray-700 hover:text-primary font-medium transition-colors group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Компонент для мобильной навигации
const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => (
  <Link 
    href={href} 
    className="text-gray-700 hover:text-primary transition-colors px-3 py-2.5 hover:bg-gray-50 rounded-lg flex items-center"
    onClick={onClick}
  >
    {children}
  </Link>
);

// Компонент для карточки курса в выпадающем меню
const CourseCard = ({ href, title, description, icon }: CourseCardProps) => (
  <Link 
    href={href} 
    className="flex items-center p-2 rounded-lg hover:bg-white transition-all duration-200 hover:shadow-sm group"
  >
    <div className="p-2 rounded-full bg-gray-100 mr-3 group-hover:bg-primary/10 transition-colors duration-200">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors duration-200">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </Link>
);

// Компонент для элемента курса в мобильной версии
const MobileCourseItem = ({ href, title, description, icon, onClick }: MobileCourseItemProps) => (
  <Link 
    href={href} 
    className="flex items-start p-2 rounded-lg hover:bg-white transition-all duration-200 hover:shadow-sm"
    onClick={onClick}
  >
    <div className="p-1.5 rounded-lg bg-gray-100 mr-3 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </Link>
);

export default Header; 