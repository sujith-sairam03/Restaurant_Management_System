import React from "react";
import './about.css';
import {Link} from 'react-router-dom';


function About(){
    return(<div>
<div className='navbar'>
                <Link to='/header'><h3>HOME</h3></Link>
                <Link to='/menu'><h3>MENU</h3></Link>
                <Link to='/reserve'><h3>RESERVE TABLE</h3></Link>
                <h3 className="about">ABOUT</h3>
                <Link to='/contact'><h3>CONTACT</h3></Link>
                <a href="#logout"><h3>LOGOUT</h3></a>
            </div>
            <div>
                <p className="aboutus">"ABOUT US"</p>
            </div>
            <div className="abouttext1">
                <p>Restaurant Premium Quality began on April 26th, 1987 in the city of Hacienda Heights. Focusing on the goals of “Quality, Healthy, and Tradition” the company is family operation making each dish in our own kitchens from scratch.  Restaurant Premium Quality has three generations of family member working together to fulfill the idea “Honor the Customer, Quality Comes First”.</p>
            </div>
            <div className="abouttext2">
                <p>Through hard work and dedication,Restaurant Premium Quality began building its brand around the idea of delicious and authentic traditional Chinese food.

                Every day, before dawn, without fail, each store begins to grind up soybeans, roll out the dough for the oven baked bun and light the stoves to begin frying the deep fried crullers. Over the years the weary individuals working the grave yard shifts, the foreigners visiting LA, and those getting ready to go to work stop by our restaurants to enjoy hot, freshly ground soy milk, made to order dishes such as fried daikon cake and egg crepes or our many styles of rice rolls, filling up their stomachs and their hearts. We take pride in the faces of our satisfied customers leaving the restaurant after having taken respite from their busy lives to truly enjoy a traditional meal reminding them of our cultural heritage.</p>
            </div>
            < div className="abouttext3">
                <p>In order to better serve our customers we opened our second location on March, 2009 in the city of San Gabriel, followed by Irvine in early 2013 and Arcadia in mid 2013.

To remain true to our customers, we have forgone the use of a centralized kitchen like many restaurants we see that prepares semi-ready foods only to be heated up and served to their customers. We honor the customers by providing them with the freshest, most delicious, and authentic meal experience possible.</p>
            </div>

    </div>)
}

export default About;