import { createSlice } from "@reduxjs/toolkit";

export const MyProductSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload);

        },
    }
    })

    export const {addMyProducts} = MyProductSlice.actions;
export default MyProductSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";

// export const myProductSlice = createSlice({
//     name:"product",
//     initialState:{
//         cart:[],
//     },
//     reducers:{
//         addToCart : (state,action) => {
//             const itemInCart = state.cart.find((item) => item.id == action.payload.id);
//             if(itemInCart){
//                 itemInCart.quantity++;
//             }else{
//                 state.cart.push({...action.payload,quantity:1})
//             }
//         },
//         removeFromCart : (state,action) => {
//             const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
//             state.cart = removeFromCart;
//         },
//         incrementQuantity : (state,action) => {
//             const itemInCart = state.cart.find((item) => item.id == action.payload.id);
//             itemInCart.quantity++;
//         },
//         decrementQuantity : (state,action) => {
//             const itemInCart = state.cart.find((item) => item.id == action.payload.id);
//             if(itemInCart.quantity == 1){
//                 const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
//                 state.cart = removeFromCart;
//             }else{
//                 itemInCart.quantity--;
//             }

//         }
//     }
// });


// export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

// export default cartSlice.reducer;