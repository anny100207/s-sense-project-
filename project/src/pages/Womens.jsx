// import React from 'react'

// const Womens = () => {
//   return (
//     <div>Womens</div>
//   )
// }

// export default Womens







import React, { useEffect, useState } from 'react';
import Women from './Women';

const Womens = () => {
    const [womens, setWomens] = useState([]);
   
    useEffect(()=>{
         fetch("http://localhost:8080/womens")
         .then((r)=>r.json())
         .then((d)=>setWomens(d))
    },[])

  return (
      <>
          
            
        <div style={{border:"2px solid red",width:"80%",display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"500px",gridGap:"20px"}}>
          {womens.map((women)=>(
              <Women key={women.id} {...women} />
          ))}
       </div>
      </>

  )
}

export default Womens