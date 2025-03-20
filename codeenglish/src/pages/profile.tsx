import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useState, useEffect } from 'react';

interface UserData {
  id: number;
  name: string;
  email: string;
}

export default function Profile() {
  const [userData, setUserData] = useState<UserData | null>(null);
  
  useEffect(() => {
    // Get user data from localStorage
    try {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        setUserData(JSON.parse(currentUser));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>Профиль | CodeEnglish</title>
        <meta name="description" content="Управление вашим профилем в CodeEnglish" />
      </Head>

      <ProtectedRoute>
        {/* Decorative Elements */}
        <div className="fixed top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] -left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Sidebar */}
              <div className="w-full md:w-1/3">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                      {userData?.name.charAt(0) || 'U'}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{userData?.name || 'Пользователь'}</h2>
                    <p className="text-gray-500 mt-1">{userData?.email || 'email@example.com'}</p>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <button className="w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-3 text-primary">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" fill="currentColor"/>
                      </svg>
                      Мой профиль
                    </button>
                    <button className="w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-3 text-primary">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                      Мои курсы
                    </button>
                    <button className="w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-3 text-primary">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                      </svg>
                      Достижения
                    </button>
                    <button className="w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-3 text-primary">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/>
                      </svg>
                      Настройки
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="w-full md:w-2/3">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Мой профиль</h1>
                    <p className="text-gray-500 mt-1">Управление вашей учетной записью и прогрессом обучения</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Персональная информация</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                          <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                            <input 
                              type="text" 
                              value={userData?.name || ''} 
                              disabled
                              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                              type="email" 
                              value={userData?.email || ''} 
                              disabled
                              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium text-gray-800">Прогресс обучения</h3>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-gray-800">Python Start</h4>
                            <span className="text-sm font-medium text-gray-500">30%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-gray-800">HTML + CSS</h4>
                            <span className="text-sm font-medium text-gray-500">15%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm"
                    >
                      Сохранить изменения
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ProtectedRoute>
    </Layout>
  );
} 