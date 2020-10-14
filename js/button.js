function myfun(){
	var name = document.getElementById("name");
	var num = document.getElementById("num");
	var select = document.getElementById("select");
	var time = document.getElementById("book_time");

	var regx =/[a-z]/i;
	var regx1 =/[0-9@!`~#$%^&*(_)+={}[\;.]/;

	if(name.value.trim() == "" || name.value.trim() == null){
		
		document.getElementById("namep").innerHTML="Name cannot be empty";
		name.style.border= "2px solid red";
		return false;
	}
	else if(regx1.test(name.value)){
		
		document.getElementById("namep").innerHTML="Only alphabets";
		name.style.border= "2px solid red";
		return false;
	}
	else if (num.value =="" || num.value == null){
		
		document.getElementById("nump").innerHTML="Invalid phone number";
		num.style.border= "2px solid red";
		return false;
	}
	else if (regx.test(num.value)){
		
		document.getElementById("nump").innerHTML="Only digits allowed";
		num.style.border= "2px solid red";
		return false;
	}
	else if (num.value.trim().length != 10){
		
		document.getElementById("nump").innerHTML="Number is 10 digit";
		num.style.border= "2px solid red";
		return false;
	}
	else if (time.value.trim() ==""|| time.value.trim() == null){
		document.getElementById("timep").innerHTML="Invalid time";
		time.style.border= "2px solid red";
		return false;
	}
	else {
		document.getElementById("selectp").innerHTML="Congrates! Enjoy your dish.";
		alert("your order for " + select.options[select.selectedIndex].value+" is placed");
		return true;
	}
}