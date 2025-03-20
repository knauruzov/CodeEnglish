import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: ReactNode;
}

// Component that protects routes by requiring authentication
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      try {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
          // Not authenticated, redirect to login
          router.push('/login');
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication check error:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Only render the protected content if authenticated
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute; 