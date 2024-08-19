import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Central from './contexts/Central';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <Central>
        <Auth0Provider
          domain="dev-wsy813w1pt6yvgsv.us.auth0.com"
          clientId="H7mr0Tyx9RkCyw1iAFXEyrGmAgw3Gp6h"
          authorizationParams={{
            redirect_uri: "http://localhost:2008/"}}>
            <App />
          </Auth0Provider>
        </Central>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
