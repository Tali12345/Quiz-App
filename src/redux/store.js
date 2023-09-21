import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from './features/quizSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      quiz: quizSlice.reducer,
    },
  });

export const store = createStore();