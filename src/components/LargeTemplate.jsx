import React, { useState } from 'react';
import './LargeTemplate.css';

const LargeTemplate = ({ laptopImage, mobileImage, templateName, price, reviews, buttonColors }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { laptop: laptopImage[0], mobile: mobileImage[0] },
    { laptop: laptopImage[1], mobile: mobileImage[1] },
    { laptop: laptopImage[2], mobile: mobileImage[2] },
  ];

  const handleButtonClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="template-container-a">
      <div
        className="image-container-a"
        onMouseEnter={() => document.getElementById('mobilel').classList.add('move-up')}
        onMouseLeave={() => document.getElementById('mobilel').classList.remove('move-up')}
      >
        <img
          id="laptop"
          className="laptop-image-a"
          src={images[selectedImage].laptop}
          alt="Laptop Template"
        />
        <img
          id="mobilel"
          className="mobile-image-a"
          src={images[selectedImage].mobile}
          alt="Mobile Template"
        />
      </div>
      <div className='template-flex-a'>
      <div className="template-info-a">
        <h3>{templateName}</h3>
        <p>{price}</p>
        <div className="reviews-a">
        <i class="fas fa-thumbs-up"></i>  
          <span>{reviews}</span>
        </div>
      </div>
      <div className="buttons-a">
        {buttonColors.map((color, index) => (
          <div
            key={index}
            className={`button-a ${selectedImage === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default LargeTemplate;
