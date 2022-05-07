import React from 'react'
import Shoppingbag from './Shoppingbag'

const Shopped = () => {
  return (
    <div>
         <>
          
            
          <div style={{border:"2px solid red",width:"80%",display:"grid",margin:"auto",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"500px",gridGap:"20px"}}>
            {men.map((shop)=>(
      
               <Shoppingbag key={shop.id} {...shop}  Shoppingbag={Shoppingbag} handleClick={handleClick}/>
          
            
              
             
               
                
            ))}
             
         </div>
        </>
    </div>
  )
}

export default Shopped