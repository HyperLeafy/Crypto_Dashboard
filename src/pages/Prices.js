import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Price.css';

const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,binancecoin,cardano,solana', // List of crypto IDs
          },
        });
        setPrices(response.data);
      } catch (error) {
        console.error('Error fetching the crypto prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="price-content">
      <h2>Recent Prices</h2>
      <div className="live-price-section">
        <ul>
          {prices.map((crypto) => (
            <li key={crypto.id}>
              <span>{crypto.name} ({crypto.symbol.toUpperCase()})</span>
              <span>-</span>
              <span>{crypto.current_price} USD</span>
              <span>-</span>
              <span>{crypto.market_cap} USD</span>
              <span>-</span>
              <span>{new Date(crypto.last_updated).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prices;
