import React from 'react';
import './ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className='ParentBox'>
        <div className="pic-ctn">
            <img src="https://plus.unsplash.com/premium_photo-1725408006810-53ae337c6efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" className="pic" />
            <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8fDA%3D" alt="" className="pic" />
            <img src="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pic" />
            <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pic" />
            <img src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pic" />
        </div>
        <div className="ImageText">
            <h1>How we work</h1>
            <p >We create a referral profile that rewards<br />potential employees for referring friends.</p>
            <p >"Make informed hiring decisions with <br />our referral network." <br/><br/> ~ NextHire. </p>
        </div>
    </div>
  )
}

export default ImageCarousel;