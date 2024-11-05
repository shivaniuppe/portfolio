import React from 'react';
import '/Users/shivaniuppe/Desktop/portfolio/src/Home.css';
import profileImage from '/Users/shivaniuppe/Desktop/portfolio/src/profile_image.HEIC'; // Replace with your actual image path

function Home() {
    return (
        <div className="home">
            <div className="circular-element">
                <img src={profileImage} alt="Profile" />
            </div>
            <div className="text-content">
                <h1>Shivani Uppe</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    );
}

export default Home;
