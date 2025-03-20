import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson2: NextPage = () => {
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
              <span className="text-gray-700 font-medium">Урок 2: Первая программа</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 2: Первая программа</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson1">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Предыдущий урок</span>
                  </button>
                </Link>
                <Link href="/courses/python-start/module1/lesson3">
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
                <h1>Первая программа (Your First Python Program)</h1>
                
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
                      <li><span className="font-medium">program</span> — программа</li>
                      <li><span className="font-medium">code</span> — код</li>
                      <li><span className="font-medium">print</span> — вывод, печать</li>
                      <li><span className="font-medium">syntax</span> — синтаксис</li>
                      <li><span className="font-medium">run</span> — запускать</li>
                      <li><span className="font-medium">execute</span> — выполнять</li>
                      <li><span className="font-medium">script</span> — скрипт</li>
                      <li><span className="font-medium">error</span> — ошибка</li>
                    </ul>
                  </div>
                </div>

                <h2>Введение (Introduction)</h2>
                <p>
                  Добро пожаловать во второй урок нашего курса! Сегодня мы напишем нашу первую программу на Python и запустим её. 
                  Это будет простая программа "Hello, World!", которая является традиционным первым шагом в изучении любого языка программирования.
                </p>
                <p>
                  <em>Welcome to the second lesson of our course! Today, we will write our first Python program and run it. 
                  It will be a simple "Hello, World!" program, which is a traditional first step in learning any programming language.</em>
                </p>

                <h2>Что такое программа? (What is a Program?)</h2>
                <p>
                  Программа — это набор инструкций, которые компьютер выполняет для достижения определенной цели. 
                  В случае с Python, эти инструкции записываются в виде текстовых файлов с расширением <code>.py</code>.
                </p>
                <p>
                  <em>A program is a set of instructions that a computer executes to achieve a specific goal. 
                  In the case of Python, these instructions are written as text files with the <code>.py</code> extension.</em>
                </p>

                <h2>Создание первой программы (Creating Your First Program)</h2>
                <p>
                  Давайте создадим нашу первую программу на Python. Для этого нам понадобится текстовый редактор или IDE, которые мы установили в предыдущем уроке.
                </p>
                <p>
                  <em>Let's create our first Python program. For this, we will need a text editor or IDE that we installed in the previous lesson.</em>
                </p>

                <h3>Шаг 1: Создание файла (Step 1: Creating a File)</h3>
                <ol>
                  <li>
                    Откройте ваш текстовый редактор (например, Visual Studio Code, PyCharm или даже стандартный Блокнот/Notepad).
                    <br/>
                    <em>Open your text editor (e.g., Visual Studio Code, PyCharm, or even standard Notepad).</em>
                  </li>
                  <li>
                    Создайте новый файл.
                    <br/>
                    <em>Create a new file.</em>
                  </li>
                  <li>
                    Сохраните этот файл с именем <code>hello.py</code>. Убедитесь, что расширение файла именно <code>.py</code>, а не <code>.txt</code>.
                    <br/>
                    <em>Save this file with the name <code>hello.py</code>. Make sure the file extension is <code>.py</code>, not <code>.txt</code>.</em>
                  </li>
                </ol>

                <h3>Шаг 2: Написание кода (Step 2: Writing Code)</h3>
                <p>
                  В файле <code>hello.py</code> напишите следующую строку кода:
                  <br/>
                  <em>In the <code>hello.py</code> file, write the following line of code:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Hello, World!")`}</code></pre>
                </div>
                <p>
                  Это простая команда, которая выводит текст "Hello, World!" на экран. Давайте разберем её:
                  <br/>
                  <em>This is a simple command that displays the text "Hello, World!" on the screen. Let's break it down:</em>
                </p>
                <ul>
                  <li>
                    <code>print()</code> — это встроенная функция Python, которая выводит информацию в консоль.
                    <br/>
                    <em><code>print()</code> is a built-in Python function that outputs information to the console.</em>
                  </li>
                  <li>
                    <code>"Hello, World!"</code> — это строка текста (строковый литерал), которую мы хотим вывести. Строки в Python заключаются в двойные или одинарные кавычки.
                    <br/>
                    <em><code>"Hello, World!"</code> is a text string (string literal) that we want to output. Strings in Python are enclosed in double or single quotes.</em>
                  </li>
                </ul>

                <h3>Шаг 3: Запуск программы (Step 3: Running the Program)</h3>
                <p>
                  Теперь давайте запустим нашу программу. Это можно сделать несколькими способами, в зависимости от того, какую среду разработки вы используете.
                  <br/>
                  <em>Now, let's run our program. This can be done in several ways, depending on which development environment you're using.</em>
                </p>

                <h4>Запуск из командной строки (Running from Command Line)</h4>
                <ol>
                  <li>
                    Откройте командную строку (терминал).
                    <br/>
                    <em>Open a command line (terminal).</em>
                  </li>
                  <li>
                    Перейдите в директорию, где сохранен файл <code>hello.py</code>, используя команду <code>cd</code>. Например:
                    <br/>
                    <em>Navigate to the directory where the <code>hello.py</code> file is saved using the <code>cd</code> command. For example:</em>
                    <pre><code>cd C:\Users\YourName\Documents</code></pre>
                    или на Mac/Linux:
                    <pre><code>cd /home/username/documents</code></pre>
                  </li>
                  <li>
                    Запустите программу с помощью команды:
                    <br/>
                    <em>Run the program using the command:</em>
                    <pre><code>python hello.py</code></pre>
                    или
                    <pre><code>python3 hello.py</code></pre>
                  </li>
                </ol>

                <h4>Запуск из IDE (Running from IDE)</h4>
                <p>
                  Если вы используете IDE, как PyCharm или Visual Studio Code, вы можете запустить программу, нажав кнопку "Run" или используя горячие клавиши (обычно F5 или Ctrl+F5).
                  <br/>
                  <em>If you're using an IDE like PyCharm or Visual Studio Code, you can run the program by clicking the "Run" button or using keyboard shortcuts (usually F5 or Ctrl+F5).</em>
                </p>

                <h3>Шаг 4: Проверка результата (Step 4: Checking the Result)</h3>
                <p>
                  После запуска программы вы должны увидеть текст <code>Hello, World!</code> в консоли или в окне вывода вашей IDE.
                  <br/>
                  <em>After running the program, you should see the text <code>Hello, World!</code> in the console or in the output window of your IDE.</em>
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-mono">Hello, World!</p>
                </div>
                <p>
                  Поздравляем! Вы только что написали и запустили свою первую программу на Python!
                  <br/>
                  <em>Congratulations! You have just written and run your first Python program!</em>
                </p>

                <h2>Расширение программы (Expanding the Program)</h2>
                <p>
                  Давайте немного расширим нашу программу, добавив ещё несколько строк:
                  <br/>
                  <em>Let's expand our program a bit by adding a few more lines:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Hello, World!")
print("Welcome to Python programming!")
print("This is my first program.")`}</code></pre>
                </div>
                <p>
                  Сохраните изменения и запустите программу снова. Теперь вы должны увидеть три строки текста:
                  <br/>
                  <em>Save the changes and run the program again. Now you should see three lines of text:</em>
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-mono">Hello, World!</p>
                  <p className="font-mono">Welcome to Python programming!</p>
                  <p className="font-mono">This is my first program.</p>
                </div>

                <h2>Вывод специальных символов (Printing Special Characters)</h2>
                <p>
                  В Python есть несколько специальных символов, которые можно использовать для форматирования вывода. Один из самых распространенных — символ новой строки <code>\n</code>:
                  <br/>
                  <em>Python has several special characters that can be used to format output. One of the most common is the newline character <code>\n</code>:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Line 1 \\n Line 2 \\n Line 3")`}</code></pre>
                </div>
                <p>
                  При запуске этого кода вы увидите:
                  <br/>
                  <em>When running this code, you will see:</em>
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-mono">Line 1</p>
                  <p className="font-mono">Line 2</p>
                  <p className="font-mono">Line 3</p>
                </div>

                <h2>Обработка ошибок (Error Handling)</h2>
                <p>
                  Что произойдет, если мы допустим ошибку в нашем коде? Давайте попробуем написать команду <code>print</code> с ошибкой:
                  <br/>
                  <em>What happens if we make a mistake in our code? Let's try writing the <code>print</code> command with an error:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print "Hello, World!")`}</code></pre>
                </div>
                <p>
                  При запуске этого кода вы получите сообщение об ошибке, примерно такое:
                  <br/>
                  <em>When running this code, you will get an error message like this:</em>
                </p>
                <div className="bg-red-50 p-4 rounded-lg text-red-600 font-mono">
                  <p>  File "hello.py", line 1</p>
                  <p>    print "Hello, World!")</p>
                  <p>          ^</p>
                  <p>SyntaxError: Missing parentheses in call to 'print'. Did you mean print("Hello, World!")?</p>
                </div>
                <p>
                  Это сообщение об ошибке говорит о том, что мы пропустили открывающую скобку в вызове функции <code>print</code>. Python даже предлагает нам исправление: <code>print("Hello, World!")</code>.
                  <br/>
                  <em>This error message says that we missed the opening parenthesis in the <code>print</code> function call. Python even suggests a correction: <code>print("Hello, World!")</code>.</em>
                </p>
                <p>
                  Внимательно читайте сообщения об ошибках — они часто содержат полезную информацию о том, что пошло не так и как это исправить.
                  <br/>
                  <em>Read error messages carefully—they often contain useful information about what went wrong and how to fix it.</em>
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
                          Традиция начинать изучение языка программирования с программы "Hello, World!" была введена 
                          в учебнике по языку C, написанном Брайаном Керниганом и Деннисом Ритчи в 1978 году.
                        </p>
                        <p className="mt-2">
                          <em>The tradition of starting to learn a programming language with a "Hello, World!" program was introduced 
                          in a C language textbook written by Brian Kernighan and Dennis Ritchie in 1978.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Подведение итогов (Summary)</h2>
                <p>
                  В этом уроке мы:
                  <br/>
                  <em>In this lesson, we:</em>
                </p>
                <ul>
                  <li>
                    Создали нашу первую программу на Python
                    <br/>
                    <em>Created our first Python program</em>
                  </li>
                  <li>
                    Научились использовать функцию <code>print()</code> для вывода текста
                    <br/>
                    <em>Learned how to use the <code>print()</code> function to output text</em>
                  </li>
                  <li>
                    Узнали о строковых литералах и специальных символах
                    <br/>
                    <em>Learned about string literals and special characters</em>
                  </li>
                  <li>
                    Познакомились с сообщениями об ошибках и их интерпретацией
                    <br/>
                    <em>Got acquainted with error messages and their interpretation</em>
                  </li>
                </ul>
                <p>
                  Хотя наша первая программа очень проста, это важный шаг в изучении Python. В следующих уроках мы будем постепенно добавлять новые концепции и возможности языка.
                  <br/>
                  <em>Although our first program is very simple, it's an important step in learning Python. In the following lessons, we will gradually add new language concepts and features.</em>
                </p>

                <div className="p-6 bg-gray-50 rounded-xl my-8">
                  <h2 className="font-bold text-xl mb-4">Проверь себя (Check Yourself)</h2>
                  <ol className="list-decimal ml-6 space-y-4">
                    <li>
                      Какое расширение имеют файлы Python?
                      <br/>
                      <em>What extension do Python files have?</em>
                    </li>
                    <li>
                      Какая функция используется для вывода текста в консоль?
                      <br/>
                      <em>Which function is used to output text to the console?</em>
                    </li>
                    <li>
                      Что означает символ <code>\n</code> в строке Python?
                      <br/>
                      <em>What does the <code>\n</code> symbol mean in a Python string?</em>
                    </li>
                    <li>
                      Как запустить Python-скрипт из командной строки?
                      <br/>
                      <em>How do you run a Python script from the command line?</em>
                    </li>
                  </ol>
                </div>

                <div className="p-6 bg-primary/10 rounded-xl my-8">
                  <h2 className="font-bold text-xl mb-4">Практическое задание (Practice Task)</h2>
                  <p className="mb-4">
                    Создайте программу <code>about_me.py</code>, которая выводит информацию о вас. Программа должна выводить:
                    <br/>
                    <em>Create an <code>about_me.py</code> program that outputs information about you. The program should output:</em>
                  </p>
                  <ol className="list-decimal ml-6 space-y-2">
                    <li>
                      Ваше имя
                      <br/>
                      <em>Your name</em>
                    </li>
                    <li>
                      Ваш возраст
                      <br/>
                      <em>Your age</em>
                    </li>
                    <li>
                      Ваше хобби
                      <br/>
                      <em>Your hobby</em>
                    </li>
                    <li>
                      Почему вы изучаете Python
                      <br/>
                      <em>Why you are learning Python</em>
                    </li>
                  </ol>
                  <p className="mt-4">
                    Используйте функцию <code>print()</code> для каждой строки информации. Попробуйте также использовать символ новой строки <code>\n</code> 
                    для объединения нескольких строк в одном вызове <code>print()</code>.
                    <br/>
                    <em>Use the <code>print()</code> function for each line of information. Also try using the newline character <code>\n</code> 
                    to combine multiple lines in a single <code>print()</code> call.</em>
                  </p>
                </div>

                <h2>Практические задания (Practice Tasks)</h2>
                
                <InteractiveTask
                  question="Какой символ используется для комментариев в Python? (Which symbol is used for comments in Python?)"
                  options={[
                    "//",
                    "/* */",
                    "#",
                    "--"
                  ]}
                  correctAnswer={2}
                  explanation="В Python для однострочных комментариев используется символ #. Символы // и /* */ используются в других языках программирования, а -- в SQL."
                />

                <InteractiveTask
                  question="Что выведет функция print('Hello' + 'World')? (What will print('Hello' + 'World') output?)"
                  options={[
                    "Hello World",
                    "HelloWorld",
                    "Error",
                    "None"
                  ]}
                  correctAnswer={1}
                  explanation="В Python оператор + для строк выполняет конкатенацию (соединение) строк без добавления пробела между ними. Чтобы добавить пробел, нужно явно указать его в строке или использовать запятую в функции print."
                />

                <InteractiveTask
                  question="Какой результат будет у выражения 2 + 3 * 4? (What will be the result of 2 + 3 * 4?)"
                  options={[
                    "20",
                    "14",
                    "24",
                    "Error"
                  ]}
                  correctAnswer={1}
                  explanation="В Python, как и в математике, умножение имеет приоритет над сложением. Поэтому сначала выполняется 3 * 4 = 12, а затем 2 + 12 = 14."
                />

                <h3>Вывод нескольких строк (Multiple Lines Output)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Привет, мир!")
print("Добро пожаловать в Python!")
print("Давайте учиться программировать!")`}</code></pre>
                </div>

                <h3>Использование end (Using end)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Привет", end=" ")
print("мир", end="!")
print()  # Переход на новую строку`}</code></pre>
                </div>

                <h3>Использование sep (Using sep)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`print("Python", "is", "awesome", sep="-")`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson2; 