import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import InteractiveTask from '../../../../components/InteractiveTask';

const PythonLesson3: NextPage = () => {
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
              <span className="text-gray-700 font-medium">Урок 3: Переменные и типы данных</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 3: Переменные и типы данных</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/python-start/module1/lesson2">
                  <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Предыдущий урок</span>
                  </button>
                </Link>
                <Link href="/courses/python-start/module1/lesson4">
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
                <h1>Переменные и типы данных (Variables and Basic Data Types)</h1>
                
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
                      <li><span className="font-medium">variable</span> — переменная</li>
                      <li><span className="font-medium">data type</span> — тип данных</li>
                      <li><span className="font-medium">integer</span> — целое число</li>
                      <li><span className="font-medium">float</span> — число с плавающей точкой</li>
                      <li><span className="font-medium">string</span> — строка</li>
                      <li><span className="font-medium">boolean</span> — булево значение</li>
                      <li><span className="font-medium">assignment</span> — присваивание</li>
                      <li><span className="font-medium">convert</span> — преобразовать</li>
                    </ul>
                  </div>
                </div>

                <h2>Введение (Introduction)</h2>
                <p>
                  В этом уроке мы узнаем о переменных и основных типах данных в Python. Переменные — это один из фундаментальных 
                  концептов в программировании, позволяющий хранить и манипулировать данными в программе.
                </p>
                <p>
                  <em>In this lesson, we will learn about variables and basic data types in Python. Variables are one of the fundamental 
                  concepts in programming, allowing us to store and manipulate data in a program.</em>
                </p>

                <h2>Что такое переменная? (What is a Variable?)</h2>
                <p>
                  Переменная — это именованная область памяти, в которой хранится значение. Можно представить переменную как 
                  коробку с этикеткой, где этикетка — это имя переменной, а содержимое коробки — её значение.
                </p>
                <p>
                  <em>A variable is a named memory location that stores a value. You can think of a variable as a box with a label, 
                  where the label is the variable name, and the contents of the box are its value.</em>
                </p>

                <h2>Создание переменных в Python (Creating Variables in Python)</h2>
                <p>
                  В Python создание переменной очень просто — вам нужно лишь присвоить значение имени. Синтаксис такой:
                  <br/>
                  <em>Creating a variable in Python is very simple—you just need to assign a value to a name. The syntax is:</em>
                </p>
                <pre><code>имя_переменной = значение</code></pre>
                <p>
                  Давайте рассмотрим несколько примеров:
                  <br/>
                  <em>Let's look at a few examples:</em>
                </p>
                <pre><code>age = 25
name = "Alex"
is_student = True
height = 1.75</code></pre>
                <p>
                  В этих примерах:
                  <br/>
                  <em>In these examples:</em>
                </p>
                <ul>
                  <li>
                    <code>age</code> — переменная, содержащая целое число 25.
                    <br/>
                    <em><code>age</code> is a variable containing the integer 25.</em>
                  </li>
                  <li>
                    <code>name</code> — переменная, содержащая строку "Alex".
                    <br/>
                    <em><code>name</code> is a variable containing the string "Alex".</em>
                  </li>
                  <li>
                    <code>is_student</code> — переменная, содержащая булево значение True (Правда).
                    <br/>
                    <em><code>is_student</code> is a variable containing the boolean value True.</em>
                  </li>
                  <li>
                    <code>height</code> — переменная, содержащая число с плавающей точкой 1.75.
                    <br/>
                    <em><code>height</code> is a variable containing the floating-point number 1.75.</em>
                  </li>
                </ul>

                <h2>Правила именования переменных (Variable Naming Rules)</h2>
                <p>
                  В Python есть несколько правил, которым нужно следовать при именовании переменных:
                  <br/>
                  <em>In Python, there are several rules to follow when naming variables:</em>
                </p>
                <ul>
                  <li>
                    Имя переменной может содержать буквы, цифры и символ подчеркивания (_).
                    <br/>
                    <em>Variable names can contain letters, numbers, and the underscore character (_).</em>
                  </li>
                  <li>
                    Имя переменной не может начинаться с цифры.
                    <br/>
                    <em>Variable names cannot start with a number.</em>
                  </li>
                  <li>
                    Имя переменной не может быть ключевым словом Python (например, <code>if</code>, <code>for</code>, <code>while</code> и т.д.).
                    <br/>
                    <em>Variable names cannot be a Python keyword (e.g., <code>if</code>, <code>for</code>, <code>while</code>, etc.).</em>
                  </li>
                  <li>
                    Имена переменных чувствительны к регистру (т.е. <code>name</code>, <code>Name</code> и <code>NAME</code> — это три разные переменные).
                    <br/>
                    <em>Variable names are case-sensitive (i.e., <code>name</code>, <code>Name</code>, and <code>NAME</code> are three different variables).</em>
                  </li>
                </ul>
                <p>
                  Вот несколько примеров правильных имен переменных:
                  <br/>
                  <em>Here are some examples of valid variable names:</em>
                </p>
                <pre><code>name
age
user_name
userName
_private
name1
NAME</code></pre>
                <p>
                  А вот примеры неправильных имен переменных:
                  <br/>
                  <em>And here are examples of invalid variable names:</em>
                </p>
                <pre><code>1name    # Начинается с цифры
user-name # Содержит дефис
if        # Ключевое слово Python</code></pre>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Соглашения по именованию (Naming Conventions)</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          В Python принято следовать определенным соглашениям по именованию:
                          <br/>
                          <em>In Python, it is customary to follow certain naming conventions:</em>
                        </p>
                        <ul className="list-disc ml-5 mt-2">
                          <li>
                            Используйте <code>snake_case</code> для имен переменных и функций (слова в нижнем регистре, разделенные подчеркиваниями).
                            <br/>
                            <em>Use <code>snake_case</code> for variable and function names (lowercase words separated by underscores).</em>
                          </li>
                          <li>
                            Используйте <code>UPPER_CASE</code> для констант.
                            <br/>
                            <em>Use <code>UPPER_CASE</code> for constants.</em>
                          </li>
                          <li>
                            Используйте <code>CamelCase</code> для имен классов.
                            <br/>
                            <em>Use <code>CamelCase</code> for class names.</em>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Основные типы данных (Basic Data Types)</h2>
                <p>
                  Python имеет несколько встроенных типов данных. Рассмотрим основные из них:
                  <br/>
                  <em>Python has several built-in data types. Let's look at the main ones:</em>
                </p>

                <h3>Объявление переменных (Variable Declaration)</h3>
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
height = 1.75
is_student = True`}</code></pre>
                </div>

                <h3>Числовые типы (Numeric Types)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Целые числа (Integers)
age = 25
year = 2024

# Числа с плавающей точкой (Floating-point numbers)
height = 1.75
weight = 68.5
pi = 3.14159`}</code></pre>
                </div>

                <h3>Строки (Strings)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Одинарные кавычки (Single quotes)
