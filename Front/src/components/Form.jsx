import Styles from  "./Form.module.css"
// import logo from "./img/Rickrosado.png";
// import logo3 from "./img/morty4.jpg"
import { useState } from "react"
import Validation from "./Validation";
import imagenprin from "./img/imagenform.png";


const Form = ({ login})=> {

    const [userData, setUserData] = useState( 
        { username: '', 
          password: '' 
        }
        );

        const [errors, setErrors] = useState( 
            { username: '', 
              password: '' 
            }
            );


            const handleSubmit =(event)=>{
              event.preventDefault();
             return login(userData)
            };


        const handleInputChange = (event) =>{
            setUserData({
                ...userData ,
                [event.target.name] :event.target.value
            })

          setErrors(Validation({
        ...userData,
          [event.target.name] :event.target.value
        }))
      }
            
   


    return(
        <form  onSubmit={handleSubmit}>
        <div className={Styles.barrarick}>
        <div className={Styles.div}>

    <label htmlFor="username" className={Styles.username}id="username">Username:</label>
    <input className={Styles.inputusername}
     id="username"
     type="text" 
     name="username"     
     value={userData.username} 
     placeholder="Email"     
     onChange={handleInputChange}  />
  
    {errors.username && <p className={Styles.errorsusername}> {errors.username}</p>}
  
    <label htmlFor="password" className={Styles.password} id="password">Password:  </label> 

    <input className={Styles.inputpassword}
     id="password"
     type="password" 
     name="password"
     value={userData.password} 
     onChange={handleInputChange}  
     placeholder="Password"/>

 {errors.password && <p className={Styles.errorspassword}> {errors.password}</p>}


    <button className={Styles.botonlogin}>Login</button>
    {/* <img className={Styles.imagenlogo} src={logo}alt="logorick1"/>
    <img className={Styles.imagenlogomorty} src={logo3} alt="logorick"/> */}
</div>

 </div>
 </form>
    )
    }
export default Form;