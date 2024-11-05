import React from 'react';
import '/Users/shivaniuppe/Desktop/port/src/About.css';

function About() {
    const skills = [
        { name: 'Java', percentage: '90%' },
        { name: 'Python', percentage: '80%' },
        { name: 'C', percentage: '85%' },
        { name: 'JavaScript', percentage: '80%' },
        { name: 'Node.js', percentage: '75%' },
        { name: 'React', percentage: '75%' },
        { name: 'MySQL', percentage: '90%' },
        { name: 'Firebase', percentage: '70%' },
        { name: 'MongoDB', percentage: '85%' },
        { name: 'DynamoDB', percentage: '75%' },
        { name: 'AWS', percentage: '80%' }
    ];

    return (
        <div className="about-container">
            <div className="info-section">
                <h1>WHO AM I?</h1>
                <p>
                    Hello, I'm Shivani Uppe,
                    <br />
                    I'm an enthusiastic Full-Stack Web Developer, Problem Solver, and I'm a huge fan of Java and JavaScript. My aim is to solve real-world problems using applications of Computer Science.
                    <br />
                    Check a few of my Projects <a href="/Projects" target="_blank">here</a>.
                </p>
            </div>

            <div className="skills-section">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: skill.percentage }}>
                                {skill.percentage}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
