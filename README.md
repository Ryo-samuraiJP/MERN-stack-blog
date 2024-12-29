# MERN-stack Blog

This project is a full-stack blog web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication**: Users can create an account, log in, and log out.
- **CRUD Operations**: Users can create, read, update, and delete articles.
- **Comments**: Users can add comments to articles.
- **Upvotes**: Users can upvote articles.

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js, MongoDB, Firebase, Dotenv

## Installation

- **Prerequisites**: Node.js and MongoDB are installed in your local device.

1. Clone the repo:

```
git clone https://github.com/Ryo-samuraiJP/MERN-stack-blog.git
cd mern-stack-blog
```

2. Install dependencies:

For backend:

```
cd backend
npm install express firebase-admin mongodb dotenv
```

For frontend:

```
cd frontend
npm install react react-dom react-router-dom axios firebase
```

### Key Dependencies

**Backend**:

- Express.js
- Firebase
- MondoDB
- Dotenv
- Nodemon

**Frontend**:

- React
- Axios
- Firebase

## Usage

1. Run the backend:

```
cd backend
npm run dev
```

2. Run the frontend:

```
cd frontend
npm start
```

3. Open your browser and navigate to:

```
http://localhost:3000
```

## API Endpoints

- **GET** `/api/articles/:name`: Get an article by name.
- **PUT** `/api/articles/:name/upvote`: Upvote an article.
- **POST** `/api/articles/:name/comments`: Add a comment to an article.
