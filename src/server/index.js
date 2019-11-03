import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';

import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { getStore } from '../store';

var app = express()
app.use(express.static('public'))
var port = 3000;

app.use('/api', proxy('localhost:3001', {
  proxyReqPathResolver(req) {
    return '/api' + req.url;
  }
}))

app.get('*', function (req, res) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(({ route }) => {
    const { loadData } = route;
    loadData && promises.push(loadData(store))
  });
  Promise.all(promises).then(() => {
    res.send(render(req, store, routes))
  }).catch(err => {
    console.log('Promise all err', err)
  })
})

var server = app.listen(port)