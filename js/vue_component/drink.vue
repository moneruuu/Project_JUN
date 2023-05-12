<template>
<div id="modal_drink">

<div id="drink_text">
  <h1 id="drink_name">{{name}}</h1>
  <p id="drink_vol">{{vol}} ml</p><br>
  <p id="drink_description"></p><br>
  <p id="drink_price">{{price}} yen</p>
</div>

<img id="drink_icon" :src="icon">

<div class="flexcontainer_button">
  <div id="drink_button_Y" v-on:click='btn("/buy")'><br>買う！</div>
  <div id="drink_button_N" v-on:click='btn("/presentmenu")' v-show="logincheck"><br>プレゼントメニュー</div>
</div>

</div>
</template>



<script>
  module.exports = {
    data: function(){
      return {
        name: gdrinkdata["name"],
        vol: gdrinkdata["vol"],
        description: gdrinkdata["description"],
        price: gdrinkdata["price"],
        icon: "./images/"+gdrinkdata["imgsrc"],
        logincheck: false
      }
    },
    methods: {
      btn(path) {
        this.$router.push({path: path})
        changeMotion("mayou_stop");
      }
    },
    mounted: function() {

      $("#drink_description").html(gdrinkdata["description"])
      if(0 < playerid){
        this.logincheck = true;
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
  margin-top: 30px;
  cursor: pointer;
}

#drink_button_N{
  width: 200px;
  height: 50px;
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

</style>