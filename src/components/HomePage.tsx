import StaticPage from 'components/StaticPage';
import { Suspense, lazy } from 'react';

const HomePage = () => {
  if (typeof window === 'undefined') return (
    <Suspense fallback={<StaticPage />}>
      <StaticPage />
    </Suspense>
  );

  const HomeParallax = lazy(() => import('components/HomeParallax'));

  return (
    <Suspense fallback={<StaticPage />}>
      <HomeParallax />
    </Suspense>
  );
};

export default HomePage;