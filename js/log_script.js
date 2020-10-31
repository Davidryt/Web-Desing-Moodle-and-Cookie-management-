//Questions: 
//Taken username detection  //check
//Submit
//Same site problem /try again


function multiCookie(username,password,role){
	setCookie(username.value,password.value,360)
	var stat= "stat_"+username.value
	setCookie(stat,role.value,360)
}

function setCookie(username,data,exdays) {
  alert("setting cookie w info "+username+ " and "+data)
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  //SET
  document.cookie = username + "=" + data + ";" + expires + ";SameSite=None;Secure";
  alert("cookie written")
}

function getCookie(username,psw) {
  alert("get start received: "+username+ " with "+psw);
  var decodedCookie = decodeURIComponent(document.cookie);
  alert("DECODED: "+ decodedCookie)
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
	var temp = ca[i].split('=')
	if(temp[0].charAt(0) == ' '){
		temp[0] = temp[0].substring(1);
		}
	if(temp[1].charAt(0) == ' '){
		temp[1] = temp[1].substring(1);
		}
	//alert("Checking"+temp[0]+"with"+temp[1]+ " COMPARED TO"+username+"WITH"+psw)
	if(temp[0]==username){
		//alert("User found")
		if(temp[1]==psw){
			//alert("Password MATCH")
			return 1;
		}
	}
  }
	//alert("FAILED");
	return 0;
  }

function checkCookie(uname,psw) {
  //alert("checking up "+uname.value+" with "+psw.value);
  var flag=getCookie(uname.value, psw.value);
  //alert("get done");
  if (flag == 1) {
    alert("Welcome again " + uname.value);
	window.location.replace("./index.html")       //PREGUNTAR
  }else {
	alert("User or password incorrect");
  }
}

// Get the modal
var modal = document.getElementById('id01');

var modal2 = document.getElementById('id02');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	if (event.target == modal2) {
        modal2.style.display = "none";
    }
}