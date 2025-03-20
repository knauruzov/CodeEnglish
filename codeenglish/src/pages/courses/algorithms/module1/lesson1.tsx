import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';

// Компонент для интерактивных заданий
interface InteractiveTaskProps {
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const InteractiveTask: React.FC<InteractiveTaskProps> = ({
  question,
  options,
  correctAnswer,
  explanation,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);

  const handleOptionClick = (id: string) => {
    setSelectedAnswer(id);
    setShowExplanation(true);
    setShowResetButton(true);
  };

  const resetTask = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResetButton(false);
  };

  return (
    <div className="my-6 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-4">{question}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={`w-full text-left p-3 rounded-md ${
              selectedAnswer === option.id
                ? selectedAnswer === correctAnswer
                  ? 'bg-green-100 border-green-500 border'
                  : 'bg-red-100 border-red-500 border'
                : 'bg-white border border-gray-300'
            }`}
            disabled={selectedAnswer !== null}
          >
            {option.text}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-4">
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-blue-800">{explanation}</p>
          </div>
          {showResetButton && (
            <button
              onClick={resetTask}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Попробовать снова / Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const AlgorithmsLesson1: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-gray-500">
              <Link href="/courses">
                <span className="hover:text-primary cursor-pointer">Курсы</span>
              </Link>
              <span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <Link href="/courses/algorithms">
                <span className="hover:text-primary cursor-pointer">Алгоритмы</span>
              </Link>
              <span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Урок 1: Введение в алгоритмы</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 1: Введение в алгоритмы</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/algorithms/module1/lesson2">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors">
                    <span>Следующий урок</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h1>Введение в алгоритмы (Introduction to Algorithms)</h1>
                
                <div className="flex flex-col md:flex-row gap-4 my-6 border-l-4 border-accent p-4 bg-accent/5">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-accent font-medium mb-2">Словарь урока / Vocabulary</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li><span className="font-medium">Алгоритм / Algorithm</span> — последовательность действий для решения задачи / a sequence of steps to solve a problem</li>
                      <li><span className="font-medium">Сложность / Complexity</span> — мера эффективности алгоритма / a measure of algorithm efficiency</li>
                      <li><span className="font-medium">Эффективность / Efficiency</span> — насколько хорошо алгоритм использует ресурсы / how well an algorithm uses resources</li>
                      <li><span className="font-medium">Псевдокод / Pseudocode</span> — неформальная запись алгоритма / an informal description of an algorithm</li>
                    </ul>
                  </div>
                </div>

                <h2>Что такое алгоритм? / What is an Algorithm?</h2>
                <p>
                  Алгоритм — это последовательность чётко определённых шагов, которые необходимо выполнить для решения определённой задачи. Алгоритмы используются повсеместно: от простых повседневных задач до сложных компьютерных программ.
                </p>
                <p>
                  An algorithm is a sequence of well-defined steps that need to be performed to solve a specific problem. Algorithms are used everywhere: from simple everyday tasks to complex computer programs.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Интересный факт / Fun fact</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <p>
                          Слово "алгоритм" происходит от имени персидского математика аль-Хорезми (IX век), который написал книгу о методах вычислений. В латинском переводе его имя звучало как "Algorithmi".
                        </p>
                        <p className="mt-2">
                          <em>The word "algorithm" comes from the name of the Persian mathematician al-Khwarizmi (9th century), who wrote a book on calculation methods. In the Latin translation, his name sounded like "Algorithmi".</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Хороший алгоритм должен обладать следующими характеристиками:
                </p>
                <p>
                  A good algorithm should have the following characteristics:
                </p>

                <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Определённость / Definiteness:</span> Каждый шаг должен быть точно определён / Each step must be precisely defined
                  </li>
                  <li>
                    <span className="font-medium">Конечность / Finiteness:</span> Алгоритм должен завершаться за конечное число шагов / The algorithm must terminate after a finite number of steps
                  </li>
                  <li>
                    <span className="font-medium">Ввод / Input:</span> Алгоритм может иметь ноль или более входных данных / An algorithm can have zero or more inputs
                  </li>
                  <li>
                    <span className="font-medium">Вывод / Output:</span> Алгоритм должен производить как минимум один результат / An algorithm must produce at least one result
                  </li>
                  <li>
                    <span className="font-medium">Эффективность / Efficiency:</span> Алгоритм должен выполняться за разумное время / The algorithm should run in a reasonable amount of time
                  </li>
                </ul>

                <h2>Примеры алгоритмов / Examples of Algorithms</h2>
                <p>
                  Алгоритмы встречаются во многих областях нашей жизни. Вот некоторые примеры:
                </p>
                <p>
                  Algorithms are found in many areas of our lives. Here are some examples:
                </p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">1. Рецепт приготовления блюда / Cooking recipe</h4>
                  <p className="mb-4">
                    Рецепт — это алгоритм приготовления еды, состоящий из серии шагов, ингредиентов (ввод) и готового блюда (вывод).
                  </p>
                  <p>
                    A recipe is an algorithm for cooking food, consisting of a series of steps, ingredients (input), and a finished dish (output).
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">2. Сортировка чисел / Sorting numbers</h4>
                  <p className="mb-4">
                    Алгоритм сортировки упорядочивает числа от меньшего к большему или наоборот.
                  </p>
                  <p>
                    A sorting algorithm arranges numbers from smallest to largest or vice versa.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">3. Поиск кратчайшего пути / Finding the shortest path</h4>
                  <p className="mb-4">
                    Навигационные приложения используют алгоритмы для поиска оптимального маршрута между двумя точками.
                  </p>
                  <p>
                    Navigation applications use algorithms to find the optimal route between two points.
                  </p>
                </div>

                <h2>Псевдокод / Pseudocode</h2>
                <p>
                  Псевдокод — это способ описания алгоритма, который легко понять человеку. Он не привязан к конкретному языку программирования, но содержит основные конструкции, которые можно перевести в код.
                </p>
                <p>
                  Pseudocode is a way of describing an algorithm that is easy for humans to understand. It is not tied to a specific programming language but contains basic constructs that can be translated into code.
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono overflow-x-auto">
                  <div className="flex space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre>
{`АЛГОРИТМ ПоискМаксимума(список)
    максимум = первый элемент списка
    ДЛЯ КАЖДОГО элемента В списке ДЕЛАТЬ
        ЕСЛИ элемент > максимум ТОГДА
            максимум = элемент
        КОНЕЦ ЕСЛИ
    КОНЕЦ ЦИКЛА
    ВЕРНУТЬ максимум

ALGORITHM FindMaximum(list)
    maximum = first element of list
    FOR EACH element IN list DO
        IF element > maximum THEN
            maximum = element
        END IF
    END LOOP
    RETURN maximum`}
                  </pre>
                </div>

                <h2>Сложность алгоритмов / Algorithm Complexity</h2>
                <p>
                  Сложность алгоритма — это мера эффективности алгоритма. Она показывает, как быстро растёт время выполнения алгоритма с ростом объёма входных данных.
                </p>
                <p>
                  Algorithm complexity is a measure of algorithm efficiency. It shows how quickly the execution time of the algorithm grows as the size of the input data increases.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Важно / Important</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <p>
                          В компьютерных науках для обозначения сложности алгоритмов используют O-нотацию (Big O notation). Например, O(n) означает, что время выполнения линейно зависит от размера входных данных.
                        </p>
                        <p className="mt-2">
                          <em>In computer science, Big O notation is used to denote algorithm complexity. For example, O(n) means that the execution time is linearly dependent on the input size.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Основные классы сложности (от лучшего к худшему):
                </p>
                <p>
                  Main complexity classes (from best to worst):
                </p>

                <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">O(1) — Константная / Constant:</span> Время выполнения не зависит от размера входных данных / Execution time does not depend on input size
                  </li>
                  <li>
                    <span className="font-medium">O(log n) — Логарифмическая / Logarithmic:</span> Время растёт логарифмически / Time grows logarithmically
                  </li>
                  <li>
                    <span className="font-medium">O(n) — Линейная / Linear:</span> Время растёт пропорционально размеру входных данных / Time grows proportionally to input size
                  </li>
                  <li>
                    <span className="font-medium">O(n log n) — Линеарифмическая / Linearithmic:</span> Время растёт чуть быстрее, чем линейно / Time grows slightly faster than linearly
                  </li>
                  <li>
                    <span className="font-medium">O(n²) — Квадратичная / Quadratic:</span> Время растёт пропорционально квадрату размера входных данных / Time grows proportionally to the square of input size
                  </li>
                  <li>
                    <span className="font-medium">O(2ⁿ) — Экспоненциальная / Exponential:</span> Время растёт экспоненциально / Time grows exponentially
                  </li>
                </ul>

                <h2>Проверьте ваши знания / Check your knowledge</h2>
                
                <InteractiveTask
                  question="Что такое алгоритм? / What is an algorithm?"
                  options={[
                    { id: "a", text: "Программа на языке Python / A program in Python" },
                    { id: "b", text: "Последовательность шагов для решения задачи / A sequence of steps to solve a problem" },
                    { id: "c", text: "Математическая формула / A mathematical formula" },
                    { id: "d", text: "Только компьютерный код / Only computer code" },
                  ]}
                  correctAnswer="b"
                  explanation="Алгоритм — это последовательность чётко определённых шагов для решения задачи. Он может быть реализован на любом языке программирования или даже описан на естественном языке. / An algorithm is a sequence of well-defined steps to solve a problem. It can be implemented in any programming language or even described in natural language."
                />
                
                <InteractiveTask
                  question="Какая из следующих характеристик НЕ является обязательной для алгоритма? / Which of the following characteristics is NOT mandatory for an algorithm?"
                  options={[
                    { id: "a", text: "Определённость (каждый шаг точно определён) / Definiteness (each step is precisely defined)" },
                    { id: "b", text: "Конечность (завершается за конечное число шагов) / Finiteness (terminates after a finite number of steps)" },
                    { id: "c", text: "Оптимальность (всегда находит лучшее решение) / Optimality (always finds the best solution)" },
                    { id: "d", text: "Ввод и вывод / Input and output" },
                  ]}
                  correctAnswer="c"
                  explanation="Оптимальность не является обязательной характеристикой алгоритма. Алгоритм может быть корректным, но не оптимальным. Важно, чтобы он был определённым, конечным и имел ввод/вывод. / Optimality is not a mandatory characteristic of an algorithm. An algorithm can be correct but not optimal. It is important that it is definite, finite, and has input/output."
                />
                
                <InteractiveTask
                  question="Какая нотация используется для обозначения сложности алгоритмов? / Which notation is used to denote algorithm complexity?"
                  options={[
                    { id: "a", text: "A-нотация / A-notation" },
                    { id: "b", text: "B-нотация / B-notation" },
                    { id: "c", text: "O-нотация (Big O) / O-notation (Big O)" },
                    { id: "d", text: "Z-нотация / Z-notation" },
                  ]}
                  correctAnswer="c"
                  explanation="O-нотация (Big O notation) используется для обозначения верхней границы сложности алгоритма. Она показывает, как быстро растёт время выполнения с ростом объёма входных данных. / O-notation (Big O notation) is used to denote the upper bound of algorithm complexity. It shows how quickly the execution time grows as the input size increases."
                />

                <h2>Заключение / Conclusion</h2>
                <p>
                  В этом уроке мы познакомились с основными понятиями алгоритмов. Мы узнали, что такое алгоритм, какими характеристиками он должен обладать, и как измеряется сложность алгоритмов. В следующих уроках мы рассмотрим конкретные алгоритмы и научимся их анализировать.
                </p>
                <p>
                  In this lesson, we have introduced the basic concepts of algorithms. We have learned what an algorithm is, what characteristics it should have, and how algorithm complexity is measured. In the following lessons, we will look at specific algorithms and learn how to analyze them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlgorithmsLesson1; 