import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson5: NextPage = () => {
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
              <span className="text-gray-700 font-medium">Урок 5: Условные операторы</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 5: Условные операторы</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson4">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Предыдущий урок</span>
                  </button>
                </Link>
                <Link href="/courses/python-start/module1/lesson6">
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
                <h1>Условные операторы (Conditional Statements)</h1>
                
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
                      <li><span className="font-medium">condition</span> — условие</li>
                      <li><span className="font-medium">if</span> — если</li>
                      <li><span className="font-medium">else</span> — иначе</li>
                      <li><span className="font-medium">elif</span> — иначе если</li>
                      <li><span className="font-medium">comparison</span> — сравнение</li>
                      <li><span className="font-medium">operator</span> — оператор</li>
                      <li><span className="font-medium">boolean</span> — булево значение</li>
                      <li><span className="font-medium">branch</span> — ветвь</li>
                    </ul>
                  </div>
                </div>

                <h2>Условные операторы (Conditional Statements)</h2>
                <p>
                  Условные операторы позволяют программе принимать решения на основе определенных условий. 
                  В Python есть несколько типов условных операторов.
                </p>
                <p>
                  <em>Conditional statements allow the program to make decisions based on certain conditions. 
                  Python has several types of conditional statements.</em>
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
                          В Python отступы не только делают код читаемым, но и определяют блоки кода. 
                          Это уникальная особенность Python, которая делает его синтаксис чистым и понятным.
                        </p>
                        <p className="mt-2">
                          <em>In Python, indentation not only makes code readable but also defines code blocks. 
                          This is a unique feature of Python that makes its syntax clean and understandable.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Простой if (Simple if)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = 18
if age &gt;= 18:
    print("Вы совершеннолетний")`}</code></pre>
                </div>

                <h3>if-else (if-else Statement)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = 15
if age &gt;= 18:
    print("Вы совершеннолетний")
else:
    print("Вы несовершеннолетний")`}</code></pre>
                </div>

                <h3>if-elif-else (if-elif-else Statement)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = 15
if age &lt; 13:
    print("Вы ребенок")
elif age &lt; 18:
    print("Вы подросток")
else:
    print("Вы взрослый")`}</code></pre>
                </div>

                <h2>Операторы сравнения (Comparison Operators)</h2>
                <p>
                  В Python есть несколько операторов сравнения, которые возвращают булево значение (True или False):
                </p>
                <p>
                  <em>Python has several comparison operators that return a boolean value (True or False):</em>
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><code>==</code> — равно (equals)</li>
                  <li><code>!=</code> — не равно (not equals)</li>
                  <li><code>{'>'}</code> — больше (greater than)</li>
                  <li><code>{'<'}</code> — меньше (less than)</li>
                  <li><code>{'>='}</code> — больше или равно (greater than or equal to)</li>
                  <li><code>{'<='}</code> — меньше или равно (less than or equal to)</li>
                </ul>

                <h2>Логические операторы (Logical Operators)</h2>
                <p>
                  Логические операторы позволяют комбинировать условия:
                </p>
                <p>
                  <em>Logical operators allow us to combine conditions:</em>
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Совет (Tip)</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <p>
                          При использовании логических операторов важно помнить о порядке выполнения операций. 
                          Оператор <code>and</code> имеет более высокий приоритет, чем <code>or</code>.
                        </p>
                        <p className="mt-2">
                          <em>When using logical operators, it's important to remember the order of operations. 
                          The <code>and</code> operator has higher precedence than <code>or</code>.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-6 space-y-2">
                  <li><code>and</code> — логическое И (logical AND)</li>
                  <li><code>or</code> — логическое ИЛИ (logical OR)</li>
                  <li><code>not</code> — логическое НЕ (logical NOT)</li>
                </ul>

                <h3>Примеры использования (Usage Examples)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = 20
has_ticket = True

if age &gt;= 18 and has_ticket:
    print("Вы можете войти")
else:
    print("Вход запрещен")`}</code></pre>
                </div>

                <h2>Вложенные условия (Nested Conditions)</h2>
                <p>
                  Условные операторы можно вкладывать друг в друга, создавая сложную логику принятия решений:
                </p>
                <p>
                  <em>Conditional statements can be nested inside each other, creating complex decision-making logic:</em>
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`age = 20
has_ticket = True
is_vip = False

if age &gt;= 18:
    if has_ticket:
        if is_vip:
            print("Добро пожаловать в VIP-зону")
        else:
            print("Добро пожаловать в обычную зону")
    else:
        print("Вам нужен билет")
else:
    print("Вход только для совершеннолетних")`}</code></pre>
                </div>

                <h2>Практические задания (Practice Tasks)</h2>
                
                <InteractiveTask
                  question="Какой оператор используется для проверки равенства в Python? (Which operator is used to check equality in Python?)"
                  options={[
                    "=",
                    "==",
                    "===",
                    "equals"
                  ]}
                  correctAnswer={1}
                  explanation="В Python оператор == используется для проверки равенства. Оператор = используется для присваивания значений."
                />

                <InteractiveTask
                  question="Что выведет код: if True and False: print('Yes') else: print('No')? (What will the code output: if True and False: print('Yes') else: print('No')?)"
                  options={[
                    "Yes",
                    "No",
                    "Error",
                    "None"
                  ]}
                  correctAnswer={1}
                  explanation="Логическое выражение True and False равно False, поэтому выполнится блок else."
                />

                <InteractiveTask
                  question="Сколько блоков elif можно использовать в одном операторе if? (How many elif blocks can be used in a single if statement?)"
                  options={[
                    "Только один (Only one)",
                    "Не более трех (No more than three)",
                    "Сколько угодно (As many as needed)",
                    "Не более пяти (No more than five)"
                  ]}
                  correctAnswer={2}
                  explanation="В Python можно использовать любое количество блоков elif в одном операторе if. Ограничений нет."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson5; 