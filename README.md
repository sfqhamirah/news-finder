# 📰 find.My.News :)

A modern news search application built with React, Vite, and Material UI. The application allows users to search for the latest news articles, save their favourite stories, and load additional results through pagination. It integrates with NewsAPI to deliver real-time news while providing a clean, responsive, and user-friendly interface.

---

## ✨ Features

- 🔐 **Authentication**
  - Dummy login system
  - Automatic redirect for returning users
  - Logout functionality

- 🔍 **News Search**
  - Search articles by keyword
  - Real-time results powered by NewsAPI

- 📄 **Load More**
  - Fetch additional pages of search results
  - Duplicate article filtering to prevent repeated news

- ❤️ **My Favourites**
  - Save favourite articles
  - Prevent duplicate favourites
  - Stored in localStorage so favourites remain after refreshing

- 🗑️ **Clear Favourites**
  - Remove all saved articles with one click

- 🔗 **Read Full Article**
  - Open articles in a new browser tab

- 🖼️ **Fallback Images**
  - Displays a default image when an article has no thumbnail

---

## 🛠️ Tech Stack

- React (Vite)
- React Router
- React Context API
- Material UI (MUI)
- Axios
- NewsAPI
- Local Storage

---

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js
- npm
- A free API key from NewsAPI

---

### Installation

Clone the repository:

```bash
git clone https://github.com/sfqhamirah/news-finder.git
cd news-finder
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_NEWS_API_KEY=YOUR_API_KEY
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔑 Demo Login

Use the following credentials to access the application:

| Username | Password |
|----------|----------|
| mira123  | 12345    |

---

## 📸 Screenshots

### Login Page

<img width="1917" height="982" alt="image" src="https://github.com/user-attachments/assets/f770008f-1af7-48d0-9388-7eb73afa81a0" />

### Home Page

<img width="1917" height="963" alt="image" src="https://github.com/user-attachments/assets/99d801bf-6472-4d4d-aec2-33c40a8340a6" />

### Search Results

<img width="1917" height="962" alt="image" src="https://github.com/user-attachments/assets/ed46e848-802c-4085-bdde-e1a607d550f7" />

### My Favourites

<img width="1910" height="952" alt="image" src="https://github.com/user-attachments/assets/d9d587de-1dce-4284-bc61-e185feed950b" />

---

## 📚 What I Learned

This project helped me strengthen my understanding of:

- React Hooks (`useState`, `useEffect`)
- React Context API
- React Router
- API integration using Axios
- Local Storage
- Conditional rendering
- Pagination
- Component-based architecture
- Material UI components and styling

---

## 👩‍💻 Author

**Nur Syafiqah Amirah Binti Hasrin**

GitHub: https://github.com/sfqhamirah
