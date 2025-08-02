
const ShortUrlDisplay = ({ url }) => {
  return (
    <div>
      <h2>Shortened URL:</h2>
      <a href={url} target="_blank" rel="noreferrer">{url}</a>
    </div>
  );
};

export default ShortUrlDisplay;
