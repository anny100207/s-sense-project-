import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token,setToken] = useState(false);
    const login = async()=>{
        let r = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                email:"anraggupta5504@gmail.com",
                password:"Anurag",
            })
        })
        let data = await r.json();
        setToken(data.token)
        
        // const logout = () => {
        //    setToken("")
        // }
    }
    const logout =()=>{
        setToken("")
    }
    return <AuthContext.Provider value={{token,login,logout}}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider