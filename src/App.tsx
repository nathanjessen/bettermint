import { Outlet, ReactLocation, Router } from 'react-location';
import { LocationGenerics, routes } from './router/routes';

const reactLocation = new ReactLocation<LocationGenerics>();

function App() {
  return (
    <div className='App'>
      <Router location={reactLocation} routes={routes}>
        <Outlet />
      </Router>
    </div>
  );
}

export default App;
