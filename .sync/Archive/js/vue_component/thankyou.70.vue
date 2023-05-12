<!-- ------- ネットから引っ張ってきただけ、後で修正する ---- -->



<template>

<!-- <a href="https://codepen.io/ZonFire99/full/njdls/" class="viewFull" target="_parent">View in full it looks way better :)</a> -->

<div class="html">
<div class="error">

    <div class="wrap_finish">
      
        <p>
          <h2 id="blue">!  function   completed  --</h2>
          <h2>{  return  ==  <p id="orange">your  change = {{charge}}</p></h2>
          <br><br><br><br>
          <h1> -----   購入完了   ----
            <br><br>
            THANK YOU FOR BUYING
          </h1><br><br><br><br><br>
          <h2>
            Jun favrange += {{fav}}  <p id="pink">       increased</p>
          </h2>
          <br>

        </p>
    </div>

        <br>

        <!-- <span class="info"></span>
        <br>
        <span class="orange">&nbsp;&lt;/body&gt;</span>

        <br>
        <span class="orange">&lt;/html&gt;</span> -->
</div>
</div>

</template>


<script>
  module.exports = {
    data: function(){
      return {
        charge: charge,
        fav: ""
      }
    },
    mounted: function() {
        this.fav = increasedfav;
        $("#stylesheet").html('aaa');
        setTimeout(() => {
          $("#stylesheet").html("");
        }, 1000)
    }
  }

</script>



<style>

@import url(https://fonts.googleapis.com/css?family=Gilda+Display);

.html {
  background-color:#fff;
  color: #000;
  overflow: hidden;
  height: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
		  font-size: medium;
}

.error {
  text-align: center;
  font-family: 'Gilda Display', serif;

  width: 100%;
  height: 120px;
  margin-top: 230px;
  margin-bottom: auto;
  position: absolute;
  margin-left: 20px;
  top: 0;
  bottom: 0;
  left: -60px;
  right: 0;
  -webkit-animation: noise-3 1s linear infinite;
          animation: noise-3 1s linear infinite;
  overflow: default;
}


          body:after {
            content: "THANK YOU ♡";
            font-family: "DotGothic16", sans-serif;
            font-size: 65px;
            
            text-align: center;
            white-space: nowrap;
            width: 550px;
            margin: auto;
            position: absolute;
            top: 35%;
            bottom: 0;
            left: 0;
            right: 35%;
            opacity: 0;
            color: rgb(21, 118, 89);
            text-shadow: 0px 0px 10px rgba(131, 203, 181, 0.868);

            -webkit-animation: noise-1 .2s linear infinite;
                    animation: noise-1 .2s linear infinite;
          }
          body:before {
            content: "completed --- ";
            font-family: OCR-A;
            font-size: 60px;
            
            text-align: center;
            white-space: nowrap;
            width: 300px;
            margin: auto;
            position: absolute;
            bottom: 20%;
            /* left: ; */
            right: 25%;
            opacity: 0;
            color: rgb(117, 222, 190);
            text-shadow: 0px 0px 10px rgba(131, 203, 181, 0.868);
            -webkit-animation: noise-2 .2s linear infinite;
                    animation: noise-2 .2s linear infinite;
            z-index: 30;
          }

/* .info {
  text-align: center;
  width: 200px;
  height: 60px;
  margin: auto;
  position: absolute;
  top: 280px;
  bottom: 0;
  left: 20px;
  right: 0;
  -webkit-animation: noise-3 1s linear infinite;
          animation: noise-3 1s linear infinite;
}

.info:before {
  content: 'file not found';
  font-family: OCR-A;
  font-size: 100px;
  text-align: center;
  width: 800px; 
  margin: auto;
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 40px;
  right: 100px;
  opacity: 0;
  color: #000;
  -webkit-animation: noise-2 .2s linear infinite;
          animation: noise-2 .2s linear infinite;
}

.info:after {
  content: 'file not found';
  font-family: OCR-A;
  font-size: 100px;
  text-align: center;
  width: 800px;
  margin: auto;
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 40px;
  right: 0;
  opacity: 0;
  color: #000;
  -webkit-animation: noise-1 .2s linear infinite;
          animation: noise-1 .2s linear infinite;
} */

@-webkit-keyframes noise-1 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: -6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: 2px;}
}

@keyframes noise-1 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: -6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: 2px;}
}

@-webkit-keyframes noise-2 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: 6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: -2px;}
}

@keyframes noise-2 {
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: 6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: -2px;}
}

@-webkit-keyframes noise {
  0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; -webkit-transform: scaleY(1); transform: scaleY(1);}  
  4.3% {opacity: 1; -webkit-transform: scaleY(1.7); transform: scaleY(1.7);}
  43% {opacity: 1; -webkit-transform: scaleX(1.5); transform: scaleX(1.5);}
}

@keyframes noise {
  0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; -webkit-transform: scaleY(1); transform: scaleY(1);}  
  4.3% {opacity: 1; -webkit-transform: scaleY(1.7); transform: scaleY(1.7);}
  43% {opacity: 1; -webkit-transform: scaleX(1.5); transform: scaleX(1.5);}
}

@-webkit-keyframes noise-3 {
  0%,3%,5%,42%,44%,100% {opacity: 1; -webkit-transform: scaleY(1); transform: scaleY(1);}
  4.3% {opacity: 1; -webkit-transform: scaleY(4); transform: scaleY(4);}
  43% {opacity: 1; -webkit-transform: scaleX(10) rotate(60deg); transform: scaleX(10) rotate(60deg);}
}

@keyframes noise-3 {
  0%,3%,5%,42%,44%,100% {opacity: 1; -webkit-transform: scaleY(1); transform: scaleY(1);}
  4.3% {opacity: 1; -webkit-transform: scaleY(4); transform: scaleY(4);}
  43% {opacity: 1; -webkit-transform: scaleX(10) rotate(60deg); transform: scaleX(10) rotate(60deg);}
}

.wrap_finish {
  top: 30%;
  left: 25%;
  
  height: 200px;
  
  margin-top: -100px;
  position: absolute;
  text-align: left;
}

.wrap_finish p{
  font-family: 'DotGothic16', sans-serif;
}

h1{
  color: white;
  font-family: 'DotGothic16', sans-serif;
  text-align: center;
  font-size: 2rem;
  text-shadow: 0px 0px 8px rgba(64, 209, 166, 0.868);
}

h2{
  color: #fff;
  font-family: 'DotGothic16', sans-serif;
  text-shadow: 0px 0px 5px rgba(208, 208, 208, 0.868);

}

h2#blue {
  color: #7be8e1;
  text-shadow: 0px 0px 5px rgba(102, 193, 193, 0.868);

}
span.comment {
  color: #7f8c8d;
}
p#orange {
  color: #dab477;
  text-shadow: 0px 0px 5px rgba(195, 169, 91, 0.868);

}
span.green {
  color: #33cc33;
}

p#pink{
  color: #eb8bde;
  text-shadow: 0px 0px 5px rgba(188, 102, 193, 0.868);

}

.viewFull {
  font-family:OCR-A;
  color:orange;
  /* text-decoration:; */
}

/* @font-face {
    font-family: OCR-A;
} */

 @media only screen and (min-height: 500px) {

.viewFull{
  display:none; 	
	}

}


</style>