 //get data  
 $(function GetData() {
 	var $data = $('#dataDisplay');
 	debugger;
 	$.ajax({
 		type: 'GET',
 		url: 'https://jsonplaceholder.typicode.com/users/1',
 		success: function (data) {
 			console.log('success', data);
 			$.each(data, function (i, users) {
 				$data.append('<li>' + '<span>' + users.name + '</span>' + '<br> <span>' + users.email + '</span>' + ' </li>');
 			});
 			//adds li dynamically 
 			$("li").append('<i class="material-icons delete">' + "delete" + '</i>');
 			$("li").append('<i class="material-icons edit">' + "edit" + '</i>');
 		}
 	});
 	alert('success');
 });

 //Updating(editing) selected user
 $(function updateData() {
 	$(".edit").on("click", function () {
 		var $data = $('#dataDisplay');
 		//var parentlistElement = $(this).parent(); // points to li
 		$.ajax({
 			method: "PUT",
 			url: "https://jsonplaceholder.typicode.com/posts/1",
 			dataType: 'json',
 			data: {
 				"type": "main"
 			},
 			cache: false,
 			success: function (data) {
 				// update the specific list item
 				$(this).parent().html(object.values.join("-"));
 				//parentListElement.data.attr('contenteditable', 'true');
 			}
 		})
 	})
 })


 // Deleting selected user
 $(function deleteUser() {
 	$(".delete").on("click", function () {
 		var id = $('#dataDisplay').id;
 		var data = $(this).parent();
 		$.ajax({
 			method: "DELETE",
 			url: 'https://jsonplaceholder.typicode.com/posts/1',
 			data: {
 				name: users.name,
 				email: users.email
 			},
 			success: function (data) {
 				data.remove(data, id);
 			}
 		})
 	});
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