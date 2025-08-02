import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RedirectPage from '../pages/RedirectPage';
import ShortenerPage from '../pages/ShortenerPage';
import UrlStats from '../pages/UrlStats';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<UrlStats />} />
        <Route path="/:code" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
