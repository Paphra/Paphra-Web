
var xmlhttp;

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	var my_text = "";
	var xmlDoc = xmlhttp.responseXML;
	var main = xmlDoc.getElementsByTagName("laws");
	var laws = main[0].getElementsByTagName("law");
	var length = laws.length;

	var i = 0;
	for (i = 0; i < length; i++) {
	    var law = laws[i].getElementsByTagName("ll")[0].childNodes[0].nodeValue;
	    var details = laws[i].getElementsByTagName("d");
	    var law_d = details[0].getElementsByTagName("l");

	    var def = law_d[0].childNodes[0].nodeValue;
	    var title = law;

	    var php;
	    if (window.XMLHttpRequest) {
		php = new XMLHttpRequest();
	    } else {
		php = new ActiveXObject("Microsoft.XMLHTTP");
	    }

	    php.onreadystatechange = function () {
		if (php.readyState == 4 && php.status == 200) {
		    var returns = php.responseText;
		    if (returns == "saved") {

		    } else if (returns == "not_connected") {
			window.alert("Not Connected!");
		    } else {
			window.alert(title + " is Not Saved! \n " + returns);
		    }
		}
	    };

	    php.open("GET", "/transfer.php?title=" + title + "&stmt=" + def, true);
	    php.send();

	}

    }
};

xmlhttp.open("GET", "/phy/olevel/topics/law/laws.xml", true);
xmlhttp.send();
