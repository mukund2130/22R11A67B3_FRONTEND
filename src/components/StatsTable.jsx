
const StatsTable = ({ stats }) => {
  return (
    <table>
      <thead>
    <tr>
          <th>Original URL</th>
          <th>Shortened URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat) => (
        <tr key={stat.code}>
        <td>{stat.code}</td>
    <td>
        <a href={stat.url} target="_blank" rel="noreferrer">
        {stat.url}
        </a>
    </td>
  </tr>
))}
      </tbody>
    </table>
  );
};

export default StatsTable;
