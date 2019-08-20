// var display = JSON.parse(localStorage.getItem('UserData'));
//     for (i = 0; i < display.length; i++) {
//         let liItem = "<li>" + "<span>" + display[i].firstname + "</span>" + " " + "<span>" + display[i].email + "</span>" + "<i class=" + "material-icons" + "></i>" + "</li>";
//         $("ol").append(liItem);
//         $("li").addClass("listitem");
//         $("li").attr('id', i);
// }
// $("li").append('<i class="material-icons">' + "delete" + '</i>');




//Getting the data from the API
$(document).ready(function () {

    GetData(function (response) {
        debugger;
        var data = response;
        var $data = $('#dataDisplay');
        $.each(data, function (i, users) {
            $data.append('<li>' + '<span class="table .table-striped .table-hover">' + users.first_name + '</span>' + ' <span class="table .table-striped .table-hover">' + users.email + '</span>' + ' </li>');
        });
        //adds li dynamically 
        $("li").append('<i class="material-icons delete ">' + "delete" + '</i>');
        $("li").append('<i class="material-icons edit ">' + "edit" + '</i>');
    });
});


//delete the user on click
$('#dataDisplay').on('click', '.delete', function () {
    $(this).parent().remove();
});

//update the user on click
$('#dataDisplay').on('click', '.edit', function () {
    //window.location.href = "../index.html";
    $(this).parent().attr('contenteditable', 'true');
    $(this).append('<i class="material-icons save">' + "save" + '</i>');
});






// $().cluc {
//     deletUser(userid)
// }

// //on click of edit => {
// updateUser()
// // }