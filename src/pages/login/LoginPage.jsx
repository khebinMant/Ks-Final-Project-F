import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUser, setCurrentUser, setUsers } from "../../store/user/userSlice";


export const LoginPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  


  useEffect(() => {
    //si hay usuarios guardados in el local storage los ponemos in el redux store
    if (localStorage.getItem("users")) {
      const localUsers = JSON.parse(localStorage.getItem("users"));
      dispatch(setUsers(localUsers))
      console.log("called");

    }
    //caso contrario no hay usuarios
    else {
      dispatch(setUsers([]))
      setUsers([]);
    }
  }, [])


/**
	 * 	este method validra si el correo ingresado existe o no
	 * @param {el correo ingresado del usuairo} email 
	 * @returns true si el correo exite y false si no
	 */
function chekcUserExists(email) {
  if(users.length>0){
  return users.find(it => it.email.toLowerCase() === email.toLowerCase());
}
return false;
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



  const login = (email, pass) => {
    const currentUser = checkLogin(email, pass);
    /*const currentUser = {
      email: "demo@hotmail.com",
      pass: "123456"
    };*/
    if (currentUser) {
      dispatch(setCurrentUser(currentUser))
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      console.log("user does not exist");
      //mostrar un mensaje de error que no hay nigun usuario con los datos ingresados
    }
  }


  //este method despues de llamar la method validateUser, en el caso que los datos son validos ingresera al usuario y lo agrega al la lista de usuarios
  function signUp(){
    const valid = validateUser();
    
    if (valid) {
      const user = {
        name: name,
        email: email,
        pass: pass
      }
      if (!chekcUserExists(user.email)) {
       // showWarning("Successfully registered")
        dispatch(addUser(user));
        
       console.log(users);
       //setUsers(props.userReducer.users);
        localStorage.setItem("users", JSON.stringify(users));
        setName("");
        setEmail("");
        setPass("");
        


      }
      else {
        console.log("User already exists ",users);
        //showWarning("email is already registered");
      }

    } else {
      //showWarning("please fill the fields with correct info");
    }


  }




  function handleOnChange(e) {
    switch (e.target.name) {
      case "emailInput":
        setEmail(e.target.value);
        break;
      case "nameInput":
        setName(e.target.value);
        break;
      case "passInput":
        setPass(e.target.value);
        break;
    }

  }

  function validateUser() {
    //validar si el usuario que se esta inscribiendo tiene toda la info correcta
    
    //retornar true si estan correctas y false en el otro caso

    return true;
  }


    //retornar true si estan correctas y false en el otro caso

  return (
    <div>
      <h1 style={{ color: "white" }}>asdasd</h1>
      <button onClick={login}>Login</button>
      <div>
        <h1>sign up mock</h1>
        <input name="emailInput" type="text" value={email} onChange={handleOnChange} /><br />
        <input name="nameInput" type="text" value={name} onChange={handleOnChange} /><br />
        <input name="passInput" type="password" value={pass} onChange={handleOnChange} /><br />
        <button onClick={signUp}>sign up</button>
      </div>
    </div>
  )
}
