import { useEffect, useRef, useState } from "react"
import { Checking } from "../../../components/Checking";
import { getProduct } from "../../../helpers/products/getProduct";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useDispatch } from "react-redux";
import { startCreateOrder, startDeleteItemFromCart, startUpdateQuantityItemToCart } from "../../../store/cart/thunks";
import { Toast } from 'primereact/toast';

export const ProductCart = ({item}) => {

    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false)
    const [newQuantity, setNewQuantity] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
        getProductItem();
    }, [])

    const getProductItem = async ()=>{
        const response = await Promise.resolve(getProduct(item.productId));
        setProduct(response)
        setIsLoading(false)
    }

    const updateQuantity = () =>{
        if(newQuantity === 0){
            setIsEdit(false)
            return;
        }
        let _item = {
            quantity: newQuantity,
            price: item.price,
            productId: item.productId
        }
        dispatch(startUpdateQuantityItemToCart(_item))
        setIsEdit(false)
    }

    const deleteItem = ()=>{
        dispatch(startDeleteItemFromCart(item))
    }
   
    
  return (
    isLoading?
    <Checking/>
    :
    <>
        {
        isEdit === false?
        <>
            <h6>{product.name}</h6>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center',marginTop:'10px', gap:'20px'}}>
                <ul style={{listStyle:'none'}}>
                    <li>
                        <img className='image-cover-n' alt="cover" src={product.photoUrl||"https://icons.veryicon.com/png/o/miscellaneous/basic-icon-1/unknown-18.png"} />
                    </li>
                </ul>
                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                    <div>
                        <p><b>Precio: </b> {item.price}.0$</p>
                        <p><b>Cantidad: </b> {item.quantity}</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'20px'}}>
                        <Button label="Editar cantidad" onClick={()=>setIsEdit(true)} className="p-button-secondary" />
                        <Button label="Eliminar" onClick={()=>deleteItem(item.productId)} className="p-button-danger" />
                    </div>
                </div>
            </div>
        </>
        :
        <>
            <h6>{product.name}</h6>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center',marginTop:'10px', gap:'20px'}}>
                <ul style={{listStyle:'none'}}>
                    <li>
                        <img className='image-cover' alt="cover" src={product.photoUrl||"https://icons.veryicon.com/png/o/miscellaneous/basic-icon-1/unknown-18.png"} />
                    </li>
                </ul>
                <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
                    <div>
                        <p><b>Precio: </b> {item.price}.0$</p>
                        <InputNumber  value={item.quantity} onValueChange={(e) => setNewQuantity(e.value)} />
                    </div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'20px'}}>
                        <Button onClick={updateQuantity} label="Actualizar" className="p-button-warning" />
                        <Button onClick={()=> setIsEdit(false)} label="Cancelar" className="p-button-secondary" />
                    </div>
                </div>
                
            </div>
        </>
        }
    </>
  )
}
