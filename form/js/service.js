 //get data  
 function GetData(callback) {
     $.ajax({
         type: 'GET',
         url: ' http://localhost:3000/users',
         success: function(response) {
             console.log(response);
             callback(response);
         }
     });
 }

 function AddData(userdata) {
     $.ajax({
         type: 'POST',
         data: userdata,
         url: ' http://localhost:3000/users',
         success: function(response) {
             console.log(response);
         }
     });
 }

 function deleteUser(id) {
     $.ajax({
         type: 'DELETE',
         dataType: 'application/json',
         url: ' http://localhost:3000/users/' + id,
         success: function() {
             alert(" The user is deleted ");
         }
     });
 }

 function getdataUpdate(id, callback) {
     $.ajax({
         type: 'GET',
         url: ' http://localhost:3000/users/' + id,
         success: function(result) {
             console.log(result);
             callback(result);
         }
     })
 }

 function putData(payload) {
     $.ajax({
         type: 'PUT',
         data: payload,
         url: ' http://localhost:3000/users/' + payload.id,
         success: function(response) {
             console.log("success");
         }
     })
 }































































































 // //function to add data in the array localStorage functions
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