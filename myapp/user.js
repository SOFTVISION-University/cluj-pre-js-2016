  var obj = JSON.parse(usersJSON);
  var l=obj.length;
  var users=[];

function User(data){
  this.userName=data.userName;
  this.email=data.email;
  this.password=data.email;
}

for(i=0;i<l;i++){
  users[i]=new User(obj[i]);
  console.log(users[i]);
}
