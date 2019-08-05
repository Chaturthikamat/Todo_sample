$("#btn").click(function (e) {
	let validate = validation();
	console.log(validate);
	e.preventDefault();
	if (validate) {
		let formData = getFormData()
		AddData(formData); //boolean- if true ..navigate		
	}

});

function validation() {
	debugger;
	let formData = getFormData()
	let validateValue = false;
	let fname = formData.fname;
	let lname = formData.lname;
	let email = formData.email;
	let mobnum = formData.mobnum;
	if (fname == "" || !isNaN(fname)) {
		$("#fname_error")[0].innerHTML = "** Error: Please enter the username, do not enter number";
		validateValue = false;
	}

	if (lname == "" || !isNaN(lname)) {
		$("#name_error")[0].innerHTML = "** Error: Please enter the username, do not enter number";
		validateValue = false;
	}


	if (email == "") {
		$("#useremail")[0].innerHTML = "** Error: Please enter the email Id in valid format";
		validateValue = false;
	}


	if (mobnum == "" || mobnum.length != 10 || isNaN(mobnum)) {
		$("#usernum")[0].innerHTML = "** Error: Please enter the 10-digit number";
		validateValue = false;
	} else {
		validateValue = true;
	}
	return validateValue;
}

function getFormData() {
	let fname = $("#fname")[0].value;
	let lname = $("#lname")[0].value;
	let email = $("#email" || email.indexOf('@') <= 0)[0].value;
	let mobnum = $("#mobnum")[0].value;
	return {
		fname: fname,
		lname: lname,
		email: email,
		mobnum: mobnum
	};
}



//JAVASCRIPT
// function validation() {
// let test = btn;
// 	//----------------Username validation------------
// 	var fname = document.getElementById("fname").value;
// 	if (fname == "" || !isNaN(fname)) {
// 		document.getElementById("fname_error").innerHTML = "** Error: Please enter the username, do not enter number";
// 		return false;
// 	}

// 	//----------------Username validation------------
// 	var lname = document.getElementById("lname").value;
// 	if (lname == "" || !isNaN(lname)) {
// 		document.getElementById("lname_error").innerHTML = "** Error: Please enter the username, do not enter number";
// 		return false;
// 	}
// 	//----------------email validation------------

// 	var email = document.getElementById("email" || email.indexOf('@') <= 0).value;
// 	if (email == "") {
// 		document.getElementById("useremail").innerHTML = "** Error: Please enter the email Id in valid format";
// 		return false;
// 	}

// 	//----------------phoneNumber validation------------
// 	var mobnum = document.getElementById("mobnum").value;
// 	if (mobnum == "" || mobnum.length != 10 || isNaN(mobnum)) {
// 		document.getElementById("usernum").innerHTML = "** Error: Please enter the 10-digit number";
// 		return false;
// 	}
// 	//---------------------------------checkboxes Validation------------------
// 	/* var reading=document.getElementById('reading').value.checked;
// 	var writing=document.getElementById('writing').value.checked;
// 	var singing=document.getElementById('singing').value.checked;
// 	if( reading==0 && writing==0 && singing==0){
// 		var chkmsg = '** Error :You must select hobby!';
// 		document.getElementById('error_message_checkbox').innerHTML = chkmsg;
// 		return false;
// 	} */


// 	// ---------------------------------RadioButton Validation------------------
// 	 var radiobox1=document.survey_form.gender;
// 	for(var i=0;i<radiobox1;i++){
// 		if ( ( survey_form.gender[0].checked == false ) && ( survey_form.gender[1].checked == false ) ) {
// 		document.getElementById("error_message")="** Error:Please choose your Gender: Male or Female"; 
// 		return false;
// 			}
// 			else{
// 				break;
// 			}
// }
// 	// var genders = document.getElementsByName("gender");
// 	// if (genders[0].checked == true) {
// 	// 	//alert("Your gender is male");
// 	// 	return true;
// 	// } else if (genders[1].checked == true) {
// 	// 	//alert("Your gender is female");
// 	// 	return true;
// 	// } else {
// 	// 	// no checked
// 	// 	var msg = '** Error :You must select your gender!';
// 	// 	document.getElementById('error_message').innerHTML = msg;
// 	// 	return false;
// 	// }


// 	//save data
// 	var userprofiles = [];
// 		let data = {
// 			username: fname,
// 			email: email,
// 			PhoneNumber: mobnum,
// 			gender: radiobox1
// 		};
// 		userprofiles.push(data);
// 		console.log(userprofiles);


// 		//convert data to string
// 		var datanew=JSON.stringify(userprofiles);
// 		//save to the database
// 		localStorage.setItem('UserProfiles', datanew);