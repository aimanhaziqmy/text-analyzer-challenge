import React from 'react';
import './textAnalyzer.css';

const TextAnalyzer = () => {
  return (
    <div className="app">
      <main className="main-content">
        <div className="analyzer-card">
          <div className="download-buttons">
            <button 
              className="download-btn"
            >
              Download as PDF
            </button>
            <button 
              className="download-btn"
            >
              Download as CSV
            </button>
          </div>

          <textarea
            className="text-input"
            placeholder="Type anything here..."
          />

          <div className="stats-grid">
            <div className="stat-box">
              Word Count: 
            </div>
            <div className="stat-box">
              Character Count: 
            </div>
            <div className="stat-box">
              Character Count (no spaces): 
            </div>
            <div className="stat-box">
              Sentences Count:
            </div>
            <div className="stat-box">
              Paragraph Count: 
            </div>
            <div className="stat-box">
              Most Frequent Word: 
            </div>
            <div className="stat-box">
              Longest Word:
            </div>
          </div>

          <div className="sentiment-box">
            Sentiment Analysis:
          </div>
        </div>
      </main>
    </div>
  );
};

export default TextAnalyzer;
