
// ボタン押したらおすすめ消えるやつ

const button_junrecommend_opacity = document.querySelector('.button_junrecommend');

$('.bt').on('click', function(){
    button_junrecommend_opacity.style.opacity = 0;
});

        
//////////////////////////////////////////////////
//Modalクローズ処理(共通部分)

//バツボタンの方
$('#button_closemodal').on('click', function(){
    vue.closeModal();
    button_junrecommend_opacity.style.opacity = 1.0;
})

//オーバーレイの方
$('#overlay_closemodal').on('click', function(){
    vue.closeModal();
    button_junrecommend_opacity.style.opacity = 1.0;
})

//////////////////////////////////////////////////
//アカウントボタンのクリック処理
$('.button_account').on('click', function(){
    vue.openModal("/account");
})

//////////////////////////////////////////////////
//プレゼントボタンのクリック処理
$('#button_juntoggle').on('click', function(){
    vue.openModal("/present");
})



//////////////////////////////////////////////////
// ドリンクボタンのクリック処理
$('.bt').on('click', function(){
    //vueが確実に要素を読み込んでからhtmlに値をセットしたいので遅延処理が必要
    const promise = new Promise((resolve) => {
        vue.openModal("/drink");
        var timerid = setInterval(function(){
            if (document.querySelector("#modal_drink")) {
                resolve();
                clearInterval(timerid);
            }
        },10)
    }).then(() => {
        //押したボタンのdataに入っているslotidを参照
        var slotid =  $(this).data('id');
        //slotidをキーにslotmapからデータを取得
        var drinkdata = slotmap.get(slotid);

        $('#drink_name').html(drinkdata["name"])
        $('#drink_price').html(drinkdata["price"]+"yen")
        $('#drink_vol').html(drinkdata["vol"]+"ml")
        $('#drink_description').html(drinkdata["description"])
        $('#drink_icon').attr("src", "./images/"+drinkdata["imgsrc"])


        registDrinkButton_Y_N();

        // 遷移状態を更新
        condition = 1;
        gdrinkdata = drinkdata;
        gslotid = slotid;   
    });
});



// Y と N　のやつ
function registDrinkButton_Y_N (){
    $('#drink_button_N').on('click', function(){
        vue.closeModal();
        button_junrecommend_opacity.style.opacity = 1.0;
    })
    $('#drink_button_Y').on('click', function(){
        vue.openModal("/buy");
    })
}



// 潤GIF切り替え

$('#field_jun').on('click', ()=>{
    if (!animationing) {
        animationing = 1;
        $("#field_jun").css('background-image', 'url(./images/tap.gif)');
        setTimeout(() => {
            $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
        }, 2100)
        setTimeout(() => {
            animationing = 0;
        }, 5000)
    }
})
////////////////////////////////////////////////////





