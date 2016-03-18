
function myFunction(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	document.forms['regform'].elements['regname'].focus();
}




function showPlaylist2() {
  var appear;
  appear =document.getElementById("playlist2");
  appear.style.display = 'block';
  }

	function hidePlaylist2() {
	  var appear;
	  appear =document.getElementById("playlist2");
	  appear.style.display = 'none';
	  }

		function showPlaylist1() {
		  var appear;
		  appear =document.getElementById("playlist1");
		  appear.style.display = 'block';
		  }

			function hidePlaylist1() {
			  var appear;
			  appear =document.getElementById("playlist1");
			  appear.style.display = 'none';
			  }

				function showPlaylist3() {
					var appear;
					appear =document.getElementById("playlist3");
					appear.style.display = 'block';
					}

					function hidePlaylist3() {
						var appear;
						appear =document.getElementById("playlist3");
						appear.style.display = 'none';
						}

	function validation(){

			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;


			if ( email == "bogdan@gmail.com" && password == "bogdan"){
						alert ("Login successfully");
}
			else
			alert ("Login credentials incorrect")
}
