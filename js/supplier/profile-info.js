$('#skipBtn').on('click', function (e) {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('#skipBtnTwo').on('click', function (e) {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});


// apply dynamic active to nav tablink