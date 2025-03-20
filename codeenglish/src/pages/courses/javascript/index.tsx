import { useEffect } from 'react';
import { useRouter } from 'next/router';

const JavaScriptCourse = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/courses/javascript/coming-soon');
  }, [router]);

  return null;
};

export default JavaScriptCourse; 