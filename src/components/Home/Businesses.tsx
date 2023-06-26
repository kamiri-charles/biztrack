import React from 'react';
import './Businesses.scss';

const Businesses: React.FC = () => {
  return (
    <div className='businesses'>
      <div className="business-card">
          <div className="business-img">
            <i className="bx bxs-image-alt"></i>
          </div>

          <div className="business-meta">

            <div className="name">
              <i className="bx bx-buildings"></i>
              <span>business_name</span>
            </div>

            <div className="email">
              <i className="bx bx-envelope"></i>
              <span>abc123@gmail.com</span>
            </div>

            <div className="location">
              <i className="bx bx-map-pin"></i>
              <span>Ngara, Nairobi</span>
            </div>

            <div className="buttons">
              <i className="bx bx-edit"></i>
              <i className="bx bx-cog"></i>
              <i className="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Businesses;