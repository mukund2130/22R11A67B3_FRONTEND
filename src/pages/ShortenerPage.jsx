import { useState } from 'react';
import ShortUrlDisplay from '../components/ShortUrlDisplay';
import UrlInputForm from '../components/UrlInputForm';

const ShortenerPage = () => {
  const [shortUrl, setShortUrl] = useState('');

const handleShorten = (url) => {
  const code = Math.random().toString(36).substring(7);
  const shortened = `${window.location.origin}/${code}`;  // 👈 use your local dev URL

  // Save mapping to localStorage
  localStorage.setItem(code, url);

  setShortUrl(shortened);
};


  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <UrlInputForm onShorten={handleShorten} />
      {shortUrl && <ShortUrlDisplay url={shortUrl} />}
    </div>
  );
};

export default ShortenerPage;
