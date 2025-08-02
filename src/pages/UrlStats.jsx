import StatsTable from '../components/StatsTable';

const UrlStats = () => {
  // Dummy data
  const stats = [
    { original: 'https://example.com', short: 'https://sho.rt/abc123', clicks: 42 },
    { original: 'https://google.com', short: 'https://sho.rt/goog', clicks: 84 },
  ];

  return (
    <div className="container">
      <h1>URL Statistics</h1>
      <StatsTable stats={stats} />
    </div>
  );
};

export default UrlStats;
