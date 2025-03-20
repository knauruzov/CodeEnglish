import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DataScienceCourse = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/courses/data-science/coming-soon');
  }, [router]);

  return null;
};

export default DataScienceCourse; 