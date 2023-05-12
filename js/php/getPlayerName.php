<?php
require_once("dbclass/dbfunction.php");

$result = getPlayerName($_REQUEST['data1']);
echo json_encode($result);

$database = null;
?>