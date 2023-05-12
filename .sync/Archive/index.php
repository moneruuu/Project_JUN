<!DOCTYPE html>

<html lang="ja">

  <head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">

    <title>潤</title>

    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" type="text/css" href="./css/modal.css">

    <!-- Jquery -->
    <script src="js/jquery/jquery-3.6.0.min.js" defer></script>

    <!-- Vueのやつ -->
    <script src="https://unpkg.com/vue@2.6.14" defer></script>
    <script src="https://unpkg.com/vue-router@3.0.1" defer></script>
    <script src="https://unpkg.com/http-vue-loader" defer></script>
    <!-- Ajaxのfunction -->
    <script src="js/Ajax.js" defer></script>
    <!-- 起動時に必要な処理 --> 
    <script src="js/onstart.js" defer></script>
    <script src="js/vue.js" defer></script>
    
    <script src="js/common.js" defer></script>

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">


  </head>

  <body>

  <canvas id="canvas"></canvas>
    
    <!-- Vueの領域 -->
    <div id="app">
      <div id="modal_and_overlay" v-show="showcontent">
        <div id="overlay_closemodal"></div>
        <div id="modal">
          <div id="button_closemodal">&times</div>
          <div id="modal_content"><router-view></router-view></div>
        </div>
      </div>
    </div>
    
    <div iD="wrap">

      <!-- /////////////////////////左側のコンテンツ////////////////////////////// -->
      <div id="left_content">

        <div class="left_content" id="content_01">

          <div class="flexcontainer_top">

            <div class="flexbox_top_1">
              <!-- 天気と画像も取得したい -->
              <div class="flexitem_top_1" id="time"></div>
              <div class="flexitem_top_2" id="weather_img"></div>
              <div class="flexitem_top_3" id="temperature">12</div>
            </div>

            <!-- メッセージ取得したい -->
            <div class="flexbox_top_2" id="jun_chat"></div>
            
          </div>
          
        </div>

        <div class="left_content" id="content_02">

          <div id="field_jun"></div>

          <div class="flexbox_row" id="flexbox_junrecommend">
            <div id="box_button_junrecommend">
              <a href="#" class="button_junrecommend">潤のおすすめ</a>
            </div>
          </div>

        </div>

      </div>

      <!-- /////////////////////////右側のコンテンツ////////////////////////////// -->
      <div id="right_content">

        <div class="right_content" id="content_04">

          <div class="flexbox_row">
            <div id="box_button_account">
              <a href="#" id="btn" class="button_account">アカウント連携!</a>
            </div>
          </div>

        </div>

        <div class="right_content" id="content_05">
          <div class="flexcontainer_center">

            <div class="flexbox_center_1">
              <div class="flexitem_center_1"><div class="" id="drink_box_0"></div><a href="#" class="bt" id="drink_slot_0" data-id="0"></a></div>
              <div class="flexitem_center_1"><div class="" id="drink_box_1"></div><a href="#" class="bt" id="drink_slot_1" data-id="1"></a></div>
              <div class="flexitem_center_1"><div class="" id="drink_box_2"></div><a href="#" class="bt" id="drink_slot_2" data-id="2"></a></div>
              <div class="flexitem_center_1"><div class="" id="drink_box_3"></div><a href="#" class="bt" id="drink_slot_3" data-id="3"></a></div>
            </div>

            <div class="flexbox_center_2">
              <div class="flexitem_center_2"><div class="" id="drink_box_4"></div><a href="#" class="bt" id="drink_slot_4" data-id="4"></a></div>
              <div class="flexitem_center_2"><div class="" id="drink_box_5"></div><a href="#" class="bt" id="drink_slot_5" data-id="5"></a></div>
              <div class="flexitem_center_2"><div class="" id="drink_box_6"></div><a href="#" class="bt" id="drink_slot_6" data-id="6"></a></div>
              <div class="flexitem_center_2"><div class="" id="drink_box_7"></div><a href="#" class="bt" id="drink_slot_7" data-id="7"></a></div>
            </div>

            <div class="flexbox_center_3">
              <div class="flexitem_center_3"><div class="" id="drink_box_8"></div><a href="#" class="bt" id="drink_slot_8" data-id="8"></a></div>
              <div class="flexitem_center_3"><div class="" id="drink_box_9"></div><a href="#" class="bt" id="drink_slot_9" data-id="9"></a></div>
              <div class="flexitem_center_3"><div class="" id="drink_box_10"></div><a href="#" class="bt" id="drink_slot_10" data-id="10"></a></div>
              <div class="flexitem_center_3"><div class="" id="drink_box_11"></div><a href="#" class="bt" id="drink_slot_11" data-id="11"></a></div>
            </div>

          </div>
        </div>

        <div class="right_content" id="content_06">
          <div class="flexbox_row">
            <div id="box_button_juntoggle">
              <a href="#" id="button_juntoggle">プレゼント♡</a>
            </div>
          </div>
        </div>
      </div>
        <!-- ///////////////////////////////////////////////////////////////// -->


        <!-- -------------- 購入完了 ------------- -->

        

    </div>

    <script src="./js/backcanvas/canvas_white.js"></script>


  </body>

</html>