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

function currentDay() {}

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

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sp1 = document.getElementById("sp001");
var sp2 = document.getElementById("sp002");
var sp3 = document.getElementById("sp003");
var sp4 = document.getElementById("sp004");
var sp5 = document.getElementById("sp005");
var sp6 = document.getElementById("sp006");
var logoShowCount = 0;
var c = 0;

function showEvent(event) {
	var od001 = document.getElementById("sp001");
	var od002 = document.getElementById("sp002");
	var od003 = document.getElementById("sp003");
	var od004 = document.getElementById("sp004");
	var od005 = document.getElementById("sp005");
	var od006 = document.getElementById("sp006");

	var evt001 = document.getElementById("evt001");
	var evt002 = document.getElementById("evt002");
	var evt003 = document.getElementById("evt003");
	var evt004 = document.getElementById("evt004");
	var evt005 = document.getElementById("evt005");
	var evt006 = document.getElementById("evt006");



	var specialDay = document.getElementById(event);
	switch (specialDay) {
		case od001:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "block";
			od002.style.display = "none";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "none";

			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "green";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od002:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "block";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "green";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od003:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "none";
			od003.style.display = "block";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "green";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od004:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "none";
			od003.style.display = "none";
			od004.style.display = "block";
			od005.style.display = "none";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "green";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od005:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "none";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "block";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "green";
			evt006.style.backgroundColor = "#fff";
			break;

		case od006:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "none";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "block";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "green";

		default:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "none";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";


	}

}


function colorDay(spDay) {
	var od001 = document.getElementById("sp001");
	var od002 = document.getElementById("sp002");
	var od003 = document.getElementById("sp003");
	var od004 = document.getElementById("sp004");
	var od005 = document.getElementById("sp005");
	var od006 = document.getElementById("sp006");

	var evt001 = document.getElementById("evt001");
	var evt002 = document.getElementById("evt002");
	var evt003 = document.getElementById("evt003");
	var evt004 = document.getElementById("evt004");
	var evt005 = document.getElementById("evt005");
	var evt006 = document.getElementById("evt006");

	var spDays = document.getElementById(spDay);

	switch (spDays) {
		case od001:
			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "green";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od002:
			// code for viewing of the special event on a specified day seleted from the events panel
			od001.style.display = "none";
			od002.style.display = "block";
			od003.style.display = "none";
			od004.style.display = "none";
			od005.style.display = "none";
			od006.style.display = "none";


			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "green";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;
		case od003:
			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "green";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;

		case od004:
			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "green";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";
			break;

		case od005:
			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "green";
			evt006.style.backgroundColor = "#fff";
			break;

		case od006:
			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "green";

		default:

			//code for the event hightlighting in the events pannel
			evt001.style.backgroundColor = "#fff";
			evt002.style.backgroundColor = "#fff";
			evt003.style.backgroundColor = "#fff";
			evt004.style.backgroundColor = "#fff";
			evt005.style.backgroundColor = "#fff";
			evt006.style.backgroundColor = "#fff";

	}
}

function closeEvent() {
	var sps1 = document.getElementById("sp001");
	var sps2 = document.getElementById("sp002");
	var sps3 = document.getElementById("sp003");
	var sps4 = document.getElementById("sp004");

	sps1.style.display = "none";
	sps2.style.display = "none";
	sps3.style.display = "none";
	sps4.style.display = "none";

}


function showMoreInfo() {
	var h1 = document.getElementById("hidden1");
	var h2 = document.getElementById("hidden2");
	var h3 = document.getElementById("hidden3");
	var h4 = document.getElementById("hidden4");

	var rMB1 = document.getElementById("readMoreBtn1");
	rMB1.style.display = "none";
	h1.style.display = "block";
	h2.style.display = "block";
	h3.style.display = "block";
	h4.style.display = "block";
}

function highLightCurrentTab() {
	var tab = document.getElementById("cPage").className + "Tab";
	var cTab = document.getElementById(tab);
	cTab.style.backgroundColor = "white";
}

function showMoreT() {
	var h4 = document.getElementById("hidden4");
	var rmb2 = document.getElementById("readMoreBtn2");

	rmb2.style.display = "none";
	h4.style.display = "block";
}

function chooseCode() {
	var countries = document.getElementById("country");
	var selCount = countries.selected;
	switch (selCount) {
		case "Uganda":
			document.getElementById("ugC").selected = "true";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "false";
			break;
		case "Kenya":
			document.getElementById("ugC").selected = "false";
			document.getElementById("keC").selected = "true";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "false";
			break;
		case "Tanzania":
			document.getElementById("ugC").selected = "false";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "true";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "false";
			break;
		case "Rwanda":
			document.getElementById("ugC").selected = "false";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "true";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "false";
			break;
		case "Burundi":
			document.getElementById("ugC").selected = "false";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "true";
			document.getElementById("ssC").selected = "false";
			break;
		case "South Sudan":
			document.getElementById("ugC").selected = "false";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "true";
			break;
		default:
			document.getElementById("ugC").selected = "true";
			document.getElementById("keC").selected = "false";
			document.getElementById("tzC").selected = "false";
			document.getElementById("rwC").selected = "false";
			document.getElementById("brC").selected = "false";
			document.getElementById("ssC").selected = "false";
	}
}

