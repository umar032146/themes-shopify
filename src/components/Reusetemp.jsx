import React, { useState } from 'react';
import './TemplatePreview.css';

const ReuseTemp = ({ laptopImage, mobileImage, templateName, price, reviews, buttonColors, idno }) => {
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
    <div className="template-container">
      <div
        className="image-container"
        onMouseEnter={() => document.getElementById(idno).classList.add('move-up')}
        onMouseLeave={() => document.getElementById(idno).classList.remove('move-up')}
      >
        <img
          id="laptop"
          className="laptop-image"
          src={images[selectedImage].laptop}
          alt="Laptop Template"
        />
        <img
          id={idno}
          className="mobile-image"
          src={images[selectedImage].mobile}
          alt="Mobile Template"
        />
      </div>
      <div className='template-flex'>
      <div className="template-info">
        <h3>{templateName}</h3>
        <p>{price}</p>
        <div className="reviews">
        <i class="fas fa-thumbs-up"></i>  
          <span>{reviews}</span>
        </div>
      </div>
      <div className="buttons">
        {buttonColors.map((color, index) => (
          <div
            key={index}
            className={`button ${selectedImage === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ReuseTemp;
