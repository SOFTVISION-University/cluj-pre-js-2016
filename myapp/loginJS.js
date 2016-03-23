
// var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';

// function color(){
//   var x = document.getElementsByClassName( "input" );
//   for( j in x ){
//     x[j].style.backgroundColor="rgba( 51,153,255,0.2 )";
//   }
// }


function changeInputColor(id) {
  var inputElment = document.getElementById(id);
  if( inputElment!== null){
    inputElment.style.backgroundColor = "rgba( 51,153,255,0.2 )";
    inputElment.style.border="1px solid rgb(51,153,255)";
  }
}

function changeBackInputColor(id) {
  var inputElment = document.getElementById(id);
  if( inputElment !== null){
    inputElment.style.backgroundColor = "#f2f2f2";
    inputElment.style="border: 0px ";
  }
}



function changeWrongInputColor(id){
  var inputElment= document.getElementById(id);
  if( inputElment !== null){
    if(!inputElment.checkValidity()){
    inputElment.style.backgroundColor = "rgba(255,0,0,0.2)";
    inputElment.style="border: 1px solid red";
  }
  }

}

function checkField(){

  var mail = document.forms["myForm"]["email"].value;
  var pas = document.forms["myForm"]["password"].value;
  var messageElement = document.getElementById('wrong');
  //messageElement.innerHTML="";
  for(var i in users ){
    if( mail == users[i].email  &&  pas == users[i].password ){
      // window.alert( " User " + users[i].userName + " is loged " );
       localStorage.setItem("userData", JSON.stringify(users[i]));
      //console.log();
      return true;
    }else if( mail == users[i].email && pas != users[i].password ){
        //window.alert( " Wrong password " );
        messageElement.innerHTML= " Wrong password ";
        return false;
    }
  }
  if( i == ( l-1 ) ){
    //window.alert( " The user is not registered" );
    messageElement.innerHTML= " The user is not registered ";
    return false;
  }
}




// function checkField(){
//   var obj = JSON.parse(usersJSON);
//   var l = obj.length;
//   var mail = document.forms["myForm"]["email"].value;
//   var pas = document.forms["myForm"]["password"].value;
//   for( i in obj ){
//     if( mail == obj[i].email  &&  pas == obj[i].password ){
//         window.alert( " User " + obj[i].userName + " is loged " );
//         // .location.href="search.html";
//         return true;
//         // break;
//     }else if( mail == obj[i].email && pas != obj[i].password ){
//         window.alert( " Wrong password " );
//         return false;
//       //  break;
//     }
//   }
//   if( i == ( l-1 ) ){
//     window.alert( " The user is not registered" );
//     return false;
//   }
//
//
// }
