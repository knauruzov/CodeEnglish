import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson1: NextPage = () => {
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
              <span className="text-gray-700 font-medium">Урок 1: Установка Python</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 1: Установка Python</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson2">
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
                <h1>Установка Python (Python Installation and Environment Setup)</h1>
                
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
                      <li><span className="font-medium">installation</span> — установка</li>
                      <li><span className="font-medium">environment</span> — окружение</li>
                      <li><span className="font-medium">setup</span> — настройка</li>
                      <li><span className="font-medium">version</span> — версия</li>
                      <li><span className="font-medium">download</span> — скачать</li>
                      <li><span className="font-medium">path</span> — путь</li>
                      <li><span className="font-medium">command line</span> — командная строка</li>
                      <li><span className="font-medium">interpreter</span> — интерпретатор</li>
                    </ul>
                  </div>
                </div>

                <h2>Введение (Introduction)</h2>
                <p>
                  Прежде чем мы сможем начать программировать на Python, нам необходимо установить его на наш компьютер. 
                  В этом уроке мы шаг за шагом пройдем процесс установки Python и настройки среды разработки.
                </p>
                <p>
                  <em>Before we can start programming in Python, we need to install it on our computer. 
                  In this lesson, we will go through the process of installing Python and setting up the development environment step by step.</em>
                </p>

                <h2>Какую версию Python выбрать? (Which Python Version to Choose?)</h2>
                <p>
                  На сегодняшний день существует две основные версии Python: Python 2 и Python 3. Python 2 больше не поддерживается с 2020 года, 
                  поэтому мы будем использовать Python 3, который является современной и активно развивающейся версией.
                </p>
                <p>
                  <em>There are two main versions of Python available today: Python 2 and Python 3. Python 2 is no longer supported as of 2020, 
                  so we will be using Python 3, which is the modern and actively developed version.</em>
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
                          Название языка Python происходит вовсе не от змеи, а от британской комедийной группы "Монти Пайтон" (Monty Python), 
                          которую очень любил создатель языка Гвидо ван Россум.
                        </p>
                        <p className="mt-2">
                          <em>The name Python comes not from the snake, but from the British comedy group "Monty Python," 
                          which the creator of the language, Guido van Rossum, was a big fan of.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Установка Python (Installing Python)</h2>
                
                <h3>Для Windows</h3>
                <ol>
                  <li>
                    Перейдите на официальный сайт Python (<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org/downloads</a>).
                    <br/>
                    <em>Go to the official Python website.</em>
                  </li>
                  <li>
                    Нажмите на кнопку "Download Python 3.x.x" (где x.x — последняя доступная версия).
                    <br/>
                    <em>Click the "Download Python 3.x.x" button (where x.x is the latest available version).</em>
                  </li>
                  <li>
                    Запустите скачанный файл установки.
                    <br/>
                    <em>Run the downloaded installation file.</em>
                  </li>
                  <li>
                    Убедитесь, что опция "Add Python to PATH" отмечена галочкой, затем нажмите "Install Now".
                    <br/>
                    <em>Make sure the "Add Python to PATH" option is checked, then click "Install Now".</em>
                  </li>
                  <li>
                    Дождитесь завершения установки и нажмите "Close".
                    <br/>
                    <em>Wait for the installation to complete and click "Close".</em>
                  </li>
                </ol>

                <h3>Для macOS</h3>
                <ol>
                  <li>
                    Перейдите на официальный сайт Python (<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org/downloads</a>).
                    <br/>
                    <em>Go to the official Python website.</em>
                  </li>
                  <li>
                    Нажмите на кнопку "Download Python 3.x.x" (где x.x — последняя доступная версия).
                    <br/>
                    <em>Click the "Download Python 3.x.x" button (where x.x is the latest available version).</em>
                  </li>
                  <li>
                    Откройте скачанный файл .pkg и следуйте инструкциям установщика.
                    <br/>
                    <em>Open the downloaded .pkg file and follow the installer instructions.</em>
                  </li>
                  <li>
                    Нажмите "Continue" несколько раз, затем "Install".
                    <br/>
                    <em>Click "Continue" several times, then "Install".</em>
                  </li>
                  <li>
                    Введите пароль администратора, если потребуется.
                    <br/>
                    <em>Enter your administrator password if required.</em>
                  </li>
                  <li>
                    После завершения установки нажмите "Close".
                    <br/>
                    <em>After the installation finishes, click "Close".</em>
                  </li>
                </ol>

                <h3>Для Linux</h3>
                <p>
                  В большинстве дистрибутивов Linux Python 3 уже предустановлен. Чтобы проверить это, откройте терминал и введите:
                  <br/>
                  <em>Python 3 is already pre-installed on most Linux distributions. To check this, open a terminal and type:</em>
                </p>
                <pre><code>python3 --version</code></pre>
                <p>
                  Если Python не установлен, вы можете установить его с помощью менеджера пакетов вашего дистрибутива:
                  <br/>
                  <em>If Python is not installed, you can install it using your distribution's package manager:</em>
                </p>
                <p>Для Ubuntu или Debian:</p>
                <pre><code>sudo apt update
sudo apt install python3 python3-pip</code></pre>
                <p>Для Fedora:</p>
                <pre><code>sudo dnf install python3</code></pre>
                <p>Для Arch Linux:</p>
                <pre><code>sudo pacman -S python</code></pre>

                <h2>Проверка установки (Verifying Installation)</h2>
                <p>
                  Чтобы убедиться, что Python был успешно установлен, откройте командную строку (терминал) и введите:
                  <br/>
                  <em>To verify that Python was successfully installed, open a command line (terminal) and type:</em>
                </p>
                <pre><code>python --version</code></pre>
                <p>
                  или
                  <br/>
                  <em>or</em>
                </p>
                <pre><code>python3 --version</code></pre>
                <p>
                  Вы должны увидеть версию Python, похожую на "Python 3.x.x".
                  <br/>
                  <em>You should see a Python version like "Python 3.x.x".</em>
                </p>

                <h2>Установка редактора кода (Installing a Code Editor)</h2>
                <p>
                  Хотя Python поставляется со встроенной средой программирования IDLE, для более удобной разработки рекомендуется установить специализированный редактор кода:
                  <br/>
                  <em>Although Python comes with a built-in IDLE programming environment, it's recommended to install a specialized code editor for more convenient development:</em>
                </p>
                <ul>
                  <li>
                    <strong>Visual Studio Code</strong> — бесплатный, мощный редактор кода от Microsoft с отличной поддержкой Python (<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a>)
                    <br/>
                    <em>Visual Studio Code - free, powerful code editor from Microsoft with excellent Python support</em>
                  </li>
                  <li>
                    <strong>PyCharm</strong> — профессиональная IDE специально для Python, имеет бесплатную Community версию (<a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">jetbrains.com/pycharm</a>)
                    <br/>
                    <em>PyCharm - professional IDE specifically for Python, has a free Community version</em>
                  </li>
                  <li>
                    <strong>Jupyter Notebook</strong> — интерактивная среда для Python, отлично подходит для обучения и анализа данных
                    <br/>
                    <em>Jupyter Notebook - interactive environment for Python, great for learning and data analysis</em>
                  </li>
                </ul>

                <h2>Подведение итогов (Summary)</h2>
                <p>
                  В этом уроке мы:
                  <br/>
                  <em>In this lesson, we:</em>
                </p>
                <ul>
                  <li>
                    Узнали о различных версиях Python
                    <br/>
                    <em>Learned about different Python versions</em>
                  </li>
                  <li>
                    Установили Python 3 на нашу операционную систему
                    <br/>
                    <em>Installed Python 3 on our operating system</em>
                  </li>
                  <li>
                    Проверили успешность установки
                    <br/>
                    <em>Verified the installation was successful</em>
                  </li>
                  <li>
                    Рассмотрели различные редакторы кода для работы с Python
                    <br/>
                    <em>Explored various code editors for working with Python</em>
                  </li>
                </ul>
                <p>
                  Теперь у вас есть все необходимое, чтобы начать программировать на Python! В следующем уроке мы напишем нашу первую программу.
                  <br/>
                  <em>Now you have everything you need to start programming in Python! In the next lesson, we'll write our first program.</em>
                </p>

                <div className="p-6 bg-gray-50 rounded-xl my-8">
                  <h2 className="font-bold text-xl mb-4">Проверь себя (Check Yourself)</h2>
                  <ol className="list-decimal ml-6 space-y-4">
                    <li>
                      Какую версию Python следует использовать для новых проектов?
                      <br/>
                      <em>Which Python version should be used for new projects?</em>
                    </li>
                    <li>
                      Почему важно отметить галочку "Add Python to PATH" при установке на Windows?
                      <br/>
                      <em>Why is it important to check "Add Python to PATH" when installing on Windows?</em>
                    </li>
                    <li>
                      Какие команды можно использовать для проверки версии Python в терминале?
                      <br/>
                      <em>What commands can be used to check the Python version in the terminal?</em>
                    </li>
                    <li>
                      Назовите хотя бы два редактора кода, которые хорошо подходят для разработки на Python.
                      <br/>
                      <em>Name at least two code editors that are well-suited for Python development.</em>
                    </li>
                  </ol>
                </div>

                <h2>Практические задания (Practice Tasks)</h2>
                
                <InteractiveTask
                  question="Какая версия Python является современной и активно поддерживаемой? (Which Python version is modern and actively maintained?)"
                  options={[
                    "Python 1",
                    "Python 2",
                    "Python 3",
                    "Python 4"
                  ]}
                  correctAnswer={2}
                  explanation="Python 3 является современной версией языка, которая активно поддерживается и развивается. Python 2 больше не поддерживается с 2020 года, а Python 1 и 4 не существуют."
                />

                <InteractiveTask
                  question="Что нужно обязательно отметить при установке Python на Windows? (What must be checked when installing Python on Windows?)"
                  options={[
                    "Add Python to PATH",
                    "Install for all users",
                    "Customize installation",
                    "None of the above"
                  ]}
                  correctAnswer={0}
                  explanation="Опция 'Add Python to PATH' позволяет запускать Python из командной строки без указания полного пути к исполняемому файлу."
                />

                <InteractiveTask
                  question="Как проверить версию Python в командной строке? (How to check Python version in command line?)"
                  options={[
                    "python --version",
                    "python3 --version",
                    "check python version",
                    "Both A and B are correct"
                  ]}
                  correctAnswer={3}
                  explanation="В зависимости от операционной системы и настроек, можно использовать команду 'python --version' или 'python3 --version'. Обе команды покажут установленную версию Python."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson1; 