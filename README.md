# 📚 Bookstore App

A full-stack mobile application where users can share and discover book recommendations.

---

## 🚀 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Cloudinary (Image Upload)

### Mobile

* React Native (Expo)
* Zustand (State Management)

---

## 📁 Project Structure

```
BookstoreApp/
  ├── backend/
  ├── mobile/
  └── .gitignore
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/BookstoreApp.git
cd BookstoreApp
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend:

```bash
npm run dev
```

---

### 🔹 3. Mobile App Setup (Expo)

```bash
cd mobile
npm install
npx expo start
```

---

## 🔐 Features

* User Registration & Login (JWT)
* Upload book recommendations with images
* Cloudinary image storage
* Infinite scroll (pagination)
* User-specific posts
* Delete posts with image cleanup

---

## 🌐 API Base URL

```
http://localhost:3000/api
```

---

## 🧪 Example API Endpoints

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

### Get Books

```
GET /api/books
```

### Create Book

```
POST /api/books
```

---

## ⚠️ Important Notes

* Do NOT upload `.env` file to GitHub
* Do NOT expose API keys or secrets
* Make sure backend is running before starting mobile app

---

## 🚀 Git Commands (Quick Reference)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/BookstoreApp.git
git pull origin main --rebase
git push -u origin main
```

---

## 👨‍💻 Author

Vikas Chauhan

---

## ⭐ Future Improvements

* Like & comment system
* Search functionality
* Profile editing
* Push notifications
* Offline support

---

## 📌 License

This project is for learning purposes.
