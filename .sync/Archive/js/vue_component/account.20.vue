<template>
<div>

<h1 id="account_header">アカウント連携</h1>

<p id="account_text">
  QRコードからアカウントをお持ちの方は<br>
  ログインしてください<br>
  お持ちでない方はぜひご登録ください<br>
  <br>
  アカウントご登録サイトはこちらから↓<br>
</p>

<img  id="account_qrcode" src="./images/QR_642112.png" alt="QRコード">

<p id="account_text">
  Myコードをお持ちの方は
  <router-link to="/mycode">
    <a href="#" id="account_a">こちらから</a>
  </router-link>
</p>

</div>
</template>



<script>

  module.exports = {
    data: function(){
      return {
        message: "testです。"
      }
    }
  }

  ChangeImage('field_jun' , '../images/scene4.gif');

</script>



<style>

h1#account_header {
  margin-top: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

p#account_text {
  margin-top: 60px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

a #account_a:link{
  color: #7bead2;
}
a #account_a:visited{
  color: #7bead2;
}

a #account_a:hover{
  text-shadow: 0px 0px 5px rgba(242, 245, 244, 0.868);
}


/* なぜか効いてない */
a#account_a{
  text-decoration: none;
}



img#account_qrcode{
  margin-top: 70px;
  margin-left: 114px;
}

</style>