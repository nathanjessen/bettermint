import { Suspense } from "react";
import Loader from './base/Loader';
import SearchResults from "./pages/SearchResults";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App" data-theme="bettermint">
      <Suspense fallback={<Loader />}>
        <LandingPage />
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default App;
