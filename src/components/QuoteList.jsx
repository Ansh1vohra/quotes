const QuoteList = ({ quotes }) => {
  return (
    <div className="quote-list">
      {quotes.map((quote, index) => (
        <div key={index} className="quote-item">
          {quote}
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
