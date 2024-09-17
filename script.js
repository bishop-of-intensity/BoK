$('.buy-popup-btn-container').click(function() {
    if(!$('.buy-popup-container').hasClass('visible')) {
        $('.buy-popup-container').addClass('visible');
        $('html').addClass('overflow-none');
    }
});

$('.close-sign').click(function() {
    $('.buy-popup-container').removeClass('visible');
    $('html').removeClass('overflow-none');
});