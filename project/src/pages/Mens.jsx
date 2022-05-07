
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Men from './Men';


const Mens = () => {
    const [cart,setCart] = useState([]);
    const [menswears ,setMeanswears] = useState([]);

    const handleClick=(men)=>{
      setCart({...cart,men})
      
      console.log(men.name)
    }


   
    useEffect(()=>{
         fetch("http://localhost:8080/menswear")
         .then((r)=>r.json())
         .then((d)=>setMeanswears(d))
    },[])

  return (
    
      <>
          
       
        <div style={{width:"80%",display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"500px",gridGap:"20px"}}>
          {menswears.map((men)=>(
    
             <Men key={men.id} {...men}  men={men} handleClick={handleClick} />
               
           ))}
       </div>
      

      </>

  )
}

export default Mens