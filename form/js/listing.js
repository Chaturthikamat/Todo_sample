//Getting the data from the json Server
$(document).ready(function () {
    GetData(function (response) {
        var data = response;
        var $data = $('#dataDisplay');
        $.each(data, function (i, users) {
            $data.append(`<li id="${users.id}">` + users.id + '<span class="table .table-striped .table-hover">' + users.fname + '</span>' + ' <span class="table .table-striped .table-hover">' + users.email + '</span>' + ' </li>');
        });

        //adds li dynamically 
        $("li").append('<i class="material-icons delete ">' + "delete" + '</i>');
        $("li").append('<i class="material-icons edit ">' + "edit" + '</i>');
    });
});


//delete the user on click 
$('#dataDisplay').on('click', '.delete', function () {
    let id = $(this).parent().attr("id");
    deleteUser(id);
});



//update the user on click
$('#dataDisplay').on('click', '.edit', function () {
    let id = $(this).parent().attr("id");
    console.log(id);
    window.location.href = "edit_file.html?id=" + id + "";
})















//setting the list using localStorage
// var display = JSON.parse(localStorage.getItem('UserData'));
//     for (i = 0; i < display.length; i++) {
//         let liItem = "<li>" + "<span>" + display[i].firstname + "</span>" + " " + "<span>" + display[i].email + "</span>" + "<i class=" + "material-icons" + "></i>" + "</li>";
//         $("ol").append(liItem);
//         $("li").addClass("listitem");
//         $("li").attr('id', i);
// }
// $("li").append('<i class="material-icons">' + "delete" + '</i>');