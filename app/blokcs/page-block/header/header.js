
$(document).ready(function(){
	var menu =document.getElementsByClassName('mobile-menu');
	menu[0].style.visibility='hidden';
    $('.switcher').click(function(){
    	if(menu[0].style.visibility==='hidden'){
    	 menu[0].style.visibility='visible';
    	menuToggle(true);
    	 
    	} else {
    		menu[0].style.visibility='hidden'
    		menuToggle(false);
    	}
    });
     $('.botton').click(function(){
     	menu[0].style.visibility='hidden'
     	menuToggle(false);
     });
});
function menuToggle(mode){
if(mode===true){
	 $('.first-line').addClass('first-line-rotate'); 
    	 $('.second-line').addClass('second-line-hidden'); 
    	 $('.third-line').addClass('third-line-rotate'); 
    	 $('.first-line').removeClass('first-line'); 
    	 $('.second-line').removeClass('second-line'); 
    	 $('.third-line').removeClass('third-line'); 
	} else {
		 $('.first-line-rotate').addClass('first-line'); 
    	 $('.second-line-hidden').addClass('second-line'); 
    	 $('.third-line-rotate').addClass('third-line'); 
    	 $('.first-line-rotate').removeClass('first-line-rotate'); 
    	 $('.second-line-hidden').removeClass('second-line-hidden'); 
    	 $('.third-line-rotate').removeClass('third-line-rotate'); 
	}
}