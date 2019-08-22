//var edit= editUsers(UserId)
function editUsers(userId) {
    $("#fname").val(jsonData[userId]['first_name']);
    $("#lname").val(jsonData[userId]['last_name']);
    $("#email").val(jsonData[userId]['email']);
    $("#mobnum").val(jsonData[userId]['mobnum'])
}