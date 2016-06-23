"use strict";

const koa = require('koa');
const app = koa();
const co = require('co');
const cors = require('koa-cors');

const config = require('config');
const dist = config.get('public');

//app.keys = [config.get('secret')];

const path = require('path');
const fs = require('mz/fs');
const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

app.use(cors());

middlewares.forEach(function(middleware) {
  app.use(require('./middlewares/' + middleware));
});

const Router = require('koa-router');

const router = new Router();

router
  .get('/', function*() {
    this.body = yield fs.readFile(dist + 'index.html', 'utf-8');
  })
  .get('/admin', function*() {
    this.body = (yield fs.readdir('./db')).map(file => file.replace('.json', ''));
  })
  .get('/admin/:name', function*() {
    console.log('test', this.params.name);
    //this.body = yield fs.readdir('./db');
  });

app.use(router.routes());

console.log('server has started');

app.listen(3000);
