import React from 'react'
import Newcarousel from '../components/Carousel';

const RightContainer = () => {
    return (
        <div className='rightContainer'>
            <br />
            <div className=' appContainer'>
                <div >
                    <span className=' appFee'>Appointment Fee</span>
                </div>
                <div className='appRates'>
                    <span>₹699.00</span>
                </div>
            </div>

            <div className='desCont'>
                <div className='des'>
                    <span> Select your mode of session</span>
                </div>
                    <div className='line2'><hr /></div>
            </div>
            
            <div className='optionsContainer'>
                <div className='option'>
                     <div className='optionName'><span>In-Clinic</span>   <img className='verify' src="../../image/Frame.png" alt='frame' /> </div> 
                           
                     <div className='optionTime'>45 Mins</div>       
                </div>
                {/* <button > */}

                <div className='option'>
                     <div className='optionName'>Video <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>       
                     <div className='optionTime'>45 Mins</div>       
                </div>
                {/* </button> */}
                <div className='option'>
                     <div className='optionName'>Chat <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>       
                     <div className='optionTime'>10 Mins</div>       
                </div>
                
            </div>


            {/* Pick a Time slot */}
            <div>
            <div className='desCont'>
                <div className='des'>
                    <span>Pick a Time slot</span>
                </div>
                <div className='line2'><hr /></div>
                <div className='calandar' ><img className='calenderContainer' src='../../image/calendar.png' alt='calendar'/> </div>
            </div>

            <div>
                <Newcarousel/>

               
            </div>

            <div className='timeSlotDiv'>
                <h4 className='timeText'>Morning</h4>
                <br/>
                <div className='timeSlot'>
                <div className='timeOption'>
                     <div className='time'>9:00 A.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>9:30 A.M</div>   
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>10:00 A.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>10:30 A.M</div>       
                            
                        
                </div>

               
                <div className='timeOption'>
                     <div className='time'>11:00 A.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>11:30 A.M</div>   
                        
                </div>
             
                </div>

               
            </div>
                <br/>

            <div className='timeSlotDiv'>
                <h4 className='timeText'>Evening</h4>
                <br/>
                <div className='timeSlot'>
                <div className='timeOption'>
                     <div className='time'>4:00 P.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>4:10 P.M</div>   
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>4:30 P.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>4:45 P.M</div>       
                            
                        
                </div>

               
                <div className='timeOption'>
                     <div className='time'>5:00 P.M</div>       
                            
                        
                </div>
                <div className='timeOption'>
                     <div className='time'>5:30 A.M</div>   
                        
                </div>
                </div>

                <br/>
                <div className='buttonDiv'>
                    <button className='bookBtn'>Make an Appointment</button>
                </div>
               
            </div>


            </div>
        </div>
    )
}

export default RightContainer;