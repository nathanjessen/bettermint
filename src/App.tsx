import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { PATH_HOME, PATH_PRICING, PATH_RESULTS } from './constants/paths';
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className='App' role="main" aria-label="app">
      <Router basename="/">
        <Routes>
          <Route path={PATH_HOME} element={<LandingPage />} />
          <Route path={PATH_PRICING} element={<Pricing />} />
          <Route path={PATH_RESULTS} element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
