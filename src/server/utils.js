import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export const render = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <section>
          {
            renderRoutes(routes)
          }
          {/* {routes.map((route) => (
            <Route {...route} />
          ))} */}
        </section>
      </StaticRouter>
    </Provider>
  );
  const cssArr = context.css
  const cssStr = cssArr.length > 0 ? cssArr.join('\n') : '';
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>${cssStr}</style>
    </head>
    <body>
    <div id="root">${content}</div>
    <script>
    window.__context__= {
      state: ${JSON.stringify(store.getState())}
    }
    </script>
    <script src="./index.js"></script>
    </body>
    </html>
  `)
}