//get the url parameters
var getUrlParameter = function getUrlParameter(sParam) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(sParam);
    return myParam
}

var id = getUrlParameter('id');
console.log(id);
//function in service.js for Get the respective user data
getdataUpdate(id, function callback(result) {
    debugger;
    var data = result;
    //populate the form fields with the user values
    //alert(data.fname, data.email);
    $('#firstname').val(data.fname);
    $('#lastname').val(data.lname);
    $('#useremail').val(data.email);
    $('#mobilenum').val(data.mobnum);
});


//validation on click
$("#editbtn").click(function(e) {
    debugger;
    let userdata = getuserData()
    let validate = validation(userdata);
    console.log(validate);
    e.preventDefault();
    if (validate) {
        putData(userdata);
        alert("the data is added successfully");
    }
});

//Takes the data from the form fields and passes it to the validation function
function getuserData() {
    debugger;
    var userid = getUrlParameter('id');
    var first_name = $('#firstname')[0].value;
    var last_name = $('#lastname')[0].value;
    var email = $('#useremail')[0].value;
    var mobilenum = $('#mobilenum')[0].value;
    return {
        fname: first_name,
        lname: last_name,
        email: email,
        mobnum: mobilenum,
        id: userid
    };
}