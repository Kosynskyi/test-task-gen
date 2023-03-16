import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import BackToTop from 'components/BackToTop';
import { getToken } from 'services/api';

const HomePage = lazy(() => import('pages/HomePage'));
const CoursePage = lazy(() => import('pages/CoursePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) {
      getToken().then(setToken);
    } else {
      return;
    }
  }, [token]);

  localStorage.setItem('token', token);
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
