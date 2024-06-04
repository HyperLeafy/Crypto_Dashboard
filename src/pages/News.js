import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/News.css'; // Assuming you are using the same CSS file

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=YOUR_API_KEY`);
        console.log(response.data); // Log the entire response to inspect it
        setNews(response.data.Data); // Adjust based on the API response structure
      } catch (error) {
        console.error('Error fetching the news:', error);
        setError('Failed to fetch news data');
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="content">
      <h2>Crypto News</h2>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <ul className="news-list">
          {news.map((article, index) => (
            <li className="news-item" key={index}>
              <h3>{article.title}</h3>
              <p>{article.body}</p> {/* Use 'body' instead of 'description' based on the response structure */}
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
