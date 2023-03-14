import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { courseApi } from './CourseSlice';

export const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    courseApi.middleware,
  ],
});

setupListeners(store.dispatch);
