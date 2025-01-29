import './App.css';
import Navbar from"./components/Navbar";
 import 'bootstrap/dist/css/bootstrap.css';
 import Register from './Pages/Register';
 import { Route,Routes} from 'react-router-dom';
 import Home from "./Pages/Home";
 import About from './Pages/About';
 import Login from './Pages/Login';
 import Contact from './Pages/Contact Us';
 import Doctors  from'./Pages/Doctors';
 import Myprofile from './Pages/My profile';
 import Myappointements from './Pages/My appointements';
 import Header from './components/Header';
import Appointment from './Pages/Appointement';
import Footer from './components/Footer';
;
const App= () => {

  return (

    <div className='mb-4'>



<Navbar/>


<Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact Us" element={<Contact Us/>}/>
          <Route path="/Register" element={<Register/>}/>
         <Route path="/Doctors/:Speciality" element={<Doctors/>}/>
          <Route path ="/Doctors" element={<Doctors/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route ppath ="/Myprofile" element={<Myprofile/>}/>
          <Route path="/Myappointements/:docid" element={<Myappointements/>} />
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Appointment/:docid" element={<Appointment />} />
  
           </Routes>

           <Footer/>

    </div>


  );
};

export default App;
