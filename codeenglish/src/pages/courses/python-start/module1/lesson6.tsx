import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson6: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/courses">
                <span className="hover:text-primary cursor-pointer">Курсы</span>
              </Link>
              <span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <Link href="/courses/python-start">
                <span className="hover:text-primary cursor-pointer">Python Start</span>
              </Link>
              <span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Урок 6: Мини-проект "Калькулятор"</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 6: Мини-проект "Калькулятор"</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson5">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Предыдущий урок</span>
                  </button>
                </Link>
                <Link href="/courses/python-start/module2/lesson1">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors">
                    <span>Следующий модуль</span>
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
                <h1>Мини-проект: Калькулятор (Mini-Project: Calculator)</h1>
                
                <div className="flex flex-col md:flex-row gap-4 my-6 border-l-4 border-accent p-4 bg-accent/5">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-accent font-medium mb-2">Словарь проекта (Project Vocabulary)</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li><span className="font-medium">calculator</span> — калькулятор</li>
                      <li><span className="font-medium">operation</span> — операция</li>
                      <li><span className="font-medium">result</span> — результат</li>
                      <li><span className="font-medium">error</span> — ошибка</li>
                      <li><span className="font-medium">input</span> — ввод</li>
                      <li><span className="font-medium">output</span> — вывод</li>
                      <li><span className="font-medium">validate</span> — проверять</li>
                      <li><span className="font-medium">handle</span> — обрабатывать</li>
                    </ul>
                  </div>
                </div>

                <h2>Описание проекта (Project Description)</h2>
                <p>
                  В этом проекте мы создадим простой калькулятор, который сможет выполнять основные математические операции. 
                  Программа будет запрашивать у пользователя два числа и операцию, которую нужно выполнить.
                </p>
                <p>
                  <em>In this project, we will create a simple calculator that can perform basic mathematical operations. 
                  The program will ask the user for two numbers and the operation to perform.</em>
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Цели проекта (Project Goals)</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <ul className="list-disc pl-5">
                          <li>Практика работы с вводом и выводом данных</li>
                          <li>Использование условных операторов</li>
                          <li>Обработка ошибок</li>
                          <li>Форматирование вывода</li>
                        </ul>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Practice working with input and output</li>
                          <li>Using conditional statements</li>
                          <li>Error handling</li>
                          <li>Output formatting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Требования к проекту (Project Requirements)</h2>
                <p>
                  Калькулятор должен уметь:
                </p>
                <p>
                  <em>The calculator should be able to:</em>
                </p>
                <ul>
                  <li>Запрашивать у пользователя два числа</li>
                  <li>Запрашивать операцию (+, -, *, /)</li>
                  <li>Выполнять выбранную операцию</li>
                  <li>Выводить результат в красивом формате</li>
                  <li>Обрабатывать ошибки (деление на ноль, некорректный ввод)</li>
                </ul>
                <ul className="mt-2">
                  <li>Ask the user for two numbers</li>
                  <li>Ask for the operation (+, -, *, /)</li>
                  <li>Perform the selected operation</li>
                  <li>Display the result in a nice format</li>
                  <li>Handle errors (division by zero, invalid input)</li>
                </ul>

                <h2>Рекомендации по разработке (Development Guidelines)</h2>
                <p>
                  Для успешного создания проекта следуйте этим шагам:
                </p>
                <p>
                  <em>Follow these steps for successful project development:</em>
                </p>
                
                <ol>
                  <li>
                    <strong>Сбор данных (Data Collection):</strong>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Используйте <code>input()</code> для получения чисел от пользователя</li>
                      <li>Не забудьте преобразовать строки в числа с помощью <code>float()</code></li>
                      <li>Запросите у пользователя операцию (+, -, *, /)</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    <strong>Обработка данных (Data Processing):</strong>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Используйте условные операторы <code>if-elif-else</code> для выбора операции</li>
                      <li>Проверьте деление на ноль при операции деления</li>
                      <li>Обработайте случай некорректной операции</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    <strong>Обработка ошибок (Error Handling):</strong>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Оберните код в блок <code>try-except</code> для обработки ошибок</li>
                      <li>Обрабатывайте <code>ValueError</code> для некорректного ввода чисел</li>
                      <li>Предоставьте понятные сообщения об ошибках</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    <strong>Вывод результата (Result Output):</strong>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Используйте f-строки для форматирования вывода</li>
                      <li>Добавьте заголовок для результата, например <code>"=== Результат ==="</code></li>
                      <li>Выведите выражение и его результат</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Важные подсказки (Important Tips)</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <ul className="list-disc pl-5">
                          <li>Помните, что <code>input()</code> всегда возвращает строку, даже если пользователь вводит числа</li>
                          <li>При делении проверяйте, не равен ли делитель нулю, прежде чем выполнять операцию</li>
                          <li>Используйте блоки <code>try-except</code> для элегантной обработки ошибок</li>
                          <li>Хорошо форматированный вывод делает программу более профессиональной</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Задания для самостоятельной работы (Self-Work Tasks)</h2>
                <p>
                  Попробуйте улучшить калькулятор, добавив следующие функции:
                </p>
                <p>
                  <em>Try to improve the calculator by adding the following features:</em>
                </p>
                <ol>
                  <li>Добавьте поддержку дополнительных операций (степень, квадратный корень)</li>
                  <li>Реализуйте возможность повторного использования калькулятора</li>
                  <li>Добавьте историю вычислений</li>
                  <li>Улучшите обработку ошибок</li>
                </ol>
                <ol className="mt-2">
                  <li>Add support for additional operations (power, square root)</li>
                  <li>Implement the ability to reuse the calculator</li>
                  <li>Add calculation history</li>
                  <li>Improve error handling</li>
                </ol>

                <h2>Проверка знаний (Knowledge Check)</h2>
                
                <InteractiveTask
                  question="Какой тип данных лучше использовать для хранения чисел в калькуляторе? (What data type is best for storing numbers in a calculator?)"
                  options={[
                    "int",
                    "float",
                    "str",
                    "bool"
                  ]}
                  correctAnswer={1}
                  explanation="Тип float лучше всего подходит для калькулятора, так как позволяет работать как с целыми числами, так и с дробными."
                />

                <InteractiveTask
                  question="Какой оператор используется для деления в Python? (Which operator is used for division in Python?)"
                  options={[
                    "div",
                    "/",
                    "\\",
                    ":"
                  ]}
                  correctAnswer={1}
                  explanation="В Python оператор / используется для деления. Он может возвращать как целое число, так и число с плавающей точкой."
                />

                <InteractiveTask
                  question="Какой блок кода используется для обработки ошибок в Python? (Which code block is used for error handling in Python?)"
                  options={[
                    "if-else",
                    "try-except",
                    "for loop",
                    "while loop"
                  ]}
                  correctAnswer={1}
                  explanation="Блок try-except используется для обработки ошибок в Python. Код в блоке try выполняется, а если возникает ошибка, выполняется код в блоке except."
                />

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-600">Поздравляем! (Congratulations!)</h3>
                      <div className="mt-2 text-sm text-green-600">
                        <p>
                          Вы успешно завершили первый модуль курса Python Start! Теперь у вас есть базовые знания 
                          программирования на Python и вы можете создавать простые программы.
                        </p>
                        <p className="mt-2">
                          <em>You have successfully completed the first module of the Python Start course! Now you have 
                          basic Python programming knowledge and can create simple programs.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson6; 