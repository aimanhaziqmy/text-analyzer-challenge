import { useState, useEffect, useMemo, useCallback } from "react";

// Custom hook
const useTextAnalysis = (initialText = "") => {
  const [text, setText] = useState(initialText);
  const [analysisResult, setAnalysisResult] = useState({
    wordCount: 0,
    charCount: 0,
    charNoSpaces: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    mostFrequentWord: "",
    longestWord: "",
    sentiment: "Neutral",
  });

  // Function to remove punctuation from a string
  function removePunctuation(text) {
    return text.replace(/[.,!?]/g, "");
  }

  // Memoized word analysis
  const wordAnalysis = useMemo(() => {
    // Trim leading and trailing spaces
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    // Calculate word frequency
    const wordFreq = words.reduce((acc, word) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
      acc[cleanWord] = (acc[cleanWord] || 0) + 1;
      return acc;
    }, {});

    // Find the most frequent word
    const mostFrequent =
      Object.entries(wordFreq).sort(([, a], [, b]) => b - a)[0]?.[0] || "";

    // Find the longest word
    const longest = words
      .map((word) => removePunctuation(word))
      .reduce((a, b) => (a.length >= b.length ? a : b), "");

    return { words, wordFreq, mostFrequent, longest };
  }, [text]);

  // Memoized sentence analysis
  const sentenceAnalysis = useMemo(() => {
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    return { sentences };
  }, [text, wordAnalysis]);

  // Memoized paragraph analysis
  const paragraphAnalysis = useMemo(() => {
    return text.split("\n\n").filter((para) => para.trim().length > 0);
  }, [text]);

  // A simple sentiment analysis with positive and negative words - can be customized
  const analyzeSentiment = useCallback((text) => {
    const positiveWords = [
      "good",
      "great",
      "awesome",
      "excellent",
      "happy",
      "love",
      "like",
    ];
    const negativeWords = [
      "bad",
      "terrible",
      "awful",
      "horrible",
      "sad",
      "hate",
      "dislike",
      "unhappy",
    ];

    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach((word) => {
      // Remove punctuation
      const cleanWord = removePunctuation(word);
      if (positiveWords.includes(cleanWord)) positiveCount++;
      if (negativeWords.includes(cleanWord)) negativeCount++;
    });

    if (positiveCount > negativeCount) return "Positive";
    if (negativeCount > positiveCount) return "Negative";
    return "Neutral";
  }, []);

  // Update analysis when text changes
  useEffect(() => {
    const charNoSpaces = text.replace(/\s/g, "").length;
    const sentiment = analyzeSentiment(text);

    setAnalysisResult({
      wordCount: wordAnalysis.words.length,
      charCount: text.length,
      charNoSpaces,
      sentenceCount: sentenceAnalysis.sentences.length,
      paragraphCount: paragraphAnalysis.length,
      mostFrequentWord: wordAnalysis.mostFrequent,
      longestWord: wordAnalysis.longest,
      sentiment,
    });
  }, [
    text,
    wordAnalysis,
    sentenceAnalysis,
    paragraphAnalysis,
    analyzeSentiment,
  ]);

  return {
    text,
    setText,
    analysis: analysisResult,
    wordFrequencies: wordAnalysis.wordFreq,
  };
};

export default useTextAnalysis;
