function myfun(){
	var name = document.getElementById("name").value.trim();
	var num = document.getElementById("num").value;
	var select = document.getElementById("select");
	var time = document.getElementById("book_time").value.trim();

	if(name == "" || name == null){
		
		document.getElementById("namep").innerHTML="Invalid name";
		return false;
	}
	else if (num =="" || num == null){
		
		document.getElementById("nump").innerHTML="Invalid phone number";
		return false;
	}
	else if (num.length != 10){
		
		document.getElementById("nump").innerHTML="phone number is 10 digit";
		return false;
	}
	else if (time ==""|| time == null){
		document.getElementById("timep").innerHTML="Invalid time";
		return false;
	}
	else {
		document.getElementById("selectp").innerHTML="Congrates! Enjoy your dish.";
		alert("your order for " + select.options[select.selectedIndex].value+" is placed");
		return true;
	}
}