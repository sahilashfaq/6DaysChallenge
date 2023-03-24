import React from 'react'
import frame from '../images/frame.png'
import planeFrame from '../images/planeFrame.png'
import peopleImage from '../images/peopleImage.png'
import failedPeople from '../images/failImage.png'
import tradeImage from '../images/tradeImage.png'
import image5 from '../images/image5.png'
import image4 from '../images/image4.png'
import loadingImage from '../images/loadingImage.png'
import laptop from '../images/laptop.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'



export default function StepsComponent(){
    return(
        <div className='steps-main-container'>
            

            <div className='labelsAndFrame'>

            <div className='steps-heading'>
                <h3>How to become successful</h3>
                <h1 className='fiveSteps'>In 5 Steps</h1>
            </div>
                
            <div className='photos-div'>
                <img src={frame} alt="" />
            </div>
                
            <div className='all-label' id='spy-label' >
                <h3 className=''>Spy</h3>
                <p>First we use insider information to find outwhat supplement funnels are hot.</p>
            </div>


            <div className='all-label' id='funnel-label'>
                <h3 className=''>Funnel Hack</h3>
                <p>First we use insider information to find out what supplement funnels are hot.</p>
            </div>

            <div className='all-label' id='rinse-label'>
                <h3 className=''>Rinse And Repeat</h3>
                <p>Then we rinse and repeat! You can do this again and again and build as many NutraFunnels as you want! it's just that SIMPLE!</p>
            </div>

            <div className='all-label' id='traffic-label'>
                <h3 className=''>Traffic Outsource</h3>
                <p>Then we outsource all of the traffic-running to an affiliate network and PROFIT!</p>
            </div>

            </div>
            <br />

            {/* Start of NO */}

            <div className='no-container'>

            <div className='no-heading'>
                <h3>THE BEST PART ALL IS <br /> THERE'S</h3>
            </div>
                
            <div className='no-div'>

                {/* start of items */}

                <div className='all-items' id='item1'>
                    <img src={img1} alt="" />
                    <h5>MLM RECRUITING </h5>
                </div>

                <div className='all-items' id='item2'>
                    <img src={img2} alt="" />
                    <h5>FACEBOOK ADS</h5>
                </div>

                <div className='all-items' id='item3'>
                    <img src={img3} alt="" />
                    <h5>NO BUYING INVENTORY</h5>
                </div>

                <div className='all-items' id='item4'>
                    <img src={img4} alt="" />
                    <h5>WORDPRESS OR BLOGGING</h5>
                </div>

                <div className='all-items' id='item5'>
                    <img src={img5} alt="" />
                    <h5>AFFILIATE MARKETING </h5>
                </div>

                <div className='all-items' id='item6'>
                    <img src={img6} alt="" />
                    <h5>SEO/PPC/YOUTUBE</h5>
                </div>

                {/* end of items */}
                    <div className='main-inner-div'>
                    <hr />
                    <div className='inner-no-div'>
                        <div className='left-hr'></div>
                            <h1>NO</h1>
                        <div className='right-hr'></div>
                    </div>
                    <hr />
                    </div>
            </div>
                
            <div className='all-label' id='spy-label' >
                <h3 className=''>Spy</h3>
                <p>First we use insider information to find outwhat supplement funnels are hot.</p>
            </div>


            <div className='all-label' id='funnel-label'>
                <h3 className=''>Funnel Hack</h3>
                <p>First we use insider information to find out what supplement funnels are hot.</p>
            </div>

            <div className='all-label' id='rinse-label'>
                <h3 className=''>Rinse And Repeat</h3>
                <p>Then we rinse and repeat! You can do this again and again and build as many NutraFunnels as you want! it's just that SIMPLE!</p>
            </div>

            <div className='all-label' id='traffic-label'>
                <h3 className=''>Traffic Outsource</h3>
                <p>Then we outsource all of the traffic-running to an affiliate network and PROFIT!</p>
            </div>

            </div>
            <br />

            
           <div className='Button-div'>
           <button className='iAmIn-button'>Yes, I'm in</button>
           </div>

           <h2 className="joinForFree">Join For Free No-Charge</h2>

           <div className='bestPartDiv'>
           <h3 className='bestPart'>The Best Part is that there’s</h3>

           </div>

           <div className='sixDayAccelator'>
           <h3 className= 'firstHeading'>The 6 Days Accelerator</h3>
            <h3 className='secondHeadingComplimentary'>Is Complimentory!</h3>
            <img src={planeFrame} alt="" /> 

            <h2>In The 6-Day</h2>
            <h1>Accelerator!</h1>
            <div className='Accelerator-paragraph'>
                <p>you'll get the support of hundreds of other people just like you that are looking to build profitable passive income streams online! These people will help encourage you every step of your online business journey.</p>
            </div>
           </div>
           

           <div className='peopleDiv'>
           <img src={peopleImage} alt="" /> <br/> <br/>
           <button className='iAmIn-button'>Yes, I'm in</button>
           <h2 className="joinUs">Join For Free No-Charge</h2>

           </div> <br />

           <div className='failed-div'>
           <div className='peopleDivHeadings'>
                <h2>THIS IS FOR</h2>
                <h1>YOU IF YOU</h1>
           </div>

            <div className='people-paragraph-div'>
                <p className='people-paragraph'>Have Already Tried To Build An Online Business Before And <strong className='strong-tag'>Failed</strong>
                </p>
            </div>
            <img src={failedPeople} alt="" /> <br/> <br/>
           </div>


           <div className='failed-div'>
            <div className='people-paragraph-div'>
                <p className='people-paragraph'>Are looking to transition away from a J-O-B and <strong className='strong-tag'>Replace</strong> your primary income source
                </p>
            </div>
            <img src={tradeImage} alt="" /> <br/> <br/>
           </div>

           <div className='trade2-div'> 
           <div className='failed-div'>
           <div className='peopleDivHeadings'>
                <h1>IF YOU CURRENTLY</h1><br/><br /><br /><br />
                <h1>ARE INTERESTED</h1>
           </div>

            <div className='trade2'>
                <p className='trade2-paragraph'>
                    In Starting A 6 Figure Online Supplement <strong className='strong-tag'>Drop-Shipping Business</strong>, Automating It And Working From The Comfort Of Your Own Home Part-Time.
                </p>
            </div>
            <img src={image5} alt="" /> <br/> <br/>
           </div>

           </div>

           <div className='noisy-marketers'>
                <div className='left'>
                <img src={image4} alt="" />
                </div>

                <div className='right'>
                    <h1>IF YOU</h1>
                    <p>Want Expert, Credible Sound</p>
                    <p><strong className='strong-tag'>Guidance</strong> To Filter All The Other</p>
                    <h2>"Noisy Marketers!"</h2>
                    <p>Telling You What To Do.</p>

                </div>
           </div>

           <div className='progress'>
                
                    <h1>IF YOU</h1>
                    <p>Are ready to make real life-Changing <strong className='strong-tag'>Progress</strong> </p>
                    <h2>In Just 6 Days.</h2>

                    <img src={loadingImage} alt="" />
           </div>

           <div className='last-div-container'>

            <div className='last-div'>
            <h2>READY TO JUMP INTO THE</h2>
            <h1>NUTRAFUNNELS <br/> ACCERELATOR?</h1><br />
            <button className='iAmIn-button'>Yes, I'm In</button>
            <h2 className="joinForFreeBtn">Join For Free No-Charge</h2>

            </div>

            <div className='last-div-right'>
                <img src={laptop} alt="" />
            </div>
        
           </div>

           <div className='footer'>
           <small className='footer'>Copyrights © 2022 NutraFunnels. All Rights Reserved</small>
           </div>
           
        </div>
    )
}
