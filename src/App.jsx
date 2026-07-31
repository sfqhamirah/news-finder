import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { NewsProvider } from './context/Context';

function App() {
  return (
    <NewsProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </NewsProvider>
  )
}

export default App;
