var switc = 0;
function func1() {
	if (switc == 2) {
		document.getElementById("one").style.color = "blue";
		document.getElementById("two").style.color = "green";
		document.getElementById("three").style.color = "black";
		switc = 0;
	}
	else if (switc == 0) {
		document.getElementById("one").style.color = "black";
		document.getElementById("two").style.color = "blue";
		document.getElementById("three").style.color = "green";
		switc = 1;
	}
	else if (switc == 1) {
		document.getElementById("one").style.color = "green";
		document.getElementById("two").style.color = "black";
		document.getElementById("three").style.color = "blue";
		switc = 2;
	}
}
function changeColor() {
    let borderR = document.getElementById("borderR").value;
    let borderG = document.getElementById("borderG").value;
    let borderB = document.getElementById("borderB").value;
    let borderW = document.getElementById("borderW").value;
    let backR = document.getElementById("backR").value;
    let backG = document.getElementById("backG").value;
    let backB = document.getElementById("backB").value;

    var dummy = document.getElementById("dummy");
    dummy.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    dummy.style.borderWidth = borderW + "px";
    dummy.style.backgroundColor = `rgb(${backR},${backG},${backB})`;
}
function checkPW() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    if (first.length < 8) {
        alert("Your first password is not 8 characters long! Try again!");
    }
    else if (second.length < 8) {
        alert("Your second password is not 8 characters long! Try again!");
    }
    else if (first != second) {
        alert("Password 1 does not equal password 2! Try again!");
    }
    else {
        alert("Passwords pass requirements (they match and are longer than 8 characters)!");
    }
}
