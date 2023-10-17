import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from './features/quizSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage
  };

  const persistedReducer = persistReducer(persistConfig, quizSlice.reducer);

  const store = configureStore({
    reducer: {
      quiz: persistedReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  });

export const persistor = persistStore(store);

export default store;