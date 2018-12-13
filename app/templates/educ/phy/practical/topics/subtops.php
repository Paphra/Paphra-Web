
<?php

// put your code here
switch ($subtopic) {
    case "int":
	require 'int.php';
	break;
    case "mei":
	require 'mei/mei.php';
	break;
    case "erp":
	require 'erp/erp.php';
	break;
    case "ovm":
	require 'ovm/ovm.php';
	break;
    case "pwp":
	require 'pwp/pwp.php';
	break;
    case "sif":
	require 'sif/sif.php';
	break;
    case "erp":
	require 'ufa/ufa.php';
	break;
    case "usq":
	require 'usq/usq.php';
	break;
    case "qns":
	require 'qns/qns.php';
	break;
    default :
	require "int.php";
}
