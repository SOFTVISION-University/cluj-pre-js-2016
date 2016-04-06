import { LoginModel } from './loginModel.js';
const Login = Backbone.Collection.extend({
  model: LoginModel,
});

export { Login };
