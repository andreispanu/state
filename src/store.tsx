import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import forexReducer from './features/forexSlice';

const store = configureStore({
    reducer: {
      auth: authReducer,
      forex: forexReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;