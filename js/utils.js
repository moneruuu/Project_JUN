//////////////////////////////////////////////////

function junchat(tag){ 
    var result = execPHP("junChat.php", playerid, tag);
    var content = result["f_ai_serif_content"];

    if(content.includes("%name%")){
        var name = execPHP("getPlayerName.php",playerid);
        content = content.replace("%name%",name);
    }
        
    if(content.includes("%reccomend%")){
        var drinkdata = slotmap.get(reccomenddrink);
        content = content.replace("%reccomend%", drinkdata["name"]);
    }

    $('#jun_chat').html(content);
    changeMotion(result["f_ai_motion_tag"]);
}

//////////////////////////////////////////////////

function formatTime(i) {
    /* 1桁の場合 */
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//////////////////////////////////////////////////

function showPlayerInventory(){
    var result = execPHP("getPlayerInventory.php", playerid);
    var ret = "";
    for (var i = 0; i <= result.length-1; i++) {
        var res = execPHP("getDrinkData.php", result[i]["f_i_id"]);
        ret += '<div class="flexitem"><div class="drink_name">'+res["f_i_name"]+'</div><button class="btn_select" data-id="'+res["f_i_id"]+'">決定</button></div>'
    }
    $(".select_flexcontainer_button").html(ret);

    $('.btn_select').on('click', function(){
        var drinkid =  $(this).data('id');
        gdrinkdata = execPHP("getDrinkData.php", drinkid); 
        console.log(gdrinkdata);
        vue.openModal("/presentselectconfirm");
    })
}

//////////////////////////////////////////////////


animationing = 0;
mayouing = 0;
taping = 0;
buying = 0;

function changeMotion(motionname){
    if ((animationing && !mayouing)|| buying) {
        return;
    }

    switch (motionname) {
        case 'idle':
            $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
            break;
        //--------------------------------------------------

        case 'tap':
            if (!taping) {
                $("#field_jun").css('background-image', 'url(./images/tap.gif)');
                taping = 1;
                setTimeout(() => {
                    if (!animationing) {
                        $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                    }
                    animationing = 0;
                }, 3000)

                setTimeout(() => {
                    taping = 0;
                }, 6000)
            }
            break;
        //--------------------------------------------------

        case 'tap2':
            if (!taping) {
                $("#field_jun").css('background-image', 'url(./images/tap2.gif)');
                taping = 1;
                setTimeout(() => {
                    if (!animationing) {
                        $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                    }
                    animationing = 0;
                }, 3000)

                setTimeout(() => {
                    taping = 0;
                }, 7000)
            }
            break;
        //--------------------------------------------------

        case 'buy':
            buying = 1;
            console.log(buying);
            $("#field_jun").css('background-image', 'url(./images/buy.gif)');
            setTimeout(() => {
                $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                buying = 0;
            }, 3500)
            break;
        //--------------------------------------------------

        case 'buy2':
            buying = 1;
            $("#field_jun").css('background-image', 'url(./images/buy2.gif)');
            setTimeout(() => {
                $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                buying = 0;
            }, 3500)
            break;
        //--------------------------------------------------

        case 'mayou':
            $("#field_jun").css('background-image', 'url(./images/mayou.gif)');
            mayouing = 1;
            animationing = 1;
            break;
        //--------------------------------------------------

        case 'mayou_stop':
            if (mayouing) {
                animationing = 0;
                mayouing = 0;
                $("#field_jun").css('background-image', 'url(./images/mayou_stop.gif)');
                setTimeout(() => {
                    if(!buying){
                        $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                        console.log("stop")
                    }
                }, 3500)
            }
            break;
        //--------------------------------------------------

        case 'cry':
            $("#field_jun").css('background-image', 'url(./images/cry.gif)');
            setTimeout(() => {
                $("#field_jun").css('background-image', 'url(./images/cry_stop.gif)');
            }, 5000)
            break;
        //--------------------------------------------------

        case 'tewohuru':
            if (!taping) {
                $("#field_jun").css('background-image', 'url(./images/scene4.gif)');
                taping = 1;
                setTimeout(() => {
                    if (!animationing) {
                        $("#field_jun").css('background-image', 'url(./images/scene1.gif)');
                    }
                    animationing = 0;
                }, 2500)

                setTimeout(() => {
                    taping = 0;
                }, 6000)
            }
            break;
        //--------------------------------------------------

      default:
        console.log("errorかないか");
    }
}