import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            //check item is already exits
            const exitsItem = state.products.find((item) => item.id === newItem.id);

            if (exitsItem) {
                exitsItem.quantity++;
                exitsItem.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1,
                    productName: newItem.productName,
                    category: newItem.category,
                    totalPrice: newItem.price
                });
                state.totalPrice = newItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            const exitstingItem = state.products.find((item) => item.id === id.id)
            if (exitstingItem) {
                state.products = state.products.filter(
                    (item) => item.id !== id.id
                );
                state.totalPrice -= exitstingItem.price;
            }
        },
        increment: (state, action) => {
            state.products.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = item.quantity + 1;
                }
            });
        },
        decrement: (state, action) => {
            state.products.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = item.quantity - 1;
                }
            });
        },
        sum: (state) => {
            state.totalPrice = state.products
                .map((item) => item.quantity * item.price)
                .reduce((a, b) => a + b, 0);
        },
    },
});

export const { addToCart, removeFromCart, increment, decrement, totalPrice, sum } = cartSlice.actions

export default cartSlice.reducer