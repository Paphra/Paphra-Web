/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var date = new Date();
var cMonth = date.getMonth() + 1;
var cDay = date.getDay();
var cDate = date.getDate();
var dateid;
var year = date.getFullYear();

function years() {
    var yearId = document.getElementById("year");
    yearId.innerHTML = year;
}
function months() {
    var month;
    switch (cMonth) {
	case 1:
	    dateid = "janD" + cDate + "";
	    month = document.getElementById("jan");
	    month.style.display = "block";
	    break;
	case 2:
	    dateid = "febD" + cDate + "";
	    month = document.getElementById("feb");
	    month.style.display = "block";
	    break;
	case 3:
	    dateid = "marD" + cDate + "";
	    month = document.getElementById("mar");
	    month.style.display = "block";
	    break;
	case 4:
	    dateid = "aprilD" + cDate + "";
	    month = document.getElementById("april");
	    month.style.display = "block";
	    break;
	case 5:

	    dateid = "mayD" + cDate + "";
	    month = document.getElementById("may");
	    month.style.display = "block";
	    break;
	case 6:
	    dateid = "juneD" + cDate + "";
	    month = document.getElementById("june");
	    month.style.display = "block";
	    break;
	case 7:
	    dateid = "julyD" + cDate + "";
	    month = document.getElementById("july");
	    month.style.display = "block";
	    break;
	case 8:
	    dateid = "augD" + cDate + "";
	    month = document.getElementById("aug");
	    month.style.display = "block";
	    break;
	case 9:
	    dateid = "septD" + cDate + "";
	    month = document.getElementById("sept");
	    month.style.display = "block";
	    break;
	case 10:
	    dateid = "octD" + cDate + "";
	    month = document.getElementById("oct");
	    month.style.display = "block";
	    break;
	case 11:
	    dateid = "novD" + cDate + "";
	    month = document.getElementById("nov");
	    month.style.display = "block";
	    break;
	case 12:
	    dateid = "decD" + cDate + "";
	    month = document.getElementById("dec");
	    month.style.display = "block";
	    break;
    }

    var datetd = document.getElementById(dateid);
    datetd.style.backgroundColor = "blue";
    datetd.title = "Today";
    datetd.style.cursor = "pointer";
}
function currentDay() {
}

function changeMonth(mon) {
    var jan, feb, mar, april, may, june, july, aug, sept, oct, nov, dec;
    jan = document.getElementById("jan");
    feb = document.getElementById("feb");
    mar = document.getElementById("mar");
    april = document.getElementById("april");
    may = document.getElementById("may");
    june = document.getElementById("june");
    july = document.getElementById("july");
    aug = document.getElementById("aug");
    sept = document.getElementById("sept");
    oct = document.getElementById("oct");
    nov = document.getElementById("nov");
    dec = document.getElementById("dec");
    switch (mon) {
	case "jan":
	    jan.style.display = "block";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "feb":
	    jan.style.display = "none";
	    feb.style.display = "block";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "mar":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "block";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "april":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "block";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "may":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "block";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "june":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "block";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "july":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "block";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "aug":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "block";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "sept":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "block";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "oct":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "block";
	    nov.style.display = "none";
	    dec.style.display = "none";
	    break;
	case "nov":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "block";
	    dec.style.display = "none";
	    break;
	case "dec":
	    jan.style.display = "none";
	    feb.style.display = "none";
	    mar.style.display = "none";
	    april.style.display = "none";
	    may.style.display = "none";
	    june.style.display = "none";
	    july.style.display = "none";
	    aug.style.display = "none";
	    sept.style.display = "none";
	    oct.style.display = "none";
	    nov.style.display = "none";
	    dec.style.display = "block";
	    break;
    }
}
