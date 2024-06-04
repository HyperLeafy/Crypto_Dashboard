import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../styles/Dashboard.css';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Dummy data for the charts
const livePriceData = {
  labels: ['10:00', '10:30', '11:00', '11:30', '12:00'],
  datasets: [
    {
      label: 'Live Price',
      data: [32000, 32500, 33000, 32700, 33500],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
};


const recentTransactionsData = [
  { pair: 'BTC/USDT', side: 'Buy', exchange: 'Bybit', amount: '0.001234 BTC', price: '30,000.0 USDT', total: '37.02 USDT', date: '01 Jun, 14:30' },
  { pair: 'ETH/USDT', side: 'Sell', exchange: 'Binance', amount: '0.0523 ETH', price: '2,400.5 USDT', total: '125.42 USDT', date: '01 Jun, 15:00' },
  { pair: 'BNB/USDT', side: 'Buy', exchange: 'Coinbase', amount: '0.75 BNB', price: '300.2 USDT', total: '225.15 USDT', date: '01 Jun, 15:30' },
  { pair: 'ADA/USDT', side: 'Sell', exchange: 'Kraken', amount: '150 ADA', price: '2.1 USDT', total: '315.00 USDT', date: '01 Jun, 16:00' },
  { pair: 'SOL/USDT', side: 'Buy', exchange: 'Bybit', amount: '1.5 SOL', price: '50.3 USDT', total: '75.45 USDT', date: '01 Jun, 16:30' },
  { pair: 'BTC/USDT', side: 'Sell', exchange: 'Bybit', amount: '0.002 BTC', price: '29,500.0 USDT', total: '59.00 USDT', date: '01 Jun, 17:00' },
  { pair: 'ETH/USDT', side: 'Buy', exchange: 'Binance', amount: '0.1 ETH', price: '2,350.0 USDT', total: '235.00 USDT', date: '01 Jun, 17:30' },
  { pair: 'BNB/USDT', side: 'Sell', exchange: 'Coinbase', amount: '1 BNB', price: '320.0 USDT', total: '320.00 USDT', date: '01 Jun, 18:00' },
  { pair: 'ADA/USDT', side: 'Buy', exchange: 'Kraken', amount: '200 ADA', price: '2.2 USDT', total: '440.00 USDT', date: '01 Jun, 18:30' },
  { pair: 'SOL/USDT', side: 'Sell', exchange: 'Bybit', amount: '2 SOL', price: '49.5 USDT', total: '99.00 USDT', date: '01 Jun, 19:00' },
];


const Dashboard = () => {
  return (
      <div className="content">
        <div className="value-section">
          <div className='card'>
            <h2>Bitcoin (BTC)</h2>
            <p>48,000 USD</p>
          </div>

          <div className='card'>
            <h2>Ethereum (ETH)</h2>
            <p>3,500 USD</p>
          </div>

          <div className='card'>
            <h2>Binance Coin (BNB)</h2>
            <p>450 USD</p>
          </div>

          <div className='card'>
            <h2>Cardano (ADA)</h2>
            <p>2.30 USD</p>
          </div>

          <div className='card'>
            <h2>Solana (SOL)</h2>
            <p>150 USD</p>
          </div>
        </div>


        <div className="chart-section">
          <div className="card">
            <h2>Cumulative ROI</h2>
            <Line data={livePriceData} />
          </div>
        </div>

        <div className="transactions-section">
          <div className="card">
            <h2>Recent Transactions</h2>
            <ul>
              {recentTransactionsData.map((tx, index) => (
                <li key={index}>
                  <span>{tx.pair}</span> - <span>{tx.side}</span> - <span>{tx.exchange}</span> - <span>{tx.amount}</span> - <span>{tx.price}</span> - <span>{tx.total}</span> - <span>{tx.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
