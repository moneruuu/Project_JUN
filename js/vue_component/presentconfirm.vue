<template>
<div>

<p id="buy_text">----- 承認待機中 -----</p>

<h1 id="buy_header">{{ price }}円</h1>

<p id="error_txt" class="blinking">{{ error }}</p>

<!-- <div class="buy_drink_img"></div> -->
<img id="buy_drink_icon" :src="gsrc">

<p>
  <div class="flexbox">
    <button id="buy_button_submit" v-on:click="confirm">承認</button>
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
        error: ""
      }
    },
    methods: {
      confirm() {
        var check = execPHP("checkPlayerInventory.php", playerid, gdrinkdata["drinkid"]);
          
        if(check){
          charge = "{used present}"
          if(!reccomending){
            execPHPAsync("processBoughtDrinkByPresent.php", gdrinkdata["drinkid"], playerid,1);
            increasedfav = "♥♡♡";
          }else{
            execPHPAsync("processBoughtDrinkByPresent.php", gdrinkdata["drinkid"], playerid,2);
            increasedfav = "♥♥♡";
          }
          this.$router.push({path: "/thankyou"})
          junchat("buy");
        }else{
          this.error="プレゼントを1つも持っていません"
        }
      }
    }
  }
</script>



<style>


#buy_drink_icon{
  margin-left: 180px;
  margin-bottom: 50px;
}

img#drink_icon{
  margin: 200px 0 0 165px;
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

div.flexbox{
  
  display: flex;
  height: 200px;
  flex-direction: column;
}


#buy_button_submit {
  padding: 30px 80px;
  margin: 0 auto;
  background-color: #7bead2;
  border: 1px solid #1b3837;
  border-radius: 5px;

  text-align: center;
}

#buy_button_submit:focus {
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