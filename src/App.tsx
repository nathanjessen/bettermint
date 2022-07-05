import { Suspense } from "react";
import Loader from './base/Loader';
import SearchResults from "./pages/SearchResults";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./state/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <LandingPage />
          <SearchResults />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
