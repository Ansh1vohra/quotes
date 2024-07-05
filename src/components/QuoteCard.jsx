const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={onSave} className='btn btn-outline-dark'>Save</button>
    </div>
  );
};

export default QuoteCard;
