import { NextPage } from 'next';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  path: string;
  isPractice?: boolean;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

const HTMLCSSCourse: NextPage = () => {
  const [activeModule, setActiveModule] = useState(1);
  const moduleRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const modules: Module[] = [
    {
      id: 1,
      title: 'Введение в HTML',
      lessons: [
        { id: '1-1', title: 'Что такое HTML', description: 'Знакомство с языком разметки и его ролью в веб-разработке (Introduction to HTML Markup)', path: '/courses/html-css/module1/lesson1' },
        { id: '1-2', title: 'Структура HTML-документа', description: 'Основные теги и структура веб-страницы (HTML Document Structure)', path: '/courses/html-css/module1/lesson2' },
        { id: '1-3', title: 'Заголовки и параграфы', description: 'Работа с текстовыми элементами и форматирование (Headings and Paragraphs)', path: '/courses/html-css/module1/lesson3' },
        { id: '1-4', title: 'Списки и ссылки', description: 'Создание списков и гиперссылок (Lists and Hyperlinks)', path: '/courses/html-css/module1/lesson4' },
        { id: '1-5', title: 'Мини-проект: Визитка', description: 'Создаем простую HTML-страницу с личной информацией (Practice: Personal Card)', isPractice: true, path: '/courses/html-css/module1/lesson5' }
      ]
    },
    {
      id: 2,
      title: 'Основы CSS',
      lessons: [
        { id: '2-1', title: 'Введение в CSS', description: 'Основы каскадных таблиц стилей и их применение (Introduction to CSS)', path: '/courses/html-css/module2/lesson1' },
        { id: '2-2', title: 'Селекторы CSS', description: 'Изучение различных типов селекторов для стилизации (CSS Selectors)', path: '/courses/html-css/module2/lesson2' },
        { id: '2-3', title: 'Цвета и фоны', description: 'Работа с цветами, градиентами и фоновыми изображениями (Colors and Backgrounds)', path: '/courses/html-css/module2/lesson3' },
        { id: '2-4', title: 'Модель блока', description: 'Box-модель, отступы, границы и размеры элементов (Box Model)', path: '/courses/html-css/module2/lesson4' },
        { id: '2-5', title: 'Мини-проект: Стилизация визитки', description: 'Применяем CSS к нашей HTML-визитке (Practice: Styling Personal Card)', isPractice: true, path: '/courses/html-css/module2/lesson5' }
      ]
    },
    {
      id: 3,
      title: 'HTML5 и семантика',
      lessons: [
        { id: '3-1', title: 'Семантические теги HTML5', description: 'Новые элементы HTML5 и их смысловое значение (HTML5 Semantic Tags)', path: '/courses/html-css/module3/lesson1' },
        { id: '3-2', title: 'Формы и элементы ввода', description: 'Создание форм и работа с пользовательским вводом (Forms and Input Elements)', path: '/courses/html-css/module3/lesson2' },
        { id: '3-3', title: 'Мультимедиа в HTML5', description: 'Работа с аудио, видео и другими медиа-элементами (HTML5 Multimedia)', path: '/courses/html-css/module3/lesson3' },
        { id: '3-4', title: 'Таблицы', description: 'Создание и стилизация таблиц (Tables in HTML)', path: '/courses/html-css/module3/lesson4' },
        { id: '3-5', title: 'Мини-проект: Форма обратной связи', description: 'Создаем форму с различными элементами ввода (Practice: Feedback Form)', isPractice: true, path: '/courses/html-css/module3/lesson5' }
      ]
    },
    {
      id: 4,
      title: 'Продвинутый CSS',
      lessons: [
        { id: '4-1', title: 'Flexbox', description: 'Гибкая модель расположения элементов (Flexbox Layout)', path: '/courses/html-css/module4/lesson1' },
        { id: '4-2', title: 'CSS Grid', description: 'Сеточная система для создания сложных макетов (CSS Grid Layout)', path: '/courses/html-css/module4/lesson2' },
        { id: '4-3', title: 'Трансформации и переходы', description: 'Анимация и визуальные эффекты в CSS (Transformations and Transitions)', path: '/courses/html-css/module4/lesson3' },
        { id: '4-4', title: 'Адаптивный дизайн', description: 'Создание сайтов, адаптирующихся к разным устройствам (Responsive Design)', path: '/courses/html-css/module4/lesson4' },
        { id: '4-5', title: 'Мини-проект: Адаптивная карточка', description: 'Создаем адаптивную карточку товара с анимацией (Practice: Responsive Card)', isPractice: true, path: '/courses/html-css/module4/lesson5' }
      ]
    },
    {
      id: 5,
      title: 'CSS-методологии и препроцессоры',
      lessons: [
        { id: '5-1', title: 'BEM-методология', description: 'Блок-Элемент-Модификатор подход к именованию классов (BEM Methodology)', path: '/courses/html-css/module5/lesson1' },
        { id: '5-2', title: 'Введение в SASS/SCSS', description: 'Основы препроцессора SASS и его возможности (Introduction to SASS/SCSS)', path: '/courses/html-css/module5/lesson2' },
        { id: '5-3', title: 'Переменные и миксины', description: 'Использование переменных и создание переиспользуемых блоков (Variables and Mixins)', path: '/courses/html-css/module5/lesson3' },
        { id: '5-4', title: 'Организация CSS-кода', description: 'Структурирование и оптимизация стилей (CSS Code Organization)', path: '/courses/html-css/module5/lesson4' },
        { id: '5-5', title: 'Мини-проект: Компонентная библиотека', description: 'Создаем небольшую библиотеку компонентов с SCSS (Practice: Component Library)', isPractice: true, path: '/courses/html-css/module5/lesson5' }
      ]
    },
    {
      id: 6,
      title: 'Работа с макетами',
      lessons: [
        { id: '6-1', title: 'Figma для разработчиков', description: 'Основы работы с Figma при верстке (Figma for Developers)', path: '/courses/html-css/module6/lesson1' },
        { id: '6-2', title: 'Верстка по макету', description: 'Перенос дизайна из Figma в HTML/CSS (Design to Code)', path: '/courses/html-css/module6/lesson2' },
        { id: '6-3', title: 'Работа с изображениями', description: 'Оптимизация и отзывчивые изображения (Working with Images)', path: '/courses/html-css/module6/lesson3' },
        { id: '6-4', title: 'Типографика в вебе', description: 'Подключение шрифтов и настройка текста (Web Typography)', path: '/courses/html-css/module6/lesson4' },
        { id: '6-5', title: 'Мини-проект: Верстка лендинга', description: 'Создаем одностраничный сайт по макету (Practice: Landing Page)', isPractice: true, path: '/courses/html-css/module6/lesson5' }
      ]
    },
    {
      id: 7,
      title: 'Современные CSS-технологии',
      lessons: [
        { id: '7-1', title: 'CSS-переменные', description: 'Использование нативных CSS-переменных (CSS Custom Properties)', path: '/courses/html-css/module7/lesson1' },
        { id: '7-2', title: 'CSS Filters и Blend Modes', description: 'Применение фильтров и режимов наложения (Filters and Blend Modes)', path: '/courses/html-css/module7/lesson2' },
        { id: '7-3', title: 'CSS Animations', description: 'Создание сложных анимаций (CSS Animations)', path: '/courses/html-css/module7/lesson3' },
        { id: '7-4', title: 'Поддержка браузеров', description: 'Кроссбраузерная верстка и вендорные префиксы (Browser Support)', path: '/courses/html-css/module7/lesson4' },
        { id: '7-5', title: 'Мини-проект: Анимированный баннер', description: 'Создаем интерактивный баннер с анимацией (Practice: Animated Banner)', isPractice: true, path: '/courses/html-css/module7/lesson5' }
      ]
    },
    {
      id: 8,
      title: 'Финальный проект',
      lessons: [
        { id: '8-1', title: 'Планирование проекта', description: 'Определение структуры и компонентов сайта (Project Planning)', path: '/courses/html-css/module8/lesson1' },
        { id: '8-2', title: 'Верстка базового макета', description: 'Создание основной структуры сайта (Base Layout)', path: '/courses/html-css/module8/lesson2' },
        { id: '8-3', title: 'Разработка компонентов', description: 'Создание отдельных блоков и элементов (Component Development)', path: '/courses/html-css/module8/lesson3' },
        { id: '8-4', title: 'Адаптивность и тестирование', description: 'Проверка на разных устройствах и исправление ошибок (Testing and Responsiveness)', path: '/courses/html-css/module8/lesson4' },
        { id: '8-5', title: 'Финализация проекта', description: 'Завершение и презентация личного сайта-портфолио (Project Finalization)', isPractice: true, path: '/courses/html-css/module8/lesson5' }
      ]
    }
  ];

  // Scroll to the active module when it changes
  useEffect(() => {
    if (moduleRefs.current[activeModule]) {
      moduleRefs.current[activeModule]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }, [activeModule]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent to-blue-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"></div>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10">
                    <svg className="h-8 w-8 text-[#E44D26]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#E44D26" d="M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z"/>
                      <path fill="#F16529" d="M256 480.523l120.03-33.277 28.24-316.352H256z"/>
                      <path fill="#EBEBEB" d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.208-.058z"/>
                      <path fill="#fff" d="M255.857 268.217v45.41h55.908l-5.271 58.894-50.637 13.67v47.244l93.096-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.857 176.305v45.411h109.688l.911-10.207 2.069-23.021 1.086-12.183z"/>
                    </svg>
                  </div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10">
                    <svg className="h-8 w-8 text-[#264DE4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#264DE4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
                      <path fill="#2965F1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
                      <path fill="#EBEBEB" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
                      <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h115.765l-3.623 40.54z"/>
                    </svg>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">Начальный уровень</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">HTML + CSS: Твой первый сайт</h1>
              <p className="text-xl text-white/90 mb-8">
                Создавайте сайты с нуля, изучая веб-разработку с английской терминологией. Идеально для 7-10 классов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6 недель</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>10 уроков</span>
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

        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Course Description */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">О курсе</h2>
                <p className="text-gray-600 mb-6">
                  Наш курс HTML + CSS уникален тем, что объединяет изучение веб-разработки с практикой английского языка. 
                  Вы научитесь создавать современные, красивые и адаптивные сайты, одновременно осваивая английскую терминологию и документацию.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Визуальный результат</h3>
                      <p className="text-gray-600">Каждый урок завершается видимым результатом, который можно сразу увидеть в браузере</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Английский в контексте</h3>
                      <p className="text-gray-600">Изучайте технический английский на практике, работая с реальной документацией и инструментами</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Program */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold">Программа курса</h2>
                    <p className="text-gray-500 mt-2">{modules.length} модулей • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} уроков • {modules.reduce((acc, m) => acc + m.lessons.filter(l => l.isPractice).length, 0)} практических проектов</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 bg-accent/10 rounded-lg">
                      <span className="text-accent font-medium">{modules.length} модулей</span>
                    </div>
                    <div className="px-4 py-2 bg-blue-500/10 rounded-lg">
                      <span className="text-blue-500 font-medium">{modules.reduce((acc, m) => acc + m.lessons.length, 0)} уроков</span>
                    </div>
                  </div>
                </div>
                
                {/* Module Navigation */}
                <div className="sticky top-0 bg-white z-10 py-4 -mt-4 rounded-t-2xl border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {modules.map((module) => (
                        <button
                          key={module.id}
                          onClick={() => setActiveModule(module.id)}
                          className={`group relative px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeModule === module.id
                              ? 'bg-accent text-white shadow-lg shadow-accent/25'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span className="relative z-10">Модуль {module.id}</span>
                          {activeModule === module.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 rounded-lg"></div>
                          )}
                          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveModule(Math.max(1, activeModule - 1))}
                        disabled={activeModule === 1}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          activeModule === 1
                            ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setActiveModule(Math.min(modules.length, activeModule + 1))}
                        disabled={activeModule === modules.length}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          activeModule === modules.length
                            ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Lessons List */}
                <div className="mt-8">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      ref={(el) => (moduleRefs.current[module.id] = el)}
                      className={`mb-12 ${activeModule === module.id ? 'block' : 'hidden'}`}
                    >
                      <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                      <div className="space-y-4">
                        {module.lessons.map((lesson) => (
                          <Link
                            key={lesson.id}
                            href={lesson.path}
                            className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                {lesson.isPractice && (
                                  <span className="px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                                    Практика
                                  </span>
                                )}
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Module Progress Indicator */}
                <div className="flex flex-col items-center mt-12 border-t border-dashed border-gray-200 pt-8">
                  <div className="flex space-x-3 mb-4">
                    {modules.map((module) => (
                      <button 
                        key={module.id} 
                        onClick={() => setActiveModule(module.id)}
                        className={`group relative w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                          activeModule === module.id 
                            ? 'bg-accent scale-125 shadow-lg shadow-accent/25' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        <div className={`absolute -inset-2 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span className="font-medium">Модуль {activeModule}</span>
                    <span>•</span>
                    <span>Всего {modules.length}</span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">Что вы получите</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Навыки веб-разработки</h3>
                      <p className="text-gray-600">Умение создавать современные, адаптивные и семантически правильные веб-сайты</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Технический английский</h3>
                      <p className="text-gray-600">Понимание и использование английской терминологии в сфере веб-разработки</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Портфолио проектов</h3>
                      <p className="text-gray-600">Набор готовых проектов различной сложности для демонстрации ваших навыков</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Поддержка преподавателя</h3>
                      <p className="text-gray-600">Профессиональное сопровождение и обратная связь на каждом этапе обучения</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors"
                >
                  <span>Записаться на курс</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HTMLCSSCourse; 