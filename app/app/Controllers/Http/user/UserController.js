'use strict'

const User = use('App/Models/User');

class UserController {
  async createUser({ request }) {

    const data = request.only(['name', 'cpf', 'phone', 'email', 'password']);

    const user = User.create(data);

    return user;
  }
}

module.exports = UserController
