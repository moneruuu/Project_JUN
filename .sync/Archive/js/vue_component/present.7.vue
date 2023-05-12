<template>
    <div>
    
    <h1 id="present_header">潤にプレゼントする？</h1>
    
    <p id="present_text">
      潤はニンゲンではないけど<br>
      ニンゲンの生活にあこがれているよ<br>
      その第一歩として【味覚】を教えてあげよう！
    </p>

    <div class="fleximg">
      <img  class="heartEffect" src="./images/heart.png" alt="ハート">
      <img  id="jun_drink" src="./images/drink.png" alt="憧れの飲み物">
    </div>

    <div class="flexcontainer_button">
  <div id="drink_button_Y"><br>やり方</div>
  <!-- <div id="drink_button_N"><br>やめとく</div> -->
    </div>
    
    <!-- <img  id="account_qrcode" src="./images/QR_642112.png" alt="QRコード"> -->
    
    <!-- <p id="account_text">
      Myコードをお持ちの方は
      <router-link to="/mycode">
        <a href="#" id="account_a">こちらから</a>
      </router-link>
    </p> -->
    
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
    
    </script>
    
    
    
    <style>

    img#jun_drink{
      margin-top: 70px;
      margin-left: -285px;
    }

    .fleximg{
      display: flex;
      flex-direction: row;
    }

    .heartEffect {
      margin-top: 0px;
      margin-left: 100px;

    animation-name: fadeInAnime;
    animation-fill-mode:backwards;
    animation-duration:3s;
    animation-iteration-count:infinite;
    animation-timing-function:ease;
    animation-delay: 0.5s;
    animation-direction:normal;
    }

    @keyframes fadeInAnime{
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
    
    h1#present_header {
      margin-top: 40px;
      text-align: center;
      font-size: 36px;
      font-weight: normal;
      margin-bottom: 10px;
      color: #fff;
      text-shadow: 0px 0px 8px rgba(237, 106, 231, 0.868);
      font-family: 'DotGothic16', sans-serif;
    }
    
    p#present_text {
      margin-top: 60px;
      font-size: 20px;
      text-align: center;
      color: #fff;
      text-shadow: 0px 0px 5px rgba(237, 106, 231, 0.868);
      font-family: 'DotGothic16', sans-serif;
    }



.flexcontainer_button{
  display: flex;
  height: 110px;
  flex-direction: row;
}

#drink_button_Y{
  width: 70px;
  height: 60px;
  margin-top: 10px;
  margin-left: 30px;
  cursor: pointer;
}

#drink_button_N{
  width: 70px;
  height: 60px;
  margin-top: 10px;
  margin-left: 30px;
  cursor: pointer;
}

#drink_button_N {
  display: inline-block;
  padding: .65em 4em;
  background: linear-gradient(#7bead2, #63bba8);
  border: 1px solid #236557;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: .3s ease-in-out;
  font-family: 'DotGothic16', sans-serif;
}

#drink_button_Y{
  display: inline-block;
  padding: .65em 4em;
  background: linear-gradient(#cc99ff , #ae84d9);
  border: 1px solid #724d98;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: .3s ease-in-out;
  font-family: 'DotGothic16', sans-serif;
}



#drink_button_Y:hover,#drink_button_N:hover {
  animation: bounce 2s ease-in-out;
}

@keyframes bounce {
  5%  { transform: scale(1.1, .8); }
  10% { transform: scale(.8, 1.1) translateY(-5px); }
  15% { transform: scale(1, 1); }
}

</style>