import React from "react";
import './reserve.css';
import {Link} from 'react-router-dom';

function Reserve(){
    return(<div className="Reserve">
<div className='navbar'>
                <Link to='/header'><h3>HOME</h3></Link>
                <Link to='/menu'><h3>MENU</h3></Link>
                <h3 className="reserve">RESERVE TABLE</h3>
                <Link to='/about'><h3>ABOUT</h3></Link>
                <Link to='/contact'><h3>CONTACT</h3></Link>
                <a href="#logout"><h3>LOGOUT</h3></a>
            </div>
                <img src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1610989066011-TAM2C1NWLRLL10HH3FMU/Restaurant-Logo-Designs.jpg?format=300w" alt="res" /> 
            <div className="here">
                <h1>RESERVE YOUR TABLE HERE</h1>
            </div>
            <form>
            <div className="fname">
                <label className="firstlabel">First Name</label>
                <input className="firstinput" placeholder="  Enter your first name"  type="text"></input>
            </div>
            <div className="lname">
                <label className="lastlabel">Last Name</label>
                <input className="lastinput" placeholder="  Enter your last name" type="text"></input>
            </div>
            <div className="email">
                <label className="emaillabel">Mail Id</label>
                <input className="emailinput" placeholder="  Enter mail id" type="text"></input>
            </div>
            <div className="phonenumber">
                <label className="contactlabel">Contact Number</label>
                 <input className="contactinput" placeholder="  Enter contact number" type="text"></input>
            </div>
             <button style={{height:'50px',width:'200px',margin:'auto',display:'block',borderRadius:'10px'}}><b>RESERVE</b></button>
        </form>
    </div>)
}

export default Reserve;