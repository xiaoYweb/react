import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';

import getStore from '../store';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <section>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </section>
      </BrowserRouter>
    </Provider>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'))