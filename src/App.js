import {Routes,Route} from 'react-router-dom'; 

//Components
import MyNavbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About'
import Map from './pages/Map';
import Contact from './pages/Contact'
import Location from './pages/Location';
import Calorimeter from './pages/Calorimeter';
import Calorie from './pages/Calorie';
import VaccineReminder from './pages/VaccineReminder';
import VRmain from './pages/VRmain';
import Generic from './pages/Generic';
import Seller from './pages/Seller';
import AIBot from './pages/AIBot';
import Bot from './pages/Bot';
import { Toaster } from "react-hot-toast";

//CSS

import './App.css';
import Signup from './register/Signup';
import Login from './register/Login';
import SellerSignup from './register/SellerSignup';
import SellerLogin from './register/SellerLogin';


function App() {
  return (
    <div>
    <MyNavbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/sellersignup" element={<SellerSignup />} />
          <Route path="/sellerlogin" element={<SellerLogin />} />
  <Route path="/about" element={<About/>}/>
  <Route path="/location/map" element={<Map/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/location" element={<Location/>}/>
  <Route path="/calorie/calorimeter" element={<Calorimeter/>}/>
  <Route path="/calorie" element={<Calorie/>}/>
  <Route path="/vreminder" element={<VaccineReminder/>}/>
  <Route path="/vrmain" element={<VRmain/>}/>
  <Route path="/generic" element={<Generic/>}/>
  <Route path="/seller" element={<Seller/>}/>
  <Route path="/aibot" element={<AIBot/>}/>
  <Route path="/bot" element={<Bot/>}/>
 </Routes>
 <Toaster />
</div>
  );
}

export default App;
