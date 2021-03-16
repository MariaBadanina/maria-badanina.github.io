$(window).scroll(function () {
    let scrollTop = $(this).scrollTop(),
        pixel = scrollTop / 70,
        height = $(window).height();

    $('.info_section__item').css({
        'transform': 'translate3d(0,-' + scrollTop / 20 + '%,0)',
    });

    if (scrollTop < height) {
        $('.info_section__img').css({
            'filter': 'blur(' + pixel + 'px)'
        });
    }

    if (scrollTop > $('.info_section__content').offset().top - $(window).height() / 1.5) {
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

    if (scrollTop > $('.info_section__app-description').offset().top - $(window).height()) {
        $('.info_section__app-description').addClass('active');
    } else {
        $('.info_section__app-description').removeClass('active');
    }

    if (scrollTop > $('.step-one').offset().top - $(window).height()) {
        $('.step-one').addClass('active');
    } else {
        $('.step-one').removeClass('active');
    }

    if (scrollTop > $('.step-two').offset().top - $(window).height()) {
        $('.step-two').addClass('active');
    } else {
        $('.step-two').removeClass('active');
    }

    if (scrollTop > $('.step-three').offset().top - $(window).height()) {
        $('.step-three').addClass('active');
    } else {
        $('.step-three').removeClass('active');
    }

    if (scrollTop > $('.go-web').offset().top - $(window).height() / 1.1) {
        $('.go-web').addClass('active');
    } else {
        $('.go-web').removeClass('active');
    }

    if (scrollTop > $('.next_project__container').offset().top - $(window).height() / 1.5) {
        $('.next_project__container').addClass('active');
    } else {
        $('.next_project__container').removeClass('active');
    }
});