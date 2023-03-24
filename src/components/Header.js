import React from 'react'
import nutraLogo from '../images/nutraLogo.png'
import headerBg from '../images/headerBg.png'
import headerBglayer from '../images/headerBgLayer.png'
import bottleRight from '../images/bottleRight.png'
import bottleLeft from '../images/bottleLeft.png'
import detailsPhoto from '../images/detailsPhoto.png'
import checkSign from   '../images/checkSign.png'
import { Link, withRouter } from 'react-router-dom'


function Header(){
    return(
            <div className='main-container'>
            <div className='header-container'>
            {/* <img src={headerBg} alt="" className='image-div'/> */}
            <img src={nutraLogo} alt="" className='nutraLogo'/>
            <img src={bottleRight} alt="" className='bottle-right'/>
            <img src={bottleLeft} alt="" className='bottle-left'/>

            <div className='header-content'>
                <h1 className='joinOurTag'>Join Our</h1>
                <p className='para'>6-Day Health-Supplement Drop-Shipping Business Accelerator</p>
                <p className='para'>Discover how to build a 6 figure Supplement Drop-shipping Business In 6 Days WITHOUT Paying for Facebook Ads Or Traffic!</p>
                <h1 className='sixDays'>6 Days!</h1>
                <img src={detailsPhoto} alt="Details photo" className='detailsPhoto'/>
                <Link to='/signup'> <button className='register-button'>Register Now!</button></Link>
               

            </div>
           
            </div>   

            <div className='secondary-container'>
             <div className='header-content-secondary'>
                <div className='InOnlySixDays'>
                <h1 className='secondary-heading'>In only 6 days </h1>
                <p className='secondary-para'>we're going to show you exactly how you can copy our success step-by-step and build your own NutraFunnel that auto-dropships your own private label supplement for you</p>
                </div>
                
                <h1 className='secondary-heading'>In Just 6 days</h1>
                <p className='secondary-para2'>We are going to guide you through this simple, 6 step program, that will help you to</p>
                
               <div className='bullets'>

               <div className='checkSign'>
                    <img src={checkSign} alt="Check Sign" />
                    <h3>Quit your Job</h3>
                </div>

                <div className='checkSign'>
                    <img src={checkSign} alt="Check Sign" />
                    <h3>Retire</h3>
                </div>

                <div className='checkSign'>
                    <img src={checkSign} alt="Check Sign" />
                    <h3>Get the life and Bank Account That You Want</h3>
                </div>
               </div>

            </div>
            </div>
       </div>
          
    )
}

export default withRouter(Header);