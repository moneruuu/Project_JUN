<?php
require_once("dbclass/dbfunction.php");

$result = getPlayerInventory($_REQUEST['data1']);
echo json_encode($result);

$database = null;
?>