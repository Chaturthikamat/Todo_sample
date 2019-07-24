

var btn = document.querySelector('#threefuns');
btn.addEventListener('click',fetch);
btn.addEventListener('click',checkGender);
btn.addEventListener('click',validate);
btn.addEventListener('click',store);

function fetch(){
    var name=document.getElementById("name").value;
    var lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    num=document.getElementById("num").value;
	console.log("Name: "+name+"\n last name: "+lname+"\n email: "+email+"\n num: "+num);

}

function checkGender(){				
	if(document.getElementById('radioMale').checked)
	console.log("You have selected Male.");
	else
	console.log("You have selected Female.");
}

function validate(){
	if (this.checked) 
		console.log("");
	else 
		alert("the console box is checked");
}

function store(){
	localStorage.setItem("name", name.value);
	localStorage.setItem("lname", lname.value);
	localStorage.setItem("email", email.value);
	localStorage.setItem("num", num.value);
}