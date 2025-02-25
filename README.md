# Photolabs 📷

PhotoLabs is a React-based Single Page Application (SPA) that allows users to browse photos, interact with categories, and like their favorite images. The app fetches data from a PostgreSQL database via an Express.js API and provides a seamless user experience.

## Features 🚀

1. View photos from the homepage loaded from the API
2. Navigate to different photo categories
3. Click on a photo to view a larger version and similar images
4. Like (favorite) photos with the heart icon notification
5. Responsive design for different screen sizes

## Screenshots 📸

## Homepage
![Homepage](./docs/Home%20Page%20Img.png)

## Photo Modal
![Photo Modal](./docs/The%20photo%20modal%20img.png)

## Tech Stack 🛠️

Frontend:

- React (Vite for fast development)
- React Hooks (useState, useEffect, useReducer)
- SCSS for styling
- Axios for API requests
- React Router

Backend:

- Express.js (Node.js framework)
- PostgreSQL (Database)
- pg (Node.js library for PostgreSQL)
- dotenv (Manage environment variables)
- CORS & Helmet for security

## Dependencies 📦

Ensure your `package.json` includes these dependencies:

### **Frontend:**
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "axios": "^1.6.0",
    "react-router-dom": "^6.4.0"
  }
}

Backend:

{
  "dependencies": {
    "express": "^4.16.4",
    "pg": "^8.5.0",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0"
  }
}


## Installation & Setup 📝

### 1️⃣ Clone the Repository

git clone https://github.com/Kattt888/photolabs.git
cd photolabs


2️⃣ Backend Setup

cd backend
cp .env.example .env  # Update DB credentials
npm install
npm run reset  # Set up database
npm start


3️⃣ Frontend Setup

cd ../frontend
npm install
npm run dev  # Start React app

