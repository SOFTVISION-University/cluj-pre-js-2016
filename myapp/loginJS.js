
// function checkField(){
//   var obj = JSON.parse(text);
//
//   var x=document.forms["myForm"]["email"].value;
//   // var x=document.getElementById('idPassword');
//   if (x == null || x == "a") {
//        window.alert("Name must be filled out");
//
//    }
// }
// var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';
function color(){
  var x=document.getElementsByClassName("input");
  for(j in x)
  {
    x[j].style.backgroundColor="rgba(51,153,255,0.2)";
  }

}

function checkField(){
  var obj = JSON.parse(usersJSON);
  var l=obj.length;
  var mail=document.forms["myForm"]["email"].value;
  var pas=document.forms["myForm"]["password"].value;
  for(i in obj){
    if(mail==obj[i].email && pas==obj[i].password){
        window.alert(" User "+ obj[i].userName + "is loged");
        // .location.href="search.html";
        return true;
         break;
    }else if(mail==obj[i].email && pas!=obj[i].password){
        window.alert(" Wrong password ");
        return false;
        break;
    }
  }
  if(i==(l-1)){
    window.alert(" The user is not registered");
    return false;
  }
  //window.alert(" yes "+ obj[0].userName);

}
