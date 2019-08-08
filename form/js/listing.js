
$(document).ready(function ()  {

    var display = JSON.parse(localStorage.getItem('UserData'));
        for (i = 0; i < display.length; i++) {
            let liItem = "<li>" + "<span>" + display[i].firstname + "</span>" + " " + "<span>" + display[i].email + "</span>" + "<i class=" + "material-icons" + "></i>" + "</li>";
            $("ol").append(liItem);
            $("li").addClass("listitem");
            $("li").attr('id', i);
    }
    $("li").append('<i class="material-icons">' + "delete" + '</i>');
});