import { Suspense } from "react";
import Loader from './components/Loader';
import SearchResults from "./pages/SearchResults";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loader />}>
        <LandingPage />
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default App;
