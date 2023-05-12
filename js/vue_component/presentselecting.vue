    <template>
    <div id="inmodal">
    
    <h1 id="present_header">どの飲み物を潤にプレゼントする？</h1>

    <div class="select_flexcontainer_button">
      loading
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
            logincheck: false
          }
        },
        methods: {
          btn(path) {
            this.$router.push({path: "/presentselectconfirm"})
          },
        },
        mounted: function() {
          if(0 < playerid){
            showPlayerInventory();
          }
        }
      }
    
    </script>
    
    
    
    <style>

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

#inmodal{
  height: 770px;
}

.select_flexcontainer_button{
  height: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;

  oveflow: auto;
}

.flexitem {
  margin: 0 auto;
  display: flex;
  height: 50px;
  width: 80%;
  flex-direction: row;
}

.btn_select{
  margin-left: auto;
  width: 100px;
  height: 90%;
  cursor: pointer;


  display: inline-block;
  background: linear-gradient(#7bead2, #63bba8);
  border: 1px solid #236557;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: .3s ease-in-out;
  font-family: 'DotGothic16', sans-serif;
}

.drink_name{
  width: 80%;
  height: 100%;
  font-size: 1rem;
  line-height:45px;
  color: #fff;
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