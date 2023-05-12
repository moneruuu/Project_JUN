<template>
<div id="modal_drink">

<div id="drink_text">
  <h1 id="drink_name">{{name}}</h1>
  <p id="drink_vol">{{vol}} ml</p><br>
  <p id="drink_description">あなたは、現在　{{remaining}}　個の{{name}}を所持しています</p><br>
  <p id="drink_price">{{price}} yen</p>
</div>

<img id="drink_icon" :src="icon">

<div class="flexcontainer_button">
  <div id="drink_button_Y" v-on:click='btn("/presentforjun")'><br>潤にこれをプレゼント</div>
</div>
<p id="error_txt" class="blinking">{{ error }}</p>
</div>
</template>



<script>
  module.exports = {
    data: function(){
      return {
        name: gdrinkdata["f_i_name"],
        vol: gdrinkdata["f_i_vol"],
        remaining: execPHP("getItemValueFromPInv.php", playerid, gdrinkdata["f_i_id"]),
        price: gdrinkdata["f_i_price"],
        icon: "./images/"+gdrinkdata["f_i_imgsrc"],
        error:""
      }
    },
    methods: {
      btn(path) {
        var check = execPHP("checkPlayerInventory.php", playerid, gdrinkdata["f_i_id"]);
        if(check){
          this.$router.push({path: path});
          changeMotion("mayou_stop")
        }else{
          this.error="プレゼントを1つも持っていません"
        }
      }
    }
  }

</script>



<style scoped>

h1#drink_name{
  margin-top: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #fff;
  font-family: 'DotGothic16', sans-serif;
}

p#drink_vol,
p#drink_description,
p#drink_price
{
  font-size: 20px;
  text-align: center;
  color: #fff;
  font-family: 'DotGothic16', sans-serif;
}

img#drink_icon{
  margin: 20px 0 0 165px;
}



.flexcontainer_button{
  display: flex;
  height: 200px;
  flex-direction: column;
}

#drink_button_Y{
  width: 200px;
  height: 50px;
  margin: 0 auto;
  margin-top: 100px;
  cursor: pointer;
}

#drink_button_N{
  width: 200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
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