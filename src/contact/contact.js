import React from "react";
import './contact.css';
import {Link} from 'react-router-dom';


function Contact(){
    return(<div>
<div className='navbar'>
                <Link to='/header'><h3>HOME</h3></Link>
                <Link to='/menu'><h3>MENU</h3></Link>
               <Link to='/reserve'><h3>RESERVE TABLE</h3></Link>
               <Link to='/about'><h3>ABOUT</h3></Link>
                <h3 className="contact">CONTACT</h3>
                <a href="#logout"><h3>LOGOUT</h3></a>
            </div>

    </div>)
}

export default Contact;