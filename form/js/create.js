$("#btn").click(function (e) {
	let validate = validation();
	console.log(validate);
	e.preventDefault();
	if (validate) {
		let formData = getFormData()
		AddData(formData); //boolean- if true ..navigate		
	}

});


//validates the UserData
function validation() {
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

//Takes the data from the form fields and passes it to the validation function
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