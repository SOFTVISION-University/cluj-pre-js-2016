import { UserModel } from './models/user-model.js';
const UsersCollection = Backbone.Collection.extend({
  model: UserModel,
  url: '/users',
});

export { UsersCollection };
