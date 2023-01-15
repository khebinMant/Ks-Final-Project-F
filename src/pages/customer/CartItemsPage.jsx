import { ShoopingLayout } from "../../ui/ShoopingLayout"
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "./components/ProductCart";
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { startCreateOrder } from "../../store/cart/thunks";
import { postOrder } from "../../helpers/orders/postOrder";
import { useNavigate } from "react-router-dom";

export const CartItemsPage = () => {

    const {cart} = useSelector(state => state.cart)
    const [shipmentAddress, setShipmentAddress] = useState('');
    const toast = useRef(null);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Dirección de envío', detail:'No se ha especificado una dirección de envío', life: 3000});
    }

    const accept = async () => {
        dispatch(startCreateOrder(shipmentAddress));
        toast.current.show({severity:'success', summary: 'Compra realizada', detail:'Tu compra se ha efectuado correctamente', life: 3000});
        
        setTimeout(() => {
            navigation('/main') 
        }, 2000);

    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Cancelado', detail: 'Cancelaste la compra', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Estas seguro de realizar estac compra con los datos proporcionados?',
            header: 'Confirma tu compra',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const createOrder = ()=>{
        if(shipmentAddress==''){
            showWarn()
        }
        else{
            confirm1() 
        }
    }

  return (
    <ShoopingLayout>
        <Toast ref={toast} />
        <ConfirmDialog />
        <div  className='container-p'>
            <h1>TU CARRITO</h1>
            <span>({cart.items.length || 0} artículos)</span>
            <div className='product-container' style={{display:'flex', flexDirection:'row'}}>
                <div className='product-basic' style={{display:'flex', flexDirection:'column'}}>
                    {
                        cart.items.map((item, index)=>(
                            <ProductCart item={item} key={index}/>
                        ))
                    }
                </div>

                <div className='product-cart' style={{display:'flex', flexDirection:'column'}}>
                    <h1>Resumen de la orden ({cart.items.length || 0})</h1>
                    <div  style={{display:'flex', flexDirection:'column'}}>
                            <p><b>Subtotal :</b> {cart.totalPrice}$</p>
                            <p><b>Total :</b>{ Math.round(cart.totalPrice + cart.totalPrice *0.12)}$</p>
                    </div>
                    <div  style={{display:'flex', flexDirection:'column'}}>
                        <h2>Pagar con saldo Paypal</h2>
                        <img className='image-cover-n' alt="cover" src={"https://www.paypalobjects.com/webstatic/icon/pp258.png"} />
                        <p><b>Total :</b>{ Math.round(cart.totalPrice + cart.totalPrice *0.12)}$</p>
                        <p><b>Dirección de envío</b></p>
                        <InputText value={shipmentAddress} onChange={(e) => setShipmentAddress(e.target.value)} />
                    </div>
                    <Button disabled={cart.items.length === 0} onClick={createOrder} style={{marginTop:50}} label="Realizar compra" icon="pi pi-check" />
                </div>
            </div>
        </div>
    </ShoopingLayout>
  )
}
