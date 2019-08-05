function AddData(formData) {
	let data = {
		firstname: formData.fname,
		lastname: lname.value,
		email: email.value,
		PhoneNumber: mobnum.value
	};
	let datanew = JSON.stringify(data);
    console.log("The data submitted successfully. Your data is " + datanew);
    //local storage
    return datanew;
    //console.log(datanew);
}

function getData(){
    //return local storage data
}