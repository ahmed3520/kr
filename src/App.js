import logo from './logo.svg';
import './App.css';
import './Responsive.css';

import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";

 import {Landing, Signin,Signup, Dashboard,Lesson,Classes} from './pages/index';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/schedulelessons' element={<Lesson/>}/>
    <Route path='/myclasses' element={<Classes/>}/>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
