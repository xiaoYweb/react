import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { Provider } from 'react-redux';

import getStore from '../store';


export const render = (req) => {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(({ route }) => {
    const { loadData } = route;
    loadData && promises.push(loadData(store))
  });
  Promise.all(promises).then(res => {
    console.log(store.getState()) 
  }).catch(err => {
    console.log('err', err)
  })
  // const matchedRoutes = []
  // routes.some(route => {
  //   const match = matchPath(req.path, route)
  //   if (match) {
  //     matchedRoutes.push(route)
  //   }
  // })
  console.log(promises)
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <section>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </section>
      </StaticRouter>
    </Provider>
  );

  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="./index.js"></script>
    </body>
    </html>
  `)
}