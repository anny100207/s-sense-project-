// import React from 'react'

// const Womens = () => {
//   return (
//     <div>Womens</div>
//   )
// }

// export default Womens







import React, { useEffect, useState } from 'react';
import Everythingelse from './Everythingelse';

const Everythingelses = () => {
    const [everythingelses, setEverythingelses] = useState([]);
   
    useEffect(()=>{
         fetch("http://localhost:8080/everythingelses")
         .then((r)=>r.json())
         .then((d)=>setEverythingelses(d))
    },[])

  return (
      <>
          
            
        <div style={{border:"2px solid red",width:"80%",display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"600px",gridGap:"20px"}}>
          {everythingelses.map((everythingelse)=>(
              <Everythingelse key={everythingelse.id} {...everythingelse} />
          ))}
       </div>
      </>

  )
}

export default Everythingelses