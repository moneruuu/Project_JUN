<?php
require_once("dbclass/dbfunction.php");


decrementDrink($_REQUEST['data1']);
addPlayerFav($_REQUEST['data2'],$_REQUEST['data3']);

print("true");


$database = null;
?>