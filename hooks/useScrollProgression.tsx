import { useEffect, useState } from 'react';

const useScrollProgression = () => {
  const [completion, setCompletion] = useState<Number>(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number(Number(currentProgress / scrollHeight).toFixed(2))
        );
      }
    };
    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);
  return completion;
};

export default useScrollProgression;
