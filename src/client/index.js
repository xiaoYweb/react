import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import { Provider } from 'react-redux';

import { getClientStore } from '../store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <section>
          {
            renderRoutes(routes)
          }
          {/* {routes.map((route) => (
            <Route {...route} />
          ))} */}
        </section>
      </BrowserRouter>
    </Provider>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'))