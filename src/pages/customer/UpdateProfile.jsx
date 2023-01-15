import { useEffect, useRef, useState } from "react";
import { ShoopingLayout } from "../../ui/ShoopingLayout";
import "../../style/updateProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../helpers/users/updateUser";
import { setCurrentUser } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const currentUser=useSelector((state)=>state.users.currentUser);
    const dispatcher=useDispatch();
    //los estados del mensaje warning
  const [warningMessage,setWarningMessage]=useState("This is a test message");
  const warningRef=useRef(null);


    useEffect(()=>{
        console.log(currentUser);
        setEmail(currentUser.email);
        setName(currentUser.name);
        
    },[]);

    function showWarning(message,bgColor="#BD7C0C",textColor="white"){
		setWarningMessage(message);
			warningRef.current.style.display="block"
      warningRef.current.style.backgroundColor=bgColor;
      warningRef.current.style.color=textColor;
			setTimeout(()=>{
				warningRef.current.style.display="none"
			},2000)
	}

    function handleOnChange(e){
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

function camposLlenos(){
    console.log(name,email,pass);
    return (name.trim()==="" || email.trim()==="" || pass.trim()==="") ? false : true; 
}

    const update = async ()=>{
        if(!camposLlenos()){
            showWarning("Porfavor llenar todos los campos","yellow","black");
        }else{
            const userToUpdate={
                id: currentUser.id,
                name: name,
             email: email,
             password: pass ,
             role:currentUser.role,
             cards:currentUser.cards
            };
              const response= await updateUser(userToUpdate);
    
              if(response!=null){
                showWarning("El usuario fue actualizado ","green","white");
                dispatcher(setCurrentUser(userToUpdate))
                localStorage.setItem("currentUser",JSON.stringify(userToUpdate));
                setPass("");
              }else{
                showWarning("Algo fue mal","red","black");
              }
        }
        
    }
    function goHome(){
        navigation("/main");
    }

    return ( 
        <div>
           <ShoopingLayout></ShoopingLayout>
          
        <div className="updateProfileContaier">
        <h1 style={{color:"black"}}>Updating profile</h1>

        <div className="wariningContiner" id="warningLogin" ref={warningRef}>
					{warningMessage}
				</div>
        Nombre:
        <input name="nameInput" placeholder="Name" type="text" value={name} onChange={handleOnChange} /><br />
        Email:
          <input name="emailInput" placeholder="Email" type="text" value={email} onChange={handleOnChange} /><br />
          Password:
          <input name="passInput" placeholder="Password" type="password" value={pass} onChange={handleOnChange} /><br/>
          <button onClick={update}>Update</button>


        </div>
        <div className="btnCont">
        <button className="homeBtn" onClick={goHome}>Home</button>
        </div>

        </div>

     );
}
 
export default UpdateProfile;