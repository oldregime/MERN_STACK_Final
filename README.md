# MERN Stack Assignments

This repository contains the assignments for a MERN (MongoDB, Express.js, React.js, Node.js) stack course.

## Overview

The project is structured into weekly assignments, each focusing on different aspects of the MERN stack.

-   **Week 1:** HTML & CSS Fundamentals
-   **Week 2:** JavaScript Basics
-   **Week 3:** React.js Components and UI
-   **Week 4:** Building a Full-Stack Application with Express.js and React.js

## Getting Started

To run the projects locally, follow these steps:

### Prerequisites

-   Node.js and npm installed
-   MongoDB installed (for Week 4)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to each week's directory and install dependencies:

    ```bash
    cd Week3
    npm install
    cd Week4/backend
    npm install
    cd ../frontend
    npm install
    ```

### Running the Applications

-   **Week 3 (React App):**

    ```bash
    cd Week3
    npm start
    ```

    This will start the React development server.

-   **Week 4 (Full-Stack App):**

    1.  Start the backend server:

        ```bash
        cd Week4/backend
        npm start
        ```

    2.  Start the frontend development server:

        ```bash
        cd Week4/frontend
        npm start
        ```

## Project Structure

-   `Week1`: Contains HTML and CSS assignment files.
-   `Week2`: Contains JavaScript assignment files.
-   `Week3`: Contains React.js components and UI assignments.
    -   `src/`: React source code.
    -   `components/`: Reusable React components.
-   `Week4`: Contains a full-stack application with Express.js and React.js.
    -   `backend/`: Express.js server.
        -   `server.js`: Main server file.
    -   `frontend/`: React.js frontend.
        -   `src/`: React source code.
        -   `components/`: Reusable React components.
        -   `pages/`: React pages.

## Dependencies

-   `express`: "4.18.2"
-   `react`: "18.2.0"
-   `react-dom`: "18.2.0"
-   `react-router-dom`: "6.14.2"
-   `tailwindcss`: "3.3.0"
-   `cors`: "2.8.5"
-   `nodemon`: "3.0.1"

