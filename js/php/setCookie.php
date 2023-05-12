<?php
require_once("dbclass/dbfunction.php");

setcookie("playerid",$_REQUEST['data1'],time()+60*30);

$database = null;
?>