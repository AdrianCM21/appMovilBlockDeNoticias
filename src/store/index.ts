import { configureStore } from '@reduxjs/toolkit';
import noticiasSlice from './noticias';
import authSlice from './authSlice';
import alertSlice from './alertSlice';

export const store = configureStore({
  reducer: {
    noticias: noticiasSlice,
    auth: authSlice,
    alert: alertSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
