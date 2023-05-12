<?php
require_once("dbclass/dbfunction.php");

$result = getPlayerIdByRandomKey($_REQUEST['data1']);
print($result);

deleteRandomKey($_REQUEST['data1']);

$database = null;

?>