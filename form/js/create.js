$("#btn").click(function(e) {
    debugger;
    let formData = getFormData()
    let validate = validation(formData);
    console.log(validate);
    e.preventDefault();
    if (validate) {
        AddData(formData);
    }
});

//Takes the data from the form fields and passes it to the validation function
function getFormData() {
    debugger;
    let fname = $("#fname")[0].value;
    let lname = $("#lname")[0].value;
    let email = $("#email" || email.indexOf('@') <= 0)[0].value;
    let mobnum = $("#mobnum")[0].value;
    return {
        fname: fname,
        lname: lname,
        email: email,
        mobnum: mobnum,
    };
}