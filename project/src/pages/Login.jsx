import { AuthContext } from "../context/AuthContext";
import React from "react"
const [form,setForm] = useState("");
    const {login} = useContext(AuthContext)
   
    const handleForm =(e) =>{
        const field = e.target;
        setForm({
            ...form,
        [field.name] : field.value
            
        })
    }

    const handleSubmit = (e) =>{   
        e.preventDefault();
        login()
    
     } 

const Login = () => {
      
  return (
    <div style={{margin:"auto",width:"80px"}}>
      <form onSubmit={handleSubmit}>
      <input type="email" placeholder='Enter Your Emailaddress' onChange={handleForm} /><br />
      <input type="password" placeholder="Enter Your Password"  onChange={handleForm}/><br />
      <button onClick={()=>handleClick()}>Login</button>
      </form>
    </div>
  )
  }

export default Login