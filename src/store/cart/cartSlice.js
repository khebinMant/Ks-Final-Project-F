import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {
            totalPrice:0,
            status:"CREATED",
            shipmentAddress: "",
            items:[]
        }
    },
    reducers: {
        setCurrentCart:(state,action)=>{
            state.cart = action.payload.cart;
        },
        addItemToCart:(state,action)=>{
            state.cart.items.push(action.payload.item);
            state.cart.totalPrice += action.payload.item.price * action.payload.item.quantity
        },
        deleteItemToCart:(state,action)=>{
            let i;
            state.cart.items.map((item, index)=>{
                if(item.productId === action.payload.productId){
                    i = index;
                }
                return item;
            });

            state.cart.items.splice(i,1)
        },
        updateTotalPrice:(state,action)=>{
            state.cart.totalPrice -= action.payload.price
        },
        updateItemQuantity:(state,action)=>{
            state.cart.items.map((item) =>{
                if(item.productId === action.payload.item.productId){
                    item.quantity =  action.payload.item.quantity
                }
                return item;
            }
            )
            state.cart.totalPrice = action.payload.newPrice

        },
        setShipmentAddress:(state,action)=>{
            state.cart.shipmentAddress = action.payload.shipmentAddress
        },
        resetCart:(state)=>{
            state.cart.totalPrice = 0
            state.cart.status = "CREATED"
            state.cart.shipmentAddress = "CREATED"
            state.cart.items = []
        }
    }
});


// Action creators are generated for each case reducer function
export const { addItemToCart, deleteItemToCart , updateTotalPrice, resetCart, setCurrentCart, updateItemQuantity, setShipmentAddress} = cartSlice.actions;