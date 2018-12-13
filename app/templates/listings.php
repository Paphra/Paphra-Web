<?php

function int() {
    echo "<div class=\"row\">" .
    "<div id=\"portfolio-wrapper\">" .
    "<div class=\"six columns align-center\">";
}

function last() {
    echo "<br/>" .
    "</div>" .
    "</div>" .
    "</div>" .
    "</div>" .
    "</div>";
}

function mid() {
    echo "</div>" .
    "<div class=\"six columns portfolio-item\">" .
    "<div class=\"item-wrap\">" .
    "<br/>" .
    "<div class=\"portfolio-item-meta\">";
}

function item_listing($name) {
    $host = "localhost";
    $username = "1053636";
    $db_name = "1053636db2";
    $password = "..paphra..";
    $connection = new mysqli($host, $username, $password, $db_name);
    if (!$connection->connect_error) {
	$query = "SELECT * FROM " . $name . "_items";
	$result = $connection->query($query);
	if ($result->num_rows > 0) {
	    while ($row = $result->fetch_assoc()) {
		echo int() . "<img alt=\"" . $row["item_name"] . "\" src=\"" . $row["image_address"] . "\"/>";
		echo mid() . "<h5><a>" . $row["item_name"] . "</a></h5><p class=\"w3-medium\">" . $row["item_description"] . "</p>";
		echo last();
	    }
	} else {
	    echo("<p>No Items found in the database!");
	}
    }
    $result->close();
    $connection->close();
}
