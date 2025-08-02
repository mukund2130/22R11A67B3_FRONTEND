import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const originalUrl = localStorage.getItem(code);
    if (originalUrl) {
      window.location.href = originalUrl;
    } else {
      // Redirect to home or 404 page if not found
      navigate('/');
    }
  }, [code, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
