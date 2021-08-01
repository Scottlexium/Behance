var height = $('#sticky-nav-div-id').height();

$(window).scroll(function(){
    if($(this).scrollTop() > height){
        $('.sticky-nav-div').addClass('fixed');
    }else{
        $('.sticky-nav-div').removeClass('fixed');
    }
});