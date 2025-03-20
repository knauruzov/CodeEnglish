import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson4: NextPage = () => {
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
              <span className="text-gray-700 font-medium">Урок 4: Ввод и вывод данных</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 4: Ввод и вывод данных</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson3">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Предыдущий урок</span>
                  </button>
                </Link>
                <Link href="/courses/python-start/module1/lesson5">
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
                <h1>Ввод и вывод данных (Input and Output)</h1>
                
                <div className="flex flex-col md:flex-row gap-4 my-6 border-l-4 border-accent p-4 bg-accent/5">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-accent font-medium mb-2">Словарь урока (Lesson Vocabulary)</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li><span className="font-medium">input</span> — ввод</li>
                      <li><span className="font-medium">output</span> — вывод</li>
                      <li><span className="font-medium">prompt</span> — приглашение</li>
                      <li><span className="font-medium">string</span> — строка</li>
                      <li><span className="font-medium">convert</span> — преобразовывать</li>
                      <li><span className="font-medium">format</span> — форматировать</li>
                      <li><span className="font-medium">concatenate</span> — соединять</li>
                      <li><span className="font-medium">variable</span> — переменная</li>
                    </ul>
                  </div>
                </div>

                <h2>Введение (Introduction)</h2>
                <p>
                  В этом уроке мы научимся получать данные от пользователя и выводить их на экран. 
                  Это важный навык для создания интерактивных программ.
                </p>
                <p>
                  <em>In this lesson, we will learn how to get data from the user and display it on the screen. 
                  This is an important skill for creating interactive programs.</em>
                </p>

                <h2>Функция input() (The input() Function)</h2>
                <p>
                  Функция <code>input()</code> позволяет получать данные от пользователя. 
                  Она приостанавливает выполнение программы и ждет, пока пользователь введет текст и нажмет Enter.
                </p>
                <p>
                  <em>The <code>input()</code> function allows us to get data from the user. 
                  It pauses program execution and waits for the user to enter text and press Enter.</em>
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Интересный факт (Fun Fact)</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <p>
                          В Python 2 функция input() работала иначе - она пыталась вычислить введенное выражение как Python-код. 
                          Это могло привести к проблемам безопасности, поэтому в Python 3 input() всегда возвращает строку.
                        </p>
                        <p className="mt-2">
                          <em>In Python 2, the input() function worked differently - it tried to evaluate the entered expression as Python code. 
                          This could lead to security issues, which is why in Python 3 input() always returns a string.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Базовое использование (Basic Usage)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`name = input("Как вас зовут? ")
print(f"Привет, {name}!")`}</code></pre>
                </div>

                <h3>С приглашением (With Prompt)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = input("Сколько вам лет? ")
print(f"Вам {age} лет")`}</code></pre>
                </div>

                <h2>Преобразование типов (Type Conversion)</h2>
                <p>
                  Функция <code>input()</code> всегда возвращает строку. Если нам нужны числа, 
                  мы должны преобразовать строку в числовой тип.
                </p>
                <p>
                  <em>The <code>input()</code> function always returns a string. If we need numbers, 
                  we must convert the string to a numeric type.</em>
                </p>

                <h3>Преобразование в целое число (Converting to Integer)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = int(input("Сколько вам лет? "))
print(f"Вам {age} лет")`}</code></pre>
                </div>

                <h3>Преобразование в число с плавающей точкой (Converting to Float)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`height = float(input("Какой у вас рост? "))
print(f"Ваш рост: {height} см")`}</code></pre>
                </div>

                <h2>Форматирование строк (String Formatting)</h2>
                <p>
                  В Python есть несколько способов форматирования строк. Рассмотрим основные:
                </p>
                <p>
                  <em>Python has several ways to format strings. Let's look at the main ones:</em>
                </p>

                <h3>1. f-строки (f-strings)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`name = "Alice"
age = 25
print(f"Меня зовут {name} и мне {age} лет")`}</code></pre>
                </div>

                <h3>2. Метод format() (The format() Method)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`name = "Bob"
age = 30
print("Меня зовут {} и мне {} лет".format(name, age))`}</code></pre>
                </div>

                <h3>3. Оператор % (The % Operator)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`name = "Charlie"
age = 35
print("Меня зовут %s и мне %d лет" % (name, age))`}</code></pre>
                </div>

                <h2>Пример программы (Program Example)</h2>
                <p>
                  Давайте создадим простую программу, которая собирает информацию о пользователе:
                </p>
                <p>
                  <em>Let's create a simple program that collects user information:</em>
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Получаем данные от пользователя
name = input("Как вас зовут? ")
age = int(input("Сколько вам лет? "))
city = input("В каком городе вы живете? ")
hobby = input("Какое у вас хобби? ")

# Выводим информацию в красивом формате
print("\\n=== Информация о пользователе ===")
print(f"Имя: {name}")
print(f"Возраст: {age}")
print(f"Город: {city}")
print(f"Хобби: {hobby}")`}</code></pre>
                </div>

                <h2>Обработка ошибок (Error Handling)</h2>
                <p>
                  При преобразовании строк в числа могут возникнуть ошибки, если пользователь введет некорректные данные. 
                  Давайте научимся обрабатывать такие ситуации:
                </p>
                <p>
                  <em>When converting strings to numbers, errors can occur if the user enters invalid data. 
                  Let's learn how to handle such situations:</em>
                </p>

                <h3>Базовая обработка ошибок (Basic Error Handling)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`try:
    age = int(input("Сколько вам лет? "))
    print(f"Вам {age} лет")
except ValueError:
    print("Ошибка: Пожалуйста, введите число")`}</code></pre>
                </div>

                <h3>Расширенная обработка ошибок (Advanced Error Handling)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`while True:
    try:
        age = int(input("Сколько вам лет? "))
        if age < 0 or age > 150:
            print("Ошибка: Возраст должен быть от 0 до 150 лет")
            continue
        print(f"Вам {age} лет")
        break
    except ValueError:
        print("Ошибка: Пожалуйста, введите число")`}</code></pre>
                </div>

                <h2>Практические задания (Practice Tasks)</h2>
                
                <InteractiveTask
                  question="Что возвращает функция input()? (What does the input() function return?)"
                  options={[
                    "Число (Number)",
                    "Строку (String)",
                    "Список (List)",
                    "Словарь (Dictionary)"
                  ]}
                  correctAnswer={1}
                  explanation="Функция input() всегда возвращает строку, даже если пользователь вводит числа. Для получения чисел нужно использовать преобразование типов (int() или float())."
                />

                <InteractiveTask
                  question="Какой результат будет у кода: print(f'2 + 2 = {2 + 2}')? (What will be the output of: print(f'2 + 2 = {2 + 2}')?)"
                  options={[
                    "2 + 2 = {2 + 2}",
                    "2 + 2 = 4",
                    "Error",
                    "None"
                  ]}
                  correctAnswer={1}
                  explanation="В f-строках выражения внутри фигурных скобок вычисляются, поэтому {2 + 2} будет заменено на 4."
                />

                <InteractiveTask
                  question="Что произойдет при выполнении: int('abc')? (What happens when executing: int('abc')?)"
                  options={[
                    "Число 0",
                    "Число 123",
                    "Ошибка ValueError",
                    "Ничего не произойдет"
                  ]}
                  correctAnswer={2}
                  explanation="Функция int() не может преобразовать строку 'abc' в число, поэтому возникает ошибка ValueError."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson4; 