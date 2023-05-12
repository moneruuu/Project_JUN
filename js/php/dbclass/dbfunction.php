<?php
require_once("dbcontroller.php");
$database = new DataBaseController();

// ------------------------------------------------------------

function addPlayerFav($p_id,$value=1){
	//t_player_data から 好感度を追加
		if ($p_id == 0) {
			return;
		}
		global $database;

	    $sql = '
	        insert into t_player_data(f_p_id, f_p_data_ai_favorite) 
	        values ('.$p_id.','.$value.')
	        
	        ON DUPLICATE KEY 
	        update f_p_data_ai_favorite = f_p_data_ai_favorite + '.$value.'
	    ';
		$database->execute_sql($sql);
}

// ------------------------------------------------------------

function getPlayerFav($p_id){
	//t_player_data から 好感度取得
	global $database;

	$result = $database->execute_simple_select("t_player_data", "f_p_id", $p_id, "f_p_data_ai_favorite");
  	$result = $result->fetch();
  	return $result["f_p_data_ai_favorite"];
}

// ------------------------------------------------------------

function getPlayerName($p_id){
	//t_player_data から 好感度取得
	global $database;

	$result = $database->execute_simple_select("t_player_info", "f_p_id", $p_id, "f_p_name");
  	$result = $result->fetch();
  	return $result["f_p_name"];
}

// ------------------------------------------------------------

function getFavCategoryByValue($value){
	//値をカテゴリーに変換
	switch ($value) {
		case $value < 0 :
			return -1;
			break;

		case $value <= __LOW__ :
		    return 0;
		    break;

		case $value <= __MIDDLE__ :
		    return 1;
		    break;

		case $value <= __HIGH__ :
		    return 2;
		    break;

		case $value <= __MAX__ :
		case __MAX__ <= $value :
		    return 3;
		    break;

		default:
		    print("Errorだよ");
		    break;
	}
}

// ------------------------------------------------------------

function getDrinkData($i_id){
	global $database;

	$result = $database->execute_simple_select("t_item_info", "f_i_id", $i_id);
	return $result->fetch();
}

// ------------------------------------------------------------

function getItemValueFromMInv($i_id,$m_id=0){
    global $database;
    $sql = "
      select * from t_machine_inventory 
      where f_i_id = ".$i_id." and f_m_id = ".$m_id." and f_m_inv_amount > 0
    ";
    $result = $database->execute_sql($sql);
    $result = $result->fetch();
    if ($result) {
      return $result["f_m_inv_amount"];
    }else{
      return 0;
    }
}

// ------------------------------------------------------------

function checkMachineInventory($i_id, $m_id=0){
  $result = getItemValueFromMInv($i_id, $m_id);
    
  if($result){
    return true;
  }else{
    return false;
  }
}

// ------------------------------------------------------------

function decrementDrink($i_id ,$m_id = 0){
	global $database;

	if (checkMachineInventory($i_id, $m_id)) {
		$sql = "
			update t_machine_inventory
			set f_m_inv_amount =
			CASE WHEN f_m_inv_amount <= 0 
			THEN 0
			ELSE f_m_inv_amount - 1 END
			where f_i_id = ".$i_id." and f_m_id = ".$m_id."
		";

		$database->execute_sql($sql);
	}else{
		echo "在庫がありません";
		return;
	}
}

// ------------------------------------------------------------

function getSerifById($s_id){
	//IDから特定のセリフを取得
	global $database;

	return $database->execute_simple_select("t_ai_serif", "f_ai_serif_id ", $s_id);
}

// ------------------------------------------------------------

function getSerifByCategory($p_id, $tag){
	//好感度のカテゴリからセリフを自動取得
	global $database;

	$favvalue = getPlayerFav($p_id);
	$favcategory = getFavCategoryByValue($favvalue);

	$sql = " 
		select * from t_ai_serif 
		where (f_ai_serif_favmincate = -1 or ( f_ai_serif_favmincate <= ".$favcategory." and ".$favcategory." <= f_ai_serif_favmaxcate)) and f_ai_serif_tag = \"".$tag."\"
	";

	$result = $database->execute_sql($sql);
	return $result->fetchAll();
}

// ------------------------------------------------------------

function getSerifByValue($p_id, $tag){
	//好感度の値からセリフを自動取得
	global $database;

	$favvalue = getPlayerFav($p_id);

	$sql = " 
		select * from t_ai_serif 
		where (f_ai_serif_favminval = -1 or ( f_ai_serif_favminval <= ".$favvalue." and ".$favvalue." <= f_ai_serif_favmaxval)) and f_ai_serif_tag = \"".$tag."\"
	";

	$result = $database->execute_sql($sql);
	return $result->fetchAll();
}

// ------------------------------------------------------------

function getItemValueFromPInv($p_id, $i_id){
    global $database;
    $sql = '
        select * from t_player_inventory
        where f_p_id = '.$p_id.' and f_i_id = '.$i_id.' and 0 < f_p_inv_amount
    ';
    $result = $database->execute_sql($sql);
    $result = $result->fetch();
    if ($result) {
      return $result["f_p_inv_amount"];
    }else{
      return 0;
    }
}

// ------------------------------------------------------------

function checkPlayerInventory($p_id, $i_id){
  $result = getItemValueFromPInv($p_id, $i_id);
    
  if($result){
    return true;
  }else{
    return false;
  }
}

// ------------------------------------------------------------

function addItemToPInventory($p_id, $i_id, $value="1"){
    global $database;
    $sql = '
        insert into t_player_inventory (f_p_id, f_i_id, f_p_inv_amount) 
        values ('.$p_id.','.$i_id.','.$value.')
        
        ON DUPLICATE KEY 
        update f_p_inv_amount = f_p_inv_amount + '.$value.'
    ';
    $database->execute_sql($sql);
}

// ------------------------------------------------------------

function removeItemFromPInventory($p_id, $i_id, $value="1"){
    global $database;
    $sql = '
        update t_player_inventory
        set f_p_inv_amount =

        CASE WHEN f_p_inv_amount <= 0 
        THEN 0
        
        ELSE f_p_inv_amount - '.$value.'
        END
        
        where f_i_id = '.$i_id.' and f_p_id = '.$p_id.'
    ';
    $database->execute_sql($sql);
}

// ------------------------------------------------------------

function getPlayerInventory($p_id){
    global $database;
    $sql = '
        select * from t_player_inventory
        where f_p_id = '.$p_id.'  and 0 < f_p_inv_amount
    ';
    $result = $database->execute_sql($sql);
    return $result->fetchAll();
}

// ------------------------------------------------------------

function getPlayerIdByRandomKey($randomkey){
    global $database;

    $result = $database->execute_simple_select("t_link_id", "f_randomkey", $randomkey);
    $result = $result->fetch();
    if ($result) {
      return $result["f_p_id"];
    }else{
      return 0;
    }
}

// ------------------------------------------------------------

function deleteRandomKey($randomkey){
    global $database;

    $sql = '
    	delete from t_link_id WHERE f_randomkey = "'.$randomkey.'"
    ';
    $result = $database->execute_sql($sql);
}


?>