import React from "react";
import nutraLogo from '../images/nutraLogo.png'
import headerBg from '../images/headerBg.png'
import headerBglayer from '../images/headerBgLayer.png'
import bottleRight from '../images/bottleRight.png'
import bottleLeft from '../images/bottleLeft.png'
import detailsPhoto from '../images/detailsPhoto.png'
import checkSign from   '../images/checkSign.png'
import flag from   '../images/flag.png'


export default function SignUpPage(){
    return(
        <div className="SignUp-container">
            <img src={bottleRight} alt="" className='bottle-right'/>
            <img src={bottleLeft} alt="" className='bottle-left'/>

            <form action="submit" className="form">
                <h3 className="SignUpLogo">Sign Up</h3>
                <input type="text" placeholder="Name" /> <br/>
                <input type="email" placeholder="Email"  /><br/>
                <input type="password" placeholder="Password"  />
                <input type="text" placeholder="" value='+1 (XXX) XXX-XXXX' />

                <h2 className="joinUs">Join For Free No-Charge</h2>

                <button className='register-button-registration-page'>Join Us Now!</button>


            </form>
        </div>
    )
}