import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../helpers/users/loginUser";
import { signUp } from "../../helpers/users/signUp";
import { setCurrentUser, setUser } from "../../store/user/userSlice";
import "../../style/loginPage.css";


export const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  //los estados del sign in
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //los estados del signup
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  //los estados del mensaje warning
  const [warningMessage,setWarningMessage]=useState("This is a test message");
	const warningRef=useRef(null);



 
  
  /**
   * este metodo se encarga de mostrar un warning peronalizado al usuario 
   * se le puede pasar en los argumentos mensaje, color de fondo y color de texto
   * @param {el mensaje que queremos mostrar como warning } message 
   * @param {el color del background, en default esta narnaja} bgColor 
   * @param {el color del texto, en default esta blanco} textColor 
   */
  function showWarning(message,bgColor="#BD7C0C",textColor="white"){
		setWarningMessage(message);
			warningRef.current.style.display="block"
      warningRef.current.style.backgroundColor=bgColor;
      warningRef.current.style.color=textColor;
			setTimeout(()=>{
				warningRef.current.style.display="none"
			},2000)
	}

  /**
   * este method compara entre el email y password del user guardado y los email y password ingresados
   * @param {el email ingresado en el input field} email 
   * @param {el password ingresado en el input field} pass 
   * @returns 
   */
  function checkLogin(email, pass) {
    let currUser = null;

    if (user.email === email && user.pass === pass) {

      currUser = user;
    }
    return currUser;
  }


/**
 * este metodo se encarga de logear el usuario
 */
  const login = async () => {
    const currentUser = checkLogin(email, pass);
    //llamar al endopoint de customer y admin para logear 
      const loggedUser=await loginUser(email,pass);
      console.log(loggedUser)
      if(loggedUser){
        dispatch(setCurrentUser(loggedUser))
        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
      }else{
      //mostrar un mensaje de error que no hay nigun usuario con los datos ingresados
      showWarning("Malas credenciales","red","white");
      }

  }


  /**
   * este method despues de llamar la method validateUser, 
   * en el caso que los datos son validos ingresera al usuario y lo agrega al localStorage como user
   */
  async function doSignUp  () {
    const valid = validateUser();
    console.log(valid);

     if (valid) {
       const newUser = {
         name: name,
         email: registerEmail,
         password: registerPass,
         role: role,
         verified:false
       }
 
       const resp=await signUp(newUser);
       if(resp!=null){
        setName("");
        setRegisterEmail("");
        setRegisterPass("");
        showWarning("Se ha registrado el usuario "+name+" exitosamente!","green","white");
       }else{
        showWarning("user already exists!","orange","black");
       }
       
     } else {
       //showWarning("please fill the fields with correct info");
       showWarning("Porfavor llenar todos los campos","red","white");
     }


  }



/**
 * este metodo se encarga de actualizr los estados email,pass,name,registerEmail,registerPass cada vez el valor de algun
 * inputs se cambia
 * @param {los inputs de la pagina de login} e 
 */
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
      case "registerEmail":
        setRegisterEmail(e.target.value);
        break;
      case "registerPass":
        setRegisterPass(e.target.value);
        break;
    }
  }
  /**
   * se encargara de actualizar el estado role al momento de cambiar el valor del check box
   * @param {el checkbox role el que determina si el usuario registrado es ADMIN o CUSTOMER} e 
   */
  function handleRoleChange(e) {

    if (e.target.checked == true) {
      setRole("ADMIN");
    } else {
      setRole("CUSTOMER");
    }

  }

  /**
   * un metodo para hacer una validacion simple y sencilla de los campos del register
   * @returns true is los campos no estan vacillos y false si alguno esta vacillo
   */
  function validateUser() {
    if (registerEmail != "" && name != "" && registerEmail != "") {
      return true;
    }

    return false;
  }



  return (
    <div className="login-signUp-contianer">
      <div className="title">
      <h1 >Made in Ecuador Shop</h1>
      </div>
      <div className="wariningContiner" id="warningLogin" ref={warningRef}>
					{warningMessage}
				</div>
      <div className="outter-contianer">
        <div className="left-signIn">
          <h1 >Sign In</h1>
          <input name="emailInput" placeholder="Email" type="text" value={email} onChange={handleOnChange} /><br />
          <input name="passInput" placeholder="Password" type="password" value={pass} onChange={handleOnChange} /><br />
          <button onClick={login}>Login</button>
        </div>
        <div className="divider"></div>
        <div className="right-signUp">
          <h1>Create an account</h1>

          <input name="nameInput" placeholder="Name" type="text" value={name} onChange={handleOnChange} /><br />
          <input name="registerEmail" placeholder="Email" type="text" value={registerEmail} onChange={handleOnChange} /><br />
          <input name="registerPass" placeholder="Password" type="password" value={registerPass} onChange={handleOnChange} />
          <div className="admin-cont">Admin:<input name="passInput" type="checkbox" onChange={handleRoleChange} /><br /></div>

          <button onClick={doSignUp}>Sign up</button>
        </div>
      </div>
    </div>
  )
}
