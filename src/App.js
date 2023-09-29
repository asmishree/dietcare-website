import './App.css';
import Navbar from './components/Navbar';
import Bmi from './components/Bmi';
import Bmr from './components/Bmr';
import Home from './components/Home';
import Login from './components/Login';
import Dietplan from'./components/Dietplan';
import {
  BrowserRouter ,
  Routes,
  Route,

} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
 function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
    <Toaster/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bmi" element={<Bmi/>}/>
          <Route path="/dietplan" element={<Dietplan/>}/>
          <Route path="/bmr"element= {<Bmr/>}/>
          <Route path="/login"element= {<Login/>}/>
          <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>

        </BrowserRouter>
  )
}
export default App;