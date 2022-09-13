import Header from './header/header.js';
import React from 'react';
import Login from './login/login.js';
import Menu from './menu/menu.js';
import Reserve from './reserve/reserve.js';
import Contact from './contact/contact.js';
import About from './about/about.js';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';



function App(){
return(
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/header' element={<Header/>} />
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        </BrowserRouter>
)
}

export default App;