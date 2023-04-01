import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";

import FormInput from "./components/FormInput";
import Formdata from "./components/Formdata";
import Register from "./components/Register";
import Login from "./components/Login";
import Body from "./components/Error/Error"
import Home from "./components/Home"
import Footer from "./components/Footer/Footer"



function App() {


  return (
    <>
  
    <BrowserRouter>
 
       
     
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/inventory' element={<Formdata />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/add' element={<FormInput />} />
          <Route exact path='*' element={<Body />} />
          {/* <Route exact path='/navbar' element={<Navi />} /> */}
        </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
