import { CurrentUser } from '../Model/CurrentUser.js';
// import { app } from '../entry.js';
const UserModel = Backbone.Model.extend({
  logIn(){
    const user = {};
    user.username = document.getElementById('username').value;
    user.password  =document.getElementById('password').value;
    $.ajax({
      url: 'http://localhost:3000/auth',
      type: 'POST',
      data: JSON.stringify(user),
      dataType: 'json',
      contentType: 'application/json',
    }).done(function(token){
      CurrentUser.getInstance().setToken(token);
      $.ajax({
        url: 'http://localhost:3000/preferences',
        headers: {
          'x-token': token,
        },
      }).done(function(data) {
        const userPreferences = JSON.parse(data);
        CurrentUser.getInstance().setUserHeaderImage(userPreferences.gsx$background.$t);
        CurrentUser.getInstance().setFullName(userPreferences.gsx$fullname.$t);
        CurrentUser.getInstance().setIsLogged(true);
        Backbone.trigger('changeUserStatus');
        Backbone.trigger('deleteLoginPage');
        window.app.navigate('playlists', true);
      });
    });
  },
  logOut() {
    debugger;
    $.ajax({
      url: 'http://localhost:3000/logout',
      type: 'POST',
      headers: {
        'x-token': CurrentUser.getInstance().getToken(),
      },
    }).done(function(data) {
      console.log(data);
      CurrentUser.getInstance().reset();
      Backbone.trigger('changeUserStatus');
    });
  },
});
export { UserModel };
