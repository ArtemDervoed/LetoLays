$(document).ready(function(){
    var menu =$('.menu--item');
    readyPage(menu);
    $(window).resize(function () { 
    readyPage(menu)
    });
    $('.switch').click(function(){
        if(menu[4].style.visibility==='visible'){
             menuHidden(menu);
            
        } else {
            menuVisible(menu);
            onsetMenu(menu);
        }
    });
     $('.escape-menu').click(function(){
        menuHidden(menu);
     });
});


function readyPage(menu){
    if(document.body.clientWidth <= '640'){
             menuHidden(menu);
        }
         if(document.body.clientWidth > '640'){
             menuVisible(menu);
             $('.escape-menu').addClass('_hidden');
             offsetMenu();
        }
}




function menuHidden(menu){
    for(var i = 1; i < menu.length;i++ ){
         menu[i].style.visibility='hidden';
    }
    $('.escape-menu').addClass('_hidden');
    offsetMenu();
}
function menuVisible(menu){
    for(var i = 1; i < menu.length;i++ ){
         menu[i].style.visibility='visible';
           $('.escape-menu').removeClass('_hidden');
    }
    onsetMenu();
}
function onsetMenu(){
    $('.switch--strip').removeClass('_off');
    $('.switch--strip').addClass('_on');
    $('._insta').addClass('_right-translate');
    $('._prize').addClass('_left-translate');
    $('._map').addClass('_right-translate');
    $('._escape-menu').addClass('_left-translate');
}
function offsetMenu(){
    $('.switch--strip').removeClass('_on');
    $('.switch--strip').addClass('_off');
    $('._insta').removeClass('_right-translate');
    $('._prize').removeClass('_left-translate');
    $('._map').removeClass('_right-translate');
    $('._escape-menu').removeClass('_left-translate');
}