import { NextPage } from 'next';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const PythonStartCourse: NextPage = () => {
  const [activeModule, setActiveModule] = useState(1);
  const moduleRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const modules = [
    {
      id: 1,
      title: 'Знакомство с Python',
      lessons: [
        { id: '1-1', title: 'Установка Python', description: 'Настройка окружения для разработки на Python (Python Installation and Environment Setup)' },
        { id: '1-2', title: 'Первая программа', description: 'Пишем нашу первую программу "Hello, World!" (Your First Python Program)' },
        { id: '1-3', title: 'Переменные и типы данных', description: 'Основные типы данных и работа с переменными (Variables and Basic Data Types)' },
        { id: '1-4', title: 'Ввод и вывод данных', description: 'Работа с функциями input() и print() (Input and Output)' },
        { id: '1-5', title: 'Комментарии в коде', description: 'Правила документирования кода на Python и English (Code Comments and Documentation)' },
        { id: '1-6', title: 'Мини-проект: Калькулятор', description: 'Создаем простой калькулятор на Python (Practice: Simple Calculator)', isPractice: true }
      ]
    },
    {
      id: 2,
      title: 'Основы программирования',
      lessons: [
        { id: '2-1', title: 'Операторы сравнения', description: 'Сравнение значений и логические операторы (Comparison and Logical Operators)' },
        { id: '2-2', title: 'Условные операторы', description: 'Конструкции if, elif и else для принятия решений (Conditional Statements)' },
        { id: '2-3', title: 'Циклы в Python', description: 'Циклы while и for для повторения действий (Loops)' },
        { id: '2-4', title: 'Управление циклами', description: 'Использование break и continue в циклах (Break and Continue Statements)' },
        { id: '2-5', title: 'Игра "Угадай число"', description: 'Создаем игру с использованием циклов и условий (Practice: Number Guessing Game)', isPractice: true }
      ]
    },
    {
      id: 3,
      title: 'Структуры данных',
      lessons: [
        { id: '3-1', title: 'Списки', description: 'Работа со списками и их методами (Lists and List Methods)' },
        { id: '3-2', title: 'Кортежи', description: 'Иммутабельные последовательности (Tuples)' },
        { id: '3-3', title: 'Словари', description: 'Работа с парами ключ-значение (Dictionaries)' },
        { id: '3-4', title: 'Множества', description: 'Уникальные коллекции элементов (Sets)' },
        { id: '3-5', title: 'Мини-проект: Телефонная книга', description: 'Создание приложения для хранения контактов (Practice: Phone Book)', isPractice: true }
      ]
    },
    {
      id: 4,
      title: 'Функции и модули',
      lessons: [
        { id: '4-1', title: 'Создание функций', description: 'Объявление и вызов функций (Defining and Calling Functions)' },
        { id: '4-2', title: 'Параметры и возвращаемые значения', description: 'Работа с аргументами и результатами функций (Parameters and Return Values)' },
        { id: '4-3', title: 'Область видимости переменных', description: 'Локальные и глобальные переменные (Variable Scope)' },
        { id: '4-4', title: 'Работа с модулями', description: 'Импорт и использование внешних модулей (Working with Modules)' },
        { id: '4-5', title: 'Создание собственных модулей', description: 'Организация кода в модули (Creating Custom Modules)', isPractice: true }
      ]
    },
    {
      id: 5,
      title: 'Работа с файлами',
      lessons: [
        { id: '5-1', title: 'Чтение и запись файлов', description: 'Основные операции с файлами (Reading and Writing Files)' },
        { id: '5-2', title: 'Работа с текстовыми файлами', description: 'Обработка текстовых данных (Working with Text Files)' },
        { id: '5-3', title: 'Работа с CSV данными', description: 'Чтение и запись табличных данных (CSV Data Handling)' },
        { id: '5-4', title: 'Работа с JSON данными', description: 'Работа с данными в формате JSON (JSON Data Processing)' },
        { id: '5-5', title: 'Мини-проект: Дневник', description: 'Создание приложения для ведения дневника (Practice: Diary App)', isPractice: true }
      ]
    },
    {
      id: 6,
      title: 'Введение в ООП',
      lessons: [
        { id: '6-1', title: 'Основы ООП', description: 'Концепции объектно-ориентированного программирования (OOP Concepts)' },
        { id: '6-2', title: 'Классы и объекты', description: 'Создание и использование классов (Classes and Objects)' },
        { id: '6-3', title: 'Атрибуты и методы', description: 'Работа с атрибутами и методами классов (Attributes and Methods)' },
        { id: '6-4', title: 'Наследование', description: 'Концепция наследования в ООП (Inheritance)' },
        { id: '6-5', title: 'Мини-проект: Игра', description: 'Создание простой игры с использованием классов (Practice: Class-based Game)', isPractice: true }
      ]
    },
    {
      id: 7,
      title: 'Работа с API',
      lessons: [
        { id: '7-1', title: 'Введение в API', description: 'Понимание API и их использование (Introduction to APIs)' },
        { id: '7-2', title: 'HTTP-запросы', description: 'Работа с библиотекой requests (HTTP Requests)' },
        { id: '7-3', title: 'Обработка JSON-данных', description: 'Работа с данными в формате JSON из API (JSON Data Processing)' },
        { id: '7-4', title: 'Аутентификация в API', description: 'Методы аутентификации в API (API Authentication)' },
        { id: '7-5', title: 'Мини-проект: Погодное приложение', description: 'Создание приложения погоды с использованием API (Practice: Weather App)', isPractice: true }
      ]
    },
    {
      id: 8,
      title: 'Финальный проект',
      lessons: [
        { id: '8-1', title: 'Планирование проекта', description: 'Определение требований и планирование (Project Planning)' },
        { id: '8-2', title: 'Проектирование', description: 'Проектирование архитектуры приложения (Design Phase)' },
        { id: '8-3', title: 'Разработка MVP', description: 'Создание минимально жизнеспособного продукта (Developing MVP)' },
        { id: '8-4', title: 'Тестирование и отладка', description: 'Методы тестирования и отладки приложения (Testing and Debugging)' },
        { id: '8-5', title: 'Презентация проекта', description: 'Подготовка и проведение презентации финального проекта (Project Presentation)', isPractice: true }
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
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10">
                  <svg className="h-8 w-8 text-[#306998]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255">
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
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">Начальный уровень</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Python Start: Кодим по-английски</h1>
              <p className="text-xl text-white/90 mb-8">
                Изучайте основы Python, одновременно улучшая свой английский. Идеально для 7-10 классов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>8 недель</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>12 уроков</span>
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
                  Наш курс Python Start уникален тем, что объединяет изучение программирования с практикой английского языка. 
                  Каждое занятие построено так, чтобы вы не только осваивали основы Python, но и улучшали свои навыки английского.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Практический подход</h3>
                      <p className="text-gray-600">Каждый урок включает практические задания и мини-проекты, которые помогут закрепить материал</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Английский в контексте</h3>
                      <p className="text-gray-600">Изучайте технический английский на практике, работая с документацией и кодом</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Program */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold">Программа курса</h2>
                    <p className="text-gray-500 mt-2">8 модулей • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} урок • {modules.reduce((acc, m) => acc + m.lessons.filter(l => l.isPractice).length, 0)} практических проектов</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <span className="text-primary font-medium">{modules.length} модулей</span>
                    </div>
                    <div className="px-4 py-2 bg-accent/10 rounded-lg">
                      <span className="text-accent font-medium">{modules.reduce((acc, m) => acc + m.lessons.length, 0)} урок</span>
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
                              ? 'bg-primary text-white shadow-lg shadow-primary/25'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span className="relative z-10">Модуль {module.id}</span>
                          {activeModule === module.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg"></div>
                          )}
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                
                {/* Active Module Content */}
                <div className="space-y-12">
                  {modules.map((module) => (
                    <div 
                      key={module.id} 
                      ref={el => moduleRefs.current[module.id] = el}
                      id={`module-${module.id}`}
                      className={`${activeModule === module.id ? 'block' : 'hidden'}`}
                    >
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mr-4 shadow-lg shadow-primary/20">
                            <span className="text-white font-bold text-2xl">{module.id}</span>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-lg opacity-50"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                          <p className="text-gray-500 mt-1">{module.lessons.length} уроков</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ml-20">
                        {module.lessons.map((lesson) => {
                          const [moduleNum, lessonNum] = lesson.id.split('-');
                          const lessonPath = `/courses/python-start/module${moduleNum}/lesson${lessonNum}`;
                          
                          return (
                            <Link key={lesson.id} href={lessonPath} className="group">
                              <div className="relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
                                {lesson.isPractice && (
                                  <div className="absolute top-0 right-0">
                                    <div className="bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-medium px-3 py-1.5 rounded-bl-lg shadow-lg">
                                      Практика
                                    </div>
                                  </div>
                                )}
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary font-semibold text-sm">{lesson.id}</span>
                                  </div>
                                  <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">{lesson.title}</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{lesson.description}</p>
                                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                  <span>Начать урок</span>
                                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
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
                            ? 'bg-primary scale-125 shadow-lg shadow-primary/25' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        <div className={`absolute -inset-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Базовые навыки Python</h3>
                      <p className="text-gray-600">Освоите основные концепции программирования и научитесь писать чистый код</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Технический английский</h3>
                      <p className="text-gray-600">Улучшите навыки чтения технической документации и общения на английском</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Практические проекты</h3>
                      <p className="text-gray-600">Создадите несколько реальных проектов для своего портфолио</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Поддержка преподавателя</h3>
                      <p className="text-gray-600">Получите помощь и обратную связь от опытного преподавателя</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
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

export default PythonStartCourse; 