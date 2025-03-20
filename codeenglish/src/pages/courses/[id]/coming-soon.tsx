import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Link from 'next/link';

const ComingSoonCourse: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const courseInfo = {
    'javascript': {
      title: 'JavaScript: Интерактивные веб-приложения',
      features: [
        'Современный JavaScript и ES6+',
        'Разработка интерактивных веб-приложений',
        'Работа с REST API и асинхронным программированием',
        'Практика с реальными проектами'
      ]
    },
    'java': {
      title: 'Java: Объектно-ориентированное программирование',
      features: [
        'Основы Java и ООП',
        'Работа с Spring Framework',
        'Разработка корпоративных приложений',
        'Практика с промышленными технологиями'
      ]
    },
    'data-science': {
      title: 'Data Science: Анализ данных на Python',
      features: [
        'Анализ данных с Python',
        'Машинное обучение и статистика',
        'Визуализация данных',
        'Работа с реальными датасетами'
      ]
    }
  };

  const course = courseInfo[id as keyof typeof courseInfo];

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Курс не найден</h1>
            <Link href="/courses" className="text-primary hover:text-primary/80">
              Вернуться к списку курсов
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
                <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Скоро открытие</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-white/90 mb-8">
                Курс находится в разработке и скоро будет доступен
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Features */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">Что будет в курсе:</h2>
                <div className="grid gap-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg text-gray-700">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Early Access Form */}
              <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Получить ранний доступ</h2>
                  <p className="text-gray-600">
                    Оставьте свой email, и мы сообщим вам о запуске курса первыми
                  </p>
                </div>
                <form className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                    >
                      Подписаться
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Хотите изучать программирование уже сейчас?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Посмотрите другие наши курсы, которые уже доступны для обучения
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
              >
                <span>Смотреть все курсы</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComingSoonCourse; 