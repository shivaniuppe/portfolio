import React, { useState } from 'react';
import '/Users/shivaniuppe/Desktop/port/src/Projects.css';

function Projects() {
    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    // Project data
    const projects = [
        {
            category: "GRADUATE",
            name: "DalExchange",
            description: "DalExchange is a web-based thrift store platform specifically designed for Dalhousie University students.",
            features: [
                "Secure Login - Only for Dal students.",
                "Listings - Browse second-hand items.",
                "Wishlist - Save favorite items.",
                "Trade Request - Send buy requests.",
                "Notifications - Get trade updates.",
                "Payments - Pay securely with Stripe.",
                "Reviews - Rate and review purchases.",
                "List Item - Easily sell items.",
                "Profile - View history and wishlists.",
                "Admin Dashboard - Track site stats.",
                "Order Control - Edit or refund orders.",
                "User Control - Manage user accounts.",
                "Product Check - Approve or unlist items.",
                "Feedback Control - Remove offensive comments."
            ],
            githubUrl: "https://github.com/shivaniuppe/DalExchange"
        },
        {
            category: "GRADUATE",
            name: "TinyDB",
            description: "TinyDb is a file-based database management system (DBMS) designed to simulate essential features of traditional DBMS like MySQL.",
            features: [
                "User Authentication: Create accounts, log in, and authenticate via security questions.",
                "Database Management: Create, delete, and switch databases.",
                "Table Management: Create tables, insert/update/delete records.",
                "Query Processing: Execute commands for managing databases and tables.",
                "ERD Generation: Visualize database structure as Entity-Relationship Diagrams.",
                "SQL Export: Export data and structure as SQL dump files.",
                "Transactions & Logging: Support for commit/rollback transactions and query logging for auditing."
            ],
            githubUrl: "https://github.com/shivaniuppe/TinyDB"
        },
        {
            category: "GRADUATE",
            name: "FitnessTracker",
            description: "This serverless fitness tracking application, built using AWS Cloud services and Infrastructure-as-Code (IaC) with AWS CloudFormation.",
            features: [
                "User Registration: Users register with an email, stored in DynamoDB.",
                "Fitness Data Submission: Users submit fitness data (e.g., steps taken), stored in DynamoDB.",
                "Goal Tracking & Notifications: The app tracks goals, sending SNS notifications when goals are met.",
                "API Integration: AWS API Gateway manages API endpoints, invoking Lambda functions for data operations.",
                "Event-Driven Notifications: AWS Step Functions orchestrates events when fitness goals are achieved."
            ],
            githubUrl: "https://github.com/shivaniuppe/FitnessTracker_IaC"
        },
        {
            category: "PERSONAL",
            name: "Etch-a-Sketch",
            description: "A web-based Etch-a-Sketch application built using JavaScript, HTML, and CSS, allowing users to draw interactively on a customizable grid.",
            features: [
                "Interactive Drawing: JavaScript event handling enables smooth, responsive drawing.",
                "Responsive Design: CSS styling ensures a user-friendly interface adaptable to different screen sizes.",
                "Customizable Options: Users can change colors and adjust grid size to personalize their drawing experience.",
                "Performance Optimization: Ensured smooth performance across major browsers for an enhanced user experience."
            ],
            githubUrl: "https://github.com/shivaniuppe/etch-a-sketch"
        }
    ];

    // Function to handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "ALL"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="projects">
            <h1 className="projects-title">PROJECTS</h1>
            <div className="project-categories">
                <button
                    className={`category-button ${selectedCategory === "ALL" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("ALL")}
                >ALL</button>
                <button
                    className={`category-button ${selectedCategory === "GRADUATE" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("GRADUATE")}
                >GRADUATE PROJECTS</button>
                <button
                    className={`category-button ${selectedCategory === "PERSONAL" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("PERSONAL")}
                >PERSONAL PROJECTS</button>
            </div>

            {filteredProjects.map((project, index) => (
                <div key={index} className="project-card">
                    <h2 className="project-name">{project.name}</h2>
                    <p>{project.description}</p>
                    <h3>Features</h3>
                    <ul>
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <button className="github-button">GitHub URL</button>
                </div>
            ))}
        </div>
    );
}

export default Projects;
