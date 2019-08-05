function AddData(formData) {
	let data=[{
	firstname : formData.fname,
	lastname : formData.lname,
	email: formData.email,
	PhoneNumber : formData.mobnum
	}];
	
	//local storage
	window.localStorage.setItem('UserData', JSON.stringify(data));
	console.log(data);
    
}
