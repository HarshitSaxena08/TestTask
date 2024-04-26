import React from 'react';

    /* The following line can be included in your src/index.js or App.js file */
  
  import 'bootstrap/dist/css/bootstrap.min.css';

export default function Newcarousel() {
    return (
        <>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='harsh'>
                            <div className='option'>
                                <div className='optionName'>Video <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>
                            <div className='option'>
                                <div className='optionName'>deo <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>
                            <div className='option'>
                                <div className='optionName'>Vi <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>


                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='harsh'>

                        <div className='option'>
                                <div className='optionName'>Vooeo <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>
                            <div className='option'>
                                <div className='optionName'>kkkk <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>
                            <div className='option'>
                                <div className='optionName'>Vijjjj <img className='verify' src="../../image/Frame.png" alt='frame' /> </div>
                                <div className='optionTime'>45 Mins</div>
                            </div>
                        </div>
                    </div>






                </div>
                <button className="  carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className=" carouselo visually-hidden">Previous</span>
                </button>
                <button className=" carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="carouselo visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
