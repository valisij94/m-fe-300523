import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Link, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage';

function App() {

  return (
      <div className="App">
        <p>Hello World!</p>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h3>Not found</h3>} />
        </Routes>

        <h4>SIMPLE FOOTER </h4>
      </div>
  );
}

export default App;
