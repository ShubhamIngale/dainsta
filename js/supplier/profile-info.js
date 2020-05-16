$('#skipBtn').on('click', function (e) {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});