import { useState } from 'react';

const UrlInputForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) onShorten(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter URL to shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlInputForm;
