import React from 'react';
import './Easter.css'; // Import CSS file for custom styling

function Easter() {
  return (
    <>
      <div>
        <video autoPlay loop className="autoplay-video w-full h-full">
          <source src="/easter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Easter;
