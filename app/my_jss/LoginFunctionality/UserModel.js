const UserModel = Backbone.Model.extend({
  initialize() {
    // Backbone.listenTo('userCreated', )
    // Backbone.listenTo('userCreated', )
   },
  _curentUser: null,
  events: {
  },
  setToken(result) {
    this.model.set(JSON.parse(result));
    console.log(this.model);
    this.trigger('token-real');
  },
});

export { UserModel };
