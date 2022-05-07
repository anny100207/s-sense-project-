
import './App.css';
import { useEffect,useState} from 'react';
import {Route,Routes, useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Mens from './pages/Mens'
import Womens from './pages/Womens';

import Search from './pages/Search';
import Ssenses from './pages/Ssenses';
import Login from './pages/Login';
import Shoppingbag from './pages/Shoppingbag';
import Wishlist from './pages/Wishlist';
import Everythingelses from './pages/Everythingelses';
import Footer from './components/Footer';
import BestPartyEver from './pages/BestPartyEver';
import MenItem from './pages/MenItem';
// import Men from './pages/Men';

// import BestPartyEver from './pages/BestPartyEver';

// import Ssenses from './pages/Ssenses';



function App() {
   const navigate = useNavigate();
   const [cart,setCart] = useState([]);

   
   const handleClick=(men)=>{
    setCart({...cart,men})
    
    console.log(cart.imgUrl)
  }
   

    



   useEffect(()=>{
       navigate("/Ssenses")
   },[])

  return (
    <div className='App'>

     <Navbar />
    <Routes>

      <Route path="womens" element={<Womens/>}/>
      <Route path='mens' element={<Mens/>}/>
        <Route path="menItem/:id1" element={<MenItem/>}/>
         
  
      <Route path='bestPartyEver' element={<BestPartyEver/>}/>
      <Route path="everythingelses" element={<Everythingelses/>}/>
      <Route path="search" element={<Search/>}/>
     
      <Route path="ssenses" element={<Ssenses/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>

       <Route path="shoppingbag" element={<Shoppingbag/>}  handleClick={handleClick}/> 
      
      
      

    </Routes>

    <Footer/>

    
    </div>
  );
}

export default App;