name = 'Alice'

# Двойные кавычки (Double quotes)
message = "Hello, World!"

# Многострочные строки (Multiline strings)
text = """Это многострочная
строка, которая может
содержать несколько
строк текста."""`}</code></pre>
                </div>

                <h3>Булевы значения (Boolean Values)</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`is_student = True
is_working = False
has_car = True`}</code></pre>
                </div>

                <h2>Преобразование типов (Type Conversion)</h2>
                <p>
                  В Python можно преобразовывать один тип данных в другой с помощью встроенных функций.
                  <br/>
                  <em>In Python, you can convert one data type to another using built-in functions.</em>
                </p>

                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Строка в число (String to integer)
num_str = "42"
num_int = int(num_str)
print(num_int)        # Выведет: 42
print(type(num_int))  # Выведет: <class 'int'>

# Строка в число с плавающей точкой (String to float)
pi_str = "3.14159"
pi_float = float(pi_str)
print(pi_float)       # Выведет: 3.14159
print(type(pi_float)) # Выведет: <class 'float'>

# Число в строку (Number to string)
age = 25
age_str = str(age)
print(age_str)        # Выведет: 25
print(type(age_str))  # Выведет: <class 'str'>

# Между числовыми типами (Between numeric types)
height = 175.5
height_int = int(height)
print(height_int)     # Выведет: 175 (дробная часть отбрасывается)

# В булев тип (To boolean)
print(bool(0))        # Выведет: False
print(bool(1))        # Выведет: True
print(bool(""))       # Выведет: False
print(bool("Hello"))  # Выведет: True`}</code></pre>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-600">Важно знать (Important to know)</h3>
                      <div className="mt-2 text-sm text-blue-600">
                        <p>
                          При преобразовании строки в число строка должна содержать только числовые символы, иначе возникнет ошибка ValueError.
                        </p>
                        <p className="mt-2">
                          <em>When converting a string to a number, the string must contain only numeric characters, otherwise a ValueError will occur.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Использование переменных (Using Variables)</h2>
                <p>
                  После создания переменных их можно использовать в различных операциях:
                  <br/>
                  <em>After creating variables, you can use them in various operations:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Арифметические операции
