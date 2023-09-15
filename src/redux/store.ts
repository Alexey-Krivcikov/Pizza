import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

// Получаем тип всего хранилища
export type RootState = ReturnType<typeof store.getState>;
// Получаем типы всех экшенов
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
