import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    setLoading(true);
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  function saveQuote() {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <h1 className='heading'>Ron Swanson Quotes</h1>
      {loading ? (
        <div className="quote-card">
          <p className='rounded placeholder'>The Quote will be displayed Here!
          The Quote will be displayed Here!The Quote will be displayed Here!
          </p>
          <button className='btn btn-outline-dark placeholder'>Save</button>
        </div>
      ) : (
        <QuoteCard quote={quote} onSave={saveQuote} />
      )}
      <button onClick={fetchQuote} className="btn btn-danger">New Quote</button>
      <QuoteList quotes={savedQuotes} />
    </div>
  );
};

export default App;
