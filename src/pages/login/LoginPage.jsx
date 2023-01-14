import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "../../store/user/userSlice";


export const LoginPage = () => {
  const dispatch =useDispatch();
  const users= useSelector((state)=>state.users.users);
console.log("here");
  
  useEffect( () => {
    //si hay usuarios guardados in el local storage los ponemos in el redux store
		if (localStorage.getItem("users")) {
			const localUsers =  JSON.parse(localStorage.getItem("users"));
      dispatch(setUsers(localUsers))

		}
    //caso contrario no hay usuarios
    else{
			dispatch(setUsers([]))
			setUsers([]);
		}
	}, [])


function setCurrentUser(){

}

//este method busca en los usuarios guardados si hay match para el email y la contraseña ingresados para logearse
function checkLogin(email, pass) {
  let currUser = null;
  users.forEach(it => {
    if (it.email.toLowerCase() === email && it.pass === pass) {
      currUser = it;
    }
  });
  return currUser;
}

const login = (email,pass) => {
  const currentUser = checkLogin(email, pass);
  if (currentUser) {
    dispatch(setCurrentUser(currentUser));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  } else{
    //mostrar un mensaje de error que no hay nigun usuario con los datos ingresados
  } 

}


  function validateUser() {
    //validar si el usuario que se esta inscribiendo tiene toda la info correcta

    //retornar true si estan correctas y false en el otro caso
  }

  return (
    <div>
      <h1 style={{color:"white"}}>asdasd</h1>
    </div>
  )
}
