import React, { useEffect, useRef, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import kamaleon from "../assets/user.jpeg";
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import "./styles/NavBarFooter.css";
import { setCurrentUser } from "../store/user/userSlice";
import { resetCart } from "../store/cart/cartSlice";


export const CustomerNavBar = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const [canSearch, setCanSearch] = useState(true);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const menu = useRef(null);

  const {cart} = useSelector(state => state.cart)
  

  useEffect(() => {
    if (
      location.pathname === "/search"
    ) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }, [location]);

  const handleModal = () => {
    setModal(!modal);
  };

  const calcItems = ()=>{
    if(cart.items){
      return cart.items.length
    }
    else{
      return 0
    }
  }

  const onSearch = (e) => {
  };

  const goToCart = () =>{
    navigation('/cart')
  }

  const itemsLog = [
    {
      label: "Editar perfil",
      command: () => {
        // dispatch(startLogout());
      },
    },
    {
      label: "Cerrar Sesión",
      command: () => {
        /*
        al presionar cerar session se va a borrar el current user del local storage
        y se va a actualizar el current user in el store para null
        */ 
        dispatch(setCurrentUser(null));
        localStorage.removeItem("cart")
        localStorage.removeItem("currentUser");
      },
    },
  ];

  const items = [

  ];

  const start = (
    <>
      <img
        alt="logo"
        src="https://www.dondominio.com/assets/images/products/domains/shop.png"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        width="auto"
        className="mr-2"
      ></img>
    </>
  );
  const end = (
    <div className="something">
      {canSearch ? (
        <InputText
          onChange={onSearch}
          className="search-input"
          placeholder="Buscar"
          type="text"
        />
      ) : (
        <></>
      )}
      <i onClick={goToCart} className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '3rem', marginTop:'15px', cursor:'pointer' }}><Badge  size="large" value={cart.items.length || 0} severity="danger" ></Badge></i>
      <Menu model={itemsLog} popup ref={menu} id="popup_menu" />
      <Avatar
        onClick={(event) => menu.current.toggle(event)}
        image={kamaleon}
        className="user-avatar"
        size="large"
        shape="circle"
      />
    </div>
  );

  return (
    <div>
      <div>
        <Menubar
          style={{
            backgroundColor: "#14B8A6",
            marginBottom:"50px",
            color: "#AAAAAA",
            fontSize: "15px",
            fontWeight: "bold",
          }}
          model={items}
          start={start}
          end={end}
        />
      </div>
    </div>
  );
};
