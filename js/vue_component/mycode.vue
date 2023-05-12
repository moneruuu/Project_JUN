<template>
<div>

<h1 id="mycode_header">Myコードのご入力</h1>

<p id="mycode_text">
  Myコードで潤にあなたを認識させてください<br>
  <br>
  アカウントご登録サイトはQRコードから↓<br>
</p>

<div class="iptxt">
  <form action="" method="" id="mycode_form">
    <label class="ef">
    <input id="account_input_text" type="number" maxlength="20" placeholder="No." v-model="randomkey">
    <input type="submit" value="OK" id="account_button_submit" v-on:click="setPlayerId">
    </label>
  </form>
</div>

<img  id="mycode_qrcode" src="./images/QR_642112.png" alt="QRコード">

</div>
</template>



<script>

  module.exports = {
    data: function(){
      return {
        randomkey: ""
      }
    },
    methods: {
      setPlayerId() {
        randomkey = this.randomkey;
        var playerid = execPHP("getPlayerIdByRandomKey.php",randomkey);

        execPHPAsync("setCookie.php",playerid);
        vue.closeModal();
        window.location.reload();
      }
    }
  }
</script>



<style>

h1#mycode_header{
  margin-top: 60px;
  text-align: center;
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

p#mycode_text{
  margin-top: 60px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

#account_input_text {
font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 60%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b3837;
	border-radius: 4px;
}

.iptxt input[type='submit'] {
  padding: 10px;
  background-color: #7bead2;
  border: 1px solid #1b3837;
  border-radius: 5px;
}

.ef input[type='submit']:focus {
	border: 1px solid #7bead2;
	outline: none;
	box-shadow: 0 0 8px 1px rgba(87, 193, 177, 0.5);
}

#mycode_form{
  margin-top: 40px;
  text-align: center;
}

#account_input_text:focus {
	border: 1px solid #7bead2;
	outline: none;
	box-shadow: 0 0 8px 1px rgba(87, 193, 177, 0.5);
}

img#mycode_qrcode{
  margin-top: 70px;
  margin-left: 114px;
}



</style>