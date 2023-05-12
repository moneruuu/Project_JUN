<?php
require_once("dbclass/dbfunction.php");


if(checkPlayerInventory($_REQUEST['data1'],$_REQUEST['data2'])){
	 print("true");
}else{
	print("false");
}

$database = null;

?>