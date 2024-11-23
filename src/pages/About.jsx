// AboutPage.js
import React from 'react';
import './about.css';
import myPicture from '../assets/mypicture.jpg';

const AboutPage = () => {
  return (
    <div className="app">
      <main className="main-content">
        <div className="about-container">
          <h2>About</h2>
          
          <div className="about-content">
            <img src={myPicture} alt="Aiman Haziq" className="image-placeholder" />

            <div className="contact-info">
              <p>Name: Aiman Haziq bin Ab Yazik</p>
              <p>Email: aimanhaziqyazik@gmail.com</p>
              <p>Phone: +60103915046</p>
              <p>Download</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