x = 10
y = 5
sum_result = x + y      # 15
diff_result = x - y     # 5
prod_result = x * y     # 50
div_result = x / y      # 2.0
print(sum_result, diff_result, prod_result, div_result)

# Операции со строками
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # Конкатенация строк
print(full_name)  # "John Doe"

# Вывод значений переменных
age = 25
print("I am", age, "years old.")  # "I am 25 years old."`}</code></pre>
                </div>

                <h2>Изменение значений переменных (Changing Variable Values)</h2>
                <p>
                  Вы можете изменить значение переменной, просто присвоив ей новое значение:
                  <br/>
                  <em>You can change the value of a variable by simply assigning it a new value:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`# Изменение значения числовой переменной
count = 10
print(count)  # 10

count = 20
print(count)  # 20

# Изменение типа переменной (динамическая типизация)
var = 100
print(var, type(var))  # 100 <class 'int'>

var = "Hello"
print(var, type(var))  # Hello <class 'str'>

# Увеличение значения переменной
score = 0
print(score)  # 0

score = score + 10  # Увеличиваем на 10
print(score)  # 10

score += 5  # Сокращенная запись для score = score + 5
print(score)  # 15`}</code></pre>
                </div>

                <h2>Подведение итогов (Summary)</h2>
                <p>
                  В этом уроке мы:
                  <br/>
                  <em>In this lesson, we:</em>
                </p>
                <ul>
                  <li>
                    Узнали, что такое переменные и как их создавать
                    <br/>
                    <em>Learned what variables are and how to create them</em>
                  </li>
                  <li>
                    Изучили правила именования переменных
                    <br/>
                    <em>Studied variable naming rules</em>
                  </li>
                  <li>
                    Познакомились с основными типами данных в Python: целые числа (<code>int</code>), числа с плавающей точкой (<code>float</code>), строки (<code>str</code>) и булевы значения (<code>bool</code>)
                    <br/>
                    <em>Got acquainted with the basic data types in Python: integers (<code>int</code>), floating-point numbers (<code>float</code>), strings (<code>str</code>), and boolean values (<code>bool</code>)</em>
                  </li>
                  <li>
                    Научились определять тип данных с помощью функции <code>type()</code>
                    <br/>
                    <em>Learned how to determine the data type using the <code>type()</code> function</em>
                  </li>
                  <li>
                    Узнали о преобразовании типов данных
                    <br/>
                    <em>Learned about data type conversion</em>
                  </li>
                  <li>
                    Научились использовать переменные в операциях и изменять их значения
                    <br/>
                    <em>Learned how to use variables in operations and change their values</em>
                  </li>
                </ul>
                <p>
                  Понимание переменных и типов данных является фундаментальным навыком в программировании. 
                  В следующих уроках мы будем использовать эти знания для создания более сложных программ.
                  <br/>
                  <em>Understanding variables and data types is a fundamental skill in programming. 
                  In the following lessons, we will use this knowledge to create more complex programs.</em>
                </p>

                <div className="p-6 bg-gray-50 rounded-xl my-8">
                  <h2 className="font-bold text-xl mb-4">Проверь себя (Check Yourself)</h2>
                  <ol className="list-decimal ml-6 space-y-4">
                    <li>
                      Какие основные типы данных существуют в Python?
                      <br/>
                      <em>What are the basic data types in Python?</em>
                    </li>
                    <li>
                      Какие правила нужно соблюдать при именовании переменных?
                      <br/>
                      <em>What rules should be followed when naming variables?</em>
                    </li>
                    <li>
                      Как можно узнать тип данных переменной в Python?
                      <br/>
                      <em>How can you find out the data type of a variable in Python?</em>
                    </li>
                    <li>
                      Как преобразовать строку "123" в целое число?
                      <br/>
                      <em>How do you convert the string "123" to an integer?</em>
                    </li>
                  </ol>
                </div>

                <div className="p-6 bg-primary/10 rounded-xl my-8">
                  <h2 className="font-bold text-xl mb-4">Практическое задание (Practice Task)</h2>
                  <p className="mb-4">
                    Создайте программу <code>variables_practice.py</code>, которая демонстрирует работу с переменными и типами данных:
                    <br/>
                    <em>Create a <code>variables_practice.py</code> program that demonstrates working with variables and data types:</em>
                  </p>
                  <ol className="list-decimal ml-6 space-y-2">
                    <li>
                      Создайте переменные различных типов данных: целое число, число с плавающей точкой, строку и булево значение.
                      <br/>
                      <em>Create variables of different data types: an integer, a floating-point number, a string, and a boolean value.</em>
                    </li>
                    <li>
                      Выведите значение каждой переменной и её тип с помощью функций <code>print()</code> и <code>type()</code>.
                      <br/>
                      <em>Display the value of each variable and its type using the <code>print()</code> and <code>type()</code> functions.</em>
                    </li>
                    <li>
                      Выполните несколько операций с вашими переменными (например, сложение чисел, конкатенацию строк) и выведите результаты.
                      <br/>
                      <em>Perform several operations with your variables (e.g., adding numbers, concatenating strings) and display the results.</em>
                    </li>
                    <li>
                      Преобразуйте некоторые переменные из одного типа в другой и выведите результаты.
                      <br/>
                      <em>Convert some variables from one type to another and display the results.</em>
                    </li>
                  </ol>
                </div>

                <h2>Практические задания (Practice Tasks)</h2>
                
                <InteractiveTask
                  question="Какой тип данных у числа 3.14? (What is the data type of 3.14?)"
                  options={[
                    "int",
                    "float",
                    "str",
                    "bool"
                  ]}
                  correctAnswer={1}
                  explanation="Числа с десятичной точкой в Python имеют тип float."
                />

                <InteractiveTask
                  question="Какой тип данных у значения True? (What is the data type of True?)"
                  options={[
                    "int",
                    "float",
                    "str",
                    "bool"
                  ]}
                  correctAnswer={3}
                  explanation="Значения True и False в Python имеют тип bool (булево значение)."
                />

                <InteractiveTask
                  question={"Какой тип данных у строки \"Hello\"? (What is the data type of \"Hello\"?)"}
                  options={[
                    "int",
                    "float",
                    "str",
                    "bool"
                  ]}
                  correctAnswer={2}
                  explanation="Текст в кавычках в Python имеет тип str (строка)."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonLesson3; 