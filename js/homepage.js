
function logout(){
  if (confirm("Are you sure you want to logout?")) {
    //txt = "You pressed OK!";
	deletecookie()  
	window.location.replace("./log.html");
  } else {
    //txt = "You pressed Cancel!";
	return;
  }	
 
	
}

function deletecookie(){
	document.cookie = "active= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
	//alert("cookie expired")
}

 var decodedCookie = decodeURIComponent(document.cookie);
 var ca = decodedCookie.split(';');
 
//ca[0]=cookie 1, ca[1]=cookie 2, etc
  for(var i = 0; i < ca.length; i++) {
	var temp = ca[i].split('=')
	//temp[0]=flag  temp[1]=username 
	if(temp[0].charAt(0) == ' '){
		temp[0] = temp[0].substring(1);
		}
	var flag = temp[0];
	if(flag=="active"){
    var txt = temp[1];
		//alert("found active w username "+ txt);
	}
  }

var txt2="default";
var flag2=getCookie(txt);
  if (flag2 == 2) {
    //alert("you are stud");
	txt2="Student";
  }else if(flag2==1){
	//alert("ypu are techer");
	txt2="Teacher";
  }else if(flag2==3){
	//alert("ypu are techer");
	txt2="Administrator";
  }else{
	alert("User not found");
  }


function getCookie(username) {
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
//ca[0]=cookie 1, ca[1]=cookie 2, etc
  for(var i = 0; i < ca.length; i++) {
	var temp = ca[i].split('=')
	
	//temp[0]=mail  temp[1]=all info  
	var obj=JSON.parse(temp[1]);
	
	if(temp[0].charAt(0) == ' '){
		temp[0] = temp[0].substring(1);
		}
	if(temp[1].charAt(0) == ' '){
		temp[1] = temp[1].substring(1);
		}
	//alert(obj.username);
	if(obj.username==username){
			if(obj.Role==1){
				return 2
			}else if(obj.Role==2){
				return 1
			}else{
				return 3;
			}
		
	}
  }
	return 0;
  }



document.getElementById("username").innerHTML = txt;
document.getElementById("stats").innerHTML = txt2;

