import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'

import cartReducer from "./api/featcher/cartSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(baseApi.middleware),
    
});

 export type RootState = ReturnType<typeof store.getState>;
 
 export type AppDispatch = typeof store.dispatch;
