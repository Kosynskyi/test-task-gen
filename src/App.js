import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import BackToTop from 'components/BackToTop';

const HomePage = lazy(() => import('pages/HomePage'));
const CoursePage = lazy(() => import('pages/CoursePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <BackToTop />
    </>
  );
}

export default App;
//	https://wisey.app/assets/images/web/course-covers/toxic-people=======/cover.webp
// Щоб показати зображення:

// - для курсу: `previewImageLink + '/cover.webp'`
// - для уроку: `previewImageLink + '/' + lesson.order + '.webp'`

// В реалізації використовувати стандартний відеоплеєр.

// https://wisey.app/assets/images/web/course-covers/toxic-people/cover.webp
