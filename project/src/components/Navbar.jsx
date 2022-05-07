import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const state = useSelector((state)=>state.addItem)
  return (
   

    <div  style={{
        marginBottom : "10px",
        padding : "30px",
        background : "white",
        color : "white",
        fontSize : "14px",
        display : "flex", 
        gap : '10px',
        
    }} 
    >
        
          <div style={{display:"flex",
                           gap : "15px"
            }}>
                    <div>
                       <Link to="/mens" className='linkName'>MEANSWEARS</Link>
                     </div>

                     <div>
                          <Link to="/womens" className='linkName'>WOMEANSWEARS</Link>
                     </div>

                     <div>
                           <Link to="/everythingelses" className='linkName'>EVERYTHINGELSES</Link>
                     </div>

                     <div>
                           <Link to="/search" className='linkName'>SEARCH</Link>
                     </div>

          </div>

          <div  style={{display:"flex",
                         
                           margin:"auto"
            }} >
                <div >
                     <Link to="/ssenses" className='linkName'>Ssense</Link>
                </div>
          </div>

          <div  style={{display:"flex",
                           gap : "15px"
            }}> 

                  <div>
                    <Link to="/login" className='linkName'>LOGIN</Link>
                  </div>

                  <div>
                    <Link to="/wishlist" className='linkName'>WISHLIST</Link>
                  </div>

                  <div>
                    <Link to="/shoppingbag" >Shoppingbag {state.length}</Link >
                  </div>
          </div>


            
             
              
         

            
      
    </div>
  )
}

export default Navbar