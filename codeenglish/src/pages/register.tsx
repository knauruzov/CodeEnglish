import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (formData.password.length < 8) {
      setError('Пароль должен содержать минимум 8 символов');
      return;
    }

    setIsLoading(true);
    
    try {
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      if (existingUsers.some((user: any) => user.email === formData.email)) {
        setError('Пользователь с таким email уже существует');
        setIsLoading(false);
        return;
      }
      
      // Create new user (without storing actual password in localStorage for demo)
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        // In a real app, we would hash the password before storing
        password: formData.password,
      };
      
      // Add new user to localStorage
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      
      // Set current user
      localStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      }));
      
      // Simulate server delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to home page or dashboard
      window.location.href = '/';
    } catch (error) {
      console.error('Registration error:', error);
      setError('Произошла ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Регистрация | CodeEnglish</title>
        <meta name="description" content="Создайте аккаунт в CodeEnglish" />
      </Head>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <motion.div 
          className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900">
              Создать аккаунт
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Уже есть аккаунт?{' '}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
                Войдите
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Подтвердите пароль
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <motion.button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Регистрация...
                  </div>
                ) : (
                  'Зарегистрироваться'
                )}
              </motion.button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Регистрируясь, вы соглашаетесь с нашими{' '}
            <Link href="/terms" className="text-primary hover:text-primary/80">
              Условиями использования
            </Link>{' '}
            и{' '}
            <Link href="/privacy" className="text-primary hover:text-primary/80">
              Политикой конфиденциальности
            </Link>
          </p>
        </motion.div>
      </div>
    </Layout>
  );
} 