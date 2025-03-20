import { NextPage } from 'next';
import Layout from '../../../../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

// Создаем компоненты иконок вместо импорта из heroicons
const ChevronLeftIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

interface InteractiveTaskProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const InteractiveTask: React.FC<InteractiveTaskProps> = ({
  question,
  options,
  correctAnswer,
  explanation,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const resetTask = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showExplanation}
            className={`w-full text-left p-3 rounded-lg border transition-colors ${
              selectedAnswer === index
                ? index === correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-red-100 border-red-500'
                : 'hover:bg-gray-50 border-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-700">{explanation}</p>
          </div>
          <button
            onClick={resetTask}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Попробовать снова (Try Again)
          </button>
        </div>
      )}
    </div>
  );
};

const HtmlCssLesson1: NextPage = () => {
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
              <Link href="/courses/html-css">
                <span className="hover:text-primary cursor-pointer">HTML и CSS</span>
              </Link>
              <span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Урок 1: Что такое HTML</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium">Модуль 1</span>
                <span className="ml-3 text-lg font-semibold">Урок 1: Что такое HTML</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/courses/html-css/module1/lesson2">
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
                <h1>Что такое HTML (What is HTML)</h1>
                
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
                      <li><span className="font-medium">markup</span> — разметка</li>
                      <li><span className="font-medium">tag</span> — тег</li>
                      <li><span className="font-medium">element</span> — элемент</li>
                      <li><span className="font-medium">structure</span> — структура</li>
                      <li><span className="font-medium">document</span> — документ</li>
                      <li><span className="font-medium">webpage</span> — веб-страница</li>
                      <li><span className="font-medium">browser</span> — браузер</li>
                      <li><span className="font-medium">render</span> — отображать</li>
                    </ul>
                  </div>
                </div>

                <h2>Введение в HTML (Introduction to HTML)</h2>
                <p>
                  HTML (HyperText Markup Language) — это стандартный язык разметки для создания веб-страниц. 
                  Он описывает структуру веб-страницы с помощью специальных тегов.
                  <br/>
                  <em>HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
                  It describes the structure of a web page using special tags.</em>
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
                          Первая версия HTML была создана Тимом Бернерсом-Ли в 1991 году. 
                          Сейчас HTML5 является последней версией стандарта.
                          <br/>
                          <em>The first version of HTML was created by Tim Berners-Lee in 1991. 
                          HTML5 is now the latest version of the standard.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Базовая структура HTML (Basic HTML Structure)</h2>
                <p>
                  Каждый HTML-документ начинается с объявления типа документа и имеет базовую структуру:
                  <br/>
                  <em>Every HTML document starts with a document type declaration and has a basic structure:</em>
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre><code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Моя первая страница (My First Page)</title>
  </head>
  <body>
    <h1>Привет, мир! (Hello, World!)</h1>
    <p>Это мой первый HTML-документ.</p>
    <p>This is my first HTML document.</p>
  </body>
</html>`}</code></pre>
                </div>

                <h2>Основные HTML-теги (Basic HTML Tags)</h2>
                <p>
                  Вот основные теги, которые вы будете использовать чаще всего:
                  <br/>
                  <em>Here are the basic tags you will use most often:</em>
                </p>
                <ul>
                  <li><code>&lt;html&gt;</code> — корневой элемент документа</li>
                  <li><code>&lt;head&gt;</code> — содержит метаданные</li>
                  <li><code>&lt;body&gt;</code> — содержит видимое содержимое</li>
                  <li><code>&lt;h1&gt;</code> до <code>&lt;h6&gt;</code> — заголовки</li>
                  <li><code>&lt;p&gt;</code> — параграфы</li>
                  <li><code>&lt;div&gt;</code> — блочный контейнер</li>
                  <li><code>&lt;span&gt;</code> — строчный контейнер</li>
                </ul>
                <ul className="mt-2">
                  <li><code>&lt;html&gt;</code> — root element of the document</li>
                  <li><code>&lt;head&gt;</code> — contains metadata</li>
                  <li><code>&lt;body&gt;</code> — contains visible content</li>
                  <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> — headings</li>
                  <li><code>&lt;p&gt;</code> — paragraphs</li>
                  <li><code>&lt;div&gt;</code> — block container</li>
                  <li><code>&lt;span&gt;</code> — inline container</li>
                </ul>

                <h2>Практическое задание (Practical Task)</h2>
                <p>
                  Создайте свою первую HTML-страницу:
                  <br/>
                  <em>Create your first HTML page:</em>
                </p>
                <ol>
                  <li>Создайте новый файл с расширением .html</li>
                  <li>Добавьте базовую структуру HTML</li>
                  <li>Добавьте заголовок и несколько параграфов</li>
                  <li>Откройте файл в браузере</li>
                </ol>
                <ol className="mt-2">
                  <li>Create a new file with .html extension</li>
                  <li>Add basic HTML structure</li>
                  <li>Add a heading and several paragraphs</li>
                  <li>Open the file in a browser</li>
                </ol>

                <h2>Проверка знаний (Knowledge Check)</h2>
                <InteractiveTask
                  question="Какой тег используется для создания заголовка первого уровня?"
                  options={[
                    "&lt;header&gt;",
                    "&lt;h1&gt;",
                    "&lt;title&gt;",
                    "&lt;head&gt;"
                  ]}
                  correctAnswer={1}
                  explanation="Тег &lt;h1&gt; используется для создания заголовка первого уровня. Тег &lt;header&gt; используется для создания шапки страницы, &lt;title&gt; для заголовка вкладки браузера, а &lt;head&gt; для метаданных страницы."
                />

                <InteractiveTask
                  question="Где должен находиться тег &lt;title&gt;?"
                  options={[
                    "Внутри &lt;body&gt;",
                    "Внутри &lt;head&gt;",
                    "Внутри &lt;html&gt;",
                    "Внутри &lt;div&gt;"
                  ]}
                  correctAnswer={1}
                  explanation="Тег &lt;title&gt; должен находиться внутри тега &lt;head&gt;, так как он является метаданным страницы. Тег &lt;head&gt; содержит всю служебную информацию о странице."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HtmlCssLesson1; 