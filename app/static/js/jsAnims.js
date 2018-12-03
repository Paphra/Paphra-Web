/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function time() {
    var date = new Date();
    var timeElem = document.getElementById("time");
    var dateElem = document.getElementById("date");

    var weekDay = date.getDay();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var realDay;

    switch (day) {
	case 1:
	    realDay = day + "st";
	    break;
	case 2:
	    realDay = day + "nd";
	    break;
	case 3:
	    realDay = day + "rd";
	    break;
	case 21:
	    realDay = day + "st";
	    break;
	case 22:
	    realDay = day + "nd";
	    break;
	case 23:
	    realDay = day + "rd";
	    break;
	case 31:
	    realDay = day + "st";
	    break;
	default:
	    realDay = day + "th";
    }

    var realMonth;
    switch (month + 1) {
	case 1:
	    realMonth = "January";
	    break;
	case 2:
	    realMonth = "February";
	    break;
	case 3:
	    realMonth = "March";
	    break;
	case 4:
	    realMonth = "April";
	    break;
	case 5:
	    realMonth = "May";
	    break;
	case 6:
	    realMonth = "June";
	    break;
	case 7:
	    realMonth = "July";
	    break;
	case 8:
	    realMonth = "August";
	    break;
	case 9:
	    realMonth = "September";
	    break;
	case 10:
	    realMonth = "October";
	    break;
	case 11:
	    realMonth = "November";
	    break;
	case 12:
	    realMonth = "December";
	    break;
    }

    var realWeekDay = "";
    switch (weekDay) {
	case 1:
	    realWeekDay = "Monday";
	    break;
	case 2:
	    realWeekDay = "Tuesday";
	    break;
	case 3:
	    realWeekDay = "Wednesday";
	    break;
	case 4:
	    realWeekDay = "Thursday";
	    break;
	case 5:
	    realWeekDay = "Friday";
	    break;
	case 6:
	    realWeekDay = "Saturday";
	    break;
	case 7:
	    realWeekDay = "Sunday";
	    break;
	default:
	    realWeekDay = "Sunday";
    }


    dateElem.innerHTML = "Today: " + realWeekDay + " " + realDay + " - " + realMonth + ", " + year;
    dateElem.style.textAlign = "center";
    timeElem.innerHTML = date.toLocaleTimeString();
    timeElem.style.textAlign = "center";



}

