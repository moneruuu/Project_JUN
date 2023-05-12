<?php
require_once("dbclass/dbfunction.php");


$result = getSerifByCategory($_REQUEST["data1"],$_REQUEST['data2']);

$length = count($result);
$key = rand(0,$length-1);
$result = $result[$key];


echo json_encode($result);


$database = null;

?>