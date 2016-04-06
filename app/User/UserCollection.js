const UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'http://localhost:3000/preferences',
  parse(data) {
    for (var i = 0; i < 10; i++){
      const Div = document.getElementById('users');
      const Clone = Div.cloneNode(true);
      plst.appendChild(Clone);
      document.getElementById('users').innerHTML = data[i];

  console.log(data[i]);
    }
  },
});

const usersCollection = new UserCollection();
usersCollection.fetch({
  success(usersCollection){
		console.log(usersCollection.toJSON());
  }
});


// jQuery.get( "http://localhost:3000/preferences", function( response ) {
//     // response contains site information
// } );
