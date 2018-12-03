
function list(unit) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	    read(xmlhttp, unit);
	}
    };
    xmlhttp.open("GET", "/met/files/files.xml", true);
    xmlhttp.send();

}

function read(request, unitcode) {
    var i = 0;
    var listEl = "";
    var allBtn = "#allBtn" + unitcode;
    var lessBtn = "#lessBtn" + unitcode;
    var srch = "#srch" + unitcode;


    var xmlDoc = request.responseXML;
    var unitEl = xmlDoc.getElementsByTagName(unitcode);
    var files = unitEl[0].getElementsByTagName("file");
    var len = files.length;
    var length;
    if (len < 5) {
	length = len;
	$(allBtn).css("display", "none");
	$(lessBtn).css("display", "none");
	$(srch).css("display", "none");
    } else {
	length = 5;
	$(allBtn).css("display", "block");
	$(lessBtn).css("display", "none");
	$(srch).css("display", "block");
    }
    for (i = 0; i < length; i++) {
	var title = files[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var author = files[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
	var year = files[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
	var link = files[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;

	var type = files[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;

	if (listEl === "") {
	    listEl = "<ul>" + listEl + "<li>" + title + "<br/><b class='w3-leftbar'><i>Type: </i></b>" +
		    type + " <b class='w3-leftbar'><i>Author: </i></b>" + author + " <b class='w3-leftbar'><i>Year: </i></b>"
		    + year + "<br/><a class='w3-round-jumbo w3-card-24 w3-btn w3-white w3-hover-green w3-hover-shadow' href='"
		    + link + "' target='_blank'>Download</a></li><hr/>";
	} else {
	    listEl = listEl + "<li>" + title + "<br/><b class='w3-leftbar'><i>Type: </i></b>" + type +
		    " <b class='w3-leftbar'><i>Author: </i></b>" + author + " <b class='w3-leftbar'><i>Year: </i></b>" +
		    year + "<br/><a class='w3-round-jumbo w3-card-24 w3-btn w3-white w3-hover-green w3-hover-shadow' href='" + link
		    + "' target='_blank'>Download</a></li><hr/>";
	}
    }
    var listing = "";
    if (listEl === "") {
	listing = "<b class='w3-text-red'>No Files Yet</b><hr/>";
    } else {
	listing = listEl + "</ul>";
    }
    $("#" + unitcode).html(listing);


} //End of Reading Little

//All Files View

function listAll(unit) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	    readAll(xmlhttp, unit);
	}
    };
    xmlhttp.open("GET", "/met/files/files.xml", true);
    xmlhttp.send();

}

function readAll(request, unit) {
    var i = 0;
    var listEl = "";
    var allBtn = "#allBtn" + unit;
    var lessBtn = "#lessBtn" + unit;
    var srch = "#srch" + unit;

    var xmlDoc = request.responseXML;
    var unitEl = xmlDoc.getElementsByTagName(unit);
    var files = unitEl[0].getElementsByTagName("file");
    var len = files.length;

    for (i = 0; i < len; i++) {
	var title = files[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var author = files[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
	var year = files[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
	var link = files[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
	var type = files[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
	if (listEl === "") {
	    listEl = "<ul>" + listEl + "<li>" + title + "<br/><b class='w3-leftbar'><i>Type: </i></b>" +
		    type + " <b class='w3-leftbar'><i>Author: </i></b>" + author +
		    " <b class='w3-leftbar'><i>Year: </i></b>" + year +
		    "<br/><a class='w3-round-jumbo w3-card-24 w3-btn w3-white w3-hover-green w3-hover-shadow' href='" +
		    link + "' target='_blank'>Download</a></li><hr/>";
	} else {
	    listEl = listEl + "<li>" + title + "<br/><b class='w3-leftbar'><i>Type: </i></b>" +
		    type + " <b class='w3-leftbar'><i>Author: </i></b>" + author +
		    " <b class='w3-leftbar'><i>Year: </i></b>" + year +
		    "<br/><a class='w3-round-jumbo w3-card-24 w3-btn w3-white w3-hover-green w3-hover-shadow' href='" +
		    link + "' target='_blank'>Download</a></li><hr/>";
	}
    }

    document.getElementById(unit).innerHTML = listEl + "</ul>";

    $(allBtn).css("display", "none");
    $(lessBtn).css("display", "block");

}

//End of All Files View


///Searching files for Units
function search(unit, value) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	    searching(xmlhttp, unit, value);
	}
    };
    xmlhttp.open("GET", "/met/files/files.xml", true);
    xmlhttp.send();
}

function searching(request, unit, value) {
    var i = 0;
    var listEl = "";
    var seLen = value.trim().length;
    var seaText = value.toString().toLowerCase();
    if (seLen > 0) {

    } else {
	document.getElementById(unit + "se").innerHTML = "";
	return;
    }
    var xmlDoc = request.responseXML;
    var unitEl = xmlDoc.getElementsByTagName(unit);
    var files = unitEl[0].getElementsByTagName("file");
    var len = files.length;
    var length = 0;
    if (len < 21) {
	length = len;
    } else {
	length = 21;
    }
    for (i = 0; i < length; i++) {
	var title = files[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var titleLow = title.toString().toLowerCase();
	var author = files[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
	var authLow = author.toString().toLowerCase();
	var link = files[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;

	var type = files[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
	var typeLow = type.toString().toLowerCase();

	if (titleLow.includes(seaText) || authLow.includes(seaText) || typeLow.includes(seaText)) {
	    if (listEl === "") {
		listEl = "<ul>" + listEl + "<li><a class='' href='" + link + "' target='_blank'>" + title + "</a></li>";
	    } else {
		listEl = listEl + "<li><a class='' href='" + link + "' target='_blank'>" + title + "</a></li>";

	    }
	} else {

	}
    }
    if (listEl === "") {
	document.getElementById(unit + "se").innerHTML = "<b class='w3-text-red'>No File Found</b><hr/>";
    } else {
	document.getElementById(unit + "se").innerHTML = listEl + "</ul><hr/>";
    }
}// End of Search Unit Files/


////Searching alll
function searchAll(value) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	    searchingAll(xmlhttp, value);
	}
    };
    xmlhttp.open("GET", "/met/files/files.xml", true);
    xmlhttp.send();
}

function searchingAll(request, value) {
    var i = 0;
    var listEl = "";
    var unit = document.getElementById("courseUnit").value;
    var seLen = value.trim().length;
    var seaText = value.toString().toLowerCase();
    if (seLen > 0) {

    } else {
	document.getElementById("allFiles").innerHTML = "";
	return;
    }
    var xmlDoc = request.responseXML;
    var unitEl = xmlDoc.getElementsByTagName(unit);
    var files = unitEl[0].getElementsByTagName("file");
    var len = files.length;
    var length = 0;
    if (len < 21) {
	length = len;
    } else {
	length = 21;
    }
    for (i = 0; i < length; i++) {
	var title = files[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var titleLow = title.toString().toLowerCase();
	var author = files[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
	var authLow = author.toString().toLowerCase();
	var year = files[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
	var link = files[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
	var type = files[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
	var typeLow = type.toString().toLowerCase();

	if (titleLow.includes(seaText) || authLow.includes(seaText) || typeLow.includes(seaText)) {
	    if (listEl === "") {
		listEl = "<ul>" + listEl + "<li><a class='' href='" + link + "' target='_blank'>" + title + "</a></li>";
	    } else {
		listEl = listEl + "<li><a class='' href='" + link + "' target='_blank'>" + title + "</a></li>";

	    }
	} else {

	}
    }
    if (listEl === "") {
	document.getElementById("allFiles").innerHTML = "<b class='w3-text-red'>No File Found in " + unit + " </b><hr/>";
    } else {
	document.getElementById("allFiles").innerHTML = listEl + "</ul>";
    }
}
////end of searching all
