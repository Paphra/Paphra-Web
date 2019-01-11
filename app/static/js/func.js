// equals in table

function e_name(name) {
    document.write("Hello, name" + name);
}

function e_tr_td(first, equal_to) {
    document.write("<tr><td class='w3-center v_c'>" + first +
        "</td><td class='w3-center w3-padding-left w3-padding-right v_c'>=</td>" +
        "<td class='w3-center v_c'>" + equal_to + "</td></tr>");
}

function a_tr_td(first, equal_to) {
    document.write("<tr><td class='w3-center'>" + first + "</td><td class='w3-center w3-padding-left w3-padding-right'>=</td>" +
        "<td class='w3-center w3-bottombar'><b>" + equal_to + "</b></td></tr>");
}

function e_t(first, equal_to) {
    document.write("<table>");
    e_tr_td(first, equal_to);
    document.write("</table>");
}

function c3_tr_td(data) {
    document.write("<tr><td class='w3-left' colspan='3' valign='center'>" + data + "</td></tr>");
}


// fractions
function f(top, over) {
    document.write("<table><tr><td class='w3-center w3-bottombar' valign='center'>" + top + "</td></tr>" +
        "<tr><td class='w3-center' valign='center'>" + over + "</td></tr></table>");
}

function f_td(top, over) {
    document.write("<td class='w3-center' valign='center'>");
    f(top, over);
    document.write("</td>");
}

function f_e_tr_td_p(first, top, over, last) {
    document.write("<tr class='w3-center'><td class='w3-center' valign='center'>" + first +
        "</td><td class='w3-center w3-padding-left w3-padding-right' valign='center'>=</td>");
    f_td(top, over);
    lc_td(last);
    document.write("</tr>");
}

function f_e_tr_td(first, top, over) {
    document.write("<tr><td class='w3-center w3-cell-middle' valign='center'>" + first +
        "</td><td class='w3-center w3-padding-left w3-padding-right w3-cell-middle' valign='center'>=</td>");
    f_td(top, over);
    document.write("</tr>");
}

function f_e_t(first, top, over) {
    document.write("<table><tr><td class='w3-center' valign='center'>" + first +
        "</td><td class='w3-center w3-padding-left w3-padding-right' valign='center'>=</td>");
    f_td(top, over);
    document.write("</tr></table>");
}

function t2_f_e_t(firstTop, firstOver, secondTop, secondOver) {
    document.write("<table><tr>");
    f_td(firstTop, firstOver);
    document.write("<td class='w3-center w3-padding-left w3-padding-right' valign='center'>=</td>");
    f_td(secondTop, secondOver);
    document.write("</tr></table>");
}

function t2_f_e_tr_td(firstTop, firstOver, secondTop, secondOver) {
    document.write("<tr>");
    f_td(firstTop, firstOver);
    document.write("<td class='w3-center w3-padding-left w3-padding-right' valign='center'>=</td>");
    f_td(secondTop, secondOver);
    document.write("</tr>");
}


// Text display in table
function mc_td(text) {
    document.write("<td class='w3-cell-middle w3-center' valign='center'>" + text + "</td>");
}

function lc_td(text) {
    document.write("<td class='w3-cell-middle w3-left'>" + text + "</td>");
}

function l3_tr_td(text) {
    document.write("<tr><td class='w3-cell-middle w3-left' colspan='3'><b>" + text + "</b></td></tr>");
}

function l2_tr_td(text) {
    document.write("<tr><td class='w3-cell-middle w3-left' colspan='2'><b>" + text + "</b></td></tr>");
}

function c3_tr_td(text) {
    document.write("<tr><td class='w3-cell-middle w3-center' colspan='3'><b>" + text + "</b></td></tr>");
}

function c2_tr_td(text) {
    document.write("<tr><td class='w3-cell-middle w3-center' colspan='2'><b>" + text + "</b></td></tr>");
}

// others
function c3(data) {
    document.write(data + "<sup>3</sup>");
}

function pc3(data) {
    document.write(data + "<sup>-3</sup>");
}

function sq(data) {
    document.write(data + "<sup>2</sup>");
}

function psq(data) {
    document.write(data + "<sup>-2</sup>");
}

function pw(data, pow) {
    document.write(data + "<sup>" + pow + "</sup>");
}

//formulae
function density(type) {
    if (type == "tb") {
        f_e_t("Density", "Mass", "Volume");
    } else {
        f_e_tr_td("Density", "Mass", "Volume");
    }
}

function force() {
    e_t("Force", "mg");
}