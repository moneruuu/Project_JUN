<?php
require_once("./config/config.php");

class DataBaseController
{

  private const DB_NAME = __DB_NAME__;
  private const DB_HOST = __DB_HOST__;
  private const DB_CHARSET = __DB_CHARSET__;

  private const DSN = 'mysql:dbname='.self::DB_NAME.'; host='.self::DB_HOST.'; charset='.self::DB_CHARSET;
  private const DB_ID = 'root';
  private const DB_PASS = '';

  private $connection;

  function __construct() {
    try {
      $this->connection = new PDO(self::DSN,self::DB_ID,self::DB_PASS);
    } 
    catch (PDOException $e) {
      echo "データベース接続中に例外が発生しました<br>";
      echo $e;
    }
    return;
  }

  // ------------------------------------------------------------

  function execute_sql($sql) {
    try {
      $sql = $this->connection->prepare($sql);
      $sql->execute();
      $result = $sql;
    } 
    catch (error $e) {
      echo "<br><br>SQL実行中にエラーが発生しました<br>";
      echo $e;
    } 
    catch (Exception $e) {
      echo "<br><br>SQL実行中に例外が発生しました SQLは間違っていませんか<br>";
      echo $e;
    }
    return $result;
  }
  
  // ------------------------------------------------------------

  function execute_simple_select($tablename, $primarykey, $id, $columnname="*"){
    //テーブルの名前、主キーの名前、主キーの値、カラムの名前
    $sql = "
      select ".$columnname." from ".$tablename." where ".$primarykey." = ".$id."
    ";
    return $this->execute_sql($sql);
  }
  
  // ------------------------------------------------------------

  function execute_simple_update($tablename, $columnname, $value, $primarykey, $id){
    //テーブルの名前、カラムの名前、増やす値の量、主キーの名前、主キーの値
    $sql = "
      update ".$tablename."  set ".$columnname." = ".$columnname." + ".$value." where ".$primarykey." = ".$id."
    ";
    return $this->execute_sql($sql);
  }
}
?>