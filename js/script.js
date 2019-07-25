var btn = document.getElementById("myBtn");
btn.addEventListener('click', submit());

function submit(){
	//fetch
	debugger;
	let fname = document.getElementById("fname").value;
	let email = document.getElementById("email").value;
	let num = document.getElementById("num").value;

	//validate form
	validateForm(fname, lname, email, num);
}


function validateForm(fname,lname,email,num) {
	debugger;

	if (fname == "") {
		alert("name field cannot be empty");
		document.surveyform.fname.focus();
		return false;
	}
	if (email == "") {
		alert("Please provide your Email!");
		document.surveyform.email.focus();
		return false;
	}
	if (num == "" || isNaN(document.surveyform.num.value) ||
		document.surveyform.num.value.length != 10) {

		alert("Please provide a Phone Number in the proper format.");
		document.surveyform.num.focus();
		return false;

		function checkRadio(field) {
			if (!field.length) {
				field = [field];
			}
			for (var i = 0; i < field.length; i++) {
				if (field[i].checked) return field[i].value;
			}
			return false;
		}
	} //fname
	//lastnma
	//



}