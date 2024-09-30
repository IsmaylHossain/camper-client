import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TCartItem = {
    _id: string;
    category: string;
    description: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    rating: number;
    stock: boolean;
};
const initialState: TCartItem[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const existingItem = state.find(
                (item) => item._id === action.payload._id
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        getCartData: (state) => {
            return state;
        },
        increaseQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find((item) => item._id === action.payload);
            if (item) {
                item.quantity -= 1;
            }
        },
        deleteItem: (state, action) => {
            return state.filter((item) => item._id !== action.payload);
        },
    },
});

export const {
    addToCart,
    getCartData,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
