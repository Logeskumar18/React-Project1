import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Signin } from './Components/Signin';
import { Register } from './Components/Register';
import { ResetPass } from './Components/ResetPass';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/ResetPass' element={<ResetPass/>}/>
      </Routes>
     
    </BrowserRouter>
  </>
);
