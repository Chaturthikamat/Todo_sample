$(document).ready(function () {

    // var display = JSON.parse(localStorage.getItem('UserData'));
    //     for (i = 0; i < display.length; i++) {
    //         let liItem = "<li>" + "<span>" + display[i].firstname + "</span>" + " " + "<span>" + display[i].email + "</span>" + "<i class=" + "material-icons" + "></i>" + "</li>";
    //         $("ol").append(liItem);
    //         $("li").addClass("listitem");
    //         $("li").attr('id', i);
    // }
    // $("li").append('<i class="material-icons">' + "delete" + '</i>');
    var getData = GetData();
    if (getData) {
        $.each(data, function (i, users) {
            $data.append('<li>' + '<span>' + users.name + '</span>' + '<br> <span>' + users.email + '</span>' + ' </li>');
        });
        //adds li dynamically 
        $("li").append('<i class="material-icons delete" href="https://jsonplaceholder.typicode.com/users/${userId}">' + "delete" + '</i>');
        $("li").append('<i class="material-icons edit">' + "edit" + '</i>');
    }

    // $().cluc {
    //     deletUser(userid)
    // }
    // //on click of edit => {
    // updateUser()
    // // }
});