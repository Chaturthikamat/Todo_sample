//validates the UserData
function validation(data) {
    let validateValue = false;
    let fname = data.fname;
    let lname = data.lname;
    let email = data.email;
    let mobnum = data.mobnum;
    debugger;

    //the regex
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //the validation
    if (fname == "" || !fname.match(letters)) {
        $("#fname_error")[0].innerHTML = "** Error: Please enter the username, do not enter number";
        validateValue = false;
    } else if (lname == "" || !lname.match(letters)) {
        $("#name_error")[0].innerHTML = "** Error: Please enter the lastname correctly";
        validateValue = false;
    } else if (email == "" || !email.match(mailformat)) {
        $("#uemail")[0].innerHTML = "** Error: Please enter the email Id in valid format";
        validateValue = false;
    } else if (mobnum == "" || mobnum.length != 10 || !mobnum.match(numbers)) {
        $("#usernum")[0].innerHTML = "** Error: Please enter the 10-digit number";
        validateValue = false;
    } else {
        validateValue = true;
    }

    return validateValue;
}