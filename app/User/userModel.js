export const UserModel = Backbone.Model.extend({
  defaults: {
    fullName: '',
    username: '',
    token: '',
    backgroundColor: '',
    status: false,
  },
  triggerEventOnHeader() {
    this.trigger('triggerHead');
  },
});
