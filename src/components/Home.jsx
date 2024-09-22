import React from 'react'
import { useState } from 'react';
import './Home.css'
import header from '../images/header.webp';
import fact1 from '../images/fac1.webp';
import fact2 from '../images/fac2.webp';
import fact3 from '../images/fac3.webp';
import correct from '../images/correct.png';
import clock from '../images/history.png';
import speed from '../images/speedometer.png';
import write from '../images/copywriting.png';
import band from '../images/band-aid.png';
import TemplatePreview from './TemplatePreview';
import NobuttonPreview from './Nobuttonpreview';
import Nobutton2 from './Nobutton2';
import TemplatePreview2 from './Templatepreview2';
import LargeTemplate from './LargeTemplate';
import laptop9 from '../images/laptop9.webp';
import laptop10 from '../images/laptop10.webp';
import laptop11 from '../images/laptop11.webp';
import phone9 from '../images/phone9.avif';
import phone10 from '../images/phone10.avif';
import phone11 from '../images/phone11.avif';
import laptop12 from '../images/laptop12.webp';
import laptop13 from '../images/laptop13.webp';
import laptop14 from '../images/laptop14.webp';
import phone12 from '../images/phone12.avif';
import phone13 from '../images/phone13.avif';
import phone14 from '../images/phone14.avif';
const Home = () => {
  const [activeTab, setActiveTab] = useState('features');

  // Function to handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <>
    <div className='main'>
    <div className='main-info'>
        <h1>Pipeline</h1>
        <p>$400 USD</p>
        <p><span>Unlimited free Trial</span> Pay if you publish</p>
        <h3>Your Reign in Ecommerce Begins here</h3>
        
        <h4>Reviews(4)</h4>
        <p className='smaller'><i class="fa fa-thumbs-up"></i> 75% Positive</p>
        <h4>Developer</h4>
        <p className='smaller'><span>Shine Dezign Infont</span></p>
        <button>Try Theme</button><br></br>
        <button>View demo store</button>
        <h6>Last updated Sep 5, 2024
        Version 1.0.1</h6>
    </div>

    <div className='main-img'>
      <img src={header}/>
    </div>

    </div>
   
   <div className='service-row'>
   <div className='service-sec'>
    <div className='service-img'>
    <img src={fact1}/>
      <div className='overlay'>
      <i class="fa fa-search overlay-content"></i>
      </div>  
      </div>
    <h2>Rich in 30+ section</h2>
    <p>Use our customizable sections and conversion-optimized templates to create any layout you want and start selling quickly.</p>
   </div>

   <div className='service-sec'>
    <div className='service-img'>
    <img src={fact2}/>
      <div className='overlay'>
      <i class="fa fa-search overlay-content"></i>
      </div>  
      </div>
    <h2>Rich in 30+ section</h2>
    <p>Use our customizable sections and conversion-optimized templates to create any layout you want and start selling quickly.</p>
   </div>

   <div className='service-sec'>
    <div className='service-img'>
    <img src={fact3}/>
      <div className='overlay'>
      <i class="fa fa-search overlay-content"></i>
      </div>  
      </div>
    <h2>Rich in 30+ section</h2>
    <p>Use our customizable sections and conversion-optimized templates to create any layout you want and start selling quickly.</p>
   </div>
   </div>


   <div className="tab-menu">
        <button
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => handleTabClick('features')}
        >
          Features
        </button>
        <button
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews
        </button>
        <button
          className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => handleTabClick('support')}
        >
          Support
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'features' && (
          <div className='features'>
            <div className='feature-line'>
              <div className='feature-sec'>
                <p>This Theme is great for</p>
              </div>
              <div className='feature-sec'>
                <p><span>Flash sales</span><br/>
                Designed with features for running time-based promotions</p>
                <p><span>Visual storytelling</span><br/>
                Designed to showcase images to support visual brand storytelling</p>
                <p><span>Dropshippers</span><br/>
                Designed specifically for dropshippers</p>  
              </div>

            </div>

            <div className='feature-line'>
              <div className='feature-sec'>
                <p>This Theme is great for</p>
              </div>
              <div className='feature-sec'>
                <p><span>Flash sales</span><br/>
                Designed with features for running time-based promotions</p>
                <p><span>Visual storytelling</span><br/>
                Designed to showcase images to support visual brand storytelling</p>
                <p><span>Dropshippers</span><br/>
                Designed specifically for dropshippers</p>  
              </div>

            </div>


            <div className='feature-line'>
              <div className='feature-sec'>
                <p>This Theme is great for</p>
              </div>
              <div className='feature-sec'>
                <p><span>Flash sales</span><br/>
                Designed with features for running time-based promotions</p>
                <p><span>Visual storytelling</span><br/>
                Designed to showcase images to support visual brand storytelling</p>
                <p><span>Dropshippers</span><br/>
                Designed specifically for dropshippers</p>  
              </div>

            </div>

            <div className='feature-line'>
              <div className='feature-sec'>
                <p>This Theme is great for</p>
              </div>
              <div className='feature-sec'>
                <p><span>Flash sales</span><br/>
                Designed with features for running time-based promotions</p>
                <p><span>Visual storytelling</span><br/>
                Designed to showcase images to support visual brand storytelling</p>
                <p><span>Dropshippers</span><br/>
                Designed specifically for dropshippers</p>  
              </div>

            </div>


          </div>
        )}
        {activeTab === 'reviews' && (
          <div className='reviews'>
            <div className='rating'>
              <h3>Reviews(4)</h3>
              <p>75% Positive</p>

              <div className='rating-per'>
              <i class="fas fa-thumbs-up"></i>
              <div className="progress-bar">
      <div className="filled-bar" style={{ width: `${70}%` }}></div>
    </div>
    <p>3</p>
              </div>

              <div className='rating-per'>
              <i class="fas fa-smile"></i>
              <div className="progress-bar">
      <div className="filled-bar" style={{ width: `${0}%` }}></div>
    </div>
    <p>0</p>
              </div>

              <div className='rating-per'>
              <i class="fas fa-thumbs-down"></i>
              <div className="progress-bar">
      <div className="filled-bar" style={{ width: `${10}%` }}></div>
    </div>
    <p>1</p>
              </div>

              <button>Write a Review</button>
            </div>

          <div className='comments'>
          <div className='comment'>
            <div className='comment-info'>
            <h4>Marcha US <i class="fas fa-thumbs-up"></i></h4>
            <p>3 days ago</p>
            </div>
            <p>I recently purchased this theme and am overall pleased with the design. It's modern and visually appealing. I believe it has the potential to become a popular choice among Shopify users. Overall, I'm satisfied with my purchase and look forward to seeing future updates and improvements to this theme.</p>
          </div>

          <div className='comment'>
            <div className='comment-info'>
            <h4>Marcha US <i class="fas fa-thumbs-up"></i></h4>
            <p>3 days ago</p>
            </div>
            <p>I recently purchased this theme and am overall pleased with the design. It's modern and visually appealing. I believe it has the potential to become a popular choice among Shopify users. Overall, I'm satisfied with my purchase and look forward to seeing future updates and improvements to this theme.</p>
          </div>

          <div className='comment'>
            <div className='comment-info'>
            <h4>Marcha US <i class="fas fa-thumbs-up"></i></h4>
            <p>3 days ago</p>
            </div>
            <p>I recently purchased this theme and am overall pleased with the design. It's modern and visually appealing. I believe it has the potential to become a popular choice among Shopify users. Overall, I'm satisfied with my purchase and look forward to seeing future updates and improvements to this theme.</p>
          </div>

          <div className='comment'>
            <div className='comment-info'>
            <h4>Marcha US <i class="fas fa-thumbs-down"></i></h4>
            <p>3 days ago</p>
            </div>
            <p>I recently purchased this theme and am overall pleased with the design. It's modern and visually appealing. I believe it has the potential to become a popular choice among Shopify users. Overall, I'm satisfied with my purchase and look forward to seeing future updates and improvements to this theme.</p>
          </div>

          </div>


          </div>
        )}
        {activeTab === 'support' && (
          <div className='support'>
            <div className='contact-sec'>
            <h3>This theme is supported by Shine Dezign Infonet</h3>
            <p className='underline'><i class="fas fa-headphones"></i> Get Support</p>
            <p className='underline'><i class="far fa-file-alt"></i> Read the Documentation</p>
            <h4>About</h4>
            <p><i class="fas fa-map-marker-alt"></i>f-353 phase 8b, mohali, PB, 160062, IN</p>
            <p><i class="fas fa-phone-alt"></i>+91-8427688830</p>
            <p><i class="far fa-envelope"></i>vikas.shinedezign@gmail.com</p>
            </div>
            <div className='release-info'>
              <h3>Release Notes</h3>
              <div className='version'>
                <h3>Version 1.0.1</h3>
                <p>September 5, 2024</p>
                </div>
              <p>We've expanded the theme's functionality by adding a few settings in existing sections.</p>
              <p className='underline'>See Updates</p>
            </div>
          </div>
        )}
      </div>
    
    <div className='build'>
    <div className='heading'>
      <h1>Build with confidence — the Theme Store promise</h1>
    </div>
    <div className='sections'>
      <div className='build-sec'>
        <div className='build-sec-head'>
          <img src={correct}/>
          <h4>Works with the latest Shopify features</h4>
        </div>
        <p>Themes on the Shopify Theme Store are guaranteed to stay up to date and work with Shopify’s ever-growing feature set.</p>
      </div>

      <div className='build-sec'>
        <div className='build-sec-head'>
          <img src={speed}/>
          <h4>Works with the latest Shopify features</h4>
        </div>
        <p>Themes on the Shopify Theme Store are guaranteed to stay up to date and work with Shopify’s ever-growing feature set.</p>
      </div>

      <div className='build-sec'>
        <div className='build-sec-head'>
          <img src={band}/>
          <h4>Works with the latest Shopify features</h4>
        </div>
        <p>Themes on the Shopify Theme Store are guaranteed to stay up to date and work with Shopify’s ever-growing feature set.</p>
      </div>

      <div className='build-sec'>
        <div className='build-sec-head'>
          <img src={write}/>
          <h4>Works with the latest Shopify features</h4>
        </div>
        <p>Themes on the Shopify Theme Store are guaranteed to stay up to date and work with Shopify’s ever-growing feature set.</p>
      </div>
    </div>
    </div>


  

  
<div className='temp-row'>
<TemplatePreview/>
<NobuttonPreview/>
<Nobutton2/>
<TemplatePreview2/>
</div>  
<div className='temp-row'>
  <LargeTemplate
    laptopImage={[laptop9, laptop10, laptop11]}
    mobileImage={[phone9, phone10, phone11]}
    templateName="Yuva"
    price="$49"
    reviews={150}
    buttonColors={['#ff5c5c', '#ff9999', '#ffcccc']}
  />

<LargeTemplate
    laptopImage={[laptop12, laptop13, laptop14]}
    mobileImage={[phone12, phone13, phone14]}
    templateName="Starlight"
    price="$499"
    reviews={150}
    buttonColors={['#a39f9b', '#000000', '#de914e']}
  />
</div>
    </>
  )
}

export default Home