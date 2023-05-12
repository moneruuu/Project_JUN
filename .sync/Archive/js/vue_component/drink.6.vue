<template>
<div id="modal_drink">

<div id="drink_text">
  <h1 id="drink_name"></h1>
  <p id="drink_vol"></p>
  <p id="drink_description"></p>
  <p id="drink_price"></p>
</div>

<img id="drink_icon">

<div class="flexcontainer_button">
  <div id="drink_button_Y"><br>買う！</div>
  <div id="drink_button_N"><br>やめとく</div>
</div>

</div>
</template>



<script>

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