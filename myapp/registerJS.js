
function Click() {
    document.getElementById( 'focusDiv' ).focus();
}

// function color(){
//   var x=document.getElementsByClassName("input");
//   for(var j in x)
//   {
//     x[j].style.backgroundColor="rgba(51,153,255,0.2)";
//   }
//
// }

function checkUserName(){
    var inputUserName = document.forms["registerForm"]["username"].value;
    for( var i in users){
        if(inputUserName == users[i].userName){
          window.alert("user exist");
          return false;
        }
    }
    return true;
}
