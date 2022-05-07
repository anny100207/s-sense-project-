import React from 'react'


const  Women = ({id,imgUrl,heading,name,price}) => {
  return (
<>





  <div style={{border:"2px solid black",width:"80%",margin:"auto",height:"90%"}}>
               

                
                
  <img src={imgUrl} alt="" height="80%" width="100%"/>
  <p>{heading}</p>
  <p>{name}</p>
  <p>{price}</p>
  <button>Add To Cart</button>
                    
          
              
                  
             
               
               
  </div>
  

</>
  )
}

export default Women

