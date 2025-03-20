import { useEffect } from 'react';
import { useRouter } from 'next/router';

const JavaCourse = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/courses/java/coming-soon');
  }, [router]);

  return null;
};

export default JavaCourse; 