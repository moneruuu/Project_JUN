// github アップロードテスト


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


    changeMotion("mayou");
    // グローバル変数を更新
    condition = 1;
    gdrinkdata = drinkdata;
    gslotid = slotid;   
    selecting = 1;



    vue.openModal("/drink");
});




//////////////////////////////////////////////////
// junAnimtions

//juntap
$('#field_jun').on('click', ()=>{
    if (!taping) {
        junchat("tap");
    }
})

$('#drink_button_Y').on('click', ()=>{
    changeMotion("mayou_stop");
})

$('#button_juntoggle').on('click', ()=>{
    changeMotion("mayou");
})

$('#btn').on('click', ()=>{
    changeMotion("tewohuru");
})


////////////////////////////////////////////////////





