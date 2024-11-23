import React, { useCallback } from 'react';
import useTextAnalysis from '../hooks/useTextAnalysis';
import './textAnalyzer.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TextAnalyzer = () => {
  const { text, setText, analysis } = useTextAnalysis();

  // Function to handle PDF download
  const handleDownloadPDF = useCallback(() => {
    window.print();
    console.log('Downloading PDF...');
  }, [analysis]);

  // Function to handle CSV download
  const handleDownloadCSV = useCallback(() => {
    const headers = Object.keys(analysis).join(',');
    const values = Object.values(analysis).join(',');
    const csvContent = `${headers}\n${values}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text-analysis.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }, [analysis]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="analyzer-card">
          <div className="download-buttons">
            <button 
              className="download-btn"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </button>
            <button 
              className="download-btn"
              onClick={handleDownloadCSV}
            >
              Download as CSV
            </button>
          </div>

          <textarea
            className="text-input"
            placeholder="Type anything here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="stats-grid">
            <div className="stat-box">
              Word Count: {analysis.wordCount}
            </div>
            <div className="stat-box">
              Character Count: {analysis.charCount}
            </div>
            <div className="stat-box">
              Character Count (no spaces): {analysis.charNoSpaces}
            </div>
            <div className="stat-box">
              Sentences Count: {analysis.sentenceCount}
            </div>
            <div className="stat-box">
              Paragraph Count: {analysis.paragraphCount}
            </div>
            <div className="stat-box">
              Most Frequent Word: {analysis.mostFrequentWord}
            </div>
            <div className="stat-box">
              Longest Word: {analysis.longestWord}
            </div>
          </div>

          <div className="sentiment-box">
            Sentiment Analysis: {analysis.sentiment}
          </div>
        </div>
      </main>
     <Footer />
    </div>
  );
};

export default TextAnalyzer;