function showOcc() {
	var studentHidden = document.getElementById("studentHidden");
	var teacherHidden = document.getElementById("teacherHidden");
	var othersHidden = document.getElementById("othersHidden");
	var occ = document.getElementById("occupation");

	var selOption = occ.value;

	switch (selOption) {
		case "Student":
			studentHidden.style.display = "block";
			teacherHidden.style.display = "none";
			othersHidden.style.display = "none";
			break;
		case "Teacher":
			teacherHidden.style.display = "block";
			studentHidden.style.display = "none";
			othersHidden.style.display = "none";
			break;
		case "Others":
			othersHidden.style.display = "block";
			studentHidden.style.display = "none";
			teacherHidden.style.display = "none";
			break;

	}

}

function dayCh() {
	var mob = document.getElementById("monthOfBirth");
	var th0 = document.getElementById("th0");
	var th1 = document.getElementById("th1");

	var sel = mob.value;
	if (sel === "02") {
		th0.style.display = "none";
		th1.style.display = "none";
	} else if (sel === "04" || sel === "06" || sel === "09" || sel === "11") {
		th1.style.display = "none";
		th0.style.display = "block";
	} else {
		th0.style.display = "block";
		th1.style.display = "block";
	}
}

function showProfile() {
	var height = window.innerHeight;
	var width = window.innerWidth;
	var h = (75 / 100) * height;
	var w = (60 / 100) * width;
	var bo = (10 / 100) * height;
	var to = (20 / 100) * height;
	var l = (20 / 100) * width;
	var pos = document.getElementById("positioningTable");
	var profileShow = document.getElementById("profileShow");
	if (logoShowCount === 0) {
		profileShow.style.display = "block";
		pos.style.backgroundColor = "gray";
		logoShowCount = 1;
	} else {
		profileShow.style.display = "none";
		pos.style.backgroundColor = "lightgray";
		logoShowCount = 0;
	}
	profileShow.style.top = "" + to + "px";
	profileShow.style.bottom = "" + bo + "px";
	profileShow.style.heght = "" + h + "px";
	profileShow.style.left = "" + l + "px";
	profileShow.style.right = "" + l + "px";
	profileShow.style.overFlowY = "scroll";
	profileShow.style.width = "" + w + "px";
}

function couCh() {
	var othCou = document.getElementById("othCou");
	var cou = document.getElementById("country");
	var sel = cou.value;
	if (sel === "Others") {
		othCou.style.display = "block";
	} else {
		othCou.style.display = "none";
	}
}

function checkLength() {
	var warn1 = document.getElementById("warn1");
	var uNameF = document.getElementById("uName");
	var sbtB = document.getElementById("submitBtn");
	var uName = uNameF.value;
	var len = uName.length;
	if (len < 5) {
		warn1.innerHTML = "Too Short";
		sbtB.style.pointerEvents = "none";
		sbtB.style.mozPointerEvents = "none";
		sbtB.style.msPointerEvents = "none";
		sbtB.style.webkitPointerEvents = "none";
	} else {
		sbtB.style.pointerEvents = "all";
		sbtB.style.mozPointerEvents = "all";
		sbtB.style.msPointerEvents = "all";
		sbtB.style.webkitPointerEvents = "all";

		warn1.innerHTML = "";
	}
}

function checkStrength() {
	var uPass = document.getElementById("uPass");
	var warn2 = document.getElementById("warn2");
	var sbtB = document.getElementById("submitBtn");

	var passVal = uPass.value;
	var len = passVal.length;

	if (len > 5) {

		sbtB.style.pointerEvents = "all";
		sbtB.style.mozPointerEvents = "all";
		sbtB.style.msPointerEvents = "all";
		sbtB.style.webkitPointerEvents = "all";
		if (len < 8) {
			warn2.innerHTML = "Medium";
		} else {
			warn2.innerHTML = "";
		}
	} else {
		warn2.innerHTML = "Week Password";
		sbtB.style.pointerEvents = "none";
		sbtB.style.mozPointerEvents = "none";
		sbtB.style.msPointerEvents = "none";
		sbtB.style.webkitPointerEvents = "none";

	}

}

function checkMatch() {
	var uPass = document.getElementById("uPass");
	var uPassConf = document.getElementById("uPassConf");
	var sbtB = document.getElementById("submitBtn");
	var warn3 = document.getElementById("warn3");
	var passVal = uPass.value;
	var passConfVal = uPassConf.value;

	if (passConfVal === passVal) {

		sbtB.style.pointerEvents = "all";
		sbtB.style.mozPointerEvents = "all";
		sbtB.style.msPointerEvents = "all";
		sbtB.style.webkitPointerEvents = "all";

		warn3.innerHTML = "";
	} else {
		warn3.innerHTML = "Password Mis-Match";
		sbtB.style.pointerEvents = "none";
		sbtB.style.mozPointerEvents = "none";
		sbtB.style.msPointerEvents = "none";
		sbtB.style.webkitPointerEvents = "none";

	}
}

function showPass() {
	var uPass = document.getElementById("uPass");
	var uPassConf = document.getElementById("uPassConf");
	if (c === 0) {
		uPass.type = "text";
		uPassConf.type = "text";
		c = 1;
	} else {

		uPass.type = "password";
		uPassConf.type = "password";
		c = 0;
	}

}