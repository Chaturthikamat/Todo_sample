 //get data  
 $(function GetData() {
 	var $data = $('#dataDisplay');
 	debugger;
 	$.ajax({
 		type: 'GET',
 		url: 'https://jsonplaceholder.typicode.com/users',
 		success: function (data) {
 			console.log('success', data);
 			$.each(data, function (i, users) {
 				$data.append('<li>' + '<span>' + users.name + '</span>' + '<span>' + users.email + '</span>' + ' </li>');
 			});
 			$("li").append('<i class="material-icons delete">' + "delete" + '</i>');
 			$("li").append('<i class="material-icons edit">' + "edit" + '</i>');
 		}
 	});

 	alert('success');
 });

 //delete data
 $('#dataDisplay').on('click', '.delete', function () {
 	$(this).parent().remove();
 });

 //edit data
 $('#dataDisplay').on('click', '.edit', function () {
 	//window.location.href = "../index.html";
 	$(this).parent().attr('contenteditable', 'true');
 	//$("li").append('<i class="material-icons save">' + "save" + '</i>');
 });





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