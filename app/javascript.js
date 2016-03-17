function copyright(){
  var d=new Date();
  var year=d.getFullYear();
  document.getElementById('copyright').innerHTML="&copy; "+year+
  " ACME DIVISION ALL RIGHTS RESERVED";
}

function goTop(){
  document.body.scrollTop=0;
  document.getElementById("your_name").focus();
}
