
function sendMail() {
    var namef = document.getElementById("name");
    var emailf = document.getElementById("email");
    var messagef = document.getElementById("comments");

    $(".btn").css("display", "none");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comments").value;

    var xmlhttp;
    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    var text = xmlhttp.responseText;
	    if (text === "sent") {
		namef.value = "";
		emailf.value = "";
		messagef.value = "";
		alert("Message Sent");

		$(".btn").css("display", "block");
		return false;
	    } else {
		alert("Message Not Sent");
		$(".btn").css("display", "block");
		return false;
	    }
	}
    };
    xmlhttp.open("GET", "/contact/send.php?name=" + name + "&email=" + email + "&message=" + message, true);
    xmlhttp.send();
    return false;
}