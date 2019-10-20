import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';

var app = express()
app.use(express.static('public'))
var port = 3000;

app.use('/api', proxy('localhost:3001', {
  proxyReqPathResolver(req) {
    return '/api' + req.url;
  }
}))

app.get('*', function (req, res) {
  res.send(render(req))
})

var server = app.listen(port)