import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const courses = [
    {
      id: 'python-start',
      title: 'Python Start: Кодим по-английски',
      description: 'Изучайте основы Python, одновременно улучшая свой английский. Идеально для 7-10 классов.',
      image: '/images/python-course.jpg',
      level: 'Начальный',
      lessons: 12,
      duration: '8 недель',
      icon: (
        <div className="flex items-center justify-center relative">
          <svg className="h-14 w-14 text-[#306998]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255">
            <defs>
              <linearGradient id="pythonLogoA" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
                <stop offset="0%" stopColor="#387EB8"/>
                <stop offset="100%" stopColor="#366994"/>
              </linearGradient>
              <linearGradient id="pythonLogoB" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
                <stop offset="0%" stopColor="#FFE052"/>
                <stop offset="100%" stopColor="#FFC331"/>
              </linearGradient>
            </defs>
            <path fill="url(#pythonLogoA)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
            <path fill="url(#pythonLogoB)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
          </svg>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
            <span className="text-[10px] font-bold text-primary">P</span>
          </div>
        </div>
      )
    },
    {
      id: 'html-css',
      title: 'HTML + CSS: Твой первый сайт',
      description: 'Создавайте сайты с нуля, изучая веб-разработку с английской терминологией. Для 7-10 классов.',
      image: '/images/html-css-course.jpg',
      level: 'Начальный',
      lessons: 10,
      duration: '6 недель',
      icon: (
        <div className="flex items-center justify-center relative">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#E44D26]/10">
              <svg className="h-8 w-8 text-[#E44D26]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#E44D26" d="M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z"/>
                <path fill="#F16529" d="M256 480.523l120.03-33.277 28.24-316.352H256z"/>
                <path fill="#EBEBEB" d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.208-.058z"/>
                <path fill="#fff" d="M255.857 268.217v45.41h55.908l-5.271 58.894-50.637 13.67v47.244l93.096-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.857 176.305v45.411h109.688l.911-10.207 2.069-23.021 1.086-12.183z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#264DE4]/10">
              <svg className="h-8 w-8 text-[#264DE4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#264DE4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
                <path fill="#2965F1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
                <path fill="#EBEBEB" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
                <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h115.765l-3.623 40.54z"/>
              </svg>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
            <span className="text-[10px] font-bold text-accent">W</span>
          </div>
        </div>
      )
    },
    {
      id: 'algorithms',
      title: 'Алгоритмы',
      description: 'Решайте интересные задачи с LeetCode и Codeforces, готовясь к олимпиадам и конкурсам по спортивному программированию на английском. Для 10-11 классов.',
      image: '/images/algorithms-course.jpg',
      level: 'Продвинутый',
      lessons: 15,
      duration: '10 недель',
      icon: (
        <div className="flex items-center justify-center relative">
          <div className="h-14 w-14 p-0.5 bg-secondary/10 rounded-xl flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5ZM24 7C33.3888 7 41 14.6112 41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24C7 14.6112 14.6112 7 24 7Z" fill="#10B981"/>
              <path d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12ZM24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14Z" fill="#10B981"/>
              <rect x="23" y="10" width="2" height="28" fill="#10B981"/>
              <rect x="10" y="23" width="28" height="2" fill="#10B981"/>
              <path d="M15.5147 15.5147L32.4853 32.4853" stroke="#10B981" strokeWidth="2"/>
              <path d="M15.5147 32.4853L32.4853 15.5147" stroke="#10B981" strokeWidth="2"/>
              <circle cx="24" cy="24" r="2" fill="#10B981"/>
              <circle cx="17" cy="24" r="1.5" stroke="#10B981"/>
              <circle cx="31" cy="24" r="1.5" stroke="#10B981"/>
              <circle cx="24" cy="17" r="1.5" stroke="#10B981"/>
              <circle cx="24" cy="31" r="1.5" stroke="#10B981"/>
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
            <span className="text-[10px] font-bold text-secondary">A</span>
          </div>
        </div>
      )
    }
  ];

  const stats = [
    { value: 5000, label: 'ожидается учеников', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { value: 3, label: 'Доступных курса', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { value: 40, label: 'Планируемых проектов', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { value: 360, label: 'готовится Учебных часов', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' }
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => {
        const newStats = [...prev];
        let allDone = true;
        
        for (let i = 0; i < stats.length; i++) {
          if (newStats[i] < stats[i].value) {
            const increment = Math.max(1, Math.floor(stats[i].value / 20));
            newStats[i] = Math.min(stats[i].value, newStats[i] + increment);
            allDone = false;
          }
        }
        
        if (allDone) {
          clearInterval(interval);
        }
        
        return newStats;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // Add typing animation for hero text
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Изучай программирование и английский одновременно";
  
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 70);
      return () => clearTimeout(typingTimer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-indigo-600 text-white pt-32 pb-40">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary/40 rounded-full blur-2xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjBINTkuNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgLz48L3N2Zz4K')] bg-[length:40px_40px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative mb-6">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Typing animation for smaller screens */}
                <h1 className="md:hidden text-4xl sm:text-5xl font-bold mb-3 relative z-10">
                  {displayText}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </h1>
                
                {/* Static text with highlighted words for larger screens */}
                <h1 className="hidden md:block text-5xl lg:text-6xl font-bold mb-6 relative z-10 leading-tight">
                  Изучай <span className="relative">
                    <span className="relative z-10 text-secondary">программирование</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-secondary/20 -z-0"></span>
                  </span> и <span className="relative">
                    <span className="relative z-10 text-accent">английский</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-accent/20 -z-0"></span>
                  </span> одновременно
                </h1>
                
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
              </div>
              
              <p className="text-xl mb-8 max-w-lg text-gray-100">
                CodeEnglish объединяет обучение программированию с погружением в английский язык для учеников 7-11 классов.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Link href="/courses" className="group relative px-8 py-4 overflow-hidden rounded-xl bg-white text-primary hover:bg-gray-100 font-semibold text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                  <span className="relative z-10">Наши курсы</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-white to-gray-100 transition-transform duration-300"></div>
                </Link>
                
                <Link href="/signup" className="group relative px-8 py-4 overflow-hidden rounded-xl bg-secondary text-white hover:bg-secondary/90 font-semibold text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Начать обучение
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 translate-y-[102%] group-hover:translate-y-0 bg-gradient-to-b from-secondary to-secondary/80 transition-transform duration-300"></div>
                </Link>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="flex -space-x-3">
                  {[
                    "bg-indigo-400",
                    "bg-primary",
                    "bg-secondary",
                    "bg-accent",
                  ].map((color, i) => (
                    <div key={i} className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {["A", "M", "К", "Д"][i]}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold">
                    +
                  </div>
                </div>
                <div className="ml-2">
                  <div className="text-sm font-medium">Станьте первыми учениками</div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-1 text-white text-sm">Скоро запуск</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-lg relative transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl transform rotate-3 scale-105 opacity-30 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                <div className="bg-white rounded-2xl shadow-2xl p-3 relative z-10 transition-all duration-500">
                  {/* Improved code terminal */}
                  <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
                    {/* Terminal header with tabs */}
                    <div className="flex items-center bg-[#252526] px-4 py-2 border-b border-[#333]">
                      <div className="flex space-x-2 mr-4">
                        <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80 transition-opacity"></span>
                        <span className="w-3 h-3 rounded-full bg-secondary cursor-pointer hover:opacity-80 transition-opacity"></span>
                        <span className="w-3 h-3 rounded-full bg-accent cursor-pointer hover:opacity-80 transition-opacity"></span>
                      </div>
                      <div className="flex items-center bg-[#2d2d2d] rounded px-3 py-1 text-xs text-white">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        python
                        <span className="ml-2 opacity-60">main.py</span>
                      </div>
                      <div className="ml-2 px-3 py-1 text-xs text-gray-400 opacity-60">code_english.py</div>
                    </div>
                    
                    {/* Code editor section */}
                    <div className="flex">
                      {/* Line numbers */}
                      <div className="py-4 pl-2 pr-2 text-right text-[13px] font-mono text-gray-500 bg-[#1e1e1e] select-none border-r border-[#333]">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                          <div key={num} className="h-6">{num}</div>
                        ))}
                      </div>
                      
                      {/* Code content */}
                      <div className="py-4 pl-3 pr-4 overflow-x-auto font-mono text-[14px] text-gray-300">
                        <pre className="text-[14px]">
                          <code>
                            <div className="h-6"><span className="text-[#c586c0]">def</span> <span className="text-[#dcdcaa]">greet_student</span><span className="text-white">(</span><span className="text-[#9cdcfe]">name</span><span className="text-white">):</span></div>
                            <div className="h-6 pl-4"><span className="text-[#6a9955]">"""Welcome message for new students."""</span></div>
                            <div className="h-6 pl-4"><span className="text-[#9cdcfe]">message</span> <span className="text-white">=</span> <span className="text-[#ce9178]">f"Hello, {'{'}name{'}'}! Welcome to CodeEnglish!"</span></div>
                            <div className="h-6 pl-4"><span className="text-[#c586c0]">print</span><span className="text-white">(message)</span></div>
                            <div className="h-6 pl-4"><span className="text-[#c586c0]">return</span> <span className="text-white">message</span></div>
                            <div className="h-6"></div>
                            <div className="h-6"><span className="text-[#dcdcaa]">greet_student</span><span className="text-white">(</span><span className="text-[#ce9178]">"Alex"</span><span className="text-white">)</span></div>
                            <div className="h-6 text-[#6a9955]"># Output: Hello, Alex! Welcome to CodeEnglish!</div>
                            <div className="h-6"><span className="text-white inline-block w-2 h-5 bg-secondary/80 animate-pulse"></span></div>
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    {/* Terminal output section */}
                    <div className="bg-[#1e1e1e] border-t border-[#333]">
                      <div className="flex items-center px-4 py-2 text-xs text-gray-400 bg-[#252526]">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Терминал
                      </div>
                      <div className="p-4 font-mono text-[14px]">
                        <div className="flex items-center text-green-400">
                          <span className="mr-2">➜</span>
                          <span className="text-blue-400">~/projects/codeEnglish</span>
                          <span className="ml-2 text-gray-300">python code_english.py</span>
                        </div>
                        <div className="mt-2 text-white">Hello, Alex! Welcome to CodeEnglish!</div>
                        <div className="mt-1 flex items-center">
                          <span className="mr-2 text-green-400">➜</span>
                          <span className="text-blue-400">~/projects/codeEnglish</span>
                          <span className="ml-1 inline-block w-2 h-5 bg-white/70 animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-xs">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span>Python 3.9.2</span>
                        </div>
                        <span>UTF-8</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span>Ln 7, Col 21</span>
                        <span className="hover:bg-[#1e88e5] px-1 rounded cursor-pointer">Spaces: 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 transform rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 text-gray-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-1/3 h-20 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-20 bg-gradient-to-l from-secondary/5 to-transparent"></div>
          <div className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full border border-primary/10"></div>
          <div className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full border border-secondary/10"></div>
          <svg className="absolute left-10 bottom-10 text-accent/5 w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10.75 16.82A7.462 7.462 0 0115 15c2.53 0 4.85 1.17 6.36 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.12 9.44l.16-.22c.2-.28.4-.56.62-.82.6-.71 1.34-1.31 2.18-1.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 3.8c-.47.16-.92.38-1.33.66-1.36.93-2.25 2.44-2.42 4.2M19.14 7.9l1.11-.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">Наши достижения</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Цифры говорят сами за себя</h2>
            <p className="text-gray-600">Наша платформа постоянно растет, привлекая все больше студентов и расширяя образовательный контент</p>
          </div>
          
          <div className="relative">
            {/* Connected line between stats */}
            <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-160px)] h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-2 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className={`absolute inset-0 ${index % 4 === 0 ? 'bg-primary/10' : index % 4 === 1 ? 'bg-secondary/10' : index % 4 === 2 ? 'bg-accent/10' : 'bg-indigo-500/10'}`}></div>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjBINTkuNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgLz48L3N2Zz4K')] bg-[length:24px_24px]"></div>
                    </div>
                    
                    <div className="flex flex-col items-center p-6">
                      {/* Icon and progress circle */}
                      <div className="relative w-28 h-28 mb-6">
                        {/* Progress circle background */}
                        <svg className="w-full h-full" viewBox="0 0 120 120">
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="54" 
                            fill="none" 
                            stroke={`${index % 4 === 0 ? '#dbeafe' : index % 4 === 1 ? '#dcfce7' : index % 4 === 2 ? '#f3e8ff' : '#e0e7ff'}`} 
                            strokeWidth="6" 
                          />
                          <circle 
                            className="transition-all duration-1000 ease-out"
                            cx="60" 
                            cy="60" 
                            r="54" 
                            fill="none" 
                            stroke={`${index % 4 === 0 ? '#2563eb' : index % 4 === 1 ? '#10b981' : index % 4 === 2 ? '#8b5cf6' : '#4f46e5'}`} 
                            strokeWidth="6" 
                            strokeDasharray="339.3"
                            strokeDashoffset={339.3 - (339.3 * Math.min(animatedStats[index] / stat.value, 1))}
                            transform="rotate(-90 60 60)" 
                          />
                        </svg>
                        
                        {/* Icon in center */}
                        <div className={`absolute inset-0 m-auto w-16 h-16 rounded-full ${index % 4 === 0 ? 'bg-primary/10' : index % 4 === 1 ? 'bg-secondary/10' : index % 4 === 2 ? 'bg-accent/10' : 'bg-indigo-500/10'} flex items-center justify-center transition-transform group-hover:scale-110`}>
                          <svg className={`w-8 h-8 ${index % 4 === 0 ? 'text-primary' : index % 4 === 1 ? 'text-secondary' : index % 4 === 2 ? 'text-accent' : 'text-indigo-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Counter value and label */}
                      <div className="text-center">
                        <div className="relative">
                          <div className={`text-5xl font-bold mb-2 ${index % 4 === 0 ? 'text-primary' : index % 4 === 1 ? 'text-secondary' : index % 4 === 2 ? 'text-accent' : 'text-indigo-500'}`}>
                            {animatedStats[index].toLocaleString()}
                            <span className="text-3xl">{stat.label === 'Курса' ? '' : '+'}</span>
                            
                            {/* Decorative dots */}
                            <div className={`absolute -right-2 -top-2 w-3 h-3 rounded-full ${index % 4 === 0 ? 'bg-primary/30' : index % 4 === 1 ? 'bg-secondary/30' : index % 4 === 2 ? 'bg-accent/30' : 'bg-indigo-500/30'}`}></div>
                            <div className={`absolute -left-1 -bottom-1 w-2 h-2 rounded-full ${index % 4 === 0 ? 'bg-primary/20' : index % 4 === 1 ? 'bg-secondary/20' : index % 4 === 2 ? 'bg-accent/20' : 'bg-indigo-500/20'}`}></div>
                          </div>
                          <div className="text-gray-500 font-medium">{stat.label}</div>
                        </div>
                        
                        {/* Description based on the statistic */}
                        <p className="text-sm text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {index === 0 ? 'Довольных студентов по всему Казахстану' : 
                           index === 1 ? 'Уникальных образовательных программ' : 
                           index === 2 ? 'Планируемых учебных проектов' : 
                           'Готовится часов методического материала'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="absolute -right-64 top-1/4 w-96 h-96 rounded-full bg-primary/5"></div>
          <div className="absolute -left-20 bottom-1/3 w-72 h-72 rounded-full bg-secondary/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">Наши преимущества</span>
            <h2 className="text-4xl font-bold mb-6">Почему выбирают CodeEnglish?</h2>
            <p className="text-xl text-gray-600">Наша методика эффективно сочетает программирование и английский язык, открывая двери в мир современных технологий</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
              <div className="card relative z-10 p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-primary/10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Два навыка в одном</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Развивайте навыки программирования и английского языка одновременно без скучных учебников. Наша методика погружает вас в реальные задачи.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Эффективность обучения +87%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-secondary/20 to-secondary/0 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
              <div className="card relative z-10 p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-secondary/10">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Практика с первого дня</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Создавайте реальные проекты, которые можно добавить в портфолио, с самого начала обучения. Мы верим в обучение через практику и решение реальных задач.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Практические проекты для портфолио</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
              <div className="card relative z-10 p-8 h-full flex flex-col shadow-lg group-hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-accent/10">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Готовность к будущему</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Научитесь работать в международной IT-среде, где английский — основной язык общения. Получите навыки, которые откроют двери в лучшие технологические компании.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Соответствие мировым стандартам</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional features */}
            <div className="relative">
              <div className="card p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Индивидуальный темп</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Проходите материалы в удобном для вас темпе, возвращайтесь к сложным темам и уделяйте больше времени тому, что вам интересно.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="card p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-secondary/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Интерактивные тренажёры</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Закрепляйте материал на практике с помощью интерактивных заданий и тренажёров, которые помогают одновременно осваивать программирование и английский.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="card p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Сертификация</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Получайте сертификаты после завершения курсов, подтверждающие ваши навыки программирования и знание профессионального английского.
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature highlights callout */}
          <div className="mt-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-bold mb-4">Наш подход доказал свою эффективность</h3>
                <p className="text-gray-600">
                  Более 90% наших студентов отмечают значительный прогресс как в программировании, так и в английском языке уже после 2 месяцев обучения.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Интерактивные задания</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Фидбек в реальном времени</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Персональные рекомендации</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <img 
                  src="https://placehold.co/300x200/2563eb/FFFFFF/png?text=CodeEnglish&font=montserrat" 
                  alt="CodeEnglish approach visualization" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
          <div className="absolute -right-28 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-20 bottom-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
          
          {/* Фоновый паттерн */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjBINTkuNXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgLz48L3N2Zz4K')] bg-[length:30px_30px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">Образовательные программы</span>
              <div className="w-10 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-3"></div>
              <span className="text-sm text-gray-500">3 доступных курса</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Наши курсы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите курс, который подойдет именно вам. Каждая программа сочетает изучение программирования с погружением в английский язык.
            </p>
          </div>
          
          {/* Фильтр курсов */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-5 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all font-medium text-sm">
              Все курсы
            </button>
            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all font-medium text-sm">
              Для начинающих
            </button>
            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all font-medium text-sm">
              Продвинутые
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div key={course.id} className="group relative">
                {/* Эффект при наведении */}
                <div className="absolute -inset-2 bg-gradient-to-r 
                  from-primary/20 via-secondary/20 to-accent/20 
                  rounded-3xl blur-lg opacity-0 group-hover:opacity-100 
                  transition-all duration-700 group-hover:duration-500">
                </div>
                
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl hover:z-10">
                  {/* Верхняя часть карточки курса */}
                  <div className={`relative h-52 overflow-hidden ${
                    index % 3 === 0 ? 'bg-gradient-to-br from-primary/5 to-primary/20' : 
                    index % 3 === 1 ? 'bg-gradient-to-br from-accent/5 to-accent/20' : 
                    'bg-gradient-to-br from-secondary/5 to-secondary/20'
                  }`}>
                    {/* Плавающие фигуры в фоне */}
                    <div className="absolute w-36 h-36 rounded-full bg-white/20 -top-10 -left-10"></div>
                    <div className="absolute w-24 h-24 rounded-full bg-white/20 bottom-10 right-10"></div>
                    
                    {/* Метка уровня */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`
                        ${index % 3 === 0 ? 'bg-primary/10 text-primary border-primary/20' : 
                          index % 3 === 1 ? 'bg-accent/10 text-accent border-accent/20' : 
                          'bg-secondary/10 text-secondary border-secondary/20'} 
                        text-xs px-3 py-1.5 rounded-full font-medium border backdrop-blur-sm
                      `}>
                        {course.level}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="flex flex-col items-center">
                        <div className={`
                          ${index % 3 === 0 ? 'bg-primary/10 text-primary' : 
                            index % 3 === 1 ? 'bg-accent/10 text-accent' : 
                            'bg-secondary/10 text-secondary'} 
                          w-20 h-20 rounded-2xl flex items-center justify-center mb-4 
                          transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                        `}>
                          {course.icon}
                        </div>
                        <h3 className={`
                          ${index % 3 === 0 ? 'text-primary' : 
                            index % 3 === 1 ? 'text-accent' : 
                            'text-secondary'} 
                          text-2xl font-bold text-center
                        `}>
                          {course.title.split(':')[0]}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Контент карточки курса */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-6">{course.description}</p>
                      
                      {/* Информация о курсе */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-600">{course.lessons} уроков</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">{index % 3 === 2 ? '10-11 классы' : '7-10 классы'}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                          <span className="text-sm text-gray-600">Английский A1-B1</span>
                        </div>
                      </div>
                      
                      {/* Что вы изучите */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">Что вы изучите:</h4>
                        <ul className="space-y-2">
                          {[1, 2, 3].map((item) => (
                            <li key={item} className="flex items-start">
                              <svg className={`w-5 h-5 ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-accent' : 'text-secondary'} mr-2 flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">
                                {index === 0 ? (
                                  item === 1 ? 'Основы Python и английская терминология' :
                                  item === 2 ? 'Создание простых игр и приложений' :
                                  'Работа с английской документацией'
                                ) : index === 1 ? (
                                  item === 1 ? 'HTML, CSS и веб-лексика' :
                                  item === 2 ? 'Создание персонального сайта' :
                                  'Изучение принципов дизайна'
                                ) : (
                                  item === 1 ? 'Алгоритмы и структуры данных' :
                                  item === 2 ? 'Подготовка к олимпиадам и конкурсам' :
                                  'Решение задач с LeetCode'
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Рейтинг */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-accent' : 'text-secondary'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-2">Отзывы появятся здесь</span>
                      </div>
                      <span className={`text-sm ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-accent' : 'text-secondary'} font-semibold`}>
                        {index === 0 ? 'Популярный' : index === 1 ? 'Начальный' : 'Продвинутый'}
                      </span>
                    </div>
                    
                    {/* Кнопки действий */}
                    <div className="flex flex-col space-y-3">
                      <Link href={`/courses/${course.id}`} className={`
                        ${index % 3 === 0 ? 'bg-primary hover:bg-primary/90' : 
                          index % 3 === 1 ? 'bg-accent hover:bg-accent/90' : 
                          'bg-secondary hover:bg-secondary/90'} 
                        text-white w-full text-center py-3 rounded-xl flex items-center justify-center
                        font-medium transition-all group-hover:shadow-lg
                      `}>
                        <span>Подробнее о курсе</span>
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <Link href="/signup" className={`
                        bg-white text-gray-700 border border-gray-200 w-full text-center py-3 rounded-xl
                        hover:bg-gray-50 transition-all font-medium flex items-center justify-center
                      `}>
                        <span>Записаться на курс</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Подвал секции */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center mb-8 bg-white px-6 py-4 rounded-full shadow-md">
              <div className="flex -space-x-2 mr-4">
                {[
                  "bg-primary text-white",
                  "bg-secondary text-white",
                  "bg-accent text-white",
                ].map((color, i) => (
                  <div key={i} className={`w-8 h-8 ${color} rounded-full border-2 border-white flex items-center justify-center text-xs font-bold`}>
                    {["P", "H", "A"][i]}
                  </div>
                ))}
                <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                  +
                </div>
              </div>
              <div className="text-sm font-medium">Открыт набор студентов</div>
            </div>
            
            <Link href="/courses" className="inline-flex items-center px-8 py-4 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all text-primary font-medium">
              <span>Смотреть все курсы</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M96.4,7.8c-1.3-1.3-3.5-1.3-4.8,0L60.5,45.9c-1.3,1.3-3.5,1.3-4.8,0L45.3,35.5c-1.3-1.3-3.5-1.3-4.8,0L7.8,68.2c-1.3,1.3-1.3,3.5,0,4.8l5.5,5.5c1.3,1.3,3.5,1.3,4.8,0l27.3-27.3c1.3-1.3,3.5-1.3,4.8,0l10.4,10.4c1.3,1.3,3.5,1.3,4.8,0l36.1-36.1c1.3-1.3,1.3-3.5,0-4.8L96.4,7.8z"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать свой путь в программировании на английском?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к CodeEnglish сегодня и подготовьтесь к своему будущему в глобальной технологической индустрии.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/signup" className="btn bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transform transition hover:scale-105">
              Зарегистрироваться
            </Link>
            <Link href="/courses" className="btn bg-secondary text-white border-2 border-secondary/50 hover:bg-secondary/80 font-semibold px-8 py-4 rounded-lg transform transition hover:scale-105">
              Узнать больше о курсах
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 100 100" fill="white">
            <circle cx="50" cy="50" r="40"/>
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 