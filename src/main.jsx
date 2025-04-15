import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Components/Header';
import Hinfo from './Components/Hinfo';
import { IVComp } from './Components/IVComp';

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Hinfo />
    <IVComp />
  </>
)
