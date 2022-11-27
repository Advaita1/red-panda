import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import imageReducer from './slices/imageSlice'

const store = configureStore({
  reducer: {
    nav: navReducer,
    image: imageReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;