<?php
require_once("dbclass/dbfunction.php");

if (isset($_COOKIE['playerid'])) {
	print($_COOKIE['playerid']);
}else{
	print("false");
}

$database = null;
?>