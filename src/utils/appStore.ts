import { combineReducers, configureStore } from "@reduxjs/toolkit";
import watchlistSlice from "./watchlistSlice";
import watchedSlice from "./watchedSlice";
import answersSlice from "./answersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  watchlist: watchlistSlice,
  watched: watchedSlice,
  surveyAnswers: answersSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(appStore);

export { appStore, persistor };
export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore["getState"]>;
