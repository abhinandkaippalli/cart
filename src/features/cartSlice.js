import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: 'addItem',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            if (item) {
                state.products.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.products.filter((item) => item.products.id !== action.payload.id)
        },
        increment: (state, action) => {
            state.find((item) => {
                if (item.products.id === action.payload.id) {
                    item.products.quantity = item.quantity + 1
                }
            })
        },
        decrement: (state, action) => {
            state.find((item) => {
                if (item.products.id === action.payload.id) {
                    item.products.quantity = item.quantity - 1
                }
            })
        },
        sum: (state) => {
            state.products.sum = state.products.quantity * state.quantity.price
        }
    }
})

export const { addToCart, removeFromCart, increment, decrement, totalPrice, sum } = cartSlice.actions

export default cartSlice.reducer