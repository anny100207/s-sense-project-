import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import DATA from './Data';
import { useDispatch } from 'react-redux';
import { addItem,delItem } from '../redux/actions';


const MenItem = () => {
     
     const [cartBtn,setCartBtn] = useState("Add to Cart")

//     const {id1} = useParams()
//     const prodetail = menItem.filter(x=>x.id1 === id1)
//     const product = prodetail[0]
//     console.log(product)
const {id1} = useParams();
const prodetail = DATA.filter(x=>x.id1===id1.id1)
const product = prodetail[id1];
console.log(product)

const dispatch = useDispatch()

const handleCart =(product) =>{
    if(cartBtn==="Add to Cart"){
        setCartBtn("Remove from cart")
      dispatch(addItem(product))
    }
    else{
        setCartBtn("Add to Cart")
        dispatch(delItem(product))
    }

}
  return (
    <div style={{display:"flex",width:"80%"}}>
       <div style={{marginTop:"50px",width:"55%",margin:"auto"}}>
          <img src={product.imgUrl} alt="" />

        </div>

     <div>    
              <h1>{product.heading}</h1>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <button  style={{padding:"30px",width:"190px",color:"white",background:"blue"}} onClick={()=>handleCart(product)}>{cartBtn}</button>
     </div>
   

      
       
   </div>
  )
}

export default MenItem