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

<img width="1916" height="867" alt="image" src="https://github.com/user-attachments/assets/2d51e357-c53a-4676-b7de-ed0c7c224ad1" />

### Home Page

<img width="1912" height="851" alt="image" src="https://github.com/user-attachments/assets/3128fd66-2da9-4b82-ace4-a1a86c371a63" />

### Search Results

<img width="1917" height="856" alt="image" src="https://github.com/user-attachments/assets/e6da9dce-d19c-41d4-ba0c-aed640297c08" />

### My Favourites

<img width="1917" height="855" alt="image" src="https://github.com/user-attachments/assets/9fde2e3e-1b5d-4c48-bef2-99aca4a3ffbe" />

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
