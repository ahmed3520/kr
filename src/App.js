import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";

 import {Landing, Signin,Signup} from './pages/index';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
