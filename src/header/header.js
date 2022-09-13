import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div className='firstpage'>
    <div className='navbar'>
                <h3 className='home'>HOME</h3>
                <Link to='/menu'><h3>MENU</h3></Link>
                <Link to='/reserve'><h3>RESERVE TABLE</h3></Link>
                <Link to='/about'><h3>ABOUT</h3></Link>
                <Link to='/contact'><h3>CONTACT</h3></Link>
                <a href="#logout"><h3>LOGOUT</h3></a>
    </div>    
            <img src='https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1610989066011-TAM2C1NWLRLL10HH3FMU/Restaurant-Logo-Designs.jpg?format=1250w' alt='text' />
            
        </div>)                 
    
}

export default Header;