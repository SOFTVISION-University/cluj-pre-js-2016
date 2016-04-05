const UserModel = Backbone.Model.extend({
  handleLoginResponse() {
    this.set('isLoggedIn', true);
  },
  logIn() {
    return $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth',
      data: JSON.stringify(this.attributes),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
    })
    .done(this.handleLoginResponse.bind(this))
    .fail(() => {
    });
  },
  logOut() {
    this.isLoggedIn = false;
  },
  getPreferences(token) {
    return $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/preferences',
      headers: { 'x-token': token },
    }).done((preferences) => {
      const parsedPreferences = JSON.parse(preferences);
      const userPreferences = {
        background: parsedPreferences.gsx$background.$t,
      };
      this.set(userPreferences).bind(this, null);
    }).fail(() => {
    });
  },
});

export { UserModel };
