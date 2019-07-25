

var btn = document.querySelector('#threefuncs');
btn.addEventListener('click',fetch);
btn.addEventListener('click',checkGender);
btn.addEventListener('click',valid);
btn.addEventListener('click',store);

function fetch() {
  	var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    email= document.getElementById("email").value;
	num=document.getElementById("num").value;
	console.log("Name: "+fname+"\n last name: "+lname+"\n email: "+email+"\n num: "+num);

}

function checkGender() {				
	if(document.getElementById('radioMale').checked)
	console.log("You have selected Male.");
	else
	console.log("You have selected Female.");
}

function valid(){
	if (this.checked) 
		console.log("");
	else 
		console.log("the console box is checked");
}

function store(){
	 var userProfiles ={
					let firstname=localStorage.setItem('fname', fname.value);
			
					let email= document.getElementById("email").value;
					let num=document.getElementById("num").value;

					let lastname=localStorage.setItem('lname', lname.value);
	localStorage.setItem('mail',JSON.stringify(email));
	localStorage.setItem('num', JSON.stringify(num));

	}
	console.log(userProfiles);
}



