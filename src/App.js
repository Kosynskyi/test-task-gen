import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';

const HomePage = lazy(() => import('pages/HomePage'));
const CoursePage = lazy(() => import('pages/CoursePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
