$(window).scroll(function(){
    let scrollTop = $(this).scrollTop(),
        pixel = scrollTop/70,
        height = $(window).height();

    $('.info_section__item').css({
    'transform': 'translate3d(0,-' + scrollTop / 20 + '%,0)',
    });
    
    if (scrollTop < height) {
       $('.info_section__img').css({
       'filter': 'blur(' + pixel  + 'px)'
       });
    } 

    if (scrollTop > $('.info_section__content').offset().top - $(window).height()/1.5) {
        $('.info_section__pad').addClass('active');
    } else {
        $('.info_section__pad').removeClass('active');
    }
    
    if (scrollTop > $('.info_section__text').offset().top - $(window).height()) {
        $('.info_section__text').addClass('active');
        $('.info_section__circle').addClass('active');
    } else {
        $('.info_section__text').removeClass('active');
        $('.info_section__circle').removeClass('active');
    }
    
    if (scrollTop > $('.info_section__colors').offset().top - $(window).height()/1.5) {
        $('.info_section__colors').addClass('active');
        
        $('.color_item').each(function (i) {
        setTimeout(function () {
            $('.color_item').eq(i).addClass('active');
        }, 200 * (i + 1));
            
        } 
    )} else {
        $('.info_section__colors').removeClass('active');	
        $('.color_item').removeClass('active');	
        }
    
    if (scrollTop > $('.info_section__typography').offset().top - $(window).height()/1.5) {
        $('.info_section__typography').addClass('active');
        
        $('.font_container').each(function (i) {
        setTimeout(function () {
            $('.font_container').eq(i).addClass('active');
        }, 500 * (i + 1));
            
        } 
    )} else {
        $('.info_section__typography').removeClass('active');	
        $('.font_container').removeClass('active');	
        }
    
    
    if (scrollTop > $('.info_section__icons').offset().top - $(window).height()/1.5) {
        $('.info_section__icons').addClass('active');
        
        $('.icon_item').each(function (i) {
        setTimeout(function () {
            $('.icon_item').eq(i).addClass('active');
        }, 130 * (i + 1));
            
        } 
    )} else {
        $('.info_section__icons').removeClass('active');
        $('.icon_item').removeClass('active');		
        }
    
    if (scrollTop > $('.info_section__video').offset().top - $(window).height()/1.5) {
        $('.info_section__video').addClass('active');	
        $('.video_container').addClass('active');	
        } else {
        $('.info_section__video').removeClass('active');	
        $('.video_container').removeClass('active');	
        }

    if (scrollTop > $('.info_section__devices').offset().top - $(window).height()/1.5) {
        $('.info_section__devices').addClass('active');	
        } else {
        $('.info_section__devices').removeClass('active');	
        }
    
    if (scrollTop > $('.devices_list').offset().top - $(window).height()/1.5) {
        
        $('.device_item').each(function (i) {
        setTimeout(function () {
            $('.device_item').eq(i).addClass('active');
        }, 200 * (i + 1));
            
        }						   
    )} else {
        $('.device_item').removeClass('active');	
        }
    
    if (scrollTop > $('.go-web').offset().top - $(window).height()/1.1) {
        $('.go-web').addClass('active');	
        } else {
        $('.go-web').removeClass('active');	
        }
    
    if (scrollTop > $('.next_project__container').offset().top - $(window).height()/1.5) {
        $('.next_project__container').addClass('active');	
        } else {
        $('.next_project__container').removeClass('active');	
        }
});