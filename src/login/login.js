import React from "react";
import './login.css';


function Login(){
    return(<div className="login">
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
          <form className="form">
        <h3 className="h3">Login Here</h3>

        <label className="label1" for="username">Username</label>
        <input  className="input1" type="text" placeholder="Email or Phone" id="username"></input>

        <label className="label2" for="password">Password</label>
        <input  className="input2" type="password" placeholder="Password" id="password"></input>

        <button className="button">Log In</button>
        
    </form>

    </div>)
}


export default Login;