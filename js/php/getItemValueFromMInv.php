<?php
require_once("dbclass/dbfunction.php");


$result = getItemValueFromMInv($_REQUEST['data1']);
print($result);


$database = null;

?>