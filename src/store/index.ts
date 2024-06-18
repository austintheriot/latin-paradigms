import { configureStore } from "@reduxjs/toolkit";
import { csvReducer } from "@/store/csv/slice";

export const store = configureStore({
  reducer: {
    csv: csvReducer,
  },
  // Add the listener middleware to the store.
  // NOTE: Since this can receive actions with functions inside,
  // it should go before the serializability check middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;

