
<?php

// put your code here
switch ($subtopic) {
    case "int":
	require 'int.php';
	break;
    case "refl":
	require 'refl.php';
	break;
    case "refrpl":
	require 'refrpl.php';

    default :
	require "int.php";
}
