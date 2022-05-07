import React from 'react'
// import { list } from 'react-router-dom'
const Footer = () => {
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
            gap : "25px"
            ,
            width:"60%",
            margin:"auto",
            }}>
                    <div className='linkName'>
                       <list >CountryRegion/INDIA</list>
                     </div  > 

                     <div className='linkName'>
                          <list >NEWSLETTER</list>
                     </div>

                     <div className='linkName'>
                           <list >CUSTOMERCARE</list>
                     </div>

                     <div className='linkName'>
                           <list >LOCATION</list>
                     </div>
                     
                     <div className='linkName'>
                         <list>EDITORIAL ARCHIEVE</list>
                     </div>

                     <div className='linkName'>
                         <list>CARRERS</list>
                     </div>

                     <div className='linkName'>
                         <list>AFFILATES</list>
                     </div>

                     <div className='linkName'>
                         <list>SITEMAP</list>
                     </div>

          </div>

        
        

            
             
              
         

            
      
    </div>
  )
}

export default Footer