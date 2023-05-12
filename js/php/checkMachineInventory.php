<?php
require_once("dbclass/dbfunction.php");


if(checkMachineInventory($_REQUEST['data1'])){
	 print("true");
}else{
	print("false");
}

$database = null;

?>