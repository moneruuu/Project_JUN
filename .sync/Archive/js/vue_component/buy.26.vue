<template>
<div>

<p id="buy_text">----- 投入待機中 -----</p>

<h1 id="buy_header">お支払い金額は{{ price }}円です</h1>

<p id="error_txt" class="blinking">{{ detect }}</p>

<!-- <div class="buy_drink_img"></div> -->
<img id="buy_drink_icon" :src="gsrc">

<p>
  <div class="iptxt">
  <form action="" method="">
    <label class="ef">
      <input id="buy_input_text" type="number" maxlength="20" v-model="detectprice">
      
      <button id="buy_button_submit1" v-on:click="detectPrice">投入</button>
    </label>
  </form>
  </div>
</p>

</div>
</template>



<script>
  module.exports = {
    data: function(){
      return {
        price: Number(gdrinkdata["price"]),
        gsrc: "./images/"+gdrinkdata["imgsrc"],
        detectprice: "0",
        detect: ""
      }
    },
    methods: {
      detectPrice() {
        if(this.detectprice < this.price){
          this.detect = "error :: 投入金額不足";

          $("#field_jun").css('background-image', 'url(./images/cry.gif)');

        }else{
          charge = this.detectprice - this.price;
          if(!reccomending){
            execPHPAsync("processBoughtDrink.php", gdrinkdata["drinkid"], playerid,1);
            increasedfav = "♥♡♡";
          }else{
            execPHPAsync("processBoughtDrink.php", gdrinkdata["drinkid"], playerid,2);
            increasedfav = "♥♥♡";
          }

          this.$router.push({path: "/thankyou"})
        }
      }
    }
  }
</script>



<style>

/* 画像載せたいけどやり方不明 */
/* .buy_drink_img{
  height: 355px;
  background-image: url(./images/green.png);
} */


#buy_drink_icon{
  margin-left: 180px;
  margin-bottom: 50px;
}

img#drink_icon{
  margin: 20px 0 0 165px;
}

h1#buy_header{
  margin-top: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

p#buy_text{
  margin-top: 60px;
  font-size: 30px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(64, 209, 166, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

#buy_input_text {
font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 60%;
  padding: 0.3em;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #aaaaaa;
  border: 1px solid #1b3837;
  border-radius: 4px;
  margin-left: 75px;
}

#buy_button_submit1 {
  padding: 10px;
  background-color: #7bead2;
  border: 1px solid #1b3837;
  border-radius: 5px;
}

#buy_button_submit1{
  text-align: center;
}

#buy_button_submit1:focus {
  border: 1px solid #7bead2;
  outline: none;
  box-shadow: 0 0 8px 1px rgba(87, 193, 177, 0.5);
}

#buy_input_text:focus {
  border: 1px solid #7bead2;
  outline: none;
  box-shadow: 0 0 8px 1px rgba(87, 193, 177, 0.5);
}

#error_txt{
  margin-top: 60px;
  font-size: 30px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(226, 33, 33, 0.868);
  font-family: 'DotGothic16', sans-serif;
}

.blinking{
  -webkit-animation:blink 0.5s ease-in-out infinite alternate;
    -moz-animation:blink 0.5s ease-in-out infinite alternate;
    animation:blink 0.5s ease-in-out infinite alternate;
}
@-webkit-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}
@-moz-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}
@keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}

</style>