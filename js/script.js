function validation(){
	var fname=document.getElementById("fname").value;
		if (fname== "" || !isNaN(fname))
		{
			document.getElementById("username").innerHTML="** Error: Please enter the username, do not enter number";
			return false;
		}
	
	var email=document.getElementById("email" || email.indexOf('@')<=0).value;
	if (email == "") {
		document.getElementById("useremail").innerHTML="** Error: Please enter the email Id in valid format";
		return false;
	}
	
	var mobnum=document.getElementById("mobnum").value;
	if (mobnum == "" || mobnum.length != 10 || isNaN(mobnum)){
	document.getElementById("usernum").innerHTML="** Error: Please enter the 10-digit number";
		return false;
	}


	var radiobox1=document.survey_form.gender;
	for(var i=0;i<radiobox1;i++){
		if ( ( survey_form.gender[0].checked == false ) && ( survey_form.gender[1].checked == false ) ) {
		document.getElementById("error_message")="** Error:Please choose your Gender: Male or Female"; 
		return false;
			}
			else{
				break;
			}
}

	var reading=document.getElementById('firsthobby').checked;
	var writing=document.getElementById('secondhobby').checked;
	var singing=document.getElementById('thirdhobby').checked;
	if(reading==false && writing==false && singing==false){
		alert("Select a hobby");
		return false;
	}


}