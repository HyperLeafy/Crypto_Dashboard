import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Exchanges.css'; // Assuming you are using the same CSS file

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/exchanges', {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'json' // Ensure the response type is set to JSON
        });
        console.log(response.data); // Log the response to see the data
        setExchanges(response.data.slice(0, 10)); // Fetching the first 10 exchanges
      } catch (error) {
        console.error('Error fetching the exchanges:', error);
        setError('Failed to fetch exchanges data');
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div className="exchange-content">
      <h2>Crypto Exchanges</h2>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="exchanges-grid">
          {exchanges.map((exchange) => (
            <div className="card" key={exchange.id}>
              <h3>{exchange.name}</h3>
              <p>Country: {exchange.country || 'N/A'}</p>
              <p>Year Established: {exchange.year_established || 'N/A'}</p>
              <p>Trust Score: {exchange.trust_score || 'N/A'}</p>
              <a href={exchange.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
