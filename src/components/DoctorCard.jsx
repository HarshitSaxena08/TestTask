import React from 'react';
import '../style/DoctorCard.css';

const DoctorCard = () => {
  return (
    <>
      <div className="docCard">
        <div className='innearDocDiv'>
          <div className='doctorImg'>
            <img src='../../image/doctor.png' alt="doctor" />
            <div className='doctorRating'>4.5 <img src='../../image/stars.png' alt='star' height={'15px'} width={'15px'} /></div>
          </div>
          <div className='doctorNam'><span>Dr. Prerna Narang</span></div>
        </div>

      </div>
    </>
  )
}

export default DoctorCard;