const User = Backbone.Model.extend({
  defaults: {
    username: 'user1',
    fullname: 'user1user1',
    password: 'test',
    isLoggedIn: false,
    background: '',
  },
  logIn() {
    return $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        username: this.get('username'),
        password: this.get('password'),
      }),
    }).done((token) => {
      this.getPreferences(token);
    }).fail(() =>
    alert("fail")
    );
  },
  getPreferences(token) {
    return $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/preferences',
      headers: { 'x-token': token },
    }).done((data) => {
      console.log(data);
    }).fail(() => {
        alert('fail preferences');
    });
  }
});
export { User };
