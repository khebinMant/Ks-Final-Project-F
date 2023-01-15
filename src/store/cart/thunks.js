import { useSelector } from "react-redux"
import { postOrder } from "../../helpers/orders/postOrder"
import { addItemToCart, deleteItemToCart, resetCart, setCurrentCart, setShipmentAddress, updateItemQuantity, updateTotalPrice } from "./cartSlice"

export const startAddItemToCart = (item) =>{
    return async (dispatch, getState)=>{
        
        //Despachar
        dispatch(addItemToCart({item}))
        
        const  cart  = getState().cart.cart
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startCreateOrder = (shipmentAddress) =>{
  
    return async (dispatch, getState)=>{
        
        const  currentUser  = getState().users.currentUser
        console.log(currentUser)

        dispatch(setShipmentAddress({shipmentAddress}))

        const response = await Promise.resolve(postOrder(getState().cart.cart,currentUser.id));
        console.log(response);

        //Limpiar el carrito
        dispatch(resetCart())
        
        const  cart  = getState().cart.cart
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startDeleteItemFromCart = (item) =>{
    return async (dispatch, getState)=>{

        const {productId} = item
        let price = item.price * item.quantity 
        //Despachar
        dispatch(deleteItemToCart({productId}))
        dispatch(updateTotalPrice({price}))
        
        const  cart  = getState().cart.cart
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startUpdateQuantityItemToCart = (item) =>{
    return async (dispatch, getState)=>{

        const  cart  = getState().cart.cart

        let oldPrice = cart.totalPrice;
        let oldItem;

        cart.items.forEach(i => {
            if(i.productId === item.productId){
                oldItem = i
            }
        });

        oldPrice -=  oldItem.price * oldItem.quantity

        let newPrice = oldPrice + (item.quantity * item.price)
        
        console.log(item)
        //Despachar
        dispatch(updateItemQuantity({item,newPrice}))

        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const getCurrentCart = ()=>{
    return async( dispatch, getState ) =>{

        let emptyCart = {
            totalPrice:0,
            status:"CREATED",
            shipmentAddress: "",
            items:[]
        }

        const cart =  JSON.parse( localStorage.getItem('cart')) || emptyCart;
        
        dispatch(setCurrentCart({cart}))

    }
}


