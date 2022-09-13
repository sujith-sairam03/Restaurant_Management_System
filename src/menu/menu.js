import React from "react";
import './menu.css';
import {Link} from 'react-router-dom';


function Menu(){
    return(<div>
             <div className='navbar'>
                <Link to='/header'><h3>HOME</h3></Link>
                <h3 className="menu">MENU</h3>
                <Link to='/reserve'><h3>RESERVE TABLE</h3></Link>
                <Link to='/about'><h3>ABOUT</h3></Link>
                <Link to='/contact'><h3>CONTACT</h3></Link>
                <a href="#logout"><h3>LOGOUT</h3></a>
            </div>
            <div class="card1" >
    <img className="imgone" src="https://skinnyspatula.com/wp-content/uploads/2021/12/Peri_Peri_Chicken_Pasta0.jpg" alt="Alps" />
    <h3 className="mc1">PASTA</h3>
    </div>
    <div className="card2">
        <img className="imgtwo" src="https://www.acouplecooks.com/wp-content/uploads/2014/10/Ribollita-004.jpg" alt="swes" />
        <h3 className="mc2">RIBOLLITA</h3>
    </div>
    <div className="card3">
        <img className="img3" src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ=" alt="piz" />
        <h3 className="mc3">PIZZA</h3>
    </div>
    <div className="card4">
        <img  className="img4" src="https://www.aheadofthyme.com/wp-content/uploads/2020/12/spaghetti-bolognese-4.jpg" alt="spa" />
        <h3 className="mc4">SPAGHETTI</h3>
        </div>        
        <div className="card5">
            <img className="img5" src="https://www.bradleysmoker.com/wp-content/uploads/2010/09/Smoked-Beef-Carpaccio-Recipe-scaled.jpeg" alt="caps" />
            <h3 className="mc5">CARPACCIO</h3>
        </div>
        <div className="card6">
            <img className="img6" src="https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800" alt="las" />
            <h3 className="mc6">LASGNA</h3>
        </div>
        <div className="card7">
            <img  className="img7" src="https://www.tasteandtellblog.com/wp-content/uploads/2019/11/Baked-Ravioli-tasteandtellblog.com-3.jpg" alt='oli' />
            <h3 className="mc7">RAVIOLI</h3>
        </div>
        <div className="card8">
            <img className="img8" src="https://www.cscassets.com/recipes/wide_cknew/wide_25032.jpg" alt="chick" />
            <h3 className="mc8">CHICKEN RISOTTO</h3>
        </div>
    </div>)
}

export default Menu;

