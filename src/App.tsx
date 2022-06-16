import { Suspense } from "react";
import Loader from './components/Loader';
import SniperTool from "./pages/SniperTool";

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loader />}>
        <SniperTool />
      </Suspense>
    </div>
  );
}

export default App;
