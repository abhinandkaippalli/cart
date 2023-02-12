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
                if (newItem.quantity) {
                    exitsItem.quantity = newItem.quantity
                    exitsItem.totalPrice = newItem.quantity * newItem.price;
                } else {
                    exitsItem.quantity++
                    exitsItem.totalPrice += newItem.price
                }
            } else {
                state.products.push({
                    id: newItem.id,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: newItem.quantity || 1,
                    productName: newItem.productName,
                    category: newItem.category,
                    totalPrice: newItem.price * (newItem.quantity || 1)
                });
                state.totalPrice = newItem.price
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
        incrementQuantity: (state, action) => {
            state.products.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity++;
                    item.totalPrice += item.price;
                }
            });
        },
        decrementQuantity: (state, action) => {
            state.products.forEach((item) => {
                if (item.id === action.payload.id) {
                    if (item.quantity !== 0) {
                        item.quantity = item.quantity - 1;
                        item.totalPrice -= item.price;
                    }
                }
            });
        },
        totalSum: (state) => {
            let total = 0;
            state.products.forEach((item) => {
                total += item.totalPrice;
            });
            state.totalPrice = total;
        }
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, totalSum } = cartSlice.actions

export default cartSlice.reducer