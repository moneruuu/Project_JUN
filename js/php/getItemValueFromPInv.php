<?php
require_once("dbclass/dbfunction.php");


$result = getItemValueFromPInv($_REQUEST['data1'],$_REQUEST['data2']);
print($result);


$database = null;

?>