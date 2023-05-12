//////////////////////////////////////////////////

condition = 0;
selecting = 0;
presenting = 0;
reccomending = 0;

//おつりのグローバル変数
charge = 0;
//drinkdataのグローバル変数
gdrinkdata = "";
//player id の保持
playerid = 0;
//favの量変数
increasedfav = "";


if (execPHP("getCookie.php")) {
    playerid = execPHP("getCookie.php");
}

$('#button_breakcookie').on('click', function(){
    execPHPAsync("breakCookie.php");
    window.location.reload();
})

$("#consoletext").html("playerid = "+playerid)

//////////////////////////////////////////////////
// 各スロットのドリンクを決める
const slotmap = new Map();

//スロットにドリンクIDを設定する(左上から左に0,1,2,3)
slotmap.set(0, 1)
slotmap.set(1, 2)
slotmap.set(2, 3)
slotmap.set(3, 4)

slotmap.set(4, 5)
slotmap.set(5, 6)
slotmap.set(6, 7)
slotmap.set(7, 8)

slotmap.set(8, 9)
slotmap.set(9, 10)
slotmap.set(10, 11)
slotmap.set(11, 12)

//////////////////////////////////////////////////
// 各々のドリンク情報をDBから取得
sorted = -1;
reccomenddrink = -1;

for (var i = 0; i < slotmap.size; i++) {

  // PHPを介して要求
  var result = execPHP("getDrinkData.php", slotmap.get(i));

  var check = execPHP("checkMachineInventory.php", slotmap.get(i));
  var sort = execPHP("getItemValueFromMInv.php", slotmap.get(i));

  //在庫確認 なかった場合はsoldout
  if (!check) {
    var id_slot = "#drink_slot_"+i;
    var id_box = "#drink_box_"+i;
    $(id_slot).removeClass("bt").addClass('nasshing');
    $(id_box).addClass('soldout');
  }

  //おすすめ用に一番在庫の多いものを記録
  if (sorted < sort) {
    sorted = sort;
    reccomenddrink = i;
  }

  // 返り値の中身をslotmapにセット
  slotmap.set(i, {
    drinkid: result.f_i_id,
    name: result.f_i_name,
    vol: result.f_i_vol,
    price: result.f_i_price,
    description: result.f_i_description,
    imgsrc: result.f_i_imgsrc
  });
}

//////////////////////////////////////////////////
//background-imageのset
for (var i = 0; i < slotmap.size; i++) {

  var data = slotmap.get(i);
  var id = "#drink_slot_"+i;

  $(id).css('background-image', 'url(./images/'+data["imgsrc"]+')');
}

//////////////////////////////////////////////////
//時間、天気、気温

//天気APIのURL/////
const url = "https://weather.tsukumijima.net/api/forecast?city=230010";
weather = "";
weather_imgsrc = "";
temp = "";

fetch(url)
.then((response) => response.json())
.then(function(data){
  weather = data["forecasts"][0]["detail"]["weather"];
  weather_imgsrc = data["forecasts"][0]["image"]["url"];
  temp = data["forecasts"][0]["temperature"]["max"]["celsius"];

  console.log(data);
});


//変数反映まで遅延がいる。
let timerid_weatherimg = setInterval(function(){
    if (weather_imgsrc != "") {
        $("#weather_img").css('background-image', 'url('+weather_imgsrc+')');
        clearInterval(timerid_weatherimg);
    }
},10)
let timerid_temp = setInterval(function(){
    if (temp != "") {
        $('#temperature').html(temp+"&#8451")
        if (temp == null) {
            $('#temperature').html("15&#8451")
        }
        clearInterval(timerid_temp);
    }
},10)


//時計/////
setInterval(function(){
   var nowtime = new Date();
   var nowhour = formatTime(nowtime.getHours());
   var nowmin  = formatTime(nowtime.getMinutes());
   var nowsec  = formatTime(nowtime.getSeconds());

   var displaytime = nowhour +":"+ nowmin +":"+ nowsec ;

   $('#time').html(displaytime);
},1000);

//////////////////////////////////////////////////
//Jun say hello
// 連携してない場合は↓を表示
$('#jun_chat').html("おはようございます！<br>最近の天気は不安定ですね…")
// 連携してた場合は↓を表示
junchat("login");

