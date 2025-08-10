# BLOGVERSE

A full-stack blogging platform built with React, Node.js, and MongoDB.  Create, share, and discuss blog posts with a user-friendly interface.


## 📚 Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
  - [Execution Options](#execution-options)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)
- [Credits](#credits)


## Description

BLOGVERSE is a full-stack blogging application built using React for the frontend and Node.js with Express.js and MongoDB for the backend.  Users can create, read, update, and delete blog posts, comment on posts, and manage their profiles.  The application utilizes Firebase for authentication and includes features such as a search functionality, theme switching and user authentication.  The client-side renders dynamic pages using React Router, allowing for a seamless user experience.


## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-Green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-Dark%20Blue?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![React](https://img.shields.io/badge/React-Blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/) [![MongoDB](https://img.shields.io/badge/MongoDB-LightGreen?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3ca5ff?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/) [![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![✨ Made with ReadME Wiz](https://img.shields.io/badge/✨%20Made%20with-ReadME%20Wiz-blueviolet?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/PIYUSH1SAINI/ReadMe-wiz.git)


## Architecture Overview

```mermaid
graph LR
    subgraph Frontend
        A[React Components] --> B(React Router)
        B --> C{Pages (Home, CreatePost, etc.)}
        A --> D(Redux Store)
    end
    subgraph Backend
        E[API Routes (Express)] --> F(Controllers)
        F --> G(MongoDB)
        E --> H(Authentication (Firebase))
    end
    C --> E
    D --> E

```

## File Structure

```mermaid
graph TD
    A[client] --> B(src)
    B --> C(pages)
    B --> D(components)
    B --> E(redux)
    A --> F(index.html)
    A --> G(vite.config.js)
    A --> H(tailwind.config.js)
    A --> I(postcss.config.js)
    J[api] --> K(controllers)
    J --> L(models)
    J --> M(routes)
    J --> N(index.js)
    J --> O(utils)


```

## Features

*   **User Authentication:** Secure user registration and login using Firebase Authentication.
*   **Blog Post Creation and Management:** Create, edit, and delete blog posts with a rich text editor.
*   **Comment Section:** Engage with other users through comments on individual blog posts.
*   **Search Functionality:** Easily find specific blog posts using keywords.
*   **Interactive UI:** User-friendly interface built using React components for a smooth user experience.
*   **Dark Mode:** Supports switching between light and dark themes.


## Installation

### Prerequisites

> [!NOTE]
> Node.js >=14 and npm are required for this project.  Ensure you have them installed before proceeding.


### Setup

1.  **Clone Repository:** Clone the repository from GitHub and set up the project locally.
    ```bash
    git clone https://github.com/raghavG0212/BLOGVERSE.git
    cd BLOGVERSE
    ```
2.  **Install Dependencies:** Install the necessary packages for the frontend and backend.
    ```bash
    npm install
    npm install --prefix client
    ```
3. **Build the frontend**: Build the React application.
    ```bash
    npm run build --prefix client
    ```
4. **Start the backend**: Start the Node.js server
    ```bash
    npm start
    ```

> [!TIP]
> The fastest way to get started is by cloning the repository and running `npm install` followed by `npm start`.


## Usage

### Execution Options

#### Backend Execution

To run the backend server, navigate to the `api` directory and execute:


```bash
npm start
```

> [!IMPORTANT]
> Ensure you have configured the necessary environment variables (e.g., MongoDB connection string, Firebase config) before running the application.

#### Frontend Execution

The frontend is built as a separate React application.  After building the frontend (step 3 in the Setup section), the backend server will serve the built frontend files.


## Contributing

We welcome contributions! Please feel free to open issues or submit pull requests through GitHub.


## Contributors

<a href="https://github.com/raghavG0212" target="_blank"><img src="https://avatars.githubusercontent.com/raghavG0212?s=60&v=4" width="60" height="60" alt="@raghavG0212" title="@raghavG0212" style="border-radius: 50%; margin-right: 10px;" onerror="this.src='https://github.com/identicons/raghavG0212.png'" /></a>


## License

MIT License


## Credits

raghav, Node.js, Express.js, React, MongoDB, Firebase, Redux, Tailwind CSS, HTML5, CSS3, JavaScript



<a href="https://github.com/PIYUSH1SAINI/ReadMe-wiz.git" target="_blank">
      <img src="https://res.cloudinary.com/dy1znaiby/image/upload/v1754320207/ReadMe-wiz-logo_k3uq6w.png" alt="ReadMe Wiz Logo" width="300"/>
    </a>
