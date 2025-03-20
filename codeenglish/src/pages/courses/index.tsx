import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const Courses: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const courses = [
    {
      id: 'python-start',
      title: 'Python Start: Кодим по-английски',
      description: 'Изучайте основы Python, одновременно улучшая свой английский. Идеально для 7-10 классов.',
      image: '/images/python-course.jpg',
      level: 'Начальный',
      lessons: 12,
      duration: '8 недель',
      topics: [
        'Переменные и типы данных в Python с английской терминологией',
        'Условные операторы и циклы с использованием английского синтаксиса',
        'Функции и базовая обработка ошибок',
        'Работа со списками, словарями и другими структурами данных',
        'Создание простых игр и приложений',
        'Чтение английской документации и отладка кода'
      ],
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
      topics: [
        'Структура HTML и семантические теги с английской терминологией',
        'Техники стилизации и верстки с CSS',
        'Принципы адаптивного дизайна и медиа-запросы',
        'Создание персонального сайта-портфолио',
        'Лучшие практики веб-доступности',
        'Контроль версий с Git, используя английские команды'
      ],
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
        </div>
      )
    },
    {
      id: 'algorithms',
      title: 'Алгоритмы',
      description: 'Решайте интересные задачи с LeetCode и Codeforces, готовясь к техническим собеседованиям на английском. Для 10-11 классов.',
      image: '/images/algorithms-course.jpg',
      level: 'Продвинутый',
      lessons: 15,
      duration: '10 недель',
      topics: [
        'Анализ временной и пространственной сложности',
        'Массивы, строки и базовые структуры данных',
        'Алгоритмы поиска и сортировки',
        'Методы динамического программирования',
        'Алгоритмы на графах и обходы деревьев',
        'Подготовка к техническим собеседованиям на английском'
      ],
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
        </div>
      )
    },
    {
      id: 'javascript',
      title: 'JavaScript: Интерактивные веб-приложения',
      description: 'Создавайте динамические веб-приложения и изучайте современный JavaScript. Для учеников 8-11 классов.',
      image: '/images/javascript-course.jpg',
      level: 'Начальный',
      lessons: 14,
      duration: '8 недель',
      topics: [
        'Основы JavaScript и ES6+ с английской терминологией',
        'DOM-манипуляции и обработка событий',
        'Асинхронное программирование и API',
        'Работа с современными фреймворками',
        'Разработка SPA приложений',
        'Debugging на английском языке'
      ],
      icon: (
        <div className="flex items-center justify-center relative">
          <div className="h-14 w-14 bg-[#F7DF1E]/10 rounded-xl flex items-center justify-center">
            <svg className="h-10 w-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F7DF1E" d="M0 0h256v256H0V0z"/>
              <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'java',
      title: 'Java: Объектно-ориентированное программирование',
      description: 'Изучите Java и основы ООП, создавая реальные приложения. Подготовка к профессиональной разработке. Для 9-11 классов.',
      image: '/images/java-course.jpg',
      level: 'Продвинутый',
      lessons: 16,
      duration: '12 недель',
      topics: [
        'Основы Java и JVM с английской терминологией',
        'ООП принципы и паттерны проектирования',
        'Коллекции и многопоточность',
        'Spring Framework основы',
        'Работа с базами данных',
        'Code Review на английском языке'
      ],
      icon: (
        <div className="flex items-center justify-center relative">
          <div className="h-14 w-14 bg-[#007396]/10 rounded-xl flex items-center justify-center">
            <svg className="h-10 w-10" viewBox="0 0 256 346" xmlns="http://www.w3.org/2000/svg">
              <path fill="#007396" d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.798 1.885-114.296-17.532"/>
              <path fill="#007396" d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6"/>
              <path fill="#007396" d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.337 11.914-1.337-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89 25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183 29.981-14.492 54.358-12.848 54.358-12.848M201.506 253.422c64.8-33.672 34.839-66.03 13.927-61.67-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647 0 .001 1.003-.895 1.302-1.697"/>
              <path fill="#007396" d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37"/>
              <path fill="#007396" d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64 0 0-4.348 11.158-51.404 20.018-53.088 9.99-118.564 8.824-157.399 2.421.001 0 7.95 6.58 48.83 9.201"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'data-science',
      title: 'Data Science: Анализ данных на Python',
      description: 'Научитесь анализировать данные, создавать модели машинного обучения и визуализировать результаты. Для 10-11 классов.',
      image: '/images/data-science-course.jpg',
      level: 'Продвинутый',
      lessons: 14,
      duration: '10 недель',
      topics: [
        'Pandas и NumPy для анализа данных',
        'Визуализация с Matplotlib и Seaborn',
        'Основы статистики и машинного обучения',
        'Работа с реальными датасетами',
        'Построение предиктивных моделей',
        'Презентация результатов на английском'
      ],
      icon: (
        <div className="flex items-center justify-center relative">
          <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 12C4 16.4183 7.58172 20 12 20M4 12C4 7.58172 7.58172 4 12 4M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
              <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
            </svg>
          </div>
        </div>
      )
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.level.toLowerCase() === activeFilter.toLowerCase());

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Наши курсы
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Изучайте программирование и одновременно улучшайте свои навыки английского языка.
            Каждый курс включает практические проекты, изучение терминологии и решение реальных задач.
          </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>3 курса</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6-10 недель</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Английский A1-B1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
      </section>

      {/* Course Filters */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200
                ${activeFilter === 'all' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              Все курсы
            </button>
            <button 
              onClick={() => setActiveFilter('начальный')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200
                ${activeFilter === 'начальный' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              Для начинающих
            </button>
            <button 
              onClick={() => setActiveFilter('продвинутый')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200
                ${activeFilter === 'продвинутый' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              Продвинутые
            </button>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className="group relative">
                {/* Hover Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  {/* Course Icon Section */}
                  <div className={`relative h-48 overflow-hidden ${
                    index % 3 === 0 ? 'bg-gradient-to-br from-primary/5 to-primary/20' : 
                    index % 3 === 1 ? 'bg-gradient-to-br from-accent/5 to-accent/20' : 
                    'bg-gradient-to-br from-secondary/5 to-secondary/20'
                  }`}>
                    <div className="absolute w-36 h-36 rounded-full bg-white/20 -top-10 -left-10"></div>
                    <div className="absolute w-24 h-24 rounded-full bg-white/20 bottom-10 right-10"></div>
                    
                    <div className="absolute top-4 right-4">
                      <span className={`
                        ${index % 3 === 0 ? 'bg-primary/10 text-primary border-primary/20' : 
                          index % 3 === 1 ? 'bg-accent/10 text-accent border-accent/20' : 
                          'bg-secondary/10 text-secondary border-secondary/20'} 
                        text-xs px-3 py-1.5 rounded-full font-medium border backdrop-blur-sm
                      `}>
                        {course.level}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {course.icon}
                    </div>
                    </div>
                  </div>
                  
                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    {/* Course Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600">{course.lessons} уроков</span>
                      </div>
                    </div>
                    
                    {/* Topics Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">Ключевые темы:</h4>
                      <ul className="space-y-2">
                        {course.topics.slice(0, 3).map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{topic}</span>
                          </li>
                    ))}
                  </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3">
                      <Link href={`/courses/${course.id}`} className={`
                        ${index % 3 === 0 ? 'bg-primary hover:bg-primary/90' : 
                          index % 3 === 1 ? 'bg-accent hover:bg-accent/90' : 
                          'bg-secondary hover:bg-secondary/90'} 
                        text-white w-full text-center py-3 rounded-xl flex items-center justify-center
                        font-medium transition-all group-hover:shadow-lg
                      `}>
                        <span>Подробнее о курсе</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                      <Link href="/signup" className="bg-white text-gray-700 border border-gray-200 w-full text-center py-3 rounded-xl hover:bg-gray-50 transition-all font-medium">
                        Записаться на курс
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна помощь в выборе курса?
            </h2>
            <p className="text-xl mb-8 text-white/90">
            Наши образовательные консультанты помогут выбрать подходящий курс, основываясь на ваших текущих навыках и целях обучения.
          </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-50 transition-all font-medium group">
              <span>Связаться с консультантом</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses; 