// NotFound.jsx
import React from 'react';
import './notfound.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <h2>Page Not Found</h2>
          
          <div className="content">
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;