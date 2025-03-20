import { NextPage } from 'next';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const AlgorithmsCourse: NextPage = () => {
  const [activeModule, setActiveModule] = useState(1);
  const moduleRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const modules = [
    {
      id: 1,
      title: 'Модуль 1: Введение в алгоритмы / Module 1: Introduction to Algorithms',
      lessons: [
        {
          id: '1-1',
          title: 'Урок 1: Введение в алгоритмы / Lesson 1: Introduction to Algorithms',
          path: '/courses/algorithms/module1/lesson1',
          description: 'Основные понятия, характеристики алгоритмов, сложность / Basic concepts, algorithm characteristics, complexity'
        },
        { id: '1-2', title: 'Анализ сложности', description: 'Временная и пространственная сложность алгоритмов (Complexity Analysis)' },
        { id: '1-3', title: 'О-нотация', description: 'Big O, Big Theta и Big Omega нотации (Asymptotic Notation)' },
        { id: '1-4', title: 'Рекурсия', description: 'Рекурсивные алгоритмы и их анализ (Recursion)' },
        { id: '1-5', title: 'Мини-проект: Анализ эффективности', description: 'Анализ различных алгоритмов на практике (Practice: Algorithm Efficiency)', isPractice: true }
      ]
    },
    {
      id: 2,
      title: 'Структуры данных',
      lessons: [
        { id: '2-1', title: 'Массивы и списки', description: 'Линейные структуры данных и их операции (Arrays and Lists)' },
        { id: '2-2', title: 'Стеки и очереди', description: 'LIFO и FIFO структуры и их применение (Stacks and Queues)' },
        { id: '2-3', title: 'Связные списки', description: 'Односвязные и двусвязные списки, их реализация (Linked Lists)' },
        { id: '2-4', title: 'Хеш-таблицы', description: 'Хеширование и разрешение коллизий (Hash Tables)' },
        { id: '2-5', title: 'Проект: Реализация структур данных', description: 'Создание собственных структур данных с нуля (Practice: Data Structures Implementation)', isPractice: true }
      ]
    },
    {
      id: 3,
      title: 'Алгоритмы сортировки',
      lessons: [
        { id: '3-1', title: 'Элементарные сортировки', description: 'Пузырьковая, вставками и выбором (Elementary Sorting Algorithms)' },
        { id: '3-2', title: 'Быстрая сортировка', description: 'Quicksort и его оптимизации (Quicksort Algorithm)' },
        { id: '3-3', title: 'Сортировка слиянием', description: 'Mergesort и его реализация (Merge Sort)' },
        { id: '3-4', title: 'Продвинутые сортировки', description: 'Heapsort, Radix sort и другие подходы (Advanced Sorting)' },
        { id: '3-5', title: 'Проект: Визуализатор сортировок', description: 'Создание приложения для визуализации алгоритмов сортировки (Practice: Sorting Visualizer)', isPractice: true }
      ]
    },
    {
      id: 4,
      title: 'Алгоритмы поиска',
      lessons: [
        { id: '4-1', title: 'Линейный и бинарный поиск', description: 'Основные методы поиска и их сравнение (Linear and Binary Search)' },
        { id: '4-2', title: 'Деревья поиска', description: 'Бинарные деревья поиска и их свойства (Search Trees)' },
        { id: '4-3', title: 'Сбалансированные деревья', description: 'AVL и красно-черные деревья (Balanced Trees)' },
        { id: '4-4', title: 'Префиксные деревья', description: 'Trie и их применение в поиске строк (Prefix Trees)' },
        { id: '4-5', title: 'Проект: Поисковый движок', description: 'Реализация простого поискового движка (Practice: Search Engine)', isPractice: true }
      ]
    },
    {
      id: 5,
      title: 'Графовые алгоритмы',
      lessons: [
        { id: '5-1', title: 'Представление графов', description: 'Способы хранения и работы с графами (Graph Representation)' },
        { id: '5-2', title: 'Обход графа', description: 'BFS и DFS алгоритмы (Graph Traversal)' },
        { id: '5-3', title: 'Кратчайшие пути', description: 'Алгоритмы Дейкстры и Беллмана-Форда (Shortest Path Algorithms)' },
        { id: '5-4', title: 'Минимальное остовное дерево', description: 'Алгоритмы Прима и Краскала (Minimum Spanning Tree)' },
        { id: '5-5', title: 'Проект: Навигатор', description: 'Создание приложения для нахождения маршрутов (Practice: Route Navigator)', isPractice: true }
      ]
    },
    {
      id: 6,
      title: 'Динамическое программирование',
      lessons: [
        { id: '6-1', title: 'Основы DP', description: 'Принципы и подходы к динамическому программированию (DP Fundamentals)' },
        { id: '6-2', title: 'Задача о рюкзаке', description: 'Классическая задача и ее вариации (Knapsack Problem)' },
        { id: '6-3', title: 'Задачи на подпоследовательности', description: 'LCS, LIS и другие задачи (Subsequence Problems)' },
        { id: '6-4', title: 'Задачи на пути', description: 'Задачи о путях в графах и матрицах (Path Problems)' },
        { id: '6-5', title: 'Проект: Решатель задач DP', description: 'Создание системы для решения задач с DP (Practice: DP Problem Solver)', isPractice: true }
      ]
    },
    {
      id: 7,
      title: 'Алгоритмы на строках',
      lessons: [
        { id: '7-1', title: 'Поиск подстроки', description: 'Алгоритмы KMP, Рабина-Карпа и Бойера-Мура (String Matching)' },
        { id: '7-2', title: 'Суффиксные деревья и массивы', description: 'Эффективные структуры для работы со строками (Suffix Trees and Arrays)' },
        { id: '7-3', title: 'Расстояние Левенштейна', description: 'Алгоритмы для нахождения редакционного расстояния (Levenshtein Distance)' },
        { id: '7-4', title: 'Сжатие текста', description: 'Алгоритмы Хаффмана и LZ (Text Compression)' },
        { id: '7-5', title: 'Проект: Анализатор текста', description: 'Создание инструмента для анализа и сравнения текстов (Practice: Text Analyzer)', isPractice: true }
      ]
    },
    {
      id: 8,
      title: 'Подготовка к собеседованиям',
      lessons: [
        { id: '8-1', title: 'Типичные задачи на собеседованиях', description: 'Обзор популярных алгоритмических задач (Common Interview Problems)' },
        { id: '8-2', title: 'Техники решения задач', description: 'Подходы и стратегии для алгоритмических задач (Problem-Solving Techniques)' },
        { id: '8-3', title: 'Оптимизация решений', description: 'Как улучшить начальное решение задачи (Solution Optimization)' },
        { id: '8-4', title: 'Коммуникация на интервью', description: 'Как эффективно объяснять свое решение на английском (Interview Communication)' },
        { id: '8-5', title: 'Проект: Симулятор интервью', description: 'Практика решения задач с ограничением по времени (Practice: Interview Simulator)', isPractice: true }
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
        <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">Продвинутый уровень</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Алгоритмы: Путь к эффективному коду</h1>
              <p className="text-xl text-white/90 mb-8">
                Решайте интересные задачи с LeetCode и Codeforces, готовясь к техническим собеседованиям на английском. Для 10-11 классов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10 недель</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>15 уроков</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Английский B1-B2</span>
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
                  Этот курс по алгоритмам сочетает глубокое изучение классических и современных алгоритмов с практикой решения задач
                  на английском языке. Вы научитесь не только эффективно решать алгоритмические задачи, но и сможете 
                  объяснять свои решения, используя профессиональную англоязычную терминологию.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Решение реальных задач</h3>
                      <p className="text-gray-600">Еженедельно решаем задачи с LeetCode и Codeforces, используемые на настоящих собеседованиях</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Английский на практике</h3>
                      <p className="text-gray-600">Практикуйте технический английский, описывая алгоритмы и объясняя свои решения</p>
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
                    <div className="px-4 py-2 bg-secondary/10 rounded-lg">
                      <span className="text-secondary font-medium">{modules.length} модулей</span>
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
                              ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span className="relative z-10">Модуль {module.id}</span>
                          {activeModule === module.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg"></div>
                          )}
                          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mr-4 shadow-lg shadow-secondary/20">
                            <span className="text-white font-bold text-2xl">{module.id}</span>
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl blur-lg opacity-50"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                          <p className="text-gray-500 mt-1">{module.lessons.length} уроков</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ml-20">
                        {module.lessons.map((lesson) => (
                          <Link key={lesson.id} href={lesson.path || `/courses/algorithms/module${module.id}/lesson${lesson.id.split('-')[1]}`} className="group">
                            <div className="relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 overflow-hidden">
                              {lesson.isPractice && (
                                <div className="absolute top-0 right-0">
                                  <div className="bg-gradient-to-r from-blue-500 to-blue-500/80 text-white text-xs font-medium px-3 py-1.5 rounded-bl-lg shadow-lg">
                                    Практика
                                  </div>
                                </div>
                              )}
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                                  <span className="text-secondary font-semibold text-sm">{lesson.id}</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors">{lesson.title}</h4>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{lesson.description}</p>
                              <div className="mt-4 flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Начать урок</span>
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            ? 'bg-secondary scale-125 shadow-lg shadow-secondary/25' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        <div className={`absolute -inset-2 rounded-full bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Алгоритмическое мышление</h3>
                      <p className="text-gray-600">Развитие системного подхода к решению сложных задач и оптимизации решений</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Технический английский</h3>
                      <p className="text-gray-600">Навыки обсуждения алгоритмов и структур данных на английском языке</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Портфолио решений</h3>
                      <p className="text-gray-600">Коллекция решенных задач для демонстрации навыков на собеседованиях</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Подготовка к собеседованиям</h3>
                      <p className="text-gray-600">Практические навыки прохождения технических интервью в IT-компаниях</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-colors"
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

export default AlgorithmsCourse; 