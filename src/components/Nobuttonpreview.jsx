import React, { useState } from 'react';
import './Nobuttonpreview.css';

// Importing images
import laptop1 from '../images/laptop5.webp';
import mobile1 from '../images/phone5.avif';
import laptop2 from '../images/laptop1.webp';
import mobile2 from '../images/phone2.avif';
import laptop3 from '../images/laptop3.webp';
import mobile3 from '../images/phone3.avif';

const  NobuttonPreview = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const templates = [
    {
      id: 0,
      name: 'Template One',
      price: '$49',
      reviews: '75%(522)',
      laptopImage: laptop1,
      mobileImage: mobile1,
    },
    {
      id: 1,
      name: 'Template Two',
      price: '$59',
      reviews: 89,
      laptopImage: laptop2,
      mobileImage: mobile2,
    },
    {
      id: 2,
      name: 'Template Three',
      price: '$69',
      reviews: 256,
      laptopImage: laptop3,
      mobileImage: mobile3,
    },
  ];

  const handleTemplateChange = (index) => {
    setSelectedTemplate(index);
  };

  return (
    <div className="template-container">
      <div
        className="image-container"
        onMouseEnter={() => document.getElementById('mobile2').classList.add('move-up')}
        onMouseLeave={() => document.getElementById('mobile2').classList.remove('move-up')}
      >
        <img
          id="laptop"
          className="laptop-image"
          src={templates[selectedTemplate].laptopImage}
          alt="Laptop Template"
        />
        <img
          id="mobile2"
          className="mobile-image"
          src={templates[selectedTemplate].mobileImage}
          alt="Mobile Template"
        />
      </div>

     
      <div className="template-info">
        <h3>Vera</h3>
        <p>600$</p>
        <div className="reviews">
        <i class="fas fa-thumbs-up"></i>
          <span>{templates[selectedTemplate].reviews} </span>
         
        </div>
      </div>
    </div>
  );
};

export default NobuttonPreview;
