import React from 'react'
import { Link } from 'react-router-dom'
// import BestPatyEver from './BestPatyEver'

const Ssenses = () => {
  return (
    <>
    <div style={{width:"95%"}}>

     
    <div style={{display:"flex",gap:"10px", width:"90%",margin:"auto",marginTop:"15px",marginbottom:"15px"}}>
         <div>

            <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651080120/xzrxkdrws3ypmtlw997z.jpg" alt="" height="90%" width="90%"/>
            
            <div style={{display:"flex"}}>
                         
                          <div>
                              <p>Fashion</p>
                              <p>A Visual Catalog Of Everything Else </p>
                          </div>

                          <div>
                            <p>OUR SECRET LIVES THROUGH OBJECTS</p>
                          </div>
               
            </div>
            

         </div>
        
        <div>

        <div>

       

         <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1650653292/uejok9zomnxkplf2b9go.jpg" alt="" height="99%" width="99%"/>
                        
                     <div style={{display:"flex" ,gap:"0px"}}>
                           
                            <div>
                                <p>Market</p>
                                <p>With Lemaire ,Dries Van Noten ,and Pushbutton</p>
                            </div>

                            <div>
                              <p>POCKET PLEASE</p>
                            </div>
                          
                     </div>   
                     </div>

        </div>


    </div>

    
    
    {/* --------------------------------recent ------------------------------- */}



    <div style={{
      display:"flex",
      marginTop:"40px",
      marginLeft:"30px",
  
      width:"100%",
      marginBottom:"50px",
      
      gap:"10px"}}> 

                <div>
                   <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1650377394/ha1cgclezmw9lz2etg2r.jpg" alt="" height="85%" width="90%"/>
                 

                        <div style={{display:"flex", gap:"10px",width:"80%" }}>
                                        <div>
                                              <p>RECENT</p>  
                                        </div>
                                        <div>
                                            <p>HAIR AND HIGHER POWER WITH JAWARA WAUCHOPE</p>
                                            <p>Fashion | Apr 21</p>
                                        </div>
                        </div>


                </div>


                <div>
                   <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649855761/ppbhaz8aoqykgmmxcv1e.jpg" alt="" height="85%" width="90%"/>
                 

                        <div style={{display:"flex", gap:"10px",width:"80%" }}>
                                        <div>
                                              <p>RECENT</p>  
                                        </div>
                                        <div>
                                            <p>THE MOON IS LATE</p>
                                            <p>Culture| Apr 21</p>
                                        </div>
                        </div>


                </div>



                <div>
                   <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649856548/gybenblahd5neaqr4auz.jpg" alt="" height="85%" width="90%"/>
                 

                        <div style={{display:"flex", gap:"10px",width:"80%" }}>
                                        <div>
                                              <p>RECENT</p>  
                                        </div>
                                        <div>
                                            <p>FLOWER TIME</p>
                                            <p>Market | Apr 21</p>
                                        </div>
                        </div>


                </div>
                
    </div>
    
    {/* -------------featured------------------------------ */}

    <Link to="/mens" className='linkName'>
    <div style={{
      display:"flex",
     
      
    
      width:"90%",
      margin:"auto",
      marginTop:"40px",
      marginBottom:"40px",
      gap:"10px",
      padding:"0px"}}> 

                <div>
                   <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1650891778/bsbwnluadeydsdv4vv2v.jpg" alt="" height="90%" width="90%"/>
                 

                        <div style={{display:"flex", gap:"10px",width:"80%" }}>
                                        <div>
                                              <p>Fetured</p>  
                                        </div>
                                        <div>
                                            <p>STONED ISLAND</p>
                                             <button className='men-btn'>
                                               shops Menswear
                                             </button>
                                        </div>
                        </div>


                </div>


                <div>
                   <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1650893340/vswaewu82lgantovhqss.jpg" alt="" height="85%" width="90%"/>
                 

                        <div style={{display:"flex", gap:"10px",width:"80%" }}>
                                        <div>
                                              <p>Featured</p>  
                                        </div>
                                        <div>
                                            <p>BLUEMARINE</p>
                                            <button className='men-btn'>
                                               shops Menswear
                                             </button>
                                           
                                        </div>
                        </div>


                </div>



                
    </div>
    </Link>
    
     {/* --------------------- Artist view All stories -------------------- */}
    <div style={{display:"flex",width:"100%" ,marginLeft:"30px",gap:"25px",height:"180px",marginBottom:"40px"}}>
                <div style={{ borderBottom:"2px solid grey" ,width:"24%", padding:"10px"}}>
                    <h1>ARTIST</h1>
                    <h2>VIEW ALL STORIES</h2>
                </div>

                <div style={{borderTop:"2px solid grey" ,width:"25%",display:"flex",paddingTop:"5px",borderBottom:"2px solid grey"}}>
                    <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1640015020/rdpbpb6qvauzzk4lbfaw.jpg" alt="" height="85%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>KILLER CUTIES WITH SEAN-KIERRE LYON</p>
                         <p style={{paddingTop:"40px"}}>Art</p>
                   </div>
                </div>

                <div style={{borderTop:"2px solid grey",display:"flex",paddingTop:"5px" ,width:"24%",borderBottom:"2px solid grey"}}>
                     <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1634753610/l5fdbdogrhkvrlfdzydr.jpg" alt="" height="85%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>INTENSE FEELINGS</p>
                         <p style={{paddingTop:"40px"}}>Fashion</p>
                   </div>
                </div>
                <div style={{borderTop:"2px solid grey" ,width:"24%" ,borderBottom:"2px solid grey" ,display:"flex",paddingTop:"5px"}}>
                <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1611763381/thowg8hnql7d5qgvvrgb.jpg" alt="" height="85%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>THE MAGNIFICIANT TAUNLEWIS</p>
                         <p style={{paddingTop:"40px"}}>Art</p>
                   </div>
                </div> 

                <div style={{borderTop:"2px solid grey" ,width:"24%" ,borderBottom:"2px solid grey" ,display:"flex",paddingTop:"5px"}}>
                <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1634753610/l5fdbdogrhkvrlfdzydr.jpg" alt="" height="85%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>JANS GATEWOOD'S WILDEST DREAMS</p>
                         <p style={{paddingTop:"40px"}}>Arts</p>
                   </div>
                    </div> 

              

                
    </div>
   

   {/*  -------------------freshly squeezed-------------------------- */}
   <div style={{display:"flex",gap:"30px",marginBottom:"30px"}}>

                
                <div style={{ display:"flex",width:"55%",gap:"15px",marginLeft:"30px"}}>

                                      <div style={{width:"50%"}}>
                                          <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649709518/paunqpxrxn9bwnisqoou.jpg" alt="" width="98%" /><br /><br />
                                          <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649182413/h7vrai6tmvnuelj1g5d9.jpg" alt="" width="98%" />
                                      </div>
                                      <div style={{width:"50%"}}>
                                          <p style={{fontSize:"20px"}}>FREZZLY SQUEEZED !</p>
                                          <p>Fashion</p>
                                          <p>Crushing on SS22's new brand featuring Andrej Gronau luru Dan and Chet Lo.</p> <br /><br /><br /> <br />

                                          <p style={{fontSize:"20px"}}>WE11DONE'S VOLUMINOUS VISION OF THE FUTURE </p>
                                          <p>Fashion</p>
                                          <p>Crushing on SS22's new brand featuring Andrej Gronau luru Dan and Chet Lo.</p> 
                              
                                      </div>
                  </div>
                
                <div style={{display:"flex", width:"45%" ,}}>
                          <div style={{width:"50%",}}>
                          <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649083432/kon1zled3j9pkniq6omt.jpg" alt="" width="75%" height="60%" />
                          <p style={{width:"50%",paddingLeft:"5px"}}>CONSIDERED THE COLLOBORATION ; INSIDE THE ALUWALIA AND PAULSMITH COLLECTION</p>
                          <p style={{width:"50%",paddingLeft:"5px"}}>Fashion | Apr 6</p>
                </div>

                  <div style={{ display:"flex",width:"50%",}}>

                          <div style={{borderBottom:"2px solid red",padding:"15px",width:"45%",height:"150px",borderTop:"2px solid red" }}>
                          <img  src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1638302729/sfikmhm76xmdw3pz2trz.jpg" alt="" width="100%" height="100%"/><br /><br />
                          <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1638302729/sfikmhm76xmdw3pz2trz.jpg" alt="" width="100%"  height="100%"/><br /><br />
                          <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1638302729/sfikmhm76xmdw3pz2trz.jpg" alt="" width="100%"  height="100%"/><br /><br />
                          </div>
                          <div style={{width:"55%",borderTop:"2px solid red",height:"180px",borderBottom:"2px solid red",marginBottom:"15px"}}>
                            <p>AMERICAN BEAUTY : IN THE HERMAN MILLER ARCHIEVES WITH AMY AUSHERMAN  </p>
                            <p>Culture</p>
                            <br />
                            <p>THE SEAN BROWN REMIX</p><br />
                            <p>Culture</p>
                          </div>
                   
                  </div>

                  
               





                </div>
                </div>
                
                 
     {/* ------------------------------------------pangaia------------------------------------ */}
    
     <Link to="/mens" className='linkName'>
    <div style={{display:"flex",width:"90%",marginLeft:"90px",gap:"65px",height:"540px",marginTop:"30px"}}>
      <div style={{width:"45"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497463/pusal5nzejoa0lqixtwk.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>Featured
                                  <br />
                                  <button className='men-btn'> SHOPS MENSWEAR</button>
                    </div>
                     <div>PANGAIA</div>
           
         </div>
      </div>
      <div style={{width:"45%"}}>
      <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497463/pusal5nzejoa0lqixtwk.jpg" alt="" width="90%" height="80%" />
      <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>Featured
                                  <br />
                                  <button className='men-btn'> SHOPS MENSWEAR</button>
                    </div>
                     <div>PANGAIA</div>
           
         </div>
      </div>
      
    </div>
    </Link>

     {/* -----------------------------best paty ever ! -------------------------------------------- */}
    
     <div style={{ width:"85%",height:"500px",margin:"auto",marginBottom:"30px"}}>
       <p style={{fontSize:"80px",textAlign:"center"}}>BEST!PARTY!EVER!</p>
       <p style={{fontSize:"50px",textAlign:"center"}}>A Night Out With Honey Dijon, devan Diaz and leilah Weinraub</p>
      <div  style={{marginLeft:"530px"}}>
        <button className='men-btn'>View Editorial</button></div>
     </div>
    
    


     {/*----------------------------- Blesssed is the blowout----------------------------------- */}
     <div style={{display:"flex",width:"90%",marginLeft:"90px",gap:"65px",height:"620px",marginBottom:"30px"}}>
      <div style={{width:"30%"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649085943/qgmitaaam8j3zxnvejyd.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                             
                                
                    </div>
                     <div>BLESSED IS THE BLOWOUT<br />
                         Culture | Apr 4
                       </div>
                          
           
         </div>
      </div>
      <div style={{width:"30%"}}>
      <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648162446/jq3ratinthvrzfaxnvyl.jpg" alt="" width="90%" height="80%" />
      <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                              
                                 
                    </div>
                     <div>
                       MICHAEL THE MUREDER MYSTERY <br />
                       Culture |  Mar 31
                     </div>
           
         </div>
      </div>

      <div style={{width:"30%"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648215108/ozh7gtxgk1zhdl2mkgls.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                                  <br />
                                
                    </div>
                     <div>
                        OUTSIDE INSPO ,NATURALLY <br />
                        Market | Mar 29
                     </div>
           
         </div>
      </div>
      
    </div>


    {/*------------------------- MArket Research---------------------- */}
 
    <div style={{display:"flex",width:"100%" ,marginLeft:"30px",gap:"25px",height:"180px",marginBottom:"40px"}}>
                <div style={{borderTop:"2px solid grey" ,borderBottom:"2px solid grey" ,width:"24%", padding:"10px"}}>
                    <h1>MARKET <br/>
                    REASEARCH</h1>
                    <h2>VIEW ALL STORIES</h2>
                </div>

                <div style={{borderTop:"2px solid grey" ,width:"25%",display:"flex",paddingTop:"5px",borderBottom:"2px solid grey"}}>
                    <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1621277032/b4yuoitssxjipexpgdq2.jpg" alt="" height="75%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>MARKET REASEARCH THE THRAGUAN</p>
                         <p style={{paddingTop:"40px"}}>FASHION</p>
                   </div>
                </div>

                <div style={{borderTop:"2px solid grey",display:"flex",paddingTop:"5px" ,width:"24%",borderBottom:"2px solid grey"}}>
                     <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1605550716/khorcajz01vqrgvdslah.jpg" alt="" height="85%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>MARKET RESEARCH : KHAITE SCARLET</p>
                         <p style={{paddingTop:"40px"}}>Fashion</p>
                   </div>
                </div>
                <div style={{borderTop:"2px solid grey" ,width:"24%" ,borderBottom:"2px solid grey" ,display:"flex",paddingTop:"5px"}}>
                <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1605730247/x65svtgflz3ca6g8qcwz.jpg" alt="" height="75%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>MARKET RESEARCH : FEAR OF GOD</p>
                         <p style={{paddingTop:"40px"}}>FASHION</p>
                   </div>
                </div> 

                <div style={{borderTop:"2px solid grey" ,width:"24%" ,borderBottom:"2px solid grey" ,display:"flex",paddingTop:"5px"}}>
                <div>
                        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1615384903/mk8m97d6c8utcazhgnui.jpg" alt="" height="75%" width="88%"/>
                    </div>
                    <div styles={{marginLeft:"10px"}}>
                         <p>MARKET RESERACH :LIGHT PHONE II</p>
                         <p style={{paddingTop:"40px"}}>Arts</p>
                   </div>
                    </div> 

              

                
    </div>




    {/* -------------------------------------------kushikoch-------------------------- */}
    <Link to="/mens" className='linkName'>

    <div style={{display:"flex",width:"90%",marginLeft:"90px",gap:"65px",height:"540px",marginBottom:"30px"}}>
      <div style={{width:"45"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497474/wbo7hrrb8jtakmlej6ph.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>Featured
                                  <br />
                                  <button className='men-btn'> SHOPS MENSWEAR</button>
                    </div>
                     <div>KUSHIKOCH</div>
           
         </div>
      </div>
      <div style={{width:"45%"}}>
      <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1651497467/kiyltgsm0km13tf7t7yo.jpg" alt="" width="90%" height="80%" />
      <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>Featured
                                  <br />
                                  <button className='men-btn'> SHOPS MENSWEAR</button>
                    </div>
                     <div>ANNAA CASTELLENA</div>
           
         </div>
      </div>
      
    </div>
    </Link>


   {/* --------------------------danger by definiton----------------------------- */}

   <div style={{display:"flex",width:"90%",marginLeft:"90px",gap:"65px",height:"620px",marginBottom:"30px"}}>
      <div style={{width:"30%"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648043578/rx9qrqkbfbni3ajifbqh.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                             
                                
                    </div>
                     <div>DANGER BY DEFINITION :LUU DAN IS HUANG LAW NEW LOOKS<br />
                         Fashion | Mar 4
                       </div>
                          
           
         </div>
      </div>
      <div style={{width:"30%"}}>
      <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647547426/tzzdf7zjmdbd7qzilrys.jpg" alt="" width="90%" height="80%" />
      <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                              
                                 
                    </div>
                     <div>
                       HIT SNOOZE! <br />
                       Market  |  Mar 22
                     </div>
           
         </div>
      </div>

      <div style={{width:"30%"}}>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647452231/e9fr0eotztm7xdu4cx9h.jpg" width="90%" alt="" height="80%" />
         <div style={{display:"flex",gap:"30px",padding:"20px"}}>
                    <div>RECENT
                                  <br />
                                
                    </div>
                     <div>
                        PERSONAL SPACE WITH JOSH ITIOLA <br />
                        Culture  | Mar 18
                     </div>
           
         </div>
      </div>
      
    </div>
















    </div>
    </>
  )
}

export default Ssenses

// import React, { useEffect, useState } from 'react'
// import Ssense from './Ssense';

// const Ssenses = () => {
//     const [ssenses ,setSsense] = useState([]);
   
//     useEffect(()=>{
//          fetch("http://localhost:8080/ssenses")
//          .then((r)=>r.json())
//          .then((d)=>setSsense(d))
//     },[])

//   return (
//       <>
//             <div>Ssenses</div>
            
//         <div>
//           {ssenses.map((ssense)=>(
//               <Ssense key={ssense.id} {...ssense} />
//           ))}
//        </div>
//       </>

//   )
// }

// export default Ssenses