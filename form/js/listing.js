$(document).ready(function () {
    var display = JSON.parse(localStorage.getItem('UserData'));

    for (i = 0; i < display.length; i++) {
        let liItem = "<li>" + display[i].firstname + "</li>";
        $("ol").append(liItem);
    }
});