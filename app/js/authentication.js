const parseUsers = JSON.parse(usersJSON);
function Users(dataUsers) {
  this.name = dataUsers.userName;
  this.email = dataUsers.email;
  this.pass = dataUsers.password;
}
const nrUsers = parseUsers.length;
// for(var i = 0; i < nrUsers; i++ ){
//     localStorage.userName = parseUsers[i].email;
//     localStorage.password = parseUsers[i].password;
//     temp[i] = localStorage.setItem('parseUsers[i].email', 'parseUsers[i].password');
//
// // LocalStorageManager.setValue("key",data);
// // LocalStorageManager.getValue("key");
// console.log(temp[i]);
// }
function Authentication() {
  let bool = true;
  const emailDiv = document.getElementById('formText1').value;
  const passDiv = document.getElementById('formText2').value;
  for (let i = 0; i < nrUsers; i++) {
    if (parseUsers[i].email === emailDiv) {
                //  var LocalStorageManager =   window.localStorage.setItem(parseUsers[i].email);
                //  console.log(LocalStorageManager);
      if (parseUsers[i].password === passDiv) {
        document.getElementById('mesageLogin').innerHTML = 'login succes!!';
                  //  window.location.replace = ("file:///home/jenica.duca/work/cluj-pre-js-2016/app/playlist_page.html");
        break;
      } else {
        document.getElementById('mesageLogin').innerHTML = 'Incorect password!!';
        bool = false;
        break;
      }
    } else {
      document.getElementById('mesageLogin').innerHTML = 'is not a user!!';
      bool = false;
    }
  }
  return bool;
}
