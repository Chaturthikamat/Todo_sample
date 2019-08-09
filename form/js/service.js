 $(function GetData(){
	 var $data= $('#dataDisplay');
	 debugger;
	$.ajax({
		type:'GET',
		url:'https://jsonplaceholder.typicode.com/users',
		success: function(data) {
		console.log('success',data);
			$.each(data, function(i, users) {
				$data.append('<li>Name: '+ users.name +'<br> Email: '+ users.email +' </li>');
				
			});
			$("li").append('<i class="material-icons">' + "delete" + '</i>');
		}  

	});

 });




// //function to add data in the array
// function AddData(formData) {
// 	console.log(getData());
// 	let users = getData()
// 	let data = {
// 		firstname: formData.fname,
// 		lastname: formData.lname,
// 		email: formData.email,
// 		PhoneNumber: formData.mobnum
// 	};
// 	if (data !== null) {
// 		users.push(data);
// 		window.localStorage.setItem('UserData', JSON.stringify(users));
// 		console.log(JSON.parse(localStorage.getItem('UserData')));
// 	}
// }

// //function to get data in the array and display in listing
// function getData() {
// 	var display = JSON.parse(localStorage.getItem('UserData'))|| [] ;
// 	return display;
// }

