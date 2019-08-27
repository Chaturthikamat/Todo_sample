//validates the UserData
function validation(data) {
    let validateValue = false;
    let fname = data.fname;
    let lname = data.lname;
    let email = data.email;
    let mobnum = data.mobnum;

    if (fname === "" || !isNaN(fname)) {
        $("#fname_error")[0].innerHTML = "** Error: Please enter the username, do not enter number";
        validateValue = false;
    }

    if (lname === "" || !isNaN(lname)) {
        $("#name_error")[0].innerHTML = "** Error: Please enter the username, do not enter number";
        validateValue = false;
    }

    if (email === "") {
        $("#useremail")[0].innerHTML = "** Error: Please enter the email Id in valid format";
        validateValue = false;
    }


    if (mobnum === "" || mobnum.length != 10 || isNaN(mobnum)) {
        $("#usernum")[0].innerHTML = "** Error: Please enter the 10-digit number";
        validateValue = false;
    } else {
        validateValue = true;
    }

    return validateValue;
}