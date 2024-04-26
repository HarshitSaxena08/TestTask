import React from 'react'
import "../style/FindDoctors.css";
import RightContainer from './RightContainer';
const FindDoctors = () => {
    return (
        <>

            {/* banner container */}
            <div className='container1'>

                </div>
            {/* img container */}
            <div className='container2'>
                <div className='imgContainer' >

                    <img className='personImg' src="../../image/person.png" alt='person' />
                    <div >
                        <br />
                        <h4 className='doctorName'>Dr. Bruce Willis <img className='verified' src="../../image/Frame.png" alt='frame' /> </h4>
                        <h5 className='specialist'>Gynecologist</h5>
                        {/* <br/> */}
                        <p className='rating'>4.2 <img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /></p>
                    </div>
                </div>
                <div className='followerDiv'>
                    <div className='Followers'>
                        <p>Followers</p>

                        <p className='number'>850 </p>
                    </div>
                    <div className='Following'>
                        <p>Following</p>
                        <p className='number'>18K </p>
                    </div>
                    <div className='Posts'>
                        <p>Posts</p>
                        <p className='number'>250 </p>

                    </div>
                </div>
                <div className='buttonDiv'>
                    <button className='bookBtn'>Book an Appointment</button>
                </div>


            </div>

            <div className='container'>


                <div className='leftContainer'>

                    {/* A little about me container */}
                    <div className='littleDiv'>

                        <div className='little'>
                            <div className='textContainer'> A Little About me</div>
                            <div > <button className='followBtn'>Follow +</button></div>
                        </div>
                        <br />
                        <div className='desContainer' >
                            <p className='description'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>

                            <div className='ReadContainer'>
                                <div className='line'><hr /></div>
                                <div className='readText'><p>Read More</p></div>

                            </div>
                            <br />
                            <div className='langContainer'>
                                <div className='lang'>Language Spoken </div>

                                <div className='langType'>English </div>
                                <div className='langType'>Hindi  </div>
                                <div className='langType'>Telugu </div>
                            </div>
                            <br />
                            <div className='iconsDiv'>
                                <div className='icons'><img src="../../image/fb.png" alt='fb icon'></img> </div>
                                <div className='icons'><img src="../../image/youtube.png" alt='fb icon'></img> </div>
                                <div className='icons'><img src="../../image/twitter.png" alt='fb icon'></img> </div>
                                <div className='icons'><img src="../../image/insta.png" alt='fb icon'></img> </div>


                            </div>
                            <br />

                        </div>
                    </div>

                    {/* Im specialize in  */}
                    <div className='littleDiv'>

                        <div className='little'>
                            <div className='textContainer'>I Specialize In</div>

                        </div>
                        <br />
                        <div className='desContainer' >

                            <div className='cardContainer'>
                                <div className='cardIconsDiv'><img className='cardIcons' src="../../image/Women 1.png" alt='women icon'></img>
                                    <p className='cardText'>Women’s Health</p>
                                </div>
                                <div className='cardIconsDiv'><img className='cardIcons' src="../../image/Hair 1.png" alt='hairicon'></img>
                                    <p className='cardText'>Skin Care</p>
                                </div>

                                <div className='cardIconsDiv'><img className='cardIcons' src="../../image/Skincare 1.png" alt='Skincare  icon'></img>
                                    <p className='cardText'>Immunity</p>

                                </div>
                                <div className='cardIconsDiv'><img className='cardIcons' src="../../image/Immunity 1.png" alt='Immunity  icon'></img>
                                    <p className='cardText'>Hair Care</p>
                                </div>


                            </div>
                            <br />

                        </div>
                    </div>

                    {/* The Concerns I Treat */}
                    <div className='littleDiv'>

                        <div className='little'>
                            <div className='textContainer'>The Concerns I Treat</div>

                        </div>
                        <br />

                        <div className='treatContainer'>

                            <div className='treatType'><span>Skin Treatment </span> </div>
                            <div className='treatType'><span>Pregnancy  </span> </div>
                            <div className='treatType'><span>Period Doubts </span> </div>
                            <div className='treatType'><span>Endometriosis </span> </div>
                            <div className='treatType'><span>Pelvic Pain  </span></div>
                            <div className='treatType'><span>Ovarian Cysts  </span></div>
                            <div className='treatType'><span>+ 5 More  </span></div>
                        </div>



                    </div>

                    {/* My Work Experience */}
                    <div className='littleDiv'>

                        <div className='Work-Experience'>

                            <span>My Work Experience</span>

                        </div>
                        <div className='workContent'>
                            <br />
                            <p>I have been in practice for : 7+ Years</p>
                            <br />
                            <div className='line'><hr /></div>
                            <br />
                            <div className='workInnearContainer'>
                                <div >
                                    <img className='houseImg' src='../../image/House.png' alt="House" />
                                    <div className='workInnearText'>
                                        <span>Midtown Medical Clinic</span>
                                        <br />
                                        <span>Senior doctor</span>
                                    </div>
                                    <br />

                                </div>


                                <div className='Duration'>
                                    2016-Present
                                </div>
                            </div>
                            <br />
                            <div className='workInnearContainer'>
                                <div >
                                    <img className='houseImg' src='../../image/House.png' alt="House" />
                                    <div className='workInnearText'>
                                        <span>Midtown Medical Clinic</span>
                                        <br />
                                        <span>Senior doctor</span>
                                    </div>
                                    <br />

                                </div>


                                <div className='Duration'>
                                    2010-2015
                                </div>
                            </div>
                            <br />
                        </div>

                    </div>

                    <br />

                    {/* Featured Reviews (102) */}
                    <div className='littleDiv'>

                        <div className='Work-Experience'>

                            <span>Featured Reviews (102)</span>

                        </div>


                        <div className='userDiv'>


                            <div className='userInnearContainer'>

                                <div className='userInfo'>
                                    <div>

                                        <img className='userProfileImg' src='../../image/userProfile.jpeg' alt="userProfile" />
                                    </div>


                                    <div className='userInnearText'>
                                        <span className='userName'>Alicent Hightower</span>
                                        <br />
                                        <span className='occuption'>Consulted for Skin care</span>
                                    </div>
                                    <br />

                                </div>


                                <div className='Duration'>
                                    20 January 2023
                                </div>
                            </div>
                            <br />
                            <div className='userDesc'>

                                <div className='rating'><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /></div>

                                <span>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</span>


                            </div>

                        </div >

                        <div className='userDiv'>


                            <div className='userInnearContainer'>

                                <div className='userInfo'>
                                    <div>

                                        <img className='userProfileImg' src='../../image/userProfile.jpeg' alt="userProfile" />
                                    </div>


                                    <div className='userInnearText'>
                                        <span className='userName'>Alicent Hightower</span>
                                        <br />
                                        <span className='occuption'>Consulted for Skin care</span>
                                    </div>
                                    <br />

                                </div>


                                <div className='Duration'>
                                    20 January 2023
                                </div>
                            </div>
                            <br />
                            <div className='userDesc'>

                                <div className='rating'><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /><img src="../../image/stars.png" alt='stars' /></div>

                                <span>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</span>


                            </div>

                        </div >
                    </div>

                    <br />

                </div>

                {/* right conationer */}

                <RightContainer/>
            </div>

        </>


    )
}

export default FindDoctors;