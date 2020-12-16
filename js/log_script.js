//Questions: 
//Taken username detection  //check
//Submit
//Same site problem /try again

$('#status').change(function() {
		
        if ($(this).val() == 1) {
			$('#studiescont').show(); 
        } else {
            $('#studiescont').hide();
        }

    })

function checkerrors(a,b,c,z,d,e,f,g,h,i,j) {
	var ch= document.getElementById("remember").checked;
  if(a.value==""){
	  alert("Error: No username");
	  return 0;
  }else if(b.value==""){
	  alert("Error: No NIA");
	  return 0;
  }else if(c.value==""){
	  alert("Error: No password");
	  return 0;
  }else if(z.value==""){
	  alert("Error: No password repetition");
	  return 0;
  }else if(c.value!=z.value){
	  alert("Error: Passwords didn't match");
	  return 0;
  }else if(d.value==""){
	  alert("Error: No email");
	  return 0;
  }else if(f.value==""){
	  alert("Error: No ID");
	  return 0;
  }else if(ch == false){
	  alert("Error: No EULA");
	  return 0;
  }else{
	  //alert("no errors");
	  return 1;
  }
}


function multiCookie(a,b,c,d,e,f,g,h,i,j,z){
	//alert("Starting submision ");
	var err = checkerrors(a,b,c,z,d,e,f,g,h,i,j);
	if(err==0){
	   	//alert("Closing BC ERROR");
		return;
	}
	var boole = existmail(d.value);
	if(boole==false){
		var obj = { username:a.value, NIA: b.value, password:c.value, email:d.value,Date:e.value,ID:f.value,Role:g.value,Stud:h.value,Uni:i.value,Lang:j.value };
		var myJSON = JSON.stringify(obj);
		var z = new Date();
		z.setTime(z.getTime() + (360*24*60*60*1000));
		var expires = "expires=" + z.toGMTString();
		
		document.cookie = d.value + "=" + myJSON + ";" + expires +  ";SameSite=None;Secure";
        //alert("cookie written")
		checkCookie(a,c);
	}else{
		alert("Error: Mail already taken");
		return;
	}
}

function existmail(mail){
	//alert("exist?")
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
 
//ca[0]=cookie 1, ca[1]=cookie 2, etc
  for(var i = 0; i < ca.length; i++) {
	var temp = ca[i].split('=')
	//temp[0]=mail  temp[1]=all info 
	if(temp[0].charAt(0) == ' '){
		temp[0] = temp[0].substring(1);
		}
	var mailread = temp[0];
	if(mailread==mail){
		//alert("found")
		return true;
	}
  }
	//alert ("not found")
	return false;
  }

function activecookie(user){
	var z = new Date();
	z.setTime(z.getTime() + (1*24*60*60*1000));
	var expires = "expires=" + z.toGMTString();
	document.cookie = "active"+ "=" + user + ";" + expires +  ";SameSite=None;Secure";
    // alert("cookie written")
}


function getCookie(username,psw) {
	//alert("GETTING in");
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
	
//ca[0]=cookie 1, ca[1]=cookie 2, etc
  for(var i = 0; i < ca.length; i++) {
	var temp = ca[i].split('=')
	if(temp==""){
		//alert("User does not exist");
		return;
	}
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
		if(obj.password==psw){
			if(obj.Role==1){
				return 2
			}else if(obj.Role==2){
				return 1
			}else{
				return 3;
			}
		}
	}
  }
	
	return 0;
  }

function checkCookie(uname,psw) {
	//alert("cheking in");
	if(uname.value=="" || psw.value==""){
		alert("Empty username or password");
		return;
	}
  var flag=getCookie(uname.value, psw.value);
	//alert("GOT in");
  if (flag == 2) {
    alert("Welcome again Student " + uname.value);
	activecookie(uname.value);
	window.location.replace("./main - Normal.html");       //PREGUNTAR
  }else if(flag==1){
	alert("Welcome again Teacher " + uname.value);
	activecookie(uname.value);
	window.location.replace("./main - Normal.html");
  }else if(flag==3){
	alert("Welcome again Admin " + uname.value);
	activecookie(uname.value);
	window.location.replace("./main - Admin.html");
  }else{
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