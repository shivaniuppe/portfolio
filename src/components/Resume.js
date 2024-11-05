import React from 'react';
// Importing the PDF file from the correct path (ensure this path points to the correct location)
import Resume1 from '/Users/shivaniuppe/Desktop/portfolio/src/Shivani-Uppe-Resume.pdf'; // Adjust the path if needed

function Resume() {
    return (
        <>
            {/* Display PDF inside an iframe */}
            <iframe
                src={Resume1}  // Using the imported PDF file
                style={{ width: '100%', height: '800px', borderWidth: 0 }}
                title="Resume">
                Your browser does not support iframes.
            </iframe>
        </>
    );
}

export default Resume;
