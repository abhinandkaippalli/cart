// import list from "../Data";
// import { createSlice } from "@reduxjs/toolkit";

// const productState = {
//     data: [
//         ...list
//     ]
// };

// export const productSlice = createSlice({
//     name: 'products',
//     initialState: productState,
//     reducers: {
//         getBooks: (state) => {
//             return {
//                 ...state,
//                 data: state.data.filter((item) => item.category === 'books')
//             };
//         },
//         getElectronics: (state) => {
//             return {
//                 ...state,
//                 data: state.data.filter((item) => item.category === 'electronics')
//             };
//         },
//         getKids: (state) => {
//             return {
//                 ...state,
//                 data: state.data.filter((item) => item.category === 'kids')
//             };
//         },
//         getSports: (state) => {
//             return {
//                 ...state,
//                 data: state.data.filter((item) => item.category === 'sports')
//             };
//         },
//     }
// });

// export const { getBooks, getElectronics, getKids, getSports } = productSlice.actions;

// export default productSlice.reducer;
