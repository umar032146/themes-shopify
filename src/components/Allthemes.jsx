import React from 'react'
import { useState } from 'react';
import './Allthemes.css'
import ReuseTemp from './Reusetemp'
import laptop15 from '../images/laptop15.webp';
import laptop16 from '../images/laptop16.webp';
import laptop17 from '../images/laptop17.webp';
import phone15 from '../images/phone15.avif';
import phone16 from '../images/phone16.avif';
import phone17 from '../images/phone17.avif';
import laptop1 from '../images/laptop1.webp';
import laptop2 from '../images/laptop2.webp';
import laptop3 from '../images/laptop3.webp';
import phone1 from '../images/phone1.avif';
import phone2 from '../images/phone2.avif';
import phone3 from '../images/phone3.avif';
import laptop4 from '../images/laptop4.webp';
import laptop5 from '../images/laptop5.webp';
import laptop6 from '../images/laptop6.webp';
import phone4 from '../images/phone4avif.avif';
import phone5 from '../images/phone5.avif';
import phone6 from '../images/phone6.avif';
import laptop7 from '../images/laptop7.webp';
import laptop8 from '../images/laptop8.webp';
import laptop9 from '../images/laptop9.webp';
import phone7 from '../images/phone7.avif';
import phone8 from '../images/phone8.avif';
import phone9 from '../images/phone9.avif';
import laptop18 from '../images/laptop18.webp';
import laptop19 from '../images/laptop19.webp';
import laptop20 from '../images/laptop20.webp';
import phone18 from '../images/phone18.avif';
import phone19 from '../images/phone19.avif';
import phone20 from '../images/phone20.avif';
import laptop10 from '../images/laptop10.webp';
import laptop11 from '../images/laptop11.webp';
import laptop12 from '../images/laptop12.webp';
import phone10 from '../images/phone10.avif';
import phone11 from '../images/phone11.avif';
import phone12 from '../images/phone12.avif';
const Allthemes = () => {

  const dropdownOptions = ['Free', 'Paid', 'Latest', 'Relevant', 'Most Liked'];

  const [isOpen, setIsOpen] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: [],
    dropdown2: [],
    dropdown3: [],
    dropdown4: [],
    dropdown5: [],
  });

  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleCheckboxChange = (dropdown, option) => {
    setSelectedOptions((prevState) => {
      const updatedSelected = prevState[dropdown].includes(option)
        ? prevState[dropdown].filter((item) => item !== option)
        : [...prevState[dropdown], option];
      return { ...prevState, [dropdown]: updatedSelected };
    });
  };


  return (
    <>
      <div className='banner'>
     <h1>All themes</h1>
     <p>Explore themes that make it easy for customers to find the right product. Features to look for: enhanced search and filtering, mega menus, breadcrumbs, and collection page navigation</p>
    </div>

<div className='allthemes'>

<div className='dropdown-col'>
    <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => toggleDropdown('dropdown1')}>
          Price
        </button>
        {isOpen.dropdown1 && (
          <div className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.dropdown1.includes(option)}
                  onChange={() => handleCheckboxChange('dropdown1', option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown 2 */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => toggleDropdown('dropdown2')}>
          Industry
        </button>
        {isOpen.dropdown2 && (
          <div className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.dropdown2.includes(option)}
                  onChange={() => handleCheckboxChange('dropdown2', option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown 3 */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => toggleDropdown('dropdown3')}>
          Size
        </button>
        {isOpen.dropdown3 && (
          <div className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.dropdown3.includes(option)}
                  onChange={() => handleCheckboxChange('dropdown3', option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown 4 */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => toggleDropdown('dropdown4')}>
          Features
        </button>
        {isOpen.dropdown4 && (
          <div className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.dropdown4.includes(option)}
                  onChange={() => handleCheckboxChange('dropdown4', option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown 5 */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => toggleDropdown('dropdown5')}>
          Dropdown 5
        </button>
        {isOpen.dropdown5 && (
          <div className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.dropdown5.includes(option)}
                  onChange={() => handleCheckboxChange('dropdown5', option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
      </div>

     <div className='Showthemes'>

      <div className='theme-row'>
      <ReuseTemp
       idno={'reuse'}
       laptopImage={[laptop15, laptop16, laptop17]}
       mobileImage={[phone15, phone16, phone17]}
       templateName="Yuxa"
       price="$490"
       reviews={150}
       buttonColors={['#ff5c5c', '#ff9999', '#ffcccc']}
    />

<ReuseTemp
       idno={'reuse1'}
       laptopImage={[laptop1, laptop2, laptop3]}
       mobileImage={[phone1, phone2, phone3]}
       templateName="Yuxa"
       price="$490"
       reviews={150}
       buttonColors={['#ffee5c', '#ff9999', '#7dc24f']}
    />
      </div>

      <div className='theme-row'>
      <ReuseTemp
       idno={'reuse2'}
       laptopImage={[laptop4, laptop5, laptop6]}
       mobileImage={[phone4, phone5, phone6]}
       templateName="Yuxa"
       price="$490"
       reviews={150}
       buttonColors={['#d17834', '#8334d1', '#ffcccc']}
    />
     <ReuseTemp
       idno={'reuse3'}
       laptopImage={[laptop7, laptop8, laptop9]}
       mobileImage={[phone7, phone8, phone9]}
       templateName="Yuxa"
       price="$490"
       reviews={150}
       buttonColors={['#d15334', '#ff9999', '#4934eb']}
    />

      </div>

     <div className='theme-row'>
     <ReuseTemp
       idno={'reuse4'}
       laptopImage={[laptop18, laptop19, laptop20]}
       mobileImage={[phone18, phone19, phone20]}
       templateName="Starlight"
       price="$490"
       reviews={150}
       buttonColors={['#ff5c5c', '#4934eb', '#2bd7e0']}
    />

<ReuseTemp
       idno={'reuse5'}
       laptopImage={[laptop1, laptop2, laptop3]}
       mobileImage={[phone1, phone2, phone3]}
       templateName="Starlight"
       price="$490"
       reviews={150}
       buttonColors={['#ee5c5c', '#35cc1b', '#ffcccc']}
    />
     </div>

     </div>



      </div>
    </>
  )
}

export default Allthemes