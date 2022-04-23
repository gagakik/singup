import React from "react";



export default function Singup() {
    return (
        <div className="singup-bg">
            <div className="singup-header">
            <div className="title">
            <a href="#">Sing In</a>
            <a href="#">Sing Up</a>
            </div>
        <img src="../img/Vector.png" className="vector" alt="img" />
            </div>
<div className="singup" id="singup">
        <div className="left">
        <div className="form">
        <div className="form-input">
        <label htmlFor="firstname">First name*</label>
        <input type="text" id="firstname" name="firstname"></input>
        </div>
        <div className="form-input">
        <label  htmlFor="lastname">Last name*</label>
        <input type="text" id="lastname" name="lastname"></input>
        </div>
        <div className="form-input">
        <label htmlFor="tel">Phone number*</label>
        <input type="tel" id="tel" name="tel"></input>
        </div>
        <div className="form-input">
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email"></input>
        </div>
        <div className="form-input">
        <label htmlFor="password">password*</label>
        <img className="eye" src="./img/eye-alt.png" alt="eye" />
        <input type="password" id="password" name="password"></input>
        </div>
        </div>
        <button className="btn-signup" id="btn-signup">Sign Up</button>
        </div>
    <div className="right">
    
    <div className="form">
        <p>or Sign Up via</p>
        <button className="btn-soc">Facebook</button>
        <button className="btn-soc">Google</button>
        <p>by clicking submit you agree to <br/>
            the Terms and Conditions</p>
<img className="flo" src="../img/Group3.png" alt="img" />
    </div>
    </div>
</div>
</div>
    )
}


