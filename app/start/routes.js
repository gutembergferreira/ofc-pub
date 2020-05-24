'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const version = 'v1';

Route.get('get-token', 'AuthController.authenticator')

Route.get('/', (res) => {
  res.send('<h1>Ola RRRRvwerwerEW</h1>')
})

Route.group(() => {
  Route.post('new', 'UserController.createUser')
}).namespace('user').prefix(`${version}/user/`).middleware(["auth"])

