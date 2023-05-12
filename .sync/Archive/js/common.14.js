
//////////////////////////////////////////////////
//Modalクローズ処理(共通部分)

//バツボタンの方
$('#button_closemodal').on('click', function(){
    vue.closeModal();
})

//オーバーレイの方
$('#overlay_closemodal').on('click', function(){
    vue.closeModal();
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
//プレゼントボタンのクリック処理
$('.button_junrecommend').on('click', function(){
    if(!selecting && !reccomending){
        //global変数にある一番在庫の多いslotidを参照
        var drinkdata = slotmap.get(reccomenddrink);



        // グローバル変数を更新
        condition = 1;
        gdrinkdata = drinkdata;
        gslotid = reccomenddrink;
        reccomending = 1;   
        console.log(reccomending)



        vue.openModal("/drink");
    }
})

//////////////////////////////////////////////////
// ドリンクボタンのクリック処理
$('.bt').on('click', function(){
    //押したボタンのdata-idに入っているslotidを参照
    var slotid =  $(this).data('id');
    //slotidをキーにslotmapからデータを取得
    var drinkdata = slotmap.get(slotid);



    // グローバル変数を更新
    condition = 1;
    gdrinkdata = drinkdata;
    gslotid = slotid;   
    selecting = 1;



    vue.openModal("/drink");
});




//////////////////////////////////////////////////
// junAnimtions

$('#field_jun').on('click', ()=>{
    if (!animationing) {
        //animationing がtrueの間はアニメーションが再生されないように
        animationing = 1;

        //gif変更
        $("#field_jun").css('background-image', 'url(./images/tap.gif)');
        //上のgifが終わったらもとのgif(scene1.gif)にする(秒数指定遅延のごりおし)
        setTimeout(() => {
            $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
        }, 3000)
        //5000ミリ秒のクールタイム
        setTimeout(() => {
            animationing = 0;
        }, 5000)
    }
})

$('.bt').on('click', ()=>{
    if (!animationing) {
        animationing = 1;
        $("#field_jun").css('background-image', 'url(./images/mayou.gif)');
        // setTimeout(() => {
        //     $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
        // }, 2100)
        // setTimeout(() => {
        //     animationing = 0;
        // }, 5000)
    }
})
////////////////////////////////////////////////////





