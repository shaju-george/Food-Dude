function myfun(){
	var name = document.getElementById("name").value;
	var num = document.getElementById("num").value;
	var select = document.getElementById("select");
	var time = document.getElementById("book_time").value;

	if(name == "" || name == null){
		alert("Enter your name!" );
		document.getElementById("namep").innerHTML="Invalid name";
	}
	else if (num =="" || num == null)
		alert("Enter your number!")
	else if (time ==""|| time == null)
		document.getElementById("timep").innerHTML="Invalid time";
	else 
		alert("your order for " + select.options[select.selectedIndex].value+" is placed")
}