 //get data  
 function GetData() {
 	var $data = $('#dataDisplay');
 	
 	$.ajax({
 		type: 'GET',
 		url: 'https://jsonplaceholder.typicode.com/users',
 		success: function (data) {
			debugger;
 			return data;
 		}
 	});
 	alert('success');
 };

 //delete the selected user
//  $(function delete(userId) {
//  	var user_id = 1; //UserId.id;
//  	$.ajax({
//  		method: 'DELETE',
//  		url: 'https://jsonplaceholder.typicode.com/posts/${userId}',
//  		success: function () {
//  			//console.log(this);
//  			return data;
//  		}
//  	});

//  });


//  function update(payload) {
//  	$.ajax({
//  		method: 'UPDATE',
//  		url: 'https://jsonplaceholder.typicode.com/posts/${userId}',
//  		success: function () {
//  			//console.log(this);
//  			$(this).remove();
//  		}
//  	});
//  }




























































 // //function to add data in the array
 // function AddData(formData) {
 // console.log(getData());
 // let users = getData()
 // let data = {
 // firstname: formData.fname,
 // lastname: formData.lname,
 // email: formData.email,
 // PhoneNumber: formData.mobnum
 // };
 // if (data !== null) {
 // users.push(data);
 // window.localStorage.setItem('UserData', JSON.stringify(users));
 // console.log(JSON.parse(localStorage.getItem('UserData')));
 // }
 // }

 // //function to get data in the array and display in listing
 // function getData() {
 // var display = JSON.parse(localStorage.getItem('UserData'))|| [] ;
 // return display;
 // }