import React from 'react'
import { useState, } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';




   


const Men = ({men}) => {
    


//   const [item,setItem] = useState([]);


    
//   useEffect(()=>{
//     fetch("http://localhost:8000/menswear")
//     .then((r)=>r.json())
//     .then((d)=>setItem(d))
// },[])




  const {id,imgUrl,heading,name,price} = men
  const [cart,setCart] = useState([]);

    const handleClick=(men)=>{
       setCart({...cart,men}) 
      console.log(men)
     }
     

  return (

<>

  <div style={{border:"2px solid black",width:"80%",margin:"auto",height:"90%"}}>

   
  <Link to={`/menItem/${id}`}>
  <img src={imgUrl} alt="" height="80%" width="100%"/>
  <p>{heading}</p>
  <p>{name}</p>
  <p>{price}</p>
  <button onClick={()=>handleClick(men)}>Add to cart</button>
  </Link>
{/* 
  <div>
  {item.map((item)=>(
    
    <Men key={item.id} {...item}  item={item} />

  ))}
  </div> */}


               

 
                    
          
              
                  
             
               
               
  </div>
  

</>
  )
}

export default Men

